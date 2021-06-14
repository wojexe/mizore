import type { ReactElement } from "react"

import Title from "components/head/title"
import Layout from "components/layouts/layout"

import BaseCard from "components/cards/baseCard"

// import styles from "./support.module.scss"

const Support = () => {
  return (
    <>
      <Title title="support" />
      <BaseCard title="Support">There will be the Support Page.</BaseCard>
    </>
  )
}

Support.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Support
