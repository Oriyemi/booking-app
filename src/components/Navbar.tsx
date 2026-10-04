import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-brand/10 bg-cream/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-1">
        <Link href="/" className="flex items-center">
          <Image
            id="logo"
            src="/oja-logo.png"
            alt="Ojà logo"
            width={80}
            height={80}
            className="h-auto w-30 object-contain"
            priority
          />
        </Link>
        <Link
          href="/services"
          className="rounded-full bg-brand px-4 py-2 text-sm font-light text-white shadow-sm transition hover:bg-brand-dark"
        >
          Explore
        </Link>
      </div>
    </header>
  );
}