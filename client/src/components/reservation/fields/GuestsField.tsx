import { type ChangeEvent } from "react";
import { FormField } from "../../form/FormField";

const MIN_GUESTS = 1;
const MAX_GUESTS = 12;

const formatGuestLabel = (count: number) =>
  count === 1 ? "1 Person" : `${count} People`;

const extractGuestCount = (text: string) => {
  const match = text.match(/\d+/);
  return match ? Number(match[0]) : NaN;
};

const clampGuestCount = (count: number) =>
  Math.min(Math.max(count, MIN_GUESTS), MAX_GUESTS);

type GuestsFieldProps = {
  value: string;
  onChange: (value: string) => void;
};

export function GuestsField({ value, onChange }: GuestsFieldProps) {
  const numericValue = (() => {
    if (!value) return "";
    const extracted = extractGuestCount(value);
    if (!Number.isFinite(extracted)) return "";
    return String(clampGuestCount(extracted));
  })();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const raw = event.target.value;

    if (raw === "") {
      onChange("");
      return;
    }

    const digitsOnly = raw.replace(/[^0-9]/g, "");

    if (digitsOnly === "") {
      onChange("");
      return;
    }

    const numeric = clampGuestCount(Number(digitsOnly));
    onChange(formatGuestLabel(numeric));
  };

  const handleBlur = () => {
    if (value === "") return;

    const extracted = extractGuestCount(value);
    if (!Number.isFinite(extracted)) {
      onChange("");
      return;
    }

    const clamped = clampGuestCount(extracted);
    onChange(formatGuestLabel(clamped));
  };

  return (
    <FormField label="Guests" description="Enter number of guests (1-12)">
      <input
        type="number"
        min={MIN_GUESTS}
        max={MAX_GUESTS}
        inputMode="numeric"
        value={numericValue}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Number of guests"
        aria-label="Number of guests"
        className="no-spin w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </FormField>
  );
}
