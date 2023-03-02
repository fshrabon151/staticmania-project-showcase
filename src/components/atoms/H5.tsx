import classNames from "@utils/classes";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
  className?: string;
};

const H5: React.FC<Props> = ({ children, className = "" }) => (
  <h5 className={classNames("text-sm md:text-base font-bold", className)}>
    {children}
  </h5>
);

export default H5;
