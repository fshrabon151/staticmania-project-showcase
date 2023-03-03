import SponsorItem from "@components/molecules/SponsorItem";
import FooterNavigationSection from "@components/organisms/footerNavigationSection";
import FooterBottom from "../components/molecules/FooterBottom";

const Footer = () => {
  return (
    <div>
      <SponsorItem />

      <FooterNavigationSection />
      <FooterBottom />
    </div>
  );
};

export default Footer;
