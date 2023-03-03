import FooterNavs from "@components/molecules/FooterNavs";
import FOOTER_NAVS, { FooterItemInterface } from "@routes/footer";
import Image from "next/image";

const FooterNavigationSection = () => (
  <div className="py-20 bg-staticBlack">
    <div className="container">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-6">
        <Image
          src="/assets/logo-white.png"
          alt="footerLogo"
          width={200}
          className="col-span-2 lg:col-span-1"
          height={70}
        />
        {FOOTER_NAVS?.map((item: FooterItemInterface, index) => (
          <FooterNavs key={index} title={item.title} data={item.data} />
        ))}
      </div>
    </div>
  </div>
);

export default FooterNavigationSection;
