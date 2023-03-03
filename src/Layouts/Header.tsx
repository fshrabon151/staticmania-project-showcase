import classNames from "@utils/classes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const { pathname } = useRouter();

  return (
    <div className="flex items-center justify-between h-[72px] container">
      <Link href={"/"}>
        <Image
          src="/assets/logo.svg"
          alt="header logo"
          width={130}
          height={26}
        />
      </Link>
      <Link
        href={"/about"}
        className={classNames(
          pathname === "/about" && "font-bold text-staticBlue",
          "hover:text-staticBlue hover:font-medium"
        )}
      >
        About
      </Link>
    </div>
  );
};

export default Header;
