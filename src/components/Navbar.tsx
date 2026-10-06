"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";
import AuthButtons from "./AuthButtons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { isSignedIn, user } = useUser();
  const role = user?.publicMetadata?.role as "customer" | "provider" | undefined;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Browse services" },
    ...(isSignedIn && role
      ? [
          role === "provider"
            ? { href: "/provider", label: "Dashboard" }
            : { href: "/dashboard", label: "My bookings" },
        ]
      : []),
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-200 ${
        scrolled
          ? "border-brand/10 bg-cream/90 shadow-sm shadow-brand/5 backdrop-blur-lg"
          : "border-transparent bg-cream/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex flex-1 items-center">
          <Link href="/" onClick={() => setOpen(false)} className="flex items-center">
            <Image
              id="logo"
              src="/oja-logo.png"
              alt="Ojà logo"
              width={140}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop links */}
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative flex h-16 items-center text-sm font-medium transition-colors hover:text-brand ${
                isActive(l.href)
                  ? "text-brand after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-brand"
                  : "text-brand/60"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop auth */}
        <div className="hidden flex-1 justify-end md:flex">
          <AuthButtons />
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-xl p-2 text-brand transition hover:bg-tint md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="absolute inset-x-0 top-full border-b border-brand/10 bg-cream px-6 pb-6 pt-2 shadow-lg shadow-brand/5 md:hidden">
          <nav className="flex flex-col">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-3 py-3.5 text-base font-medium ${
                  isActive(l.href) ? "bg-tint text-brand" : "text-brand/70"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 border-t border-brand/10 pt-4">
            <AuthButtons mobile />
          </div>
        </div>
      )}
    </header>
  );
}