import { a } from "@react-spring/web"
import useHoverPress from "hooks/animations/useHoverPress"
import { forwardRef, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"

import styles from "./passwordInput.module.scss"

const Eye = ({ slash, ...props }) => {
  return slash ? (
    <FaEyeSlash className={styles.eyeStyles} {...props} />
  ) : (
    <FaEye className={styles.eyeStyles} {...props} />
  )
}

const SubmitButton = forwardRef<any, any>(
  ({ style, ...props }, forwardedRef) => {
    const [isVisible, setIsVisible] = useState<boolean>(false)

    const [hoverPressRef, hoverPressScale] = useHoverPress({})

    return (
      <div className={styles.passwordInputWrapper}>
        <input
          ref={forwardedRef}
          style={{ ...style }}
          type={isVisible ? "text" : "password"}
          {...props}
        />
        <a.a
          className={styles.eyeWrapper}
          ref={hoverPressRef}
          onClick={() => setIsVisible(!isVisible)}
          style={{ scale: hoverPressScale as any }}
        >
          <Eye slash={isVisible} />
        </a.a>
      </div>
    )
  }
)

export default SubmitButton
