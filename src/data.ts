type InitialTickets = {
  id: number;
  title: string;
  content: string;
  status: "OPEN" | "DONE" | "IN_PROGRESS";
};

export const initialTickets: InitialTickets[] = [
  {
    id: 1,
    title: "Ticket 1",
    content: "This is the first ticket",
    status: "DONE",
  },
  {
    id: 2,
    title: "Ticket 2",
    content: "This is the second ticket",
    status: "OPEN",
  },
  {
    id: 3,
    title: "Ticket 3",
    content: "This is the third ticket",
    status: "IN_PROGRESS",
  },
  {
    id: 4,
    title: "Ticket 4",
    content: "This is the fourth ticket",
    status: "DONE",
  },
  {
    id: 5,
    title: "Ticket 5",
    content: "This is the fifth ticket",
    status: "IN_PROGRESS",
  },
  {
    id: 6,
    title: "Ticket 6",
    content: "This is the sixth ticket",
    status: "OPEN",
  },
  {
    id: 7,
    title: "Ticket 7",
    content: "This is the seventh ticket",
    status: "OPEN",
  },
  {
    id: 8,
    title: "Ticket 8",
    content: "This is the eighth ticket",
    status: "IN_PROGRESS",
  },
  {
    id: 9,
    title: "Ticket 9",
    content: "This is the ninth ticket",
    status: "OPEN",
  },
  {
    id: 10,
    title: "Ticket 10",
    content: "This is the tenth ticket",
    status: "OPEN",
  },
];
