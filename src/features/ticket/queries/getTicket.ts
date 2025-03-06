import { initialTickets } from "@/data";
import { Ticket } from "@/features/ticket/types";

export async function getTicket(ticketId: string): Promise<Ticket | null> {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const ticket = initialTickets.find(
    (ticket) => ticket.id === Number(ticketId),
  );

  return new Promise((resolve) => resolve(ticket || null));
}
