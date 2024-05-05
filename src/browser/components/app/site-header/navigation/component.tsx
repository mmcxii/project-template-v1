import * as React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { SITE_NAVIGATION } from "../../../../shared/i18n";
import { UiRoutes } from "../../../../shared/routes";

export const Navigation: React.FC = () => {
  //* Utils
  const [translate] = useTranslation([SITE_NAVIGATION]);

  //* Variables
  const navItems: Array<UiRoutes> = [UiRoutes.Home];

  return (
    <nav className="site-header--navigation">
      <ul className="nav-list">
        {navItems.map((n) => (
          <li className="nav-item" key={n}>
            <NavLink className="nav-link" to={n}>
              {translate(n)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
