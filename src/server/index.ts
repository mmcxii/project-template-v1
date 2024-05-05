import express from "express";
import { normalizeError } from "../shared/normalize-error";
import { serveStaticAssets, serveTranslations } from "./assets";
import { loggerMiddleware } from "./middleware/logger";
import { getProxyServerPort } from "./utils/env";

(async () => {
  try {
    const app = express();
    const port = getProxyServerPort();

    app.use(loggerMiddleware());

    app.use("/api/translations", serveTranslations());
    app.use(serveStaticAssets());

    app.listen(port, () => {
      console.log(`Proxy Server available at port: ${port}`);
    });
  } catch (error) {
    const errorMessage = normalizeError(error);
    console.error(errorMessage);
    process.exit(1);
  }
})();
