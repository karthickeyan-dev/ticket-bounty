import { TicketItem } from "@/features/ticket/components/TicketItem";
import { getTicket } from "@/features/ticket/queries/getTicket";
import { notFound } from "next/navigation";

type TicketPageProps = {
  params: Promise<{ ticketId: string }>;
};

// NOTE - SSR using static params
// export async function generateStaticParams() {
//   const tickets = await getTickets();
//   return tickets.map((ticket) => ticket.id);
// }

export default async function TicketPage({ params }: TicketPageProps) {
  const { ticketId } = await params;
  const ticket = await getTicket(ticketId);

  if (!ticket) notFound();

  return (
    <div className="animate-fade-in-from-top flex justify-center">
      <TicketItem ticket={ticket} isDetail />
    </div>
  );
}
