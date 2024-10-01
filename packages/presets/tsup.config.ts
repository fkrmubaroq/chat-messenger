import { defineConfig } from "tsup"

export default defineConfig((options) => ({
   entry: ["src/index.ts", "src/*/index.ts"],
   dts: true,
   clean: true,
   sourcemap: true,
   format: ["esm", "cjs"],
   // minify: !options.watch,
}))
