import type { ReactElement } from "react"

import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import Title from "components/head/title"
import Layout from "components/layouts/layout"

import BaseCard from "components/cards/baseCard"

export default function Support() {
  const { t } = useTranslation("common")

  return (
    <>
      <Title title={t("support")} />
      <BaseCard title="Support">There will be the Support Page.</BaseCard>
    </>
  )
}

Support.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "support"])),
    },
  }
}
