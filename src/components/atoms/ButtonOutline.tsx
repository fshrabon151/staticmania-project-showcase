import classNames from "@utils/classes";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
  className?: string;
};

const ButtonOutline: React.FC<Props> = ({ children, className = "" }) => (
  <button
    className={classNames(
      "text-staticBlack border border-staticBlack px-8 py-[10px] text-base font-medium hover:border-staticGreen hover:text-staticGreen",
      className
    )}
  >
    {children}
  </button>
);

export default ButtonOutline;
