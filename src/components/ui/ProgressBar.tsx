type ProgressBarProps = { value: number; max?: number; label?: string };

export function ProgressBar({ value, max = 100, label }: ProgressBarProps) {
  const percent = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className="w-full flex flex-col gap-1">
      {label && <span className="text-sm text-gray-700 dark:text-gray-200">{label}</span>}
      <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-3 overflow-hidden">
        <div
          style={{ width: `${percent}%` }}
          className="h-full bg-blue-600 transition-all duration-300"
        />
      </div>
      <span className="text-xs text-gray-500 dark:text-gray-400 text-right">{percent.toFixed(0)}%</span>
    </div>
  );
}