import Link from "next/link";
import { CalendarCheck, CalendarDays, CreditCard, Link2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import CategoryChip from "@/components/CategoryChip";
import FeatureCard from "@/components/FeatureCard";

const categories = [
  "Stylists",
  "Tutors",
  "Plumbers",
  "Photographers",
  "Trainers",
  "Consultants",
];

const features = [
  {
    icon: Link2,
    title: "Your own booking link",
    description: "Share one link on WhatsApp, Instagram or your website.",
  },
  {
    icon: CreditCard,
    title: "Deposits paid upfront",
    description: "Cut no-shows by collecting a deposit when clients book.",
  },
  {
    icon: CalendarDays,
    title: "Never double-booked",
    description: "Clients  only see times that are really free.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-cream">
      {/* soft background glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-light/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

      <Navbar />

      <main className="relative mx-auto flex max-w-xl flex-col items-center px-6 py-14 text-center">
        <div className="relative">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-linear-to-br from-brand to-brand-light text-white shadow-lg shadow-brand/30">
            <CalendarCheck size={40} />
          </div>
          <span className="absolute -top-1 -right-2 h-5 w-5 rounded-full bg-accent ring-2 ring-cream" />
        </div>

        <h1 className="mt-8 text-3xl font-bold tracking-tight text-brand sm:text-4xl">
          Take bookings online, in minutes
        </h1>
        <p className="mt-4 text-lg text-brand/70 font-light">
          Create your booking page, share one link, and let clients book and
          pay a deposit. No more back-and-forth messages.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <CategoryChip key={c} label={c} />
          ))}
        </div>

        <div className="mt-10 w-full space-y-4 text-left">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>

        <div className="mt-10 w-full space-y-3">
          <Button href="/sign-up">Get started</Button>
          <Button href="/sign-in" variant="outline">
            I already have an account
          </Button>
        </div>

        <Link
          href="/services"
          className="mt-6 font-medium text-brand-light hover:underline"
        >
          Looking for a service? Browse providers →
        </Link>
      </main>
    </div>
  );
}