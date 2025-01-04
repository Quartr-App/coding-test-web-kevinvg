import { LoggerType } from "./types";
import { error, log, warn } from "./functions";

export const logger: LoggerType = {
  error,
  warn,
  log,
};
