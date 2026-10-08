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
    description: "Clients only see times that are really free.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-10 text-center sm:px-6 sm:py-14 lg:py-20">
        <div className="relative">
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-linear-to-br from-brand to-brand-light text-white shadow-lg shadow-brand/30 sm:h-20 sm:w-20">
            <CalendarCheck className="h-8 w-8 sm:h-10 sm:w-10" />
          </div>
          <span className="absolute -top-1 -right-2 h-5 w-5 rounded-full bg-accent ring-2 ring-white" />
        </div>

        <h1 className="mt-8 text-3xl font-bold tracking-tight text-brand sm:text-4xl lg:text-5xl">
          Take bookings online, in minutes
        </h1>
        <p className="mt-4 max-w-2xl text-base font-light text-brand/70 sm:text-lg">
          Create your booking page, share one link, and let clients book and
          pay a deposit. No more back-and-forth messages.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((c) => (
            <CategoryChip key={c} label={c} />
          ))}
        </div>

        <div className="mt-10 grid w-full gap-4 text-left sm:mt-12 lg:grid-cols-3">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>

        <div className="mt-10 flex w-full flex-col items-center gap-4">
  <div className="w-full sm:w-72 rounded-full">
    <Button href="/sign-up">Get started</Button>
  </div>

  <p className="text-sm text-brand/70">
    Already have an account?{" "}
    <Link href="/sign-in" className="font-medium text-brand-light hover:underline">
      Sign in
    </Link>
  </p>
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