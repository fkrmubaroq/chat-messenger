import tailwindPlugin from "./tailwind.plugin"

/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.tsx"],
   theme: {
      extend: {},
   },
   plugins: [tailwindPlugin],
}
