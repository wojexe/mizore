import type { ReactElement } from "react"

import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import Title from "components/head/title"
import Layout from "components/layouts/layout"

import BaseCard from "components/cards/baseCard"

export default function Profile() {
  const { t } = useTranslation("common")

  const router = useRouter()

  let userID = router.query.userID

  return (
    <>
      <Title title={t("pageNames.profileWithUsername", { username: userID })} />
      <BaseCard title="Profile">
        There will be the user&apos;s Profile Page.
      </BaseCard>
    </>
  )
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "profile"])),
    },
  }
}
