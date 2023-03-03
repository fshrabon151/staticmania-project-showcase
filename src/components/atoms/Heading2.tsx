import classNames from "@utils/classes";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
  className?: string;
};

const Heading2: React.FC<Props> = ({ children, className = "" }) => (
  <h2 className={classNames("text-2xl md:text-[32px] font-bold", className)}>
    {children}
  </h2>
);

export default Heading2;
