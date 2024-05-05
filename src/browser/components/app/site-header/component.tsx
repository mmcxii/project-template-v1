import * as React from "react";
import { Link } from "react-router-dom";
import { UiRoutes } from "../../../shared/routes";
import { Navigation } from "./navigation";

export const SiteHeader: React.FC = () => {
  return (
    <header className="site-header">
      <h1 className="site-title">
        <Link to={UiRoutes.Home}>Project Template V1</Link>
      </h1>

      <Navigation />
    </header>
  );
};
