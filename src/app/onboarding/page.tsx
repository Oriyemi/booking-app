"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { completeOnboarding } from "./_actions";

export default function OnboardingPage() {
  const { user } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function choose(role: "CUSTOMER" | "PROVIDER") {
    setLoading(true);
    setError("");

    const res = await completeOnboarding(role);
    if (res?.error) {
      setError(res.error);
      setLoading(false);
      return;
    }

    await user?.reload();
    router.push("/dashboard");
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center gap-4 p-6">
      <h1 className="text-2xl font-semibold">How will you use Ojà?</h1>

      <button
        disabled={loading}
        onClick={() => choose("PROVIDER")}
        className="rounded-lg border border-brand/30 p-4 text-left hover:bg-brand/5 disabled:opacity-50"
      >
        I want to take bookings
      </button>

      <button
        disabled={loading}
        onClick={() => choose("CUSTOMER")}
        className="rounded-lg border border-brand/30 p-4 text-left hover:bg-brand/5 disabled:opacity-50"
      >
        I want to book a service
      </button>

      {error && <p className="text-sm text-red-600">{error}</p>}
    </main>
  );
}