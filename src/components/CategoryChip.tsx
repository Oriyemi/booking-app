// components/CategoryChip.tsx
export default function CategoryChip({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-gray-300 bg-white px-5 py-2 text-gray-700">
      {label}
    </span>
  );
}