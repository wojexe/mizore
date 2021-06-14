import { a, useTransition } from "@react-spring/web"
import { ReactNode, useCallback, useEffect, useState } from "react"

import { FaTimes } from "react-icons/fa"

import styles from "./globalModal.module.scss"
import useHoverPress from "hooks/animations/useHoverPress"
import FocusTrap from "focus-trap-react"

interface ModalProps {
  children: ReactNode
  isOpen: boolean
  modalTitle: string
  openModal: () => void
  closeModal: () => void
  // eslint-disable-next-line
  handleModal: (title?: string, content?: JSX.Element) => void
}

// TODO: convert modal to use Redux

const GlobalModal = ({
  children,
  isOpen,
  modalTitle,
  closeModal,
}: ModalProps) => {
  const [hoverPressRef, hoverPressScale] = useHoverPress({})

  const [errorMessages, setErrorsMessages] = useState([])

  // useEffect(() => {
  //   setTimeout(
  //     () => setErrorsMessages(["error one", "type error", "u suxk"]),
  //     4000
  //   )
  // }, [])

  // useEffect(() => console.log(errorMessages), [errorMessages])

  const modalEnterLeaveTransitions = useTransition(isOpen, {
    from: { opacity: 0, translateY: 15, display: "absolute" },
    enter: { opacity: 1, translateY: 0 },
    leave: () => async next => {
      await next({ opacity: 0 })
      await next({ display: "none" })
    },
  })

  const errorTransitions = useTransition(errorMessages, {
    from: { opacity: 0, translateY: 15 },
    enter: { opacity: 1, translateY: 0 },
    leave: { opacity: 0 },
  })

  const handleKeyboard = useCallback(
    e => {
      switch (e.key) {
        case "Escape":
          closeModal()
          break
      }
    },
    [closeModal]
  )

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.height = "100vh"
      document.body.style.position = "fixed"
      document.addEventListener("keydown", handleKeyboard)
    } else {
      document.body.style.overflow = "auto"
      document.body.style.height = "auto"
      document.body.style.position = "unset"
      document.removeEventListener("keydown", handleKeyboard)
    }
  }, [isOpen, handleKeyboard])

  return modalEnterLeaveTransitions(
    ({ opacity, translateY, display }, isDisplayed) => {
      return (
        isDisplayed && (
          <FocusTrap>
            <a.div
              className={styles.backdrop}
              style={{ opacity: opacity as any, display: display as any }}
              onClick={() => closeModal()}
            >
              <a.a
                tabIndex={0}
                className={styles.closeButton}
                ref={hoverPressRef}
                style={{ scale: hoverPressScale as any }}
                onClick={() => closeModal()}
                onKeyPress={e => {
                  if (e.key === "Enter" || e.key === "Space Bar") closeModal()
                }}
              >
                <FaTimes />
              </a.a>
              <a.div
                className={styles.modal}
                style={{ translateY: translateY as any }}
                onClick={e => e.stopPropagation()}
              >
                <h1 className={styles.title}>{modalTitle}</h1>
                {children}
              </a.div>
              <a.div
                className={styles.errorBox}
                onClick={e => e.stopPropagation()}
              >
                {errorTransitions(({ opacity, translateY }, item, _t, i) => (
                  <a.span
                    className={styles.errorElement}
                    style={{
                      opacity: opacity as any,
                      translateY: translateY as any,
                    }}
                    key={i}
                  >
                    {item}
                  </a.span>
                ))}
              </a.div>
            </a.div>
          </FocusTrap>
        )
      )
    }
  )
}

export default GlobalModal
