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
    <div className="min-h-screen bg-[#faf7f5]">
      <Navbar />

      <main className="mx-auto flex max-w-xl flex-col items-center px-6 py-12 text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-600 text-white">
          <CalendarCheck size={48} />
        </div>

        <h1 className="mt-8 text-4xl font-bold">
          Take bookings online, in minutes
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Create your booking page, share one link, and let clients book and
          pay a deposit. No more back-and-forth messages.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <CategoryChip key={c} label={c} />
          ))}
        </div>

        <div className="mt-8 w-full space-y-4 text-left">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>

        <div className="mt-8 w-full space-y-3">
          <Button href="/register">Get started</Button>
          <Button href="/login" variant="outline">
            I already have an account
          </Button>
        </div>

        <Link href="/services" className="mt-6 text-gray-600 hover:underline">
          Looking for a service? Browse providers →
        </Link>
      </main>
    </div>
  );
}