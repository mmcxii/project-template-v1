import * as React from "react";

export type FormLayoutProps = React.PropsWithChildren<{}>;

export const FormLayout: React.FC<FormLayoutProps> = (props) => {
  const { children } = props;

  return <div className="site--shared--form-layout">{children}</div>;
};
