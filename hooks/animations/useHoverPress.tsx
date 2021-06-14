import { useState, useRef, MutableRefObject, useEffect } from "react"
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect"

import { useHover } from "@use-gesture/react"
import { useSpring, config } from "@react-spring/web"

import usePrefersReducedMotion from "hooks/animations/usePrefersReducedMotion"

function useHoverPress({
  baseScale = 1,
  hoverScale = 1.1,
  pressedScale = 0.9,
  springConfig = config.stiff,
}): [MutableRefObject<any>, {}] {
  const ref: MutableRefObject<HTMLElement> = useRef(null)

  const { scale } = useSpring({
    scale: baseScale,
    config: springConfig,
  })

  const prefersReducedMotion = usePrefersReducedMotion()

  const [isPressed, setIsPressed] = useState(false)

  // Hover animation
  useHover(
    ({ hovering }) => {
      hovering
        ? scale.start({ to: prefersReducedMotion ? 1.1 : hoverScale })
        : scale.start({ to: prefersReducedMotion ? 1 : baseScale })
    },
    {
      target: ref,
    }
  )

  // Pressing animation
  useIsomorphicLayoutEffect(() => {
    // console.log("[TRYING] to add pointer to ", ref.current)
    if (ref && ref.current) {
      // console.log("[SUCCESSFUL]")
      ref.current.addEventListener("pointerdown", () => {
        setIsPressed(true)
      })
      ref.current.addEventListener("active", () => {
        setIsPressed(true)
      })
    }
  }, [ref])

  useEffect(() => {
    if (isPressed)
      scale.start({
        to: async next => {
          await next(prefersReducedMotion ? 0.9 : pressedScale)
          setIsPressed(false)
        },
      })
  }, [isPressed])

  return [ref, scale]
}

export default useHoverPress
