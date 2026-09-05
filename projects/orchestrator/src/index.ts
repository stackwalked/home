import { statSync } from "node:fs";
import { resolve } from "node:path";

const directories = ["projects", "content", "artifacts", "scripts"];
const workspaceRoot = resolve(import.meta.dir, "../../..");

if (Bun.argv.includes("--check")) {
  const missing = directories.filter((directory) => {
    try {
      return !statSync(resolve(workspaceRoot, directory)).isDirectory();
    } catch {
      return true;
    }
  });

  if (missing.length > 0) {
    console.error(`missing required directories: ${missing.join(", ")}`);
    process.exit(1);
  }

  console.log("orchestration workspace is ready");
  process.exit(0);
}

console.log(`orchestration workspace ready (${directories.join(", ")})`);
