import { Input } from "../../form";

type NameFieldProps = {
  value: string[];
  onChange: (value: string[]) => void;
};

export function NameField({ value, onChange }: NameFieldProps) {
  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange([e.target.value, value[1]]);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange([value[0], e.target.value]);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Input
        aria-label="firstname"
        label="First name*"
        name="firstname"
        value={value[0] || ""}
        onChange={handleFirstNameChange}
        required
        placeholder="Your first name"
      />
      <Input
        aria-label="lastname"
        label="Last name*"
        name="lastname"
        value={value[1] || ""}
        onChange={handleLastNameChange}
        required
        placeholder="Your last name"
      />
    </div>
  );
}