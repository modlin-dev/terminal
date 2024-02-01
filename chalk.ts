/**
 * Gives you terminal default colors
 */
export const Colors = {
  None: "\x1b[0m",
  Forground: {
    Black: "\x1B[30m",
    Red: "\x1B[31m",
    Green: "\x1B[32m",
    Orange: "\x1B[33m",
    Blue: "\x1B[34m",
    Magenta: "\x1B[35m",
    Cyan: "\x1B[36m",
    White: "\x1B[37m",
  },
  Background: {
    Black: "\x1B[40m",
    Red: "\x1B[41m",
    Green: "\x1B[42m",
    Orange: "\x1B[43m",
    Blue: "\x1B[44m",
    Magenta: "\x1B[45m",
    Cyan: "\x1B[46m",
    White: "\x1B[47m",
  },
};

/**
 * Modern terminal text color
 */
export const Chalk = {
  Custom: (string: string, message: string) =>
    `\x1B[${string}m${message}\x1b[0m`,
  Forground: {
    RGB: (r: number, g: number, b: number, message: string) =>
      `\x1B[38;2;${r};${g};${b}m${message}\x1B[0m`,
    Black: (message: string) =>
      `${Colors.Forground.Black}${message}${Colors.None}`,
    Red: (message: string) => `${Colors.Forground.Red}${message}${Colors.None}`,
    Green: (message: string) =>
      `${Colors.Forground.Green}${message}${Colors.None}`,
    Orange: (message: string) =>
      `${Colors.Forground.Orange}${message}${Colors.None}`,
    Blue: (message: string) =>
      `${Colors.Forground.Blue}${message}${Colors.None}`,
    Magenta: (message: string) =>
      `${Colors.Forground.Magenta}${message}${Colors.None}`,
    Cyan: (message: string) =>
      `${Colors.Forground.Cyan}${message}${Colors.None}`,
    White: (message: string) =>
      `${Colors.Forground.White}${message}${Colors.None}`,
  },
  Background: {
    RGB: (r: number, g: number, b: number, message: string) =>
      `\x1B[48;2;${r};${g};${b}m${message}\x1B[0m`,
    Black: (message: string) =>
      `${Colors.Background.Black}${message}${Colors.None}`,
    Red: (message: string) =>
      `${Colors.Background.Red}${message}${Colors.None}`,
    Green: (message: string) =>
      `${Colors.Background.Green}${message}${Colors.None}`,
    Orange: (message: string) =>
      `${Colors.Background.Orange}${message}${Colors.None}`,
    Blue: (message: string) =>
      `${Colors.Background.Blue}${message}${Colors.None}`,
    Magenta: (message: string) =>
      `${Colors.Background.Magenta}${message}${Colors.None}`,
    Cyan: (message: string) =>
      `${Colors.Background.Cyan}${message}${Colors.None}`,
    White: (message: string) =>
      `${Colors.Background.White}${message}${Colors.None}`,
  },
};
