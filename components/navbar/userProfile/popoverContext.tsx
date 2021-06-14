import { createContext } from "react"

interface IPopoverContext {
  close: () => void
  isOpen: boolean
  isGoingToClose: boolean
}

const PopoverContext = createContext<Partial<IPopoverContext>>({})

export default PopoverContext
