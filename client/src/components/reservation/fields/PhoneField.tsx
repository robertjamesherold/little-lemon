import { Input } from "../../form";

type PhoneFieldProps = {
  value: string;
  onChange: (value: string) => void;
};

export function PhoneField({ value, onChange }: PhoneFieldProps) {
  return (
    <Input
      label="Phone"
      name="phone"
      type="tel"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Your phone number"
      required
    />
  );
}
