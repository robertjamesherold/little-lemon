import { HomePageMain } from "../components/global/Main";
import { Hero } from "./HomePage/components/Hero";
import { MenuPreview } from "./HomePage/components/MenuPreview";

export function HomePage() {
  return (
    <HomePageMain>
      <div className="flex w-full flex-col py-0 md:py-10 gap-0 md:gap-10">
        <Hero />
        <MenuPreview />
      </div>
    </HomePageMain>
  );
}
