import { useState } from "react"
import { useTranslation } from "next-i18next"

import styles from "./sharedStyles.module.scss"

import SubmitButton from "components/form/submitButton/submitButton"

const SignInContent = () => {
  const { t } = useTranslation("common")

  const [username, setUsername] = useState<string | number>("")
  const [email, setEmail] = useState<string | number>("")
  const [password, setPassword] = useState<string | number>("")
  const [secretCode, setSecretCode] = useState<string | number>("")

  // email regex pattern
  // const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i

  return (
    <form
      className={styles.form}
      onSubmit={e => {
        e.preventDefault()
      }}
    >
      <div className={styles.fieldContainer}>
        <label>
          {t("modals.register.content.email")}
          <input
            type="email"
            name="email"
            autoComplete="name"
            inputMode="email"
            autoFocus
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
      </div>

      <div className={styles.fieldContainer}>
        <label>
          {t("modals.register.content.username")}
          <input
            type="text"
            name="username"
            autoComplete="nickname"
            required
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </label>
      </div>

      <div className={styles.fieldContainer}>
        <label>
          {t("modals.register.content.password")}
          <input
            type="password"
            name="password"
            autoComplete="new-password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
      </div>

      <div className={styles.fieldContainer}>
        <label>
          {t("modals.register.content.personalCode")}
          <input
            type="text"
            name="password"
            autoComplete="one-time-code"
            required
            value={secretCode}
            onChange={e => setSecretCode(e.target.value)}
          />
        </label>
      </div>

      <SubmitButton
        className={styles.submitButton}
        type="submit"
        value="sign_up"
      >
        {t("modals.register.content.signUp")}
      </SubmitButton>
    </form>
  )
}

export default SignInContent
