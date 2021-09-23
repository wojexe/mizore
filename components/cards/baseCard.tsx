import styles from "./baseCard.module.scss"

interface BaseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  children?: React.ReactNode
  style?: React.CSSProperties
  customPadding?: boolean
}

export default function BaseCard({
  title,
  children,
  style,
  customPadding = false,
  ...props
}: BaseCardProps) {
  let baseCardPaddingFromProps: React.CSSProperties = {
    paddingTop: title ? "1rem" : "2rem",
    paddingBottom: children ? "1rem" : "2rem",
  }

  if (customPadding) baseCardPaddingFromProps = {}

  return (
    <div
      className={styles.baseCard}
      style={{ ...style, ...baseCardPaddingFromProps }}
      {...props}
    >
      {title ? <h1>{title}</h1> : null}
      <div className={styles.children}>{children ? children : null}</div>
    </div>
  )
}
