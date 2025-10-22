type FormFieldProps = {
  label?: string;
  description?: string;
  error?: string;
  children: React.ReactNode;
};

export function FormField({ label, description, error, children }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-sm font-medium text-gray-700 dark:text-gray-200">{label}</label>}
      {children}
      {description && <p className="text-xs text-gray-500">{description}</p>}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}