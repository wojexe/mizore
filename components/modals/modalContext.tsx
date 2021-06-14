import { createContext } from "react"

import useModal from "./useModal"
import GlobalModal from "./globalModal"

interface IModalContext {
  isModalOpen: boolean
  modalTitle: string
  modalContent: string | JSX.Element
  openModal: () => void
  closeModal: () => void
  // eslint-disable-next-line
  handleModal: (title?: string, content?: JSX.Element) => void
}

const ModalContext = createContext<Partial<IModalContext>>({})
const { Provider } = ModalContext

const ModalProvider = ({ children }) => {
  const {
    isModalOpen,
    modalTitle,
    modalContent,
    openModal,
    closeModal,
    handleModal,
  } = useModal()

  return (
    <Provider
      value={{
        isModalOpen,
        modalTitle,
        modalContent,
        openModal,
        closeModal,
        handleModal,
      }}
    >
      <GlobalModal
        isOpen={isModalOpen}
        modalTitle={modalTitle}
        openModal={openModal}
        closeModal={closeModal}
        handleModal={handleModal}
      >
        {modalContent}
      </GlobalModal>
      {children}
    </Provider>
  )
}

export { ModalContext, ModalProvider }
