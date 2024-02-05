// @ts-check
import { server } from "./logger";

server.clear();
server.log("Hello, world!", "NO", 0);
server.error("System Down!");
server.warn("Server shutting down!");
