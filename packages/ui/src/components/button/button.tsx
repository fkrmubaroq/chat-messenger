import { type UIButton } from "@/types"
import clsx from "clsx"

export default function Button({ className, ...props }: UIButton.ButtonProps) {
   return (
      <button className={clsx("bg-red-800 text-white", className)} {...props} />
   )
}
