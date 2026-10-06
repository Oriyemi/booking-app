"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { CalendarCheck, Search } from "lucide-react";
import { completeOnboarding } from "./_actions";

export default function OnboardingPage() {
  const { user } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function choose(role: "customer" | "provider") {
    setLoading(true);
    setError("");

    const res = await completeOnboarding(role);
    if (res.error) {
      setError(res.error);
      setLoading(false);
      return;
    }

    await user?.reload(); // refresh the session so the new role is picked up
    router.push(role === "provider" ? "/provider" : "/services");
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cream px-6 py-10">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-light/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

      <main className="relative w-full max-w-md text-center">
        <h1 className="text-3xl font-bold tracking-tight text-brand">
          How will you use BookLink?
        </h1>
        <p className="mt-3 text-brand/70">
          Choose one to get started. This can&apos;t be changed later.
        </p>

        <div className="mt-8 space-y-4">
          <button
            disabled={loading}
            onClick={() => choose("provider")}
            className="flex w-full items-center gap-4 rounded-3xl bg-brand px-6 py-5 text-left text-white shadow-lg shadow-brand/20 transition hover:bg-brand-dark disabled:opacity-60"
          >
            <CalendarCheck size={28} />
            <span>
              <span className="block font-semibold">I want to take bookings</span>
              <span className="block text-sm font-light text-white/80">
                Create your booking page and get paid deposits
              </span>
            </span>
          </button>

          <button
            disabled={loading}
            onClick={() => choose("customer")}
            className="flex w-full items-center gap-4 rounded-3xl border border-brand/30 bg-white px-6 py-5 text-left text-brand transition hover:bg-tint disabled:opacity-60"
          >
            <Search size={28} />
            <span>
              <span className="block font-semibold">I want to book a service</span>
              <span className="block text-sm font-light text-brand/70">
                Find providers and book a time
              </span>
            </span>
          </button>
        </div>

        {loading && <p className="mt-4 text-sm text-brand/70">Setting up your account…</p>}
        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
      </main>
    </div>
  );
}