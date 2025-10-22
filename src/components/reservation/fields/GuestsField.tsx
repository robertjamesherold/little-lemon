import { CustomSelect } from "../../form/CustomSelect";

const GUEST_OPTIONS = [
  { label: "1 Person", value: "1 Person" },
  { label: "2 People", value: "2 People" },
  { label: "3 People", value: "3 People" },
  { label: "4 People", value: "4 People" },
  { label: "5 People", value: "5 People" },
  { label: "6 People", value: "6 People" },
  { label: "7 People", value: "7 People" },
  { label: "8 People", value: "8 People" },
];

type GuestsFieldProps = {
  value: string;
  onChange: (value: string) => void;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
};

export function GuestsField({ value, onChange, isOpen, onToggle, onClose }: GuestsFieldProps) {
  return (
    <div className="relative flex flex-col gap-1">
      <CustomSelect
        label="Guests"
        value={value}
        options={GUEST_OPTIONS}
        onChange={(selected) => {
          onChange(selected);
          onClose();
        }}
        open={isOpen}
        onToggle={onToggle}
        placeholder="Select guests"
      />

      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-[1px] z-10"
        />
      )}
    </div>
  );
}
