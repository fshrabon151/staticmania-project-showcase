import React, { useEffect, useState } from "react";

interface HoverStatus {
  isHovering: boolean;
  hoverRef: React.MutableRefObject<null>;
}

const useHover = (): HoverStatus => {
  const [isHovering, setIsHovering] = useState(false);
  const hoverRef = React.useRef<null>(null);

  const handleMouseOver = () => setIsHovering(true);
  const handleMouseOut = () => setIsHovering(false);

  useEffect(() => {
    const node: any = hoverRef.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);
    }
    return () => {
      if (node) {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      }
    };
  }, [hoverRef]);

  return { isHovering, hoverRef };
};

export default useHover;
