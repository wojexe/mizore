import type { ReactElement } from "react"

import Title from "components/head/title"
import Layout from "components/layouts/layout"

// import styles from "./settings.module.scss"

import BaseCard from "components/cards/baseCard"

const Settings = () => {
  return (
    <>
      <Title title={`settings`} />
      <BaseCard title="Settings">
        There will be the user&apos;s Settings Page.
      </BaseCard>
    </>
  )
}

Settings.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Settings
