import type { ChangeEvent } from "react";
import { FormField } from "./FormField";

type InputProps = {
  label?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  description?: string;
  error?: string;
};

export function Input({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
  description,
  error,
}: InputProps) {
  return (
    <FormField label={label} description={description} error={error}>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full rounded-md border bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 
          focus:ring-2 focus:ring-blue-500 focus:outline-none transition 
          ${error ? "border-red-400" : "border-gray-300 dark:border-gray-600"}`}
      />
    </FormField>
  );
}