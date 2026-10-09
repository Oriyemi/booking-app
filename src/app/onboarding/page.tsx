"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { completeOnboarding } from "./_actions";

type Role = "CUSTOMER" | "PROVIDER";

const options: {
  role: Role;
  title: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    role: "PROVIDER",
    title: "I want to take bookings",
    description: "Set up your services, share your booking link and get paid.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M3 9h18M8 2v4M16 2v4M9 15l2 2 4-4" />
      </svg>
    ),
  },
  {
    role: "CUSTOMER",
    title: "I want to book a service",
    description: "Find trusted providers near you and book in a few taps.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </svg>
    ),
  },
];

export default function OnboardingPage() {
  const { user } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<Role | null>(null);
  const [error, setError] = useState("");

  async function choose(role: Role) {
    setLoading(true);
    setSelected(role);
    setError("");

    const res = await completeOnboarding(role);
    if (res?.error) {
      setError(res.error);
      setLoading(false);
      setSelected(null);
      return;
    }

    await user?.reload();
    router.push("/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-white  py-10 sm:px-6 lg:px-8">
      <div className="w-full max-w-md sm:max-w-2xl">
        <div className="mb-8 text-center sm:mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-amber-600 sm:text-sm">
            Welcome{user?.firstName ? `, ${user.firstName}` : ""}
          </p>
          <h1 className="text-2xl font-semibold text-brand sm:text-3xl lg:text-4xl">
            How will you use Ojà?
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm text-gray-600 sm:text-base">
            Pick the option that fits you best. This sets up your dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {options.map((opt) => {
            const isSelected = selected === opt.role;
            return (
              <button
                key={opt.role}
                type="button"
                disabled={loading}
                onClick={() => choose(opt.role)}
                className="group flex flex-col items-start gap-3 rounded-2xl border border-brand/30 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-brand hover:bg-brand/5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-white sm:h-12 sm:w-12">
                  {opt.icon}
                </span>
                <span className="text-base font-semibold text-gray-900 sm:text-lg">
                  {opt.title}
                </span>
                <span className="text-sm text-gray-600">{opt.description}</span>
                <span className="mt-auto pt-2 text-sm font-medium text-brand">
                  {isSelected ? "Setting up…" : "Continue →"}
                </span>
              </button>
            );
          })}
        </div>

        {error && (
          <p
            role="alert"
            className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-center text-sm text-red-700"
          >
            {error}
          </p>
        )}
      </div>
    </main>
  );
}