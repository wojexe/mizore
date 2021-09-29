import { a } from "@react-spring/web"
import useHoverPress from "hooks/animations/useHoverPress"

import { forwardRef, useContext } from "react"
import mergeRefs from "react-merge-refs"
import PopoverContext from "../../popoverContext"

const PopoverListElement = forwardRef<
  HTMLUListElement,
  { name: string; action: () => void; props?: any }
>(({ name, action, ...props }, ref) => {
  const [hoverPressRef, hoverPressScale] = useHoverPress({
    hoverScale: 1.05,
    reduceHoverScale: 1.03,
    pressedScale: 0.95,
    reducePressedScale: 0.97,
  })

  const mergedRefs = mergeRefs([hoverPressRef, ref])

  const { close } = useContext(PopoverContext)

  return (
    <a.li
      tabIndex={1}
      ref={mergedRefs}
      style={{
        cursor: "pointer",
        scale: hoverPressScale as any,
        transformOrigin: "right",
      }}
      onClick={() => {
        action()
        close()
      }}
      onKeyPress={e => {
        if (e.key === "Enter" || e.key === "Space Bar") {
          action()
        }
      }}
      {...props}
    >
      {name}
    </a.li>
  )
})

export default PopoverListElement
