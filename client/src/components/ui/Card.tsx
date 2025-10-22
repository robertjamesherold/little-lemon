
type CardProps = {
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export function Card({ title, children, footer }: CardProps) {
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm p-5 flex flex-col gap-3">
      {title && <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">{title}</h3>}
      <div className="flex-1 text-gray-700 dark:text-gray-300">{children}</div>
      {footer && <div className="pt-3 border-t border-gray-100 dark:border-gray-700">{footer}</div>}
    </div>
  );
}