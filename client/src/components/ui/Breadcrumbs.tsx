import { Fragment } from "react";

type BreadcrumbItem = { label: string; href?: string };

type BreadcrumbsProps = { items: BreadcrumbItem[] };

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="text-sm text-gray-500 dark:text-gray-300">
      {items.map((item, i) => (
        <Fragment key={item.label}>
          {item.href ? (
            <a
              href={item.href}
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              {item.label}
            </a>
          ) : (
            <span className="text-gray-700 dark:text-gray-200">{item.label}</span>
          )}
          {i < items.length - 1 && <span className="mx-2">/</span>}
        </Fragment>
      ))}
    </nav>
  );
}