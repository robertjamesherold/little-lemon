type ChipProps = {
  label: string;
  onRemove?: () => void;
};

export function Chip({ label, onRemove }: ChipProps) {
  return (
    <span className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-200 rounded-full px-3 py-1">
      {label}
      {onRemove && (
        <button onClick={onRemove} className="text-gray-500 hover:text-red-500">
          ✕
        </button>
      )}
    </span>
  );
}