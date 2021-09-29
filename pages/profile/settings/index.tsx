import type { ReactElement } from "react"

import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import Title from "components/head/title"
import Layout from "components/layouts/layout"

import BaseCard from "components/cards/baseCard"

export default function Settings() {
  const { t } = useTranslation("common")

  return (
    <>
      <Title title={t("pageNames.settings")} />
      <BaseCard title="Settings">
        There will be the user&apos;s Settings Page.
      </BaseCard>
    </>
  )
}

Settings.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "profile"])),
    },
  }
}
