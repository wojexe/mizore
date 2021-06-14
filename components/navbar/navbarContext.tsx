import { createContext } from "react"

import { RectReadOnly } from "react-use-measure"

interface INavbarContext {
  navMeasure: RectReadOnly
}

const NavbarContext = createContext<Partial<INavbarContext>>({})

export default NavbarContext
