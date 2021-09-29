import { a } from "@react-spring/web"
import React from "react"

import useHoverPress from "hooks/animations/useHoverPress"

import styles from "./themeButton.module.scss"

interface IThemeButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label: string
}

const ThemeButton = ({ label = "Button", ...props }: IThemeButtonProps) => {
  const [hoverPressRef, hoverPressScale] = useHoverPress({
    hoverScale: 1.05,
    reduceHoverScale: 1.03,
    pressedScale: 0.95,
    reducePressedScale: 0.97,
  })

  return (
    <a.button
      className={styles.themeButton}
      ref={hoverPressRef}
      style={{ scale: hoverPressScale as any }}
      {...props}
    >
      {label}
    </a.button>
  )
}

export default ThemeButton
