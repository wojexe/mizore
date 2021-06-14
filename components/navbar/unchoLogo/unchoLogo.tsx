import Link from "next/link"
import { Ref } from "react"

import styles from "./unchoLogo.module.scss"

import { a } from "@react-spring/web"
import useHoverPress from "hooks/animations/useHoverPress"

const UnchoLogo = () => {
  const [ref, hoverPressScale]: [Ref<HTMLImageElement>, any] = useHoverPress({})

  return (
    <Link href="/" passHref>
      <a tabIndex={0}>
        <a.img
          role="presentation"
          src="/images/uncho.svg"
          alt="uncho! logo"
          className={styles.logo}
          ref={ref}
          style={{ scale: hoverPressScale }}
        />
      </a>
    </Link>
  )
}

export default UnchoLogo
