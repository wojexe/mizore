import { a } from "@react-spring/web"
import useHoverPress from "hooks/animations/useHoverPress"
import styles from "./downloadSwitcher.module.scss"

const DownloadSwitcher = ({ ...props }) => {
  const [hoverPressRef, hoverPressScale] = useHoverPress({
    hoverScale: 1.05,
  })

  return (
    <a.button
      className={styles.downloadSwitcher}
      ref={hoverPressRef}
      style={{ scale: hoverPressScale as any }}
      {...props}
    >
      Download switcher
    </a.button>
  )
}

export default DownloadSwitcher
