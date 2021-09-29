import { Key } from "react"
import ListElement from "./listElement/listElement"

type Link = {
  name: string
  path: string
  pathname: string
  visible: boolean
}

const LinksList = ({ links, setCurrentActiveLink }) => {
  const linksMap = links.map(
    ({ name, path, pathname, visible }: Link, index: Key) => {
      if (visible) {
        return (
          <ListElement
            key={index}
            index={index}
            name={name}
            path={path}
            pathname={pathname}
            setCurrentActiveLink={setCurrentActiveLink}
          />
        )
      }
    }
  )

  return linksMap
}

export default LinksList
