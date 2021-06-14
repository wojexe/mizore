import { ReactElement } from "react"

import Title from "components/head/title"
import Layout from "components/layouts/layout"

import UnchoCard from "components/cards/homepage/uncho/unchoCard"
import InfoCard from "components/cards/homepage/info/infoCard"
import BeatmapsCard from "components/cards/homepage/beatmaps/beatmapsCard"

export default function Page() {
  return (
    <>
      <Title title="homepage" />
      <UnchoCard />
      <InfoCard />
      <BeatmapsCard />
    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
