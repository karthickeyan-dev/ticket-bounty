import { Heading } from "@/components/Heading";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";
import { LucideCheck, LucideFile, LucidePencil } from "lucide-react";
import Link from "next/link";

const TICKET_ICONS = {
  OPEN: <LucideFile />,
  DONE: <LucideCheck />,
  IN_PROGRESS: <LucidePencil />,
};

export default function TicketsPage() {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading
        title="Tickets page"
        description="All your tickets in one place"
      />
      <div className="animate-fade-in-from-top flex flex-1 flex-col items-center gap-y-4">
        {initialTickets.map((ticket) => (
          <Card key={ticket.id} className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <span>{TICKET_ICONS[ticket.status]}</span>
                <h3 className="truncate">{ticket.title}</h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="line-clamp-3 whitespace-break-spaces">
                {ticket.content}
              </span>
            </CardContent>
            <CardFooter>
              <Link
                href={ticketPath(ticket.id)}
                className={buttonVariants({ variant: "link" })}
              >
                view
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
