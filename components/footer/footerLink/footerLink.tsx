import { FaGithub, FaDiscord, FaDollarSign } from "react-icons/fa"

import { a } from "@react-spring/web"
import useHoverPress from "hooks/animations/useHoverPress"

const FooterLink = ({ link, iconName }) => {
  const availableIcons = {
    github: <FaGithub />,
    discord: <FaDiscord />,
    dollar: <FaDollarSign />,
  }

  const [hoverPressRef, hoverPressScale] = useHoverPress({})

  return (
    <a.a
      href={link}
      target="_blank"
      rel="noopener"
      ref={hoverPressRef}
      style={{ scale: hoverPressScale as any }}
    >
      {availableIcons[iconName]}
    </a.a>
  )
}

export default FooterLink
