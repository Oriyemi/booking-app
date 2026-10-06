import Link from "next/link";
import { CalendarCheck } from "lucide-react";

export default function AuthShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-cream px-6 py-10">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-light/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

      <Link href="/" className="relative mb-6 flex items-center gap-2 text-brand">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-brand to-brand-light text-white">
          <CalendarCheck size={22} />
        </span>
        <span className="text-xl font-bold tracking-tight">BookLink</span>
      </Link>

      <div className="relative w-full max-w-md">{children}</div>
    </div>
  );
}