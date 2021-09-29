import useMeasure from "react-use-measure"

import NavbarContext from "./navbarContext"

import styles from "./navbar.module.scss"

import UnchoLogo from "./unchoLogo/unchoLogo"
import UserProfile from "./userProfile/userProfile"

import SiteSwitcher from "./siteSwitcher/siteSwitcher"
import { useTranslation } from "next-i18next"
import { useState } from "react"

export default function Navbar() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userID, setUserID] = useState<string | null>("wojexe")

  const { t } = useTranslation("common")

  const NavbarLinks = [
    { name: t("pageNames.homepage"), path: "/", pathname: "/", visible: true },
    {
      name: t("pageNames.profile", { username: userID }),
      path: `/profile/${userID}`,
      pathname: "/profile/[userID]",
      visible: userID,
    },
    {
      name: t("pageNames.rankings"),
      path: "/rankings",
      pathname: "/rankings",
      visible: true,
    },
    {
      name: t("pageNames.support"),
      path: "/support",
      pathname: "/support",
      visible: true,
    },
  ]

  const [measureRef, navMeasure] = useMeasure()

  return (
    <nav className={styles.navbar} ref={measureRef}>
      <NavbarContext.Provider value={{ navMeasure: navMeasure }}>
        <div className={styles.content}>
          <UnchoLogo />
          <SiteSwitcher links={NavbarLinks} />
          <UserProfile />
        </div>
      </NavbarContext.Provider>
    </nav>
  )
}
