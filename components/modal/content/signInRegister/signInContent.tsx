import { useState } from "react"
import { useTranslation } from "next-i18next"

import styles from "./sharedStyles.module.scss"

import SubmitButton from "components/form/submitButton/submitButton"
import PasswordInput from "components/form/passwordInput/passwordInput"

const SignInContent = () => {
  const { t } = useTranslation("common")

  const [username, setUsername] = useState<string | number>("")
  const [password, setPassword] = useState<string | number>("")
  const [isRemember, setRemember] = useState<boolean>(false)

  return (
    <form
      className={styles.form}
      onSubmit={e => {
        e.preventDefault()
      }}
    >
      <div className={styles.fieldContainer}>
        <label>
          {t("modals.signIn.content.usernameEmail")}
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
          {t("modals.signIn.content.password")}
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
          {t("modals.signIn.content.rememberMe")}
        </label>
      </div>

      <SubmitButton
        className={styles.submitButton}
        type="submit"
        value="sign_in"
      >
        {t("modals.signIn.content.signIn")}
      </SubmitButton>
    </form>
  )
}

export default SignInContent
