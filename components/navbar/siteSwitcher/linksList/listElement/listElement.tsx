import Link from "next/link"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"

import { a } from "@react-spring/web"

import useHoverPress from "hooks/animations/useHoverPress"

import styles from "./listElement.module.scss"

import SwitcherContext from "components/navbar/siteSwitcher/switcherContext"

const ListElement = ({ index, name, path, pathname, setCurrentActiveLink }) => {
  const router = useRouter()
  const currentPathname = router.pathname

  let [isActive, setIsActive] = useState(false)
  useEffect(() => {
    setIsActive(currentPathname === pathname)
  }, [setIsActive, currentPathname, pathname])

  const [hoverPressRef, hoverPressScale] = useHoverPress({})

  useEffect(() => {
    if (pathname === currentPathname) {
      setCurrentActiveLink(index)
    }
  })

  return (
    <SwitcherContext.Consumer>
      {switcher => (
        <a.li className={`${styles.link} ${isActive ? styles.active : ""}`}>
          <a.span
            style={{ display: "block", scale: hoverPressScale as any }}
            onClick={() => switcher.isOpen && isActive && switcher.close()}
            ref={hoverPressRef}
          >
            {switcher.isOpen ? (
              <Link href={path} passHref={true}>
                <a tabIndex={0}>{name}</a>
              </Link>
            ) : (
              <a tabIndex={0}>{name}</a>
            )}
          </a.span>
        </a.li>
      )}
    </SwitcherContext.Consumer>
  )
}

export default ListElement
