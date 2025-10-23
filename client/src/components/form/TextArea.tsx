import { FormField } from "./FormField";

type TextAreaProps = {
  label?: string;
  name?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  required?: boolean;
  description?: string;
  error?: string;
};

export function TextArea({
  label,
  name,
  placeholder,
  value,
  onChange,
  rows = 3,
  required,
  description,
  error,
}: TextAreaProps) {
  return (
    <FormField label={label} description={description} error={error}>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        required={required}
        className={`w-full rounded-md border bg-white px-3 py-2 text-sm text-gray-900 resize-none placeholder:text-gray-600/40
          focus:ring-2 focus:ring-blue-500 focus:outline-none transition 
          ${error ? "border-red-400" : "border-gray-300 dark:border-gray-600"}`}
      />
    </FormField>
  );
}