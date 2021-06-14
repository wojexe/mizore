import { useState } from "react"
import styles from "./sharedStyles.module.scss"

import SubmitButton from "components/form/submitButton/submitButton"
import PasswordInput from "components/form/passwordInput/passwordInput"

const SignInContent = () => {
  const [username, setUsername] = useState<string | number>("")
  const [password, setPassword] = useState<string | number>("")
  const [isRemember, setRemember] = useState<boolean>(false)

  return (
    <form
      className={styles.form}
      onSubmit={e => {
        e.preventDefault()

        // console.log(username, password, isRemember)
      }}
    >
      <div className={styles.fieldContainer}>
        <label>
          username / email
          <input
            type="text"
            name="username"
            autoComplete="name"
            inputMode="email"
            autoFocus
            required
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </label>
      </div>

      <div className={styles.fieldContainer}>
        <label>
          password
          <PasswordInput
            name="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
      </div>

      <div className={styles.fieldContainer}>
        <label
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: ".5rem",
            cursor: "pointer",
            width: "fit-content",
          }}
        >
          <input
            type="checkbox"
            name="remember_me"
            checked={isRemember}
            onChange={() => setRemember(!isRemember)}
          />
          remember me
        </label>
      </div>

      <SubmitButton
        className={styles.submitButton}
        type="submit"
        value="sign_in"
      >
        Sign in
      </SubmitButton>
    </form>
  )
}

export default SignInContent
