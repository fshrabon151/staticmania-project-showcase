import HeroLeftContent from "@components/molecules/HeroLeftContent";
import HeroRightContent from "@components/molecules/HeroRightContent";

const HeroSection = () => (
  <div className="container xl:px-56">
    <div className="grid lg:grid-cols-2 gap-10">
      <HeroLeftContent className="order-2 md:order-1 pt-16 lg:py-32" />
      <HeroRightContent className="order-1 md:order-2 pt-16 lg:py-32 hidden md:flex" />
    </div>
  </div>
);
export default HeroSection;
