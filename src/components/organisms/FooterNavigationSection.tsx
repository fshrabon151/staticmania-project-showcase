import FooterNavs from "@components/molecules/FooterNavs";
import FOOTER_NAVS, { FooterItemInterface } from "@routes/footer";
import Image from "next/image";

const FooterNavigationSection = () => (
  <div className="py-20 bg-staticBlack px-4 md:px-12 lg:px-0">
    <div className="container space-y-9">
      <Image
        src="/assets/logo-white.png"
        alt="footerLogo"
        className={"lg:hidden w-5/12 sm:w-3/12 md:w-3/12 lg:w-[200px]"}
        width={200}
        height={70}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
        <Image
          src="/assets/logo-white.png"
          alt="footerLogo"
          width={200}
          height={70}
          className={"hidden lg:block"}
        />
        {FOOTER_NAVS?.map((item: FooterItemInterface, index) => (
          <FooterNavs key={index} title={item.title} data={item.data} />
        ))}
      </div>
    </div>
  </div>
);

export default FooterNavigationSection;
