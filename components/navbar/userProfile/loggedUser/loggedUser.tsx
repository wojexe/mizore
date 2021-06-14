import { a } from "@react-spring/web"
import useHoverPress from "hooks/animations/useHoverPress"
import mergeRefs from "react-merge-refs"

import styles from "./loggedUser.module.scss"

const LoggedUser = ({ forwardRef, ...props }) => {
  const [hoverPressRef, hoverPressScale] = useHoverPress({})

  const componentRef = mergeRefs([forwardRef, hoverPressRef])

  return (
    <a.a
      className={styles.iconWrapper}
      ref={componentRef}
      style={{ scale: hoverPressScale as any }}
      {...props}
    >
      👋
    </a.a>
  )
}

export default LoggedUser
