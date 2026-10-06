import { SignUp } from "@clerk/nextjs";
import AuthShell from "@/components/AuthShell";
import { clerkAppearance } from "@/lib/clerk-appearance";

export default function RegisterPage() {
  return (
    <AuthShell>
      <SignUp appearance={clerkAppearance} />
    </AuthShell>
  );
}