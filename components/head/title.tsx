import Head from "next/head"

export default function Title({ title }: { title: string }) {
  return (
    <Head>
      <title key="title">{`${title} | uncho`}</title>
    </Head>
  )
}
