import { Input } from "../../form";

type PhoneFieldProps = {
  value: string;
  onChange: (value: string) => void;
};

export function PhoneField({ value, onChange }: PhoneFieldProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/\D/g, ""); // entfernt alles außer Zahlen
    onChange(digitsOnly);
  };

  return (
    <Input
      aria-label="phone"
      label="Phone"
      name="phone"
      type="tel"
      value={value}
      onChange={handleChange}
      placeholder="Your phone number"
    />
  );
}