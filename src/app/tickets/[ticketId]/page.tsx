import { Placeholder } from "@/components/Placeholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";
import { ticketsPath } from "@/paths";
import Link from "next/link";

type TicketPageProps = {
  params: Promise<{ ticketId: string }>;
};

export default async function TicketPage({ params }: TicketPageProps) {
  const { ticketId } = await params;
  const ticket = initialTickets.find(
    (ticket) => ticket.id === Number(ticketId),
  );

  if (!ticket)
    return (
      <Placeholder
        label="Ticket not found"
        button={
          <Button asChild variant="outline">
            <Link href={ticketsPath()}>Back to Home</Link>
          </Button>
        }
      />
    );

  return (
    <div>
      <h2>{ticket.title}</h2>
      <p>{ticket.content}</p>
      <p>Status: {ticket.status}</p>
    </div>
  );
}
