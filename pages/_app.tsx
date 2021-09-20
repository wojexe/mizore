import type { ReactElement, ReactNode } from "react"
import type { NextPage } from "next"
import type { AppProps } from "next/app"

import Head from "next/head"

import { appWithTranslation } from "next-i18next"

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

import "modern-normalize"
import "/styles/globals.scss"

import { useCreateStore, Provider as StoreProvider } from "store"

import GlobalModal from "components/modal/globalModal"

function Mizore({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: ReactNode) => page)

  const createStore = useCreateStore(pageProps.initializeZustandState)

  return (
    <StoreProvider createStore={createStore}>
      <GlobalModal />
      {getLayout(
        <>
          <Head>
            <meta
              name="viewport"
              content="width=device-width,initial-scale=1.0,viewport-fit=cover"
            />
            <title key="title">uncho</title>
            <meta
              key="description"
              name="description"
              content="private osu! server done right. start playing right now!"
            />
          </Head>
          <Component {...pageProps} />
        </>
      )}
    </StoreProvider>
  )
}

// @ts-ignore
export default appWithTranslation(Mizore)
