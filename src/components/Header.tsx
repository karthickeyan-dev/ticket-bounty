import ThemeToggle from "@/components/ThemeToggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { homePath, ticketsPath } from "@/paths";
import { LucideTicketCheck } from "lucide-react";
import Link from "next/link";

function Header() {
  return (
    <nav className="bg-background/60 fixed top-0 right-0 left-0 z-20 flex w-full justify-between border-b px-5 py-2.5 backdrop-blur">
      <div className="align-items flex gap-2">
        <Button asChild variant="ghost">
          <Link href={homePath()}>
            <LucideTicketCheck className="size-6" />
            <h1 className="text-lg font-bold">TicketBounty</h1>
          </Link>
        </Button>
      </div>
      <div className="align-items flex gap-2">
        <ThemeToggle />
        <Link
          href={ticketsPath()}
          className={buttonVariants({ variant: "default" })}
        >
          Tickets
        </Link>
      </div>
    </nav>
  );
}

export { Header };
