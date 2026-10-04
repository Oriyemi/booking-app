// Reusable buttons
//     "Book Now"
//     "Login"
//     "Create Service"
//     "Confirm Booking"
// components/Button.tsx
import Link from "next/link";

type ButtonProps = {
  href: string;
  variant?: "primary" | "outline";
  children: React.ReactNode;
};

export default function Button({
  href,
  variant = "primary",
  children,
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "border border-gray-200 bg-white text-gray-900 hover:bg-gray-50";

  return (
    <Link
      href={href}
      className={`block w-full rounded-2xl py-4 text-center font-semibold ${styles}`}
    >
      {children}
    </Link>
  );
}