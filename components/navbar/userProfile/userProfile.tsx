import { Popover } from "react-tiny-popover"

import { useState, forwardRef, useEffect, useRef } from "react"

import AnonymousUser from "./anonymousUser/anonymousUser"
import LoggedUser from "./loggedUser/loggedUser"

import PopoverContent from "./popoverContent/popoverContent"

import PopoverContext from "./popoverContext"

const ProperUser = forwardRef<any, any>(({ isLoggedIn, ...props }, ref) => {
  return isLoggedIn ? (
    <LoggedUser forwardRef={ref} {...props} />
  ) : (
    <AnonymousUser forwardRef={ref} {...props} />
  )
})

ProperUser.displayName = "ProperUser"

const UserProfile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [isPopoverOpen, setPopoverOpen] = useState(false)
  const [popoverGoingToClose, setPopoverGoingToClose] = useState(false)

  // lol...
  useEffect(() => {
    if (popoverGoingToClose)
      setTimeout(() => {
        setPopoverOpen(false)
        setPopoverGoingToClose(false)
      }, 500)
  }, [popoverGoingToClose])

  const handlePopoverKeyboard = e => {
    switch (e.key) {
      case "Escape":
        setPopoverGoingToClose(true)
        break
    }
  }

  useEffect(() => {
    if (isPopoverOpen)
      document.addEventListener("keydown", handlePopoverKeyboard)
    else document.removeEventListener("keydown", handlePopoverKeyboard)

    // else
    // return function cleanup() {
    // document.removeEventListener("keydown", handleKeyboard)
    // }
  }, [isPopoverOpen])

  const popoverContentRef = useRef(null)

  return (
    <PopoverContext.Provider
      value={{
        close: () => setPopoverGoingToClose(true),
        isOpen: isPopoverOpen,
        isGoingToClose: popoverGoingToClose,
      }}
    >
      <Popover
        isOpen={isPopoverOpen}
        positions={["bottom"]}
        align={"center"}
        onClickOutside={() => setPopoverGoingToClose(true)}
        boundaryInset={24}
        containerStyle={{ zIndex: "100" }}
        content={
          <PopoverContent ref={popoverContentRef} isLoggedIn={isLoggedIn} />
        }
      >
        <ProperUser
          tabIndex={0}
          isLoggedIn={isLoggedIn}
          onClick={() =>
            isPopoverOpen ? setPopoverGoingToClose(true) : setPopoverOpen(true)
          }
          onKeyDown={e => {
            if (e.key === "Space" || e.key === "Enter")
              isPopoverOpen
                ? setPopoverGoingToClose(true)
                : setPopoverOpen(true)
          }}
        />
      </Popover>
    </PopoverContext.Provider>
  )
}

export default UserProfile
