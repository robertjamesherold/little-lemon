import { useState } from "react";
import { Button } from '../ui'

type TimePickerProps = {
  value?: string;
  onChange: (value: string) => void;
};

export function TimePicker({ value, onChange }: TimePickerProps) {
const times = Array.from({ length: 6 }, (_, i) => [
  `${String(17 + i).padStart(2, "0")}:00`,
  `${String(17 + i).padStart(2, "0")}:30`,
]).flat();

  const [tempTime, setTempTime] = useState(value || "");

  const confirm = () => {
    if (tempTime) onChange(tempTime);
  };

  return (
    <div className="relative w-full">
      <div className="p-4 rounded-lg border border-gray-200 bg-white dark:bg-gray-900 w-full max-w-sm shadow-sm">
        <div className="grid grid-cols-3 gap-2 max-h-60 overflow-y-auto">
          {times.map((t) => (
            <button
              type="button"
              key={t}
              onClick={() => setTempTime(t)}
              className={`relative py-2 text-sm rounded-md border transition w-full cursor-pointer ${
                tempTime === t
                  ? "primary-backgroundcolor-2 text-white border-green-600"
                  : "border-gray-300 hover:bg-green-100 text-gray-700 dark:text-gray-100"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <Button
          onClick={confirm}
          className="w-full mt-4"
          variant='primary'
        >
          Confirm Selection
        </Button>
      </div>
    </div>
  );
}
