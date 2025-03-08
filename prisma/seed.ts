import { initialTickets } from "@/data";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  const t0 = performance.now();
  console.log("DB seed: Started...");

  await prisma.ticket.deleteMany();
  await prisma.ticket.createMany({ data: initialTickets });

  const t1 = performance.now();
  console.log(`DB seed: Finished(${Math.round(t1 - t0)}ms)`);
}
seed();
