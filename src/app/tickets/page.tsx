import { initialTickets } from '@/data';
import { ticketPath } from '@/paths';
import Link from 'next/link';

export default function TicketsPage() {
  return (
    <div>
      <h2>Tickets</h2>
      <ul className="flex gap-2">
        {initialTickets.map(ticket => (
          <li key={ticket.id}>
            <Link href={ticketPath(ticket.id)} className="underline">
              {ticket.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
