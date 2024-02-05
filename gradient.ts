import { Chalk } from "./chalk";

/**
 * Converts a hex to RGB
 * @param hex Number value of the hex
 * @returns Object with the RGB data
 */
export function toRGB(hex: number): {
  r: number;
  g: number;
  b: number;
} {
  return { r: (hex >> 16) & 0xff, g: (hex >> 8) & 0xff, b: hex & 0xff };
}

/**
 * Create a Gradient that can be used to create bash colored text on forground or background
 */
export class Gradient {
  constructor(data: { colors: RGB[]; midpoint: number; text: string }) {
    data.midpoint -= 1;

    this.getColors = () => {
      const colors: RGB[] = [];
      let currentRGB = data.colors[0];

      let debug = {
        r: true,
        g: true,
        b: true,
      };

      const high = {
        r: data.colors.reduce((max, color) => Math.max(max, color.r), 0),
        g: data.colors.reduce((max, color) => Math.max(max, color.g), 0),
        b: data.colors.reduce((max, color) => Math.max(max, color.b), 0),
      };

      const low = {
        r: data.colors.reduce((min, color) => Math.min(min, color.r), Infinity),
        g: data.colors.reduce((min, color) => Math.min(min, color.g), Infinity),
        b: data.colors.reduce((min, color) => Math.min(min, color.b), Infinity),
      };

      if (high.r > low.r) {
        debug.r = false;
      }
      if (high.g > low.g) {
        debug.g = false;
      }
      if (high.b > low.b) {
        debug.b = false;
      }

      const midpoints = {
        r: high.r - low.r,
        g: high.g - low.g,
        b: high.b - low.b,
      };

      const middiv = {
        r: midpoints.r / data.midpoint,
        g: midpoints.g / data.midpoint,
        b: midpoints.b / data.midpoint,
      };

      for (let i = 0; i < data.midpoint + 1; i++) {
        colors.push({
          r: Math.max(0, Math.min(255, Math.floor(currentRGB.r))),
          g: Math.max(0, Math.min(255, Math.floor(currentRGB.g))),
          b: Math.max(0, Math.min(255, Math.floor(currentRGB.b))),
        });

        if (debug.r) {
          currentRGB.r += middiv.r;
        } else {
          currentRGB.r -= middiv.r;
        }
        if (debug.g) {
          currentRGB.g += middiv.g;
        } else {
          currentRGB.g -= middiv.g;
        }
        if (debug.b) {
          currentRGB.b += middiv.b;
        } else {
          currentRGB.b -= middiv.b;
        }
      }

      return colors;
    };

    this.toForgroundText = (message?: string) => {
      if (message) data.text = message;
      data.midpoint = data.text.length;

      let bash = "";
      let currentRGB = data.colors[0];

      let debug = {
        r: true,
        g: true,
        b: true,
        at: 0,
      };

      const high = {
        r: data.colors.reduce((max, color) => Math.max(max, color.r), 0),
        g: data.colors.reduce((max, color) => Math.max(max, color.g), 0),
        b: data.colors.reduce((max, color) => Math.max(max, color.b), 0),
      };

      const low = {
        r: data.colors.reduce((max, color) => Math.min(max, color.r), Infinity),
        g: data.colors.reduce((max, color) => Math.min(max, color.g), Infinity),
        b: data.colors.reduce((max, color) => Math.min(max, color.b), Infinity),
      };

      if (high.r > low.r) {
        debug.r = false;
      }
      if (high.g > low.g) {
        debug.g = false;
      }
      if (high.b > low.b) {
        debug.b = false;
      }

      const midpoints = {
        r: high.r - low.r,
        g: high.g - low.g,
        b: high.b - low.b,
      };

      const middiv = {
        r: midpoints.r / data.midpoint,
        g: midpoints.g / data.midpoint,
        b: midpoints.b / data.midpoint,
      };

      for (let i = 0; i < data.midpoint + 1; i++) {
        bash += Chalk.Forground.RGB(
          Math.max(0, Math.min(255, Math.floor(currentRGB.r))),
          Math.max(0, Math.min(255, Math.floor(currentRGB.g))),
          Math.max(0, Math.min(255, Math.floor(currentRGB.b))),
          data.text.charAt(debug.at)
        );
        debug.at += 1;

        if (debug.r) {
          currentRGB.r += middiv.r;
        } else {
          currentRGB.r -= middiv.r;
        }
        if (debug.g) {
          currentRGB.g += middiv.g;
        } else {
          currentRGB.g -= middiv.g;
        }
        if (debug.b) {
          currentRGB.b += middiv.b;
        } else {
          currentRGB.b -= middiv.b;
        }
      }

      return bash;
    };

    this.toBackgroundText = (message?: string) => {
      if (message) data.text = message;
      data.midpoint = data.text.length;

      let bash = "";
      let currentRGB = data.colors[0];

      let debug = {
        r: true,
        g: true,
        b: true,
        at: 0,
      };

      const high = {
        r: data.colors.reduce((max, color) => Math.max(max, color.r), 0),
        g: data.colors.reduce((max, color) => Math.max(max, color.g), 0),
        b: data.colors.reduce((max, color) => Math.max(max, color.b), 0),
      };

      const low = {
        r: data.colors.reduce((max, color) => Math.min(max, color.r), Infinity),
        g: data.colors.reduce((max, color) => Math.min(max, color.g), Infinity),
        b: data.colors.reduce((max, color) => Math.min(max, color.b), Infinity),
      };

      if (high.r > low.r) {
        debug.r = false;
      }
      if (high.g > low.g) {
        debug.g = false;
      }
      if (high.b > low.b) {
        debug.b = false;
      }

      const midpoints = {
        r: high.r - low.r,
        g: high.g - low.g,
        b: high.b - low.b,
      };

      const middiv = {
        r: midpoints.r / data.midpoint,
        g: midpoints.g / data.midpoint,
        b: midpoints.b / data.midpoint,
      };

      for (let i = 0; i < data.midpoint + 1; i++) {
        bash += Chalk.Background.RGB(
          Math.max(0, Math.min(255, Math.floor(currentRGB.r))),
          Math.max(0, Math.min(255, Math.floor(currentRGB.g))),
          Math.max(0, Math.min(255, Math.floor(currentRGB.b))),
          data.text.charAt(debug.at)
        );
        debug.at += 1;

        if (debug.r) {
          currentRGB.r += middiv.r;
        } else {
          currentRGB.r -= middiv.r;
        }
        if (debug.g) {
          currentRGB.g += middiv.g;
        } else {
          currentRGB.g -= middiv.g;
        }
        if (debug.b) {
          currentRGB.b += middiv.b;
        } else {
          currentRGB.b -= middiv.b;
        }
      }

      return bash;
    };
  }
  getColors: () => RGB[];
  toForgroundText: (message?: string) => string;
  toBackgroundText: (message?: string) => string;
}

interface RGB {
  r: number;
  g: number;
  b: number;
}

export function rgb(r: number, g: number, b: number) {
  return { r, g, b };
}
