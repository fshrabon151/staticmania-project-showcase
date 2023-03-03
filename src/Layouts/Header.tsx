import Paragraph from "@components/atoms/Paragraph";
import Image from "next/image";
import Link from "next/link";

const Header = () => (
  <div className="flex items-center justify-between h-[72px] container">
    <Image src="/assets/logo.svg" alt="header logo" width={130} height={26} />
    <Link href={"/about"}>
      <Paragraph>About</Paragraph>
    </Link>
  </div>
);

export default Header;
