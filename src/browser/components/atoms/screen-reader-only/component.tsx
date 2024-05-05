import * as React from "react";

export type ScreenReaderOnlyProps = React.PropsWithChildren<{}>;

export const ScreenReaderOnly: React.FC<ScreenReaderOnlyProps> = (props) => {
  const { children } = props;

  return <span className="site--shared--screen-reader-only">{children}</span>;
};
