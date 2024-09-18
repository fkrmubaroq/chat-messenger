import { defineConfig } from "tsup"

export default defineConfig((options) => ({
   entry: ["src/components/**/index.ts", "src/index.ts"],
   dts: true,
   clean: true,
   sourcemap: true,
   format: ["esm", "cjs"],
   // minify: options.format === "esm" ? true : false,
}))
