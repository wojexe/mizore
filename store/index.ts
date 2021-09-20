import { useLayoutEffect } from "react"

import create, { UseStore } from "zustand"
import createContext from "zustand/context"

import createModalSlice, { ModalSlice } from "./modal"

export type MizoreState = ModalSlice

let store: UseStore<Partial<MizoreState>>

const initialState: Partial<MizoreState> = {}

const zustandContext = createContext<typeof initialState>()

export const Provider = zustandContext.Provider
export const useStore = zustandContext.useStore

export const initializeStore = (preloadedState = {}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return create((set, get) => ({
    ...initialState,
    ...preloadedState,

    ...createModalSlice(set),
  }))
}

export function useCreateStore(initialState) {
  // For SSR & SSG, always use a new store.
  if (typeof window === "undefined") {
    return () => initializeStore(initialState)
  }

  // For CSR, always re-use same store.
  store = store ?? initializeStore(initialState)
  // And if initialState changes, then merge states in the next render cycle.

  // eslint complaining "React Hooks must be called in the exact same order in every component render"
  // is ignorable as this code runs in same order in a given environment
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useLayoutEffect(() => {
    if (initialState && store) {
      store.setState({
        ...store.getState(),
        ...initialState,
      })
    }
  }, [initialState])

  return () => store
}
