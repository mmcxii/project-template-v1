import { getHostingEnv } from "../utils/env";
import { proxyToWebpackDevServerMiddleware } from "./proxy-to-webpack-dev-server";
import { serveProductionAssets } from "./serve-production-assets";

export function serveStaticAssets() {
  const hostingEnv = getHostingEnv();

  if (hostingEnv === "localhost") {
    return proxyToWebpackDevServerMiddleware();
  } else {
    return serveProductionAssets();
  }
}
