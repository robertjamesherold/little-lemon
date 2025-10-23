import { useState, useEffect, type ReactNode } from "react";
import { Chevron } from "../icons/Chevron";
import { Button } from '../ui'

export type SelectOption = { label: string; value: string };

type CustomSelectExtraContentProps = {
  tempValue: string;
  setTempValue: (value: string) => void;
  confirm: (nextValue?: string) => void;
};

type CustomSelectProps = {
  label?: string;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  open: boolean;
  onToggle: () => void;
  placeholder?: string;
  valueLabel?: string;
  renderExtraContent?: (props: CustomSelectExtraContentProps) => ReactNode;
  transformValue?: (value: string) => string;
  confirmDisabled?: boolean;
};

export function CustomSelect({
  label,
  value,
  options,
  onChange,
  open,
  onToggle,
  placeholder = "Select option",
  valueLabel,
  renderExtraContent,
  transformValue,
  confirmDisabled,
}: CustomSelectProps) {
  const [tempValue, setTempValue] = useState(value);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (open) requestAnimationFrame(() => setIsVisible(true));
    else setIsVisible(false);
  }, [open]);

  useEffect(() => {
    setTempValue(value);
  }, [value]);

  const confirm = (nextValue?: string) => {
    const candidateValue = nextValue ?? tempValue;
    const finalValue = transformValue
      ? transformValue(candidateValue)
      : candidateValue;
    onChange(finalValue);
  };

  const selectedOption = options.find((o) => o.value === value);
  const displayLabel = selectedOption?.label || valueLabel || (value ? value : placeholder);

  return (
    <div className="static w-full">
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
          {displayLabel}
        </span>
        <Chevron open={open} />
      </Button>

      {open && (
        <div
          className={`fixed left-2/5 right-2/5 top-2/10 bottom-2/10 z-20 border gap-2 border-gray-200 rounded-lg shadow-lg p-3 bg-white origin-center transform transition-all duration-200 flex flex-col ${
            isVisible
              ? "opacity-100 scale-100"
              : "opacity-0 scale-y-20 pointer-events-none"
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

          {renderExtraContent?.({ tempValue, setTempValue, confirm })}

          <Button
            onClick={confirm}
            className="w-full"
            disabled={confirmDisabled}
          >
            Confirm Selection
          </Button>
        </div>
      )}
    </div>
  );
}
