import classNames from "@utils/classes";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
  className?: string;
};

const H4: React.FC<Props> = ({ children, className = "" }) => (
  <h4 className={classNames("text-lg md:text-xl font-bold", className)}>
    {children}
  </h4>
);

export default H4;
