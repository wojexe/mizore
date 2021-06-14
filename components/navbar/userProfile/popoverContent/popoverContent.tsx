import { a, useSpring, config } from "@react-spring/web"
import router from "next/router"

import { useContext, useEffect, useState, useRef, forwardRef } from "react"

import PopoverListElement from "./popoverListElement/popoverListElement"

import PopoverContext from "../popoverContext"

import styles from "./popoverContent.module.scss"

import { ModalContext } from "components/modals/modalContext"
import SignInContent from "./modalContent/signInContent"
import RegisterContent from "./modalContent/registerContent"

const PopoverContent = forwardRef<any, any>(
  ({ isLoggedIn: isSignedIn }, forwardRef) => {
    const { isOpen, isGoingToClose } = useContext(PopoverContext)
    const { openModal, handleModal } = useContext(ModalContext)

    const [isGoingToOpen, setIsGoingToOpen] = useState(false)

    const listRef = useRef(null)

    // Popover animation spring
    const [springStyles, api] = useSpring(() => ({
      opacity: isGoingToOpen ? 1 : 0,
      translateY: isGoingToOpen ? 0 : -15,
      scale: isGoingToOpen ? 1 : 0.85,
      config: config.default,
    }))

    // Timeout for the opening animation to actually perform lol
    useEffect(() => {
      if (isOpen)
        setTimeout(() => {
          setIsGoingToOpen(true)
        }, 50)
    }, [isOpen])

    // Opening animation
    useEffect(() => {
      if (isGoingToOpen) {
        api.start({
          opacity: 1,
          translateY: 0,
          scale: 1,
        })
      }
    }, [isGoingToOpen, api])

    // Closing animation
    useEffect(() => {
      if (isGoingToClose) {
        api.start({
          opacity: 0,
          translateY: -20,
          scale: 0.95,
        })
        setIsGoingToOpen(false)
      }
    }, [isGoingToClose, api])

    const listOptions = {
      signedIn: [
        {
          name: "Settings",
          action: () => {
            router.push("/profile/settings")
          },
        },
        { name: "Sign out", action: () => console.log("Sign out") },
      ],
      anonymous: [
        {
          name: "Sign in",
          action: () => {
            handleModal("Sign In", <SignInContent />)
            openModal()
          },
        },
        {
          name: "Register",
          action: () => {
            handleModal("Register", <RegisterContent />)
            openModal()
          },
        },
      ],
    }

    const renderedList = listOptions[isSignedIn ? "signedIn" : "anonymous"].map(
      ({ name, action }: { name: string; action: () => void }, index) => (
        <PopoverListElement
          ref={listRef}
          key={index}
          name={name}
          action={action}
        />
      )
    )

    // Focus first element when opened
    // @ts-ignore
    // eslint-disable-next-line
    useEffect(() => forwardRef.current.children[0].focus(), [])

    return (
      <a.ul
        ref={forwardRef}
        className={styles.popoverMenu}
        style={springStyles}
      >
        {renderedList}
      </a.ul>
    )
  }
)

PopoverContent.displayName = "PopoverContent"

export default PopoverContent
