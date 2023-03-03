import classNames from "@utils/classes";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
  className?: string;
};

const Paragraph: React.FC<Props> = ({ children, className = "" }) => (
  <p className={classNames("font-normal", className)}>{children}</p>
);

export default Paragraph;
