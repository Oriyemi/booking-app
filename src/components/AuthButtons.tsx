"use client";

import Link from "next/link";
import { useAuth, useClerk } from "@clerk/nextjs";

export default function AuthButtons({ mobile = false }: { mobile?: boolean }) {
  const { isLoaded, isSignedIn } = useAuth();
  const { signOut } = useClerk();

  const base =
    "inline-flex items-center justify-center rounded-lg text-sm font-semibold transition";
  const size = mobile ? "h-12 w-full" : "h-10 px-5";

  // Reserve space while Clerk loads so the bar doesn't jump
  if (!isLoaded) return <div className={mobile ? "h-12" : "h-10 w-24"} />;

  if (isSignedIn) {
    return (
      <button
        type="button"
        onClick={() => signOut({ redirectUrl: "/" })}
        className={`${base} ${size} border border-brand/30 text-brand hover:bg-tint`}
      >
        Sign out
      </button>
    );
  }

  return (
    <Link
      href="/sign-in"
      className={`${base} ${size} bg-brand text-white hover:bg-brand-dark`}
    >
      Log in
    </Link>
  );
}