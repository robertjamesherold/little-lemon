import { useState, useEffect } from "react";
import { Chevron } from "../icons/Chevron";
import { Button } from '../ui'

export type SelectOption = { label: string; value: string };

type CustomSelectProps = {
  label?: string;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  open: boolean;
  onToggle: () => void;
  placeholder?: string;
};

export function CustomSelect({
  label,
  value,
  options,
  onChange,
  open,
  onToggle,
  placeholder = "Select option",
}: CustomSelectProps) {
  const [tempValue, setTempValue] = useState(value);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (open) requestAnimationFrame(() => setIsVisible(true));
    else setIsVisible(false);
  }, [open]);

  const confirm = () => {
    onChange(tempValue);
  };

  return (
    <div className="relative w-full">
      {label && (
        <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
          {label}
        </label>
      )}

      <Button
        onClick={onToggle}
        className={`w-full`}
        variant='outline'>
      <span>
          {options.find((o) => o.value === value)?.label || placeholder}
        </span>
        <Chevron open={open} />
      </Button>

      {open && (
        <div
          className={`absolute left-0 right-0 top-6 z-20 border gap-2 border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-3 bg-white dark:bg-gray-900 origin-top transform transition-all duration-200 flex flex-col ${
            isVisible
              ? "opacity-100 scale-y-100"
              : "opacity-0 scale-y-75 pointer-events-none"
          }`}
        >
          {options.map((opt) => (
            <button
              type="button"
              key={opt.value}
              onClick={() => setTempValue(opt.value)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition cursor-pointer ${
                tempValue === opt.value
                  ? "primary-backgroundcolor-2 text-white"
                  : "hover:bg-green-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"
              }`}
            >
              {opt.label}
            </button>
          ))}

          <Button
            onClick={confirm}
            className="w-full"
          >
            Confirm Selection
          </Button>
        </div>
      )}
    </div>
  );
}
