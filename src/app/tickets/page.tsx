import { Heading } from "@/components/Heading";
import Spinner from "@/components/Spinner";
import TicketList from "@/features/ticket/components/TicketList";
import { Suspense } from "react";

export default function TicketsPage() {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading
        title="Tickets page"
        description="All your tickets in one place"
      />
      {/* // NOTE - suspend async operation with a fallback element */}
      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
}
