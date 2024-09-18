import { typography } from "@chat-message/tailwind-config"
import plugin from "tailwindcss/plugin"

export default {
   plugins: [
      plugin(({ addUtilities }) => {
         addUtilities(typography)
      }),
   ],
}
