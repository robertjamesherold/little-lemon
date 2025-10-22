type CheckboxOption = { label: string; value: string };

type CheckboxGroupProps = {
  label?: string;
  values: string[];
  options: CheckboxOption[];
  onChange: (newValues: string[]) => void;
};

export function CheckboxGroup({ label, values, options, onChange }: CheckboxGroupProps) {
  const handleToggle = (val: string) => {
    onChange(
      values.includes(val)
        ? values.filter((v) => v !== val)
        : [...values, val]
    );
  };

  return (
    <div className="flex flex-col gap-2">
      {label && <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{label}</span>}
      {options.map((opt) => (
        <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={values.includes(opt.value)}
            onChange={() => handleToggle(opt.value)}
            className="accent-blue-600 w-4 h-4"
          />
          <span className="text-sm text-gray-700 dark:text-gray-200">{opt.label}</span>
        </label>
      ))}
    </div>
  );
}