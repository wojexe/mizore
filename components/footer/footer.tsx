import { Trans } from "next-i18next"
import styles from "./footer.module.scss"

import FooterLink from "./footerLink/footerLink"

const FooterCard = props => {
  const listOfLinks = [
    { link: "https://github.com/wojexe/mizore", iconName: "github" },
    { link: "https://discord.gg/rJGPnXB", iconName: "discord" },
    { link: "https://ko-fi.com/wojexe", iconName: "dollar" },
  ]

  return (
    <footer className={styles.footer} {...props}>
      <span>
        <Trans i18nKey="footer">
          created with <span className={styles.heart}>❤</span> by uncho! dev
          team
        </Trans>
      </span>
      <div className={styles.iconContainer}>
        {listOfLinks.map(({ link, iconName }, index) => (
          <FooterLink key={index} link={link} iconName={iconName} />
        ))}
      </div>
    </footer>
  )
}

export default FooterCard
