import classNames from "@utils/classes";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
  className?: string;
};

const Heading6: React.FC<Props> = ({ children, className = "" }) => (
  <h6 className={classNames("md:text-xs font-bold", className)}>{children}</h6>
);

export default Heading6;
