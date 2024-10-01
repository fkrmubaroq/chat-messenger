import { UITypohraphy } from "@/types"
import clsx from "clsx"
import { createElement } from "react"

export const allowTypography = [
   "div",
   "h1",
   "h2",
   "h3",
   "h4",
   "large",
   "lead",
   "p",
   "p-ui",
   "p-ui-medium",
   "list",
   "body",
   "body-medium",
   "subtle",
   "subtle-medium",
   "subtle-semibold",
   "small",
   "detail",
   "blockquote",
   "inline-code",
   "table-head",
   "table-item",
] as const
export default function Text({
   as = "div",
   typography,
   className,
   ...props
}: UITypohraphy.TextProps) {
   return createElement(as, {
      className: clsx(typography, className),
      ...props,
   })
}
