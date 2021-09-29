import { useTranslation } from "next-i18next"
import { a } from "@react-spring/web"
import useHoverPress from "hooks/animations/useHoverPress"
import styles from "./showMore.module.scss"

const ShowMore = ({ ...props }) => {
  const { t } = useTranslation("common")

  const [hoverPressRef, hoverPressScale] = useHoverPress({})

  return (
    <a.button
      className={styles.showMore}
      ref={hoverPressRef}
      style={{ scale: hoverPressScale as any }}
      {...props}
    >
      {t("buttons.showMore")}
    </a.button>
  )
}

export default ShowMore
