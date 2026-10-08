import Link from "next/link";
import { SignUp } from "@clerk/nextjs";
import { clerkAppearance } from "@/lib/clerk-appearance";

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen p-4 bg-white">
      <div className="relative m-auto w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
        <Link
          href="/"
          aria-label="Close"
          className="absolute -right-3 -top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand shadow-md transition hover:bg-white"
        >
          ✕
        </Link>
        <SignUp appearance={clerkAppearance} />
      </div>
    </main>
  );
}