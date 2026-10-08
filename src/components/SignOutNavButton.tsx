"use client";

import { useAuth, useClerk } from "@clerk/nextjs";

export default function SignOutNavButton() {
  const { isLoaded, isSignedIn } = useAuth();
  const { signOut } = useClerk();

  if (!isLoaded || !isSignedIn) return null;

  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await signOut({ redirectUrl: "/" });
        } catch (err) {
          console.error("Sign out failed:", err);
        }
      }}
      className="rounded-full border border-brand/30 px-4 py-2 text-sm font-light text-brand transition hover:bg-brand/5"
    >
      Sign out
    </button>
  );
}