import Link from "next/link";
import { SignUp } from "@clerk/nextjs";
import { clerkAppearance } from "@/lib/clerk-appearance";

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen p-4 bg-white">
      <div className="relative m-auto w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
        <SignUp appearance={clerkAppearance} />
       
      </div>
    </main>
  );
}
