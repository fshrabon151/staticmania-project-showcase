import classNames from "@utils/classes";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
  className?: string;
};

const Button: React.FC<Props> = ({ children, className = "" }) => (
  <button
    className={classNames(
      "text-white bg-staticBlue px-8 py-3 text-base font-medium hover:bg-[#3E2DB2]",
      className
    )}
  >
    {children}
  </button>
);

export default Button;
