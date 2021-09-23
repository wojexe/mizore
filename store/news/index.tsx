import { SetState } from "zustand"
import { MizoreState } from "store"

import produce from "immer"

export interface NewsItem {
  readonly id: string

  readonly date: string
  readonly title: string

  readonly content?: JSX.Element | string
}

export interface NewsSlice {
  news: {
    readonly items: NewsItem[]

    readonly numberOfPosts: number
    readonly fetchNews: () => void

    readonly openNewsBottomSheet: (id: string) => void
  }
}

const createNewsSlice = (set: SetState<MizoreState>) => ({
  news: {
    numberOfPosts: 0,
    items: [],

    fetchNews: async () => {
      const fetchedNews = [
        {
          id: "uuid1",
          date: "12 APR",
          title: "New beatmap ranking system is online!",
          content: "Hello world!",
        },
        {
          id: "uuid2",
          date: "22 FEB",
          title: "A brand new scoring system is live!",
          content: "Hello world!",
        },
        {
          id: "uuid3",
          date: "18 DEC",
          title: "Get ready for another release from our developers!",
          content: "Hello world!",
        },
        {
          id: "uuid4",
          date: "29 SEPT",
          title: "UNCHO is now up and running! 🚀",
          content: "Hello world!",
        },
        {
          id: "uuid5",
          date: "8 AUG",
          title: "Hello there cutie! 😜",
          content: "Hello world!",
        },
        {
          id: "uuid6",
          date: "4 JUL",
          title: "Starting the developement! 🔥🔥🔥",
          content: "Hello world!",
        },
      ]

      set(
        produce<MizoreState>(({ news }) => {
          news.numberOfPosts = fetchedNews.length
          news.items = fetchedNews
        })
      )
    },

    openNewsBottomSheet: (id: string) => {
      console.log("openNewsBottomSheet(" + id + ")")
    },
  },
})

export default createNewsSlice
