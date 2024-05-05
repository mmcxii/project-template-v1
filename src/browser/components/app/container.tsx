import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { App } from "./component";
import { useI18n } from "./use-i18n";

export const AppContainer: React.FC = () => {
  //* State
  const areTranslationsPending = useI18n();

  return (
    <BrowserRouter>
      <App areTranslationsPending={areTranslationsPending} />
    </BrowserRouter>
  );
};
