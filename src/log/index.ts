import pino from "pino";

export const LEVEL = "info";

export const rootLogger = pino({
  name: "schweb-parser",
  level: LEVEL,
});

export const logger = (components: string, extra: Record<string, unknown> = {}) =>
  rootLogger.child({ components, ...extra });
