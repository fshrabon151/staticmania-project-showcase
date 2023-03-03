import React, { ReactNode } from "react";
type Props = {
  children: ReactNode;
  headingSection?: ReactNode;
};

const GridContainer: React.FC<Props> = ({ children, headingSection }) => (
  <div className="container space-y-14">
    {headingSection && headingSection}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{children}</div>
  </div>
);

export default GridContainer;
