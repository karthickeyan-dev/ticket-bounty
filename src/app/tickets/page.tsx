import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";
import Link from "next/link";
import clsx from "clsx";

const TICKET_ICONS = {
  OPEN: "✅",
  DONE: "❌",
  IN_PROGRESS: "⏳",
};

export default function TicketsPage() {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Tickets Page</h2>
        <p className="text-muted-foreground text-sm">
          All your tickets in one place
        </p>
      </div>
      <div className="flex flex-1 flex-col items-center gap-y-4">
        {initialTickets.map((ticket) => (
          <div
            key={ticket.id}
            className="w-full max-w-md rounded border border-slate-100 p-4"
          >
            <div>{TICKET_ICONS[ticket.status]}</div>
            <h3 className="truncate text-lg font-semibold">{ticket.title}</h3>
            <p
              className={clsx("truncate text-sm text-neutral-500", {
                "line-through": ticket.status === "DONE",
              })}
            >
              {ticket.content}
            </p>
            <Link href={ticketPath(ticket.id)} className="text-sm underline">
              view
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
