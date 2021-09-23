import { a } from "@react-spring/web"
import useHoverPress from "hooks/animations/useHoverPress"

import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

import styles from "./newsCard.module.scss"

const NewsCard = ({ date, title, style, ...props }) => {
  const [hoverPressRef, hoverPressScale] = useHoverPress({
    hoverScale: 1.03,
    reduceHoverScale: 1.02,
    pressedScale: 0.96,
    reducePressedScale: 0.98,
  })

  return (
    <a.a
      className={styles.newsCard}
      ref={hoverPressRef}
      style={{
        ...style,
        scale: hoverPressScale as any,
      }}
      {...props}
    >
      <SkeletonTheme color="#a6a6a6" highlightColor="#808080">
        <span
          className={styles.date}
          style={{ background: date && title ? null : "none" }}
        >
          {date ?? (
            <Skeleton
              count={1}
              width={"6ch"}
              style={{ borderRadius: "100px" }}
            />
          )}
        </span>
        <span className={styles.title}>
          {title ?? <Skeleton count={1} style={{ borderRadius: "6px" }} />}
        </span>
      </SkeletonTheme>
    </a.a>
  )
}

export default NewsCard
