import { Input } from "../../form";

type EmailFieldProps = {
  value: string;
  onChange: (value: string) => void;
};

export function EmailField({ value, onChange }: EmailFieldProps) {
  return (
    <Input
      label="E-Mail"
      name="email"
      type="email"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      required
      placeholder="you@example.com"
    />
  );
}
