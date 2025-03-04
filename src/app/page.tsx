import { Heading } from "@/components/Heading";
import { ticketsPath } from "@/paths";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Home page" description="Welcome to the home page" />

      <div className="flex flex-1 flex-col items-center">
        <Link href={ticketsPath()} className="underline">
          Tickets
        </Link>
      </div>
    </div>
  );
}
