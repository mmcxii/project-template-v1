import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { SITE_NAVIGATION } from "../../../../shared/i18n";
import { UiRoutes } from "../../../../shared/routes";
import { ScreenReaderOnly } from "../../../atoms";

export const Navigation: React.FC = () => {
  //* Utils
  const [translate] = useTranslation([SITE_NAVIGATION]);

  //* Variables
  const externalLinks: Array<[UiRoutes, string, FontAwesomeIconProps["icon"]]> = [];

  return (
    <nav className="site-footer--navigation">
      <ul className="nav-list">
        {externalLinks.map(([link, url, icon]) => (
          <li className="nav-item" key={link}>
            <a className="nav-link" href={url} target="_blank">
              <FontAwesomeIcon className="nav-icon" icon={icon} />
              <ScreenReaderOnly>{translate(link)}</ScreenReaderOnly>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
