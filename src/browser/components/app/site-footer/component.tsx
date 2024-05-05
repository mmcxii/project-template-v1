import * as React from "react";
import { Navigation } from "./navigation";

export const SiteFooter: React.FC = () => {
  //* Variables
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" style={{ marginTop: "auto" }}>
      <p className="byline">{currentYear}</p>

      <Navigation />
    </footer>
  );
};
