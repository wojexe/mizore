import styles from "./innerCard.module.scss"

const InnerCard = ({ children, ...props }) => {
  return (
    <div className={styles.innerCard} {...props}>
      {children}
    </div>
  )
}

export default InnerCard
