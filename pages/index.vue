<template>
  <div class="main-page">
    <div class="container" v-if="data">
      <div v-for="(year, yearIndex) in data" :key="yearIndex">
        <div class="row">
          <MonthTitle :title="yearIndex" />
        </div>
        <div v-for="(month, monthIndex) in year" :key="monthIndex">
          <div class="row">
            <MonthTitle :title="monthIndex" />
          </div>
          <div class="row">
            <MoviePreview
              v-for="movie in month"
              :key="movie.title"
              :title="movie.title"
              :img="movie.img"
              :imdb="movie.imdb"
              :kinopoisk="movie.kinopoisk"
              :release="movie.digital_release"
              :year="yearIndex"
              :month="monthIndex"
            />
          </div>
        </div>
      </div>
    </div>
    <Loading v-if="isLoading" />
  </div>
</template>

<script>
import MoviePreview from '@/components/MoviePreview'
import MonthTitle from '@/components/MonthTitle'
import Loading from '@/components/app/Loading'
export default {
  head() {
    return {
      title: 'График выхода цифровых релизов',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'График выхода цифровых релизов'
        }
      ]
    }
  },
  data: () => ({
    isLoading: false
  }),
  components: { MoviePreview, MonthTitle, Loading },
  methods: {
    async _loadData() {
      await this.$store.dispatch('loadData')
      setTimeout(() => {
        this.isLoading = false
      }, 300)
    }
  },
  computed: {
    data() {
      if (this.$store.state.data) {
        return this.$store.state.data.data
      } else {
        return null
      }
    }
  },
  mounted() {
    this._loadData()
  }
}
</script>

<style></style>
