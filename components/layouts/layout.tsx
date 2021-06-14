import Navbar from "components/navbar/navbar"
import FooterCard from "components/footer/footer"

import styles from "./layout.module.scss"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className={styles.layoutBase}>
        <main className={styles.mainContent}>{children}</main>
        <FooterCard style={{ gridColumn: "content" }} />
      </div>
    </>
  )
}
