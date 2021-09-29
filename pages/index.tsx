import { ReactElement } from "react"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import Title from "components/head/title"
import Layout from "components/layouts/layout"

import UnchoCard from "components/cards/homepage/uncho/unchoCard"
import InfoCard from "components/cards/homepage/info/infoCard"
import TryItOut from "components/cards/homepage/tryItOut"

export default function Page() {
  const { t } = useTranslation("common")

  return (
    <>
      <Title title={t("pageNames.homepage")} />
      <UnchoCard />
      <InfoCard />
      <TryItOut />
    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "homepage"])),
    },
  }
}
