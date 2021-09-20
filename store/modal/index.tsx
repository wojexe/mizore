import { SetState } from "zustand"
import { MizoreState } from "store"

export interface ModalSlice {
  modal: {
    isOpen: boolean

    title: string
    content: string | JSX.Element

    errors: string[]

    openModal: () => void
    closeModal: () => void

    setTitleContent: (title: string, content: string | JSX.Element) => void
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
    setTitleContent: (title: string, content: string | JSX.Element) =>
      set(({ modal }) => ({
        modal: { ...modal, title: title, content: content },
      })),
    setErrors: (errors: string[]) =>
      set(({ modal }) => ({ modal: { ...modal, errors: errors } })),
  },
})

export default createModalSlice
