import { UIAvatar } from "@/types"
import clsx from "clsx"

export const roundedAvatar = {
   full: "rounded-full",
   square: "rounded-lg",
} as const

export const variantColors = {
   primary: "bg-primary text-white",
   secondary: "bg-secondary text-white",
   info: "bg-info text-white",
   success: "bg-success text-white",
   warning: "bg-warning text-white",
   error: "bg-error text-white",
   default: "bg-slate-200 text-slate-600",
} as const

export default function Avatar({
   src,
   size = "size-12",
   rounded = "full",
   isInitial,
   initial,
   classNameInitial,
   className,
   variant = "default",
   ...props
}: UIAvatar.AvatarProps) {
   return (
      <div
         className={clsx("relative", size, className, roundedAvatar[rounded], {
            "inline-flex ": !isInitial,
         })}
      >
         {isInitial && initial ? (
            <Initial
               letter={initial}
               className={classNameInitial}
               variant={variant}
            />
         ) : (
            <img className="rounded-full" src={src} {...props} />
         )}
      </div>
   )
}

function Initial({
   letter,
   className,
   variant = "default",
}: {
   letter?: string
   className?: string
   variant?: keyof typeof variantColors
}) {
   return (
      <div
         className={clsx(
            "size-full flex justify-center items-center uppercase rounded-full text-base",
            className,
            variantColors[variant]
         )}
      >
         {letter}
      </div>
   )
}
