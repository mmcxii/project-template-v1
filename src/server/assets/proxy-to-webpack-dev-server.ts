import * as httpProxyMiddleware from "http-proxy-middleware";
import { getWebpackDevServerPort } from "../utils/env";

export function proxyToWebpackDevServerMiddleware() {
  const webpackDevServerPort = getWebpackDevServerPort();

  const proxyMiddleware = httpProxyMiddleware.createProxyMiddleware({
    pathFilter: "/",
    target: `http://localhost:${webpackDevServerPort}`,
  });

  return [proxyMiddleware];
}
