type ListItem = { title: string; subtitle?: string };

type ListProps = { items: ListItem[] };

export function List({ items }: ListProps) {
  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700 rounded-md border border-gray-200 dark:border-gray-700">
      {items.map((item, i) => (
        <li key={i} className="p-3 flex flex-col">
          <span className="font-medium text-gray-900 dark:text-gray-100">{item.title}</span>
          {item.subtitle && (
            <span className="text-sm text-gray-500 dark:text-gray-400">{item.subtitle}</span>
          )}
        </li>
      ))}
    </ul>
  );
}