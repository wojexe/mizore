import { a, useSpring } from "@react-spring/web"
import useMeasure from "react-use-measure"
import { useDetectClickOutside } from "react-detect-click-outside"

import React, { useState, useEffect, useContext, useCallback } from "react"

import NavbarContext from "components/navbar/navbarContext"

import { useRouter } from "next/router"

import styles from "./siteSwitcher.module.scss"

import LinksList from "components/navbar/siteSwitcher/linksList/linksList"

import SwitcherContext from "./switcherContext"

const SiteSwitcher = ({ links }) => {
  const router = useRouter()

  let [currentActiveLink, setCurrentActiveLink] = useState(0)

  // On the first render, determine which route is active
  useEffect(() => {
    const pathname = router.pathname
    let routerIndex = 0
    links.forEach((link, index) => {
      if (link.pathname === pathname) routerIndex = index
    })
    setCurrentActiveLink(routerIndex)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [isSwitcherOpen, setSwitcherOpen] = useState(false)

  const [menuRef, menuMeasure] = useMeasure()

  const { navMeasure } = useContext(NavbarContext)

  const wrapperStyle = useSpring({
    height: isSwitcherOpen ? menuMeasure.height : menuMeasure.height / 8 + 4,
    background: isSwitcherOpen ? `rgb(37, 37, 37)` : `rgba(37, 37, 37, 0)`,
    padding: isSwitcherOpen ? `1.5rem 3rem` : `0.9rem 2rem`,
    top: navMeasure.height ? navMeasure.height / 2 : 40,
    // -50%, padding + (textHeight/2)
    translate: isSwitcherOpen ? `-50%, -2rem` : `-50%, -1.4rem`,
    "--shadowOpacity": isSwitcherOpen ? 0.5 : 0,
  })

  const calculateMenuPosition = useCallback(
    (menuHeight: number, currentLinkIndex: number): number => {
      return -(
        (menuHeight / 8) * (currentLinkIndex * 2) +
        3.5 * currentActiveLink
      )
    },
    [currentActiveLink]
  )

  // Switcher scroll spring
  const { translateY } = useSpring({
    translateY: calculateMenuPosition(menuMeasure.height, currentActiveLink),
  })

  // When switcher is closed, show only the active path
  useEffect(() => {
    setSwitcherOpen(false)
    translateY.start({
      to: calculateMenuPosition(menuMeasure.height, currentActiveLink),
    })
  }, [currentActiveLink, calculateMenuPosition, menuMeasure.height, translateY])

  // When switcher is open, show all paths
  useEffect(() => {
    if (isSwitcherOpen) translateY.start({ to: 0 })
  }, [isSwitcherOpen, translateY])

  // Close switcher on any click outside of it
  const outsideClickRef = useDetectClickOutside({
    onTriggered: () => setSwitcherOpen(false),
  })

  const switcher = {
    isOpen: isSwitcherOpen,
    close: () => setSwitcherOpen(false),
  }

  return (
    <SwitcherContext.Provider value={switcher}>
      <a.div
        className={styles.wrapper}
        style={wrapperStyle}
        onFocus={() => setSwitcherOpen(true)}
        onPointerEnter={() => setSwitcherOpen(true)}
        onMouseLeave={() => setSwitcherOpen(false)}
        ref={outsideClickRef}
      >
        <a.ul className={styles.switcher} style={{ translateY }} ref={menuRef}>
          <LinksList
            links={links}
            setCurrentActiveLink={setCurrentActiveLink}
          />
        </a.ul>
      </a.div>
    </SwitcherContext.Provider>
  )
}

export default SiteSwitcher
