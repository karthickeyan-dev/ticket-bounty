import { Heading } from "@/components/Heading";
import { initialTickets } from "@/data";
import { TicketItem } from "@/features/ticket/components/TicketItem";

export default function TicketsPage() {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading
        title="Tickets page"
        description="All your tickets in one place"
      />
      <div className="animate-fade-in-from-top flex flex-1 flex-col items-center gap-y-4">
        {initialTickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}
