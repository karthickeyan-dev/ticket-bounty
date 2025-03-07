import { TicketItem } from "@/features/ticket/components/TicketItem";
import { getTicket } from "@/features/ticket/queries/getTicket";
import { notFound } from "next/navigation";

type TicketPageProps = {
  // params: Promise<{ ticketId: string }>;
  params: { ticketId: string };
};

export default async function TicketPage({ params }: TicketPageProps) {
  // const { ticketId } = await params;
  const ticket = await getTicket(params.ticketId);

  if (!ticket) notFound();

  return (
    <div className="animate-fade-in-from-top flex justify-center">
      <TicketItem ticket={ticket} isDetail />
    </div>
  );
}
