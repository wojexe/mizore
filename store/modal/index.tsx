import { SetState } from "zustand"
import { MizoreState } from "store"

import React from "react"

export interface ModalSlice {
  modal: {
    isOpen: boolean

    title: string
    content: React.ReactNode

    errors: string[]

    openModal: () => void
    closeModal: () => void

    setTitleContent: (title: string, content: React.ReactNode) => void
    setErrors: (errors: string[]) => void
  }
}

const createModalSlice = (set: SetState<MizoreState>) => ({
  modal: {
    isOpen: false,
    title: "Hi there!",
    content: <div>You probalby shouldn&apos;t see this...</div>,
    openModal: () =>
      set(({ modal }) => ({ modal: { ...modal, isOpen: true } })),
    closeModal: () =>
      set(({ modal }) => ({ modal: { ...modal, isOpen: false } })),
    setTitleContent: (title: string, content: React.ReactNode) =>
      set(({ modal }) => ({
        modal: { ...modal, title: title, content: content },
      })),
    setErrors: (errors: string[]) =>
      set(({ modal }) => ({ modal: { ...modal, errors: errors } })),
  },
})

export default createModalSlice
