import type { ReactElement } from "react"

import Title from "components/head/title"
import Layout from "components/layouts/layout"

import BaseCard from "components/cards/baseCard"

// import styles from "./rankings.module.scss"

const Rankings = () => {
  return (
    <>
      <Title title="rankings" />
      <BaseCard title="Rankings">There will be the Rankings Page.</BaseCard>
    </>
  )
}

Rankings.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Rankings
