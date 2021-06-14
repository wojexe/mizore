import type { ReactElement, ReactNode } from "react"
import type { NextPage } from "next"
import type { AppProps } from "next/app"

import Head from "next/head"

import { appWithTranslation } from "next-i18next"

type NextPageWithLayout = NextPage & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

import "modern-normalize"
import "/styles/globals.scss"

import { ModalProvider } from "components/modals/modalContext"

function Mizore({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: ReactNode) => page)

  return (
    <ModalProvider>
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
    </ModalProvider>
  )
}

// @ts-ignore
export default appWithTranslation(Mizore)
