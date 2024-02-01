import readline from "readline";
import { Chalk } from "./chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export class Prompt {
  constructor() {}
  question(q: string, func: (answer: string) => string): this {
    rl.question(`${q} ${Chalk.Forground.Black(">")} `, (answer) => {
      console.log(func(answer));
      rl.close();
    });
    return this;
  }
}

export function Question(q: string) {
  rl.question(`${q} ${Chalk.Forground.Black(">")} `, (name) => {
    console.log(`Hello, ${name}!`);
    rl.close();
  });
}
export function Prompst(preserveCursor?: boolean | undefined) {
  rl.prompt(preserveCursor);
}
