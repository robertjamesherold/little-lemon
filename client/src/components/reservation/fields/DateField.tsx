import { Chevron } from "../../icons/Chevron";
import { CalendarPicker } from "../../form/CalendarPicker";

type DateFieldProps = {
  value: string;
  onChange: (value: string) => void;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
};

export function DateField({ value, onChange, isOpen, onToggle, onClose }: DateFieldProps) {
  return (
    <div className="relative flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">Date</label>
      <button
        onClick={onToggle}
        className={ ` px-4 py-2 text-sm font-medium rounded-md border border-gray-300 hover:bg-gray-100 focus:ring-blue-500 disabled:text-gray-400 w-full items-center flex justify-between ${value.length >= 10 ?  'text-gray-700':'text-gray-600/40'}`}
        
      >
        {value || "Select Date"}
        <span><Chevron open={isOpen} /></span>
      </button>

      {isOpen && (
        <>
          <div className="absolute left-0 right-0 top-6 z-20">
            <CalendarPicker
              value={value}
              onChange={(nextValue) => {
                onChange(nextValue);
                onClose();
              }}
            />
          </div>
          <div
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-[1px] z-10"
          />
        </>
      )}
    </div>
  );
}
