export default function CategoryChip({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-brand-light/40 bg-white px-4 py-2 text-brand text-xs">
      {label}
    </span>
  );
}