<template>
  <base-card title="Info" class="show-more">
    <div class="news-table">
      <table>
        <tbody>
          <tr v-for="item in news" :key="item.key">
            <td>
              <a>
                <span>{{ item.date }}</span>
                {{ item.title }}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <BaseButton label="Download switcher" />
    <BaseShowMore @click="requestData" />
  </base-card>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
import BaseShowMore from "@/components/BaseShowMore.vue";
export default {
  name: "Info",
  components: {
    BaseButton: BaseButton,
    BaseShowMore: BaseShowMore
  },
  data() {
    return {
      news: [
        {
          key: "1",
          date: "12 APR",
          title: "New beatmap ranking system is online!"
        },
        {
          key: "2",
          date: "12 FEB",
          title: "A brand new scoring system is live!"
        },
        {
          key: "3",
          date: "12 DEC",
          title: "Get ready for another release from our developers!"
        },
        {
          key: "4",
          date: "12 SEPT",
          title: "UNCHO is now up and running! HYPE UP!"
        }
      ]
    };
  },
  methods: {
    requestData() {
      return "";
    }
  }
};
</script>

<style scoped lang="less">
.base-card {
  align-items: center;
  & > * {
    margin: 0.6em 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .news-table {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    border-radius: 20px;
    font-size: 1.1em;
    overflow-y: hidden;
    overflow-x: auto;
    background: rgb(var(--inner-background-color));
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    table {
      height: 100%;
      width: 100%;
      padding: 1.2em 1.4em;
      tr {
        td {
          position: relative;
          a {
            cursor: pointer;
            span {
              position: absolute;
              color: #222222;
              background-color: #d0d0d0;
              border-radius: 50px;
              padding: 0.05em 0.5em;
              bottom: 1.4rem;
              left: 0;
              font-size: 0.6em;
              font-weight: 700;
            }
          }
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis; // This for some reason doesn't work
          padding: 1.25em 0 0.2em 0;
          border-bottom: solid 1px #d0d0d0;
        }
      }
    }
  }
  .styled-button {
    padding: 0.6em 1em;
    font-style: italic;
  }
}
</style>
