import Link from "next/link";
import { SignIn } from "@clerk/nextjs";
import { clerkAppearance } from "@/lib/clerk-appearance";

export default function SignInPage() {
  return (
    <main className="flex min-h-screen bg-white p-4">
      <div className="relative m-auto w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
       
        <SignIn appearance={clerkAppearance} />
       
      </div>
    </main>
  );
}
