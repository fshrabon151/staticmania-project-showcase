import Heading4 from "@components/atoms/Heading4";
import { FooterItemInterface, FooterItemInterfaceData } from "@routes/footer";
import Link from "next/link";

const FooterNavs: React.FC<FooterItemInterface> = ({ title, data = [] }) => (
  <div className="space-y-8">
    <Heading4 className="text-white">{title}</Heading4>
    <ul className="space-y-6">
      {data?.map((item: FooterItemInterfaceData, index: number) => (
        <li key={index}>
          <Link href={item.link}>
            {item?.hasIcon ? (
              item.hasIcon
            ) : (
              <span className="text-white">{item.title}</span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterNavs;
