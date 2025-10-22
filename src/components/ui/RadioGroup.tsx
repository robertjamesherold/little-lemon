type RadioOption = { label: string; value: string };

type RadioGroupProps = {
  label?: string;
  value: string;
  options: RadioOption[];
  onChange: (value: string) => void;
};

export function RadioGroup({ label, value, options, onChange }: RadioGroupProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{label}</span>}
      {options.map((opt) => (
        <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name={label}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
            className="accent-blue-600 w-4 h-4"
          />
          <span className="text-sm text-gray-700 dark:text-gray-200">{opt.label}</span>
        </label>
      ))}
    </div>
  );
}