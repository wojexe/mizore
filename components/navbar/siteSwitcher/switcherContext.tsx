import { createContext } from "react"

interface ISwitcherContext {
  close: () => void
  isOpen: boolean
}

const SwitcherContext = createContext<Partial<ISwitcherContext>>({})

export default SwitcherContext
