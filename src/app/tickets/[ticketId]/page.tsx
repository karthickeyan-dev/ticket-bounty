import { initialTickets } from '@/data';

type TicketPageProps = {
  params: { ticketId: string };
};

export default async function TicketPage({ params }: TicketPageProps) {
  const { ticketId } = await params;
  const ticket = initialTickets.find(ticket => ticket.id === Number(ticketId));

  if (!ticket) return <div>Ticket not found</div>;

  return (
    <div>
      <h2>{ticket.title}</h2>
      <p>{ticket.content}</p>
      <p>Status: {ticket.status}</p>
    </div>
  );
}
