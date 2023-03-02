import classNames from "@utils/classes";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
  className?: string;
};

const H1: React.FC<Props> = ({ children, className = "" }) => (
  <h1 className={classNames("text-4xl md:text-5xl font-bold", className)}>
    {children}
  </h1>
);

export default H1;
