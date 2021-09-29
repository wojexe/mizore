import type { ReactElement } from "react"

import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import Title from "components/head/title"
import Layout from "components/layouts/layout"

import BaseCard from "components/cards/baseCard"

export default function Rankings() {
  const { t } = useTranslation("common")

  return (
    <>
      <Title title={t("pageNames.rankings")} />
      <BaseCard title="Rankings">There will be the Rankings Page.</BaseCard>
    </>
  )
}

Rankings.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "rankings"])),
    },
  }
}
