import { useState, useEffect } from "react";
import { Chevron } from "../icons/Chevron";
import { Button } from '../ui'

export type SelectOption = { label: string; value: string };

type CustomSelectProps = {
  label?: string;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  placeholder?: string;
};

export function Select({
  label,
  value,
  options,
  onChange,
  placeholder = "Select option",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [tempValue, setTempValue] = useState(value);
  const [isVisible, setIsVisible] = useState(false);

  const open = () => {
    setIsOpen(true);
    requestAnimationFrame(() => setIsVisible(true));
  };

  const close = () => {
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 180);
  };

  const confirm = () => {
    onChange(tempValue);
    close();
  };

  useEffect(() => setTempValue(value), [value]);

  return (
    <div className="relative w-full">
      {label && (
        <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
          {label}
        </label>
      )}

      <button
        onClick={isOpen ? close : open}
        className="w-full flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 mt-1 text-left bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
      >
        <span>
          {options.find((o) => o.value === value)?.label || placeholder}
        </span>
        <Chevron open={isOpen} />
      </button>

      {isOpen && (
        <>
        {/* Dropdown mit Animation */}
          <div
            className={`absolute left-0 right-0 top-12 z-20 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-3 max-h-60 overflow-y-auto transform transition-all duration-200 origin-top ${
              isVisible
                ? "opacity-100 scale-y-100"
                : "opacity-0 scale-y-75 pointer-events-none"
            }`}
          >
            {options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setTempValue(opt.value)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition ${
                  tempValue === opt.value
                    ? "bg-green-600 text-white"
                    : "hover:bg-green-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"
                }`}
              >
                {opt.label}
              </button>
            ))}

            <Button
              onClick={confirm}
              className="w-full mt-3 bg-green-600 text-white rounded-md py-2 text-sm"
            >
              Confirm Selection
            </Button>
          </div>
        </>
      )}
    </div>
  );
}