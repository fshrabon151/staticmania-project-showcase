import useHover from "@hooks/useHover";
import classNames from "@utils/classes";
import { ReactNode } from "react";
import PlayIcon from "./PlayIcon";
type Props = {
  children: ReactNode;
  className?: string;
  hasBtnIcon?: boolean;
};

const SecondaryButton: React.FC<Props> = ({
  children,
  className = "",
  hasBtnIcon = false,
}) => {
  const { isHovering, hoverRef } = useHover();

  return (
    <button
      ref={hoverRef}
      className={classNames(
        "text-staticBlue text-base font-medium hover:text-[#3E2DB2]",
        className
      )}
    >
      <div className="flex items-center space-x-2">
        {hasBtnIcon && <PlayIcon isHovering={isHovering} />}
        <span> {children}</span>
      </div>
    </button>
  );
};

export default SecondaryButton;
