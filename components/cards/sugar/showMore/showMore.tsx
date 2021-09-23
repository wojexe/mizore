import { a } from "@react-spring/web"
import useHoverPress from "hooks/animations/useHoverPress"
import styles from "./showMore.module.scss"

const ShowMore = ({ ...props }) => {
  const [hoverPressRef, hoverPressScale] = useHoverPress({})

  return (
    <a.button
      className={styles.showMore}
      ref={hoverPressRef}
      style={{ scale: hoverPressScale as any }}
      {...props}
    >
      Show more
    </a.button>
  )
}

export default ShowMore
