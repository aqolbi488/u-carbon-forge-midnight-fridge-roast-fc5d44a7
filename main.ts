import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My fridge locks at midnight like the leftovers are in witness protection and I'm the threat.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
console.log(line);
