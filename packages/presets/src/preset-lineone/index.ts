import plugin from "tailwindcss/plugin"
import components from "./components"
import utilities from "./utilities"

export default {
   theme: {
      extend: {
         colors: {
            "slate-150": "#e9eef5",
            primary: "#4f46e5",
            "primary-focus": "#4338ca",
            secondary: "#f000b9",
            "secondary-focus": "#bd0090",
            info: "#0ea5e9",
            "info-focus": "#0284c7",
            success: "#10b981",
            "success-focus": "#059669",
            warning: "#ff9800",
            "warning-focus": "#e68200",
            error: "#ff5724",
            "error-focus": "#f03000",
         },
         fontFamily: {
            inter: ["'Inter'", "sans-serif"],
         },
      },
   },
   plugins: [
      plugin(function ({ addComponents, addUtilities }) {
         addComponents(components)
         addUtilities(utilities)
      }),
   ],
}
