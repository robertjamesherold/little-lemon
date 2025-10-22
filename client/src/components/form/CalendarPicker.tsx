import { useState } from "react";
import { Button } from '../ui'

type CalendarPickerProps = {
  value?: string;
  onChange: (value: string) => void;
};

export function CalendarPicker({ value, onChange }: CalendarPickerProps) {
  const [viewDate, setViewDate] = useState(
    value ? new Date(value) : new Date()
  );
  const [tempDate, setTempDate] = useState<string>(value || "");

  const formatDate = (date: Date) => {
    const yearPart = date.getFullYear();
    const monthPart = String(date.getMonth() + 1).padStart(2, "0");
    const dayPart = String(date.getDate()).padStart(2, "0");

    return `${yearPart}-${monthPart}-${dayPart}`;
  };

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const firstDay = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const selectDay = (day: number) => {
    const selectedDate = new Date(year, month, day);
    setTempDate(formatDate(selectedDate));
  };

  const confirm = () => {
    if (tempDate) onChange(tempDate);
  };

  const todayString = formatDate(new Date());

  return (
    <div className="p-4 rounded-lg border border-gray-200 bg-white dark:bg-gray-900 w-full max-w-sm shadow-sm">
      <div className="flex justify-between items-center mb-3">
        <button
          type="button"
          onClick={() =>
            setViewDate(new Date(year, month - 1, 1))
          }
          className="text-gray-600 hover:text-black cursor-pointer"
        >
          ‹
        </button>
        <span className="font-semibold text-gray-900 dark:text-gray-100">
          {viewDate.toLocaleString("en-US", { month: "long", year: "numeric" })}
        </span>
        <button
          type="button"
          onClick={() =>
            setViewDate(new Date(year, month + 1, 1))
          }
          className="text-gray-600 cursor-pointer hover:text-black"
        >
          ›
        </button>
      </div>

      <div className="grid grid-cols-7 text-xs text-center text-gray-500 mb-1">
        {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 text-sm text-center">
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          const dateObject = new Date(year, month, day);
          const dateStr = formatDate(dateObject);
          const isSelected = tempDate === dateStr;
          const isToday = dateStr === todayString;
          const isPast = dateObject < startOfToday;

          return (
            <button
              type="button"
              key={day}
              onClick={() => !isPast && selectDay(day)}
              disabled={isPast}
              className={`py-1 rounded-md m-0.5 transition cursor-pointer ${
                isSelected
                  ? "primary-backgroundcolor-2 text-white"
                  : isToday
                  ? "border primary-bordercolor-2 primary-color-2"
                  : "text-gray-800 hover:bg-green-100 dark:text-gray-100"
              } ${isPast ? "opacity-40 cursor-not-allowed pointer-events-none" : ""}`}
            >
              {day}
            </button>
          );
        })}
      </div>

      <Button
        onClick={confirm}
        className="w-full mt-4"
      >
        Confirm Date
      </Button>
    </div>
  );
}
