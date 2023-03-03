import classNames from "@utils/classes";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
  className?: string;
};

const Heading3: React.FC<Props> = ({ children, className = "" }) => (
  <h3 className={classNames("text-xl md:text-2xl font-bold", className)}>
    {children}
  </h3>
);

export default Heading3;
