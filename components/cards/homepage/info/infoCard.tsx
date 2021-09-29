import { useStore } from "store"
import { ReactNode, useMemo, useState } from "react"
import { useTransition } from "@react-spring/web"
import { useTranslation } from "next-i18next"

import BaseCard from "components/cards/baseCard"
import ShowMore from "components/cards/sugar/showMore/showMore"
import NewsCard from "./newsCard"

import styles from "./infoCard.module.scss"

export default function InfoCard() {
  const {
    items: newsItems,
    numberOfPosts,
    fetchNews,
    openNewsBottomSheet,
  } = useStore(state => state.news)

  const { t } = useTranslation("homepage")

  const [itemsToLoad, setItemsToLoad] = useState(4)

  // Artificial loading of the posts
  useMemo(() => {
    setTimeout(() => {
      fetchNews()
    }, 2000)
  }, [fetchNews])

  let newsToShow: {
    id: string
    date: string
    title: string
    content?: ReactNode
  }[] = useMemo(() => {
    return [
      {
        id: "uuid",
        date: "",
        title: "",
      },
    ]
  }, [])

  // Creation of the news list
  useMemo(() => {
    for (
      let index = 0;
      index < itemsToLoad && index < (numberOfPosts === 0 ? 4 : numberOfPosts);
      index++
    ) {
      let id = null
      let date = null
      let title = null

      if (newsItems[index]) {
        newsToShow[index] = newsItems[index]
      } else {
        newsToShow[index] = {
          id: id,
          date: date,
          title: title,
        }
      }
    }
  }, [itemsToLoad, newsItems, newsToShow, numberOfPosts])

  const newsTransition = useTransition(newsToShow, {
    from: { opacity: 0, translateY: -15 },
    enter: { opacity: 1, translateY: 0 },
    trail: 50,
  })

  return (
    <BaseCard
      title={t("info.title")}
      customPadding={true}
      style={{ paddingBottom: numberOfPosts < itemsToLoad ? "2rem" : null }}
    >
      <div className={styles.newsContainer}>
        {newsTransition(({ opacity, translateY }, { id, date, title }) => (
          <NewsCard
            style={{ opacity: opacity as any, translateY: translateY as any }}
            date={date}
            title={title}
            onClick={() => openNewsBottomSheet(id)}
          />
        ))}
      </div>

      {numberOfPosts < itemsToLoad ? null : (
        <ShowMore onClick={() => setItemsToLoad(itemsToLoad + 4)} />
      )}
    </BaseCard>
  )
}
