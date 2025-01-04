type LoggerParamsType = Record<string, unknown>;

export type LoggerType = {
  error: (msg: string, error: unknown, params?: LoggerParamsType) => void;
  warn: (msg: string, params?: LoggerParamsType) => void;
  log: (msg: string, params?: LoggerParamsType) => void;
};
