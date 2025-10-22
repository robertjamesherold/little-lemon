import { HomePageMain } from "../components/global/Main";
import { Hero } from "./HomePage/components/Hero";
import { MenuPreview } from "./HomePage/components/MenuPreview";

export function HomePage() {
  return (
    <HomePageMain>
      <div className="flex w-full flex-col py-10 md:py-0 gap-10">
        <Hero />
        <MenuPreview />
      </div>
    </HomePageMain>
  );
}
