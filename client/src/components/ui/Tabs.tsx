import { useState }  from "react";
import clsx from "clsx";

type TabItem = { label: string; content:React.ReactNode };

type TabsProps = {
  items: TabItem[];
  defaultIndex?: number;
  onChange?: (index: number) => void;
};

export function Tabs({ items, defaultIndex = 0, onChange }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    onChange?.(index);
  };

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        {items.map((item, i) => (
          <button
            key={item.label}
            onClick={() => handleTabClick(i)}
            className={clsx(
              "px-4 py-2 text-sm font-medium transition-colors",
              i === activeIndex
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-300"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="py-4">{items[activeIndex].content}</div>
    </div>
  );
}