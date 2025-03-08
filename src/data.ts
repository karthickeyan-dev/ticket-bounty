type Ticket = {
  id?: string;
  title: string;
  content: string;
  status: "OPEN" | "DONE" | "IN_PROGRESS";
};

export const initialTickets: Ticket[] = [
  {
    title: "Ticket 1",
    content: "This is the first ticket",
    status: "DONE",
  },
  {
    title: "Ticket 2",
    content: "This is the second ticket",
    status: "OPEN",
  },
  {
    title: "Ticket 3",
    content: "This is the third ticket",
    status: "IN_PROGRESS",
  },
  {
    title: "Ticket 4",
    content: "This is the fourth ticket",
    status: "DONE",
  },
  {
    title: "Ticket 5",
    content: "This is the fifth ticket",
    status: "IN_PROGRESS",
  },
  {
    title: "Ticket 6",
    content: "This is the sixth ticket",
    status: "OPEN",
  },
  {
    title: "Ticket 7",
    content: "This is the seventh ticket",
    status: "OPEN",
  },
  {
    title: "Ticket 8",
    content: "This is the eighth ticket",
    status: "IN_PROGRESS",
  },
  {
    title: "Ticket 9",
    content: "This is the ninth ticket",
    status: "OPEN",
  },
  {
    title: "Ticket 10",
    content: "This is the tenth ticket",
    status: "OPEN",
  },
];
