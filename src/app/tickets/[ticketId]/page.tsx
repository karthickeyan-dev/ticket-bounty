type TicketPageProps = {
  params: { ticketId: string };
};

export default function TicketPage({ params }: TicketPageProps) {
  return (
    <div>
      <h2>Ticket Page {params.ticketId}</h2>
    </div>
  );
}
