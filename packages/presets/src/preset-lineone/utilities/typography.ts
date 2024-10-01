import variables from "../variables"

export default {
   "h1, .h1, h2, .h2, h3, .h3, h4, .h4": {
      color: "black",
      fontFamily: variables.fontFamily["inter"],
   },
   "h1, .h1": {
      fontSize: "3rem",
      fontWeight: "800",
      lineHeight: "3rem",
   },
   "h2, .h2": {
      fontSize: "1.875rem",
      fontWeight: "600",
      lineHeight: "2.25rem",
   },
}
