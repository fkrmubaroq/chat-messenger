import { type UIButton } from "@/types"
import clsx from "clsx"

export const buttonVariants = {
   default:
      "bg-slate-150 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 ",
   primary:
      "bg-primary text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90",
   secondary:
      "bg-secondary text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90",
   info: "bg-info text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90",
   success:
      "bg-success text-white hover:bg-success-focus focus:bg-success-focus active:bg-success-focus/90",
   warning:
      "btn bg-warning text-white hover:bg-warning-focus focus:bg-warning-focus active:bg-warning-focus/90",
   error: "bg-error text-white hover:bg-error-focus focus:bg-error-focus active:bg-error-focus/90",
} as const

export const buttonSizes = {
   xs: "h-6 px-3 text-xs",
   sm: "h-8 px-4 text-xs",
   md: "h-9",
   lg: "h-11",
   xl: "h-12",
} as const

export const roundedButton = {
   sm: "rounded",
   md: "rounded-md",
   lg: "rounded-lg",
   xl: "rounded-xl",
   full: "rounded-full",
} as const

export default function Button({
   rounded = "sm",
   size = "md",
   variant = "default",
   className,
   ...props
}: UIButton.ButtonProps) {
   return (
      <button
         className={clsx(
            "btn font-medium",
            buttonVariants[variant],
            buttonSizes[size],
            roundedButton[rounded],
            className
         )}
         {...props}
      />
   )
}
