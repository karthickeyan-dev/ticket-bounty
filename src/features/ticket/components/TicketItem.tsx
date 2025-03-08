import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TICKET_ICONS } from "@/features/ticket/constants";
import { ticketPath } from "@/paths";
import { Ticket } from "@prisma/client";
import clsx from "clsx";
import { LucideSquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

type TicketItemProps = {
  ticket: Ticket;
  isDetail?: boolean;
};

function TicketItem({ ticket, isDetail = false }: TicketItemProps) {
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
    <div
      className={clsx("flex w-full gap-1", {
        "max-w-md": !isDetail,
      })}
    >
      <Card key={ticket.id} className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-x-2">
            <span>{TICKET_ICONS[ticket.status]}</span>
            <h3 className="truncate">{ticket.title}</h3>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span
            className={clsx("whitespace-break-spaces", {
              "line-clamp-3": !isDetail,
            })}
          >
            {ticket.content}
          </span>
        </CardContent>
      </Card>
      {!isDetail && (
        <div className="flex flex-col gap-1">
          <DetailButton />
        </div>
      )}
    </div>
  );
}

export { TicketItem };
