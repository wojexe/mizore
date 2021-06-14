import ListElement from "./listElement/listElement"

const LinksList = ({ links, setCurrentActiveLink }) => {
  const linksMap = links.map(({ name, path, pathname, visible }, index) => {
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
  })

  return linksMap
}

export default LinksList
