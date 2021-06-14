import styles from "./baseCard.module.scss"

export default function BaseCard({ title, children, ...props }) {
  return (
    <div className={styles.baseCard} {...props}>
      {title ? <h1>{title}</h1> : null}
      {children ? children : null}
    </div>
  )
}
