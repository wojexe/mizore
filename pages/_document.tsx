import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#121212" />
          <link rel="canonical" href="https://uncho.top/" />

          <link rel="alternate" hrefLang="en" href="https://uncho.top/" />
          <link rel="alternate" hrefLang="pl" href="https://uncho.top/pl" />
          <link
            rel="alternate"
            hrefLang="x-default"
            href="https://uncho.top/"
          />

          {/* OPENGRAPH */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://uncho.top/" />
          <meta property="og:title" content="uncho" />
          <meta
            property="og:description"
            content="private osu! server done right. start playing right now!"
          />
          <meta property="og:image" content="/open_graph/banner.jpg" />
          <meta
            property="og:image:alt"
            content="uncho! logo with a 'uncho' title besides it on a blue-purple-pink gradient background."
          />

          {/* TWITTER */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:site" content="@wojexe" />
          <meta property="twitter:creator" content="@wojexe" />
          <meta property="twitter:url" content="https://uncho.top/" />
          <meta property="twitter:title" content="uncho" />
          <meta
            property="twitter:description"
            content="private osu! server done right. start playing right now!"
          />

          {/* DISCORD */}
          <meta name="msapplication-config" content="browserconfig.xml" />

          {/* FAVICON */}
          <link rel="icon" href="/favicons/favicon.svg" type="image/svg+xml" />
          <link rel="icon" href="/favicons/favicon.png" type="image/png" />

          {/* FONTS */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Chivo:ital,wght@0,400;0,700;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
