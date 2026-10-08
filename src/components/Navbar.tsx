import Link from "next/link";
import Image from "next/image";
import SignOutNavButton from "./SignOutNavButton";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-brand/10 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-1 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            id="logo"
            src="/oja-logo.png"
            alt="Ojà logo"
            width={80}
            height={80}
            className="h-auto w-20 object-contain sm:w-24"
            priority
          />
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/services"
            className="rounded-full bg-brand px-4 py-2 text-sm font-light text-white shadow-sm transition hover:bg-brand-dark"
          >
            Explore
          </Link>
          <SignOutNavButton />
        </div>
      </div>
    </header>
  );
}