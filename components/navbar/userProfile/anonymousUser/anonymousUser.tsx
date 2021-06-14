import { FaUserCircle } from "react-icons/fa"

import { a } from "@react-spring/web"
import useHoverPress from "hooks/animations/useHoverPress"
import mergeRefs from "react-merge-refs"

import styles from "./anonymousUser.module.scss"

const AnonymousUser = ({ forwardRef, ...props }) => {
  const [hoverPressRef, hoverPressScale] = useHoverPress({})

  const componentRef = mergeRefs([forwardRef, hoverPressRef])

  return (
    <a.a
      className={styles.iconWrapper}
      ref={componentRef}
      style={{ scale: hoverPressScale as any }}
      {...props}
    >
      <FaUserCircle />
    </a.a>
  )
}

export default AnonymousUser
