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
    ? "bg-brand text-white hover:bg-brand-dark"
    : "border border-brand bg-white text-brand hover:bg-tint";

  return (
    <Link
      href={href}
      className={`block w-full rounded-full py-4 text-center font-semibold ${styles}`}
    >
      {children}
    </Link>
  );
}