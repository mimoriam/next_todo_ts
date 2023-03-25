import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-500 p-2">
      <p className="p-1 font-bold text-white">Header</p>
      <Link href="/" className="rounded-lg bg-white p-1 text-blue-500">
        Home
      </Link>
    </header>
  );
}
