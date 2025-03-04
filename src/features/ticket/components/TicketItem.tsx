import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TICKET_ICONS } from "@/features/ticket/constants";
import { Ticket } from "@/features/ticket/types";
import { ticketPath } from "@/paths";
import { LucideSquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

type TicketItemProps = {
  ticket: Ticket;
};

function TicketItem({ ticket }: TicketItemProps) {
  function DetailButton() {
    return (
      <Button asChild variant="outline" size="icon">
        <Link href={ticketPath(ticket.id)}>
          <LucideSquareArrowOutUpRight />
        </Link>
      </Button>
    );
  }

  return (
    <div className="flex w-full max-w-md gap-1">
      <Card key={ticket.id} className="w-full">
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
      </Card>
      <div className="flex flex-col gap-1">
        <DetailButton />
      </div>
    </div>
  );
}

export { TicketItem };
