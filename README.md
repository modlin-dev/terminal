# Terminal

### JavaScript Libary that has Terminal Utilities like Logging, Chalk, Gradients, Prompt and more coming.

by [Hiroshi Modlin](https://github.com/modlin-dev)

## Installation

```bash
npm install @modlin.dev/terminal ## Node.js
bun add @modlin.dev/terminal ## Bun
```

## Examples

```js
// Logging
import { Logger } from "@modlin.dev/terminal/logger";

// Create own Logger
const server = new Logger({ gap: "-" });
server.log("Hello, world!");

// Or use default
import logger from "@modlin-dev/terminal/logger";
logger.log("Hello, world!");

// Chalk
import { Chalk } from "@modlin-dev/terminal/chalk";

// Use custom Colors
Chalk.Forground.RGB(215, 58, 73, "Hello, world!");

// Or use default
Chalk.Forground.Red("Hello, world!");
```
