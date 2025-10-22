import { useMemo, useState } from "react";
import { Section } from "../../../components/global/Section";
import { Article } from "../../../components/global/Article";
import greekSaladImg from "../../../assets/food_1.png";
import bruschettaImg from "../../../assets/food_2.png";
import grilledFishImg from "../../../assets/food_3.png";
import pastaImg from "../../../assets/food_4.png";
import lemonDessertImg from "../../../assets/food_5.png";
import mezzeImg from "../../../assets/food_6.png";

type MenuCategory = "Lunch" | "Mains" | "Desserts" | "A La Carte" | "Specials";

type MenuItem = {
  id: string;
  title: string;
  description: string;
  price: number;
  category: MenuCategory;
  image?: string;
};

const CATEGORIES: MenuCategory[] = [
  "Lunch",
  "Mains",
  "Desserts",
  "A La Carte",
  "Specials",
];

const MENU_ITEMS: MenuItem[] = [
  {
    id: "greek-salad",
    title: "Greek Salad",
    description:
      "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta.",
    price: 12.99,
    category: "Lunch",
    image: greekSaladImg,
  },
  {
    id: "bruschetta",
    title: "Bruschetta",
    description:
      "Grilled sourdough topped with garlic confit, heirloom tomatoes, and fresh basil.",
    price: 7.99,
    category: "Lunch",
    image: bruschettaImg,
  },
  {
    id: "grilled-fish",
    title: "Grilled Fish",
    description:
      "Charcoal-grilled catch of the day served with lemon butter and seasonal greens.",
    price: 20,
    category: "Mains",
    image: grilledFishImg,
  },
  {
    id: "pasta",
    title: "Pasta",
    description:
      "House-made pasta tossed in roasted tomato sauce with pecorino and basil oil.",
    price: 18.99,
    category: "Mains",
    image: pastaImg,
  },
  {
    id: "lemon-dessert",
    title: "Lemon Dessert",
    description:
      "Silky lemon custard layered with almond crumble and whipped mascarpone.",
    price: 6.99,
    category: "Desserts",
    image: lemonDessertImg,
  },
  {
    id: "mezze",
    title: "Chef's Mezze",
    description:
      "A La Carte selection of dips, marinated olives, and warm pita straight from the oven.",
    price: 15.5,
    category: "A La Carte",
    image: mezzeImg,
  },
  {
    id: "seasonal-special",
    title: "Seasonal Special",
    description:
      "Rotating market-inspired dish crafted daily by our chef.",
    price: 22,
    category: "Specials",
  },
];

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function MenuPreview() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>(CATEGORIES[0]);

  const visibleItems = useMemo(
    () => MENU_ITEMS.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  return (
    <Section className="w-full" ariaLabel="Order for delivery">
      <Article className="md:rounded-2xl bg-white p-6 shadow-lg">
        <header className="mb-6 space-y-4">
          <h2 className="text-xl font-semibold uppercase primary-color-2">
            Order for delivery!
          </h2>
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((category) => {
              const isActive = category === activeCategory;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "button-bg-1 text-white shadow-sm"
                      : "border-gray-300 bg-white text-gray-700"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </header>

        <ul className="divide-y divide-gray-200">
          {visibleItems.map((item) => (
            <li key={item.id} className="py-4 first:pt-0 last:pb-0">
              <Article className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-semibold text-green-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p className="text-sm font-semibold text-green-800">
                    {priceFormatter.format(item.price)}
                  </p>
                </div>
                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-green-100">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-xs font-medium text-green-800">
                      Chef's pick
                    </div>
                  )}
                </div>
              </Article>
            </li>
          ))}
        </ul>
      </Article>
    </Section>
  );
}
