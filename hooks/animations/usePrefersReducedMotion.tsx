// Snippet from https://www.joshwcomeau.com/snippets/react-hooks/use-prefers-reduced-motion/

import { useState, useEffect } from "react"

const QUERY = "(prefers-reduced-motion: no-preference)"

const isRenderingOnServer = typeof window === "undefined"

const getInitialState = () => {
  // For our initial server render, we won't know if the user
  // prefers reduced motion, but it doesn't matter. This value
  // will be overwritten on the client, before any animations
  // occur.
  return isRenderingOnServer ? true : !window.matchMedia(QUERY).matches
}

const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] =
    useState(getInitialState)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY)

    const listener = event => {
      setPrefersReducedMotion(!event.matches)
    }

    // mediaqueryList.onchange
    mediaQueryList.addEventListener("change", listener)

    return () => {
      mediaQueryList.removeEventListener("change", listener)
    }
  }, [])

  return prefersReducedMotion
}

export default usePrefersReducedMotion
