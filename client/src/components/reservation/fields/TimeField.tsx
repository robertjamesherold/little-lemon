import { Button } from "../../ui";
import { Chevron } from "../../icons/Chevron";
import { TimePicker } from "../../form/TimePicker";

type TimeFieldProps = {
  value: string;
  onChange: (value: string) => void;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
};

export function TimeField({ value, onChange, isOpen, onToggle, onClose }: TimeFieldProps) {
  return (
    <div className="relative flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">Time</label>
      <Button
        onClick={onToggle}
        className="w-full justify-between"
        variant="outline"
      >
        {value || "Select Time"}
        <Chevron open={isOpen} />
      </Button>

      {isOpen && (
        <>
          <div className="absolute left-0 right-0 top-6 z-20">
            <TimePicker
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
