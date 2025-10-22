import { TextArea } from "../../form";

type SpecialRequestsFieldProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SpecialRequestsField({ value, onChange }: SpecialRequestsFieldProps) {
  return (
    <TextArea
      label="Special requests"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      rows={4}
      placeholder="Let us know if there's anything we can prepare in advance"
    />
  );
}
