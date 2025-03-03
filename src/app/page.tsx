import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h2>Hello World</h2>
      <Link href="/tickets" className="underline">
        Tickets
      </Link>
    </div>
  );
}
