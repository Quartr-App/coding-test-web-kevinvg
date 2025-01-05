import { LoggerType } from "./types";

export const error: LoggerType["error"] = (msg, error, params) => {
  if (process.env.NODE_ENV === "development") {
    console.error(msg, error, params);
  }
};

export const warn: LoggerType["warn"] = (msg, params) => {
  if (process.env.NODE_ENV === "development") {
    console.warn(msg, params);
  }
};

export const log: LoggerType["log"] = (msg, params) => {
  if (process.env.NODE_ENV === "development") {
    if (params) {
      console.log(msg, params);
    } else {
      console.log(msg);
    }
  }
};
