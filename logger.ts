const ProcessTime = Date.now();
import { Chalk } from "./chalk";

/**
 * Allows you to create a logger and customize it to your needs
 */

class Standard {
  headers = {
    gap: ">",
    date: () => {
      const date = new Date();

      const month =
        date.getMonth().toString().length < 2
          ? "0" + date.getMonth().toString()
          : date.getMonth().toString();
      const day =
        date.getDate().toString().length < 2
          ? "0" + date.getDate().toString()
          : date.getDate().toString();
      const year = date.getFullYear();
      const format = `${month}/${day}/${year}`;

      return `[${format}]`;
    },
    time: () => {
      const date = new Date();

      const hours =
        (date.getHours() % 12 || 12).toString().length < 2
          ? "0" + (date.getHours() % 12 || 12).toString()
          : (date.getHours() % 12 || 12).toString();
      const minutes =
        date.getMinutes().toString().length < 2
          ? "0" + date.getMinutes().toString()
          : date.getMinutes().toString();
      const seconds =
        date.getSeconds().toString().length < 2
          ? "0" + date.getSeconds().toString()
          : date.getSeconds().toString();
      const amOrPm = date.getHours() >= 12 ? "PM" : "AM";
      const time = `${hours}:${minutes} ${amOrPm}`;

      return `[${time}]`;
    },
    info: Chalk.Forground.RGB(243, 238, 248, "[📄 Info!]"),
    warning: Chalk.Forground.RGB(255, 176, 46, "[⚠️  Warn!]"),
    error: Chalk.Forground.RGB(249, 47, 96, "[⭕ Error]"),
    debug: Chalk.Forground.RGB(120, 232, 157, "[🪲  Debug]"),
    event: Chalk.Forground.RGB(240, 178, 50, "[🔅 Event]"),
  };
  constructor(public data?: LoggerData) {
    this.headers = {
      ...this.headers,
      ...data,
    };
  }

  /**
   * Log a message with time at start that uses console
   */
  log = (...message: any[]): boolean =>
    process.stdout.write(
      `${this.headers.time()} ${this.headers.gap} ${message.join(" ")}\n`
    );

  /**
   * Log a message with time at start that uses console
   */
  clear = (): void => console.clear();

  /**
   * Log a process with a green process word to present an process that uses console
   */
  info = (...message: any[]): boolean =>
    process.stdout.write(
      `${this.headers.info} ${this.headers.gap} ${message.join(" ")}\n`
    );

  /**
   * Log a warning with a yellow warning word to present an warning that uses console
   */
  warn = (...message: any[]): boolean =>
    process.stdout.write(
      `${this.headers.warning} ${this.headers.gap} ${message.join(" ")}\n`
    );

  /**
   * Log a error with an red error word to present an error that uses console
   */
  error = (...message: any[]): boolean =>
    process.stdout.write(
      `${this.headers.error} ${this.headers.gap} ${message.join(" ")}\n`
    );

  /**
   * Debugging Logs
   */
  debug = (...message: any[]): boolean =>
    process.stdout.write(
      `${this.headers.debug} ${this.headers.gap} ${message.join(" ")}\n`
    );

  /**
   * Log a event with a orange event word to present an event that uses console
   */
  event = (...message: any[]): boolean =>
    process.stdout.write(
      `${this.headers.event} ${this.headers.gap} ${message.join(" ")}\n`
    );

  /**
   * Experimental
   */
  custom = (header: string, ...message: any[]): boolean =>
    process.stdout.write(
      `${header} ${this.headers.gap} ${message.join(" ")}\n`
    );

  /**
   * Gets the terminal start time
   */
  ptime = ProcessTime;
}

class Server {
  time = () => {
    const date = new Date();

    const hours =
      (date.getHours() % 12 || 12).toString().length < 2
        ? "0" + (date.getHours() % 12 || 12).toString()
        : (date.getHours() % 12 || 12).toString();
    const minutes =
      date.getMinutes().toString().length < 2
        ? "0" + date.getMinutes().toString()
        : date.getMinutes().toString();
    const seconds =
      date.getSeconds().toString().length < 2
        ? "0" + date.getSeconds().toString()
        : date.getSeconds().toString();
    const amOrPm = date.getHours() >= 12 ? "PM" : "AM";
    const time = `${hours}:${minutes}:${seconds} ${amOrPm}`;

    return time;
  };
  timeDate = () => {
    const date = new Date();

    const month =
      date.getMonth().toString().length < 2
        ? "0" + date.getMonth().toString()
        : date.getMonth().toString();
    const day =
      date.getDate().toString().length < 2
        ? "0" + date.getDate().toString()
        : date.getDate().toString();
    const year = date.getFullYear();
    const format = `${month}/${day}/${year}`;

    const hours =
      (date.getHours() % 12 || 12).toString().length < 2
        ? "0" + (date.getHours() % 12 || 12).toString()
        : (date.getHours() % 12 || 12).toString();
    const minutes =
      date.getMinutes().toString().length < 2
        ? "0" + date.getMinutes().toString()
        : date.getMinutes().toString();
    const seconds =
      date.getSeconds().toString().length < 2
        ? "0" + date.getSeconds().toString()
        : date.getSeconds().toString();
    const amOrPm = date.getHours() >= 12 ? "PM" : "AM";
    const time = `${hours}:${minutes}:${seconds} ${amOrPm}`;

    return `${format} ${time}`;
  };
  headers = {
    gap: ">",
    data: Chalk.Forground.RGB(120, 232, 157, "Data "),
    warning: Chalk.Forground.RGB(255, 176, 46, `Warning at ${this.time()}`),
    error: Chalk.Forground.RGB(249, 47, 96, `Server Error at ${this.time()}`),
    debug: Chalk.Forground.RGB(120, 232, 157, "[🪲  Debug]"),
    event: Chalk.Forground.RGB(240, 178, 50, "[🔅 Event]"),
  };
  constructor(data?: LoggerData) {
    this.headers = {
      ...this.headers,
      ...data,
    };
  }

  /**
   * Log a message with time at start that uses console
   */
  log = (...message: any[]): boolean =>
    process.stdout.write(
      `${this.timeDate()} ${this.headers.gap} ${message.join(" ")}\n`
    );

  /**
   * Log a message with time at start that uses console
   */
  clear = (): void => console.clear();

  /**
   * Log a process with a green process word to present an process that uses console
   */
  data = (...message: any[]): boolean =>
    process.stdout.write(
      `${this.headers.data} ${this.headers.gap} ${message.join(" ")}\n`
    );

  /**
   * Log a warning with a yellow warning word to present an warning that uses console
   */
  warn = (...message: any[]): boolean =>
    process.stdout.write(
      `${this.headers.warning} ${this.headers.gap} ${message.join(" ")}\n`
    );

  /**
   * Log a error with an red error word to present an error that uses console
   */
  error = (...message: any[]): boolean =>
    process.stdout.write(
      `${this.headers.error} ${this.headers.gap} ${message.join(" ")}\n`
    );

  /**
   * Debugging Logs
   */
  debug = (...message: any[]): boolean =>
    process.stdout.write(
      `${this.headers.debug} ${this.headers.gap} ${message.join(" ")}\n`
    );

  /**
   * Log a event with a orange event word to present an event that uses console
   */
  event = (...message: any[]): boolean =>
    process.stdout.write(
      `${this.headers.event} ${this.headers.gap} ${message.join(" ")}\n`
    );

  /**
   * Experimental
   */
  custom = (header: string, ...message: any[]): boolean =>
    process.stdout.write(
      `${header} ${this.headers.gap} ${message.join(" ")}\n`
    );

  /**
   * Gets the terminal start time
   */
  ptime = ProcessTime;
}

const Logger = {
  Standard,
  Server,
};

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

export const server = new Server();
export const logger = new Standard();
