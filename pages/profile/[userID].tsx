import type { ReactElement } from "react"

import { useRouter } from "next/router"

import Title from "components/head/title"
import Layout from "components/layouts/layout"

// import styles from "./profilePage.module.scss"

import BaseCard from "components/cards/baseCard"

const Profile = () => {
  const router = useRouter()

  let userID = router.query.userID

  return (
    <>
      <Title title={userID ? `${userID}'s profile` : `profile`} />
      <BaseCard title="Profile">
        There will be the user&apos;s Profile Page.
      </BaseCard>
    </>
  )
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Profile
