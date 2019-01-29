<template>
  <div class="works-detail-page">
    <article>
      <div class="head">
        <div>
          <h2 class="title">
            {{ currentWork.title }}
          </h2>
        </div>
        <div>
          <div class="description">{{ currentWork.description }}</div>
          <div class="url">
            <a
              :href="currentWork.url"

            >
              {{ currentWork.url }}
            </a>
          </div>
        </div>
      </div>
      <div class="thumbnail">
        <img
          :alt="currentWork.thumbnail_alt"
          src="/img/philosophy-cover.png"
        >
      </div>
      <div class="contents">
        <div
          v-html="currentWork.contents"
        />
      </div>
    </article>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  layout: 'sub',
  head() {
    return {
      title: this.currentPage.title,
      meta: this.metaData
    }
  },
  async fetch({ app, route, store, params }) {
    let baseUrl = process.server
      ? process.env.apiBaseURLLocal
      : process.env.apiBaseURL
    let { data } = await axios.get(baseUrl + '/api/works/' + params.id)
    await store.dispatch('works/setCurrentWork', data)

    let page = app.getPage('works')
    let currentPage = app.getPage('worksDetail')

    if (data.title) {
      currentPage['title'] = data.title
    }

    let topicPath = [
      {
        url: page.url,
        title: page.title
      },
      {
        url: route.fullPath,
        title: currentPage.title
      }
    ]
    await store.dispatch('setPage', {
      topicPath: topicPath,
      originPage: page,
      currentPage: currentPage
    })
  },
  computed: {
    ...mapState('works', ['currentWork']),
    ...mapState(['currentPage']),
    metaData() {
      let meta = {}

      if (this.currentWork.title) {
        meta = { ...meta, title: this.currentWork.title }
      }

      if (this.currentWork.og_description) {
        meta = { ...meta, description: this.currentWork.og_description }
      }

      if (this.currentWork.image) {
        meta = { ...meta, image: this.currentWork.image }
      }

      return this.$store.app.getMetaData('worksDetail', meta)
    }
  }
}
</script>

<style scoped lang="scss">
.works-detail-page {
  padding: 40px 0px 80px 0px;

  @include mq(md) {
    padding: 90px 0px 140px 0px;
  }

  .head {
    display: flex;
    flex-direction: column;
    padding: 0 20px;

    @include mq(md) {
      padding: 0px 100px;
    }

    @include mq(lg) {
      flex-direction: row;
    }

    > div {
      &:first-child {
        font-family: Noto Sans CJK JP;
        flex-basis: content;
        margin-right: 0px;

        @include mq(lg) {
          margin-right: 50px;
          flex: 1 1 440px;
        }

        .title {
          font-size: 1.8rem;
          font-weight: bold;
          line-height: 42px;

          @include mq(md) {
            font-size: 3rem;
          }
        }
      }

      &:last-child {
        flex-basis: content;
        font-size: 1.1rem;
        font-family: Poppins;
        margin-top: 20px;

        @include mq(lg) {
          margin-top: 0px;
          flex: 1 2 600px;
          font-size: 1.3rem;
        }

        .description {
          font-size: inherit;
          font-family: inherit;
        }

        .url {
          margin-top: 30px;
          font-size: inherit;
          font-family: inherit;

          > a {
            font-size: inherit;
            font-family: inherit;
          }
        }
      }
    }
  }

  .thumbnail {
    margin-top: 50px;

    @include mq(md) {
      margin-top: 100px;
    }

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  .contents {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    padding: 0 20px;

    @include mq(md) {
      margin-top: 100px;
      padding: 0px 100px;
    }

    div {
      max-width: 600px;
    }
  }
}
</style>
