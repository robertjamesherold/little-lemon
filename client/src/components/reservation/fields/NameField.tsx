import { Input } from "../../form";

type NameFieldProps = {
  value: string;
  onChange: (value: string) => void;
};

export function NameField({ value, onChange }: NameFieldProps) {
  return (
    <Input
      label="Name"
      name="name"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      required
      placeholder="Your full name"
    />
  );
}
