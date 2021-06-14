import useMeasure from "react-use-measure"
import NavbarContext from "./navbarContext"

import styles from "./navbar.module.scss"

import UnchoLogo from "./unchoLogo/unchoLogo"
import UserProfile from "./userProfile/userProfile"

import SiteSwitcher from "./siteSwitcher/siteSwitcher"

const userID = 1
const userIsLogged = true

const NavbarLinks = [
  { name: "homepage", path: "/", pathname: "/", visible: true },
  {
    name: "profile",
    path: `/profile/${userID}`,
    pathname: "/profile/[userID]",
    visible: userIsLogged,
  },
  { name: "rankings", path: "/rankings", pathname: "/rankings", visible: true },
  { name: "support", path: "/support", pathname: "/support", visible: true },
]

export default function Navbar() {
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
