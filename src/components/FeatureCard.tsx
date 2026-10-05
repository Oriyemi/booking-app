import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-tint text-brand">
        <Icon size={24} />
      </div>
      <div>
        <h3 className="text-sm font-bold">{title}</h3>
        <p className="text-gray-600 text-light ">{description}</p>
      </div>
    </div>
  );
}