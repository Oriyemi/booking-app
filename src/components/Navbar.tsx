// Used across the website
//     Home
//     Services
//     Login
//     Dashboard
// components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-blue-600 px-6 py-4">
      <Link href="/" className="text-xl font-bold">
        <Image
          id="logo"
          src="/vercel.svg"
          alt="logo image"
          width={40}
          height={40}
        />
      </Link>
      <Link
        href="/services"
        className="rounded-full bg-white px-5 py-2 font-medium text-blue-600 transition-colors hover:bg-blue-50"
      >
        Explore
      </Link>
    </header>
  );
}
