import { roundedAvatar, variantColors } from "./components/avatar/avatar"
import {
   buttonSizes,
   buttonVariants,
   roundedButton,
} from "./components/button/button"
import { allowTypography } from "./components/typography/text"
export declare namespace UIButton {
   type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
      variant?: keyof typeof buttonVariants
      size?: keyof typeof buttonSizes
      rounded?: keyof typeof roundedButton
   }
}

export declare namespace UITypohraphy {
   type TextProps = {
      as?: keyof JSX.IntrinsicElements
      typography?: (typeof allowTypography)[number]
   } & React.HTMLAttributes<HTMLElement>
}

export declare namespace UIAvatar {
   type AvatarProps = React.HTMLAttributes<HTMLImageElement> & {
      classNameInitial?: string
      size?: string
      src?: string
      rounded?: keyof typeof roundedAvatar
      isInitial?: boolean
      initial?: string
      variant?: keyof typeof variantColors
   }
}
