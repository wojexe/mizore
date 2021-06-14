import useHoverPress from "hooks/animations/useHoverPress"
import { forwardRef } from "react"
import mergeRefs from "react-merge-refs"
import { a } from "@react-spring/web"

const SubmitButton = forwardRef<any, any>(
  ({ children, style, ...props }, forwardedRef) => {
    const [hoverPressRef, hoverPressScale] = useHoverPress({})

    const mergedRef = mergeRefs([hoverPressRef, forwardedRef])

    return (
      <a.button
        ref={mergedRef}
        style={{ scale: hoverPressScale, ...style }}
        {...props}
      >
        {children}
      </a.button>
    )
  }
)

export default SubmitButton
