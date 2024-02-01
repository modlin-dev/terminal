const ProcessTime = Date.now();
import { Chalk } from "./chalk";

/**
 * Allows you to create a logger and customize it to your needs
 */
export class Logger {
  constructor(data?: LoggerData) {
    const headers = {
      gap: Chalk.Forground.Black(">"),
      time: () => {
        const date = new Date();
        const hours = () => {
          if (date.getUTCHours().toString().length < 2) {
            return "0" + date.getUTCHours().toString();
          } else {
            return date.getUTCHours().toString();
          }
        };
        const minutes = () => {
          if (date.getUTCMinutes().toString().length < 2) {
            return "0" + date.getUTCMinutes().toString();
          } else {
            return date.getUTCMinutes().toString();
          }
        };
        const amOrPm = date.getHours() >= 12 ? "PM" : "AM";

        return Chalk.Forground.RGB(
          161,
          150,
          172,
          `[${hours()}:${minutes()} ${amOrPm}]`
        );
      },
      timeSeconds: () => {
        const date = new Date();
        const hours = () => {
          if (date.getHours().toString().length < 2) {
            return "0" + date.getHours().toString();
          } else {
            return date.getHours().toString();
          }
        };
        const minutes = () => {
          if (date.getMinutes().toString().length < 2) {
            return "0" + date.getMinutes().toString();
          } else {
            return date.getMinutes().toString();
          }
        };
        const seconds = () => {
          if (date.getSeconds().toString().length < 2) {
            return "0" + date.getSeconds().toString();
          } else {
            return date.getSeconds().toString();
          }
        };
        const amOrPm = date.getHours() >= 12 ? "PM" : "AM";

        return Chalk.Forground.RGB(
          161,
          150,
          172,
          `[${hours()}:${minutes()}:${seconds()} ${amOrPm}]`
        );
      },
      info: Chalk.Forground.RGB(243, 238, 248, "[📄 Info!]"),
      warning: Chalk.Forground.RGB(255, 176, 46, "[⚠️  Warn!]"),
      error: Chalk.Forground.RGB(249, 47, 96, "[⭕ Error]"),
      debug: Chalk.Forground.RGB(120, 232, 157, "[🪲  Debug]"),
      event: Chalk.Forground.RGB(240, 178, 50, "[🔅 Event]"),
      ...data,
    };

    this.log = (...message: any[]): boolean =>
      process.stdout.write(
        `${headers.time()} ${headers.gap} ${message.join(" ")}\n`
      );

    this.info = (...message: any[]): boolean =>
      process.stdout.write(
        `${headers.info} ${headers.gap} ${message.join(" ")}\n`
      );

    this.warn = (...message: any[]): boolean =>
      process.stdout.write(
        `${headers.warning} ${headers.gap} ${message.join(" ")}\n`
      );

    this.error = (...message: any[]): boolean =>
      process.stdout.write(
        `${headers.error} ${headers.gap} ${message.join(" ")}\n`
      );

    this.debug = (...message: any[]): boolean =>
      process.stdout.write(
        `${headers.debug} ${headers.gap} ${message.join(" ")}\n`
      );

    this.event = (...message: any[]): boolean =>
      process.stdout.write(
        `${headers.event} ${headers.gap} ${message.join(" ")}\n`
      );

    this.custom = (header: string, ...message: any[]): boolean =>
      process.stdout.write(`${header} ${headers.gap} ${message.join(" ")}\n`);

    this.time = () => {
      const date = new Date();
      const hours = () => {
        if (date.getHours().toString().length < 2) {
          return "0" + date.getHours().toString();
        } else {
          return date.getHours().toString();
        }
      };
      const minutes = () => {
        if (date.getMinutes().toString().length < 2) {
          return "0" + date.getMinutes().toString();
        } else {
          return date.getMinutes().toString();
        }
      };
      const amOrPm = date.getHours() >= 12 ? "PM" : "AM";

      return `${hours()}:${minutes()} ${amOrPm}`;
    };

    this.timeSeconds = () => {
      const date = new Date();
      const hours = () => {
        if (date.getHours().toString().length < 2) {
          return "0" + date.getHours().toString();
        } else {
          return date.getHours().toString();
        }
      };
      const minutes = () => {
        if (date.getMinutes().toString().length < 2) {
          return "0" + date.getMinutes().toString();
        } else {
          return date.getMinutes().toString();
        }
      };
      const seconds = () => {
        if (date.getSeconds().toString().length < 2) {
          return "0" + date.getSeconds().toString();
        } else {
          return date.getSeconds().toString();
        }
      };
      const amOrPm = date.getHours() >= 12 ? "PM" : "AM";

      return `${hours()}:${minutes()}:${seconds()} ${amOrPm}`;
    };
  }

  /**
   * Log a message with time at start that uses console
   */
  log: (...message: any[]) => void;

  /**
   * Log a process with a green process word to present an process that uses console
   */
  info: (...message: any[]) => void;

  /**
   * Log a warning with a yellow warning word to present an warning that uses console
   */
  warn: (...message: any[]) => void;

  /**
   * Log a error with an red error word to present an error that uses console
   */
  error: (...message: any[]) => void;

  /**
   * Debugging Logs
   */
  debug: (...message: any[]) => void;

  /**
   * Log a event with a orange event word to present an event that uses console
   */
  event: (...message: any[]) => void;

  /**
   * Experimental
   */
  custom: (header: string, ...message: any[]) => void;

  /**
   * Gets the current time
   */
  time: () => string;

  /**
   * Gets the current time with seconds
   */
  timeSeconds: () => string;

  /**
   * Gets the terminal start time
   */
  ptime = ProcessTime;
}

interface LoggerData {
  gap?: string;
  time?: () => string;
  timeSeconds?: () => string;
  info?: string;
  warning?: string;
  error?: string;
  debug?: string;
  event?: string;
}

export default new Logger();
