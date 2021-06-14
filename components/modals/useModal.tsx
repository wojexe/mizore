import { useState } from "react"

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [modalTitle, setModalTitle] = useState<string>("Hi there!")
  const [modalContent, setModalContent] = useState<string | JSX.Element>(
    <div>You probalby shouldn&apos;t see this...</div>
  )

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const changeModalContent = (
    title?: string,
    content?: JSX.Element | string
  ) => {
    setModalTitle(title)
    setModalContent(content)
  }

  // useEffect(() => console.log("modalTitle: ", modalTitle), [modalTitle])
  // useEffect(() => console.log("modalContent: ", modalContent), [modalContent])

  return {
    isModalOpen,
    modalTitle,
    modalContent,
    openModal,
    closeModal,
    handleModal: changeModalContent,
  }
}

export default useModal
