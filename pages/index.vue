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
              :date="movie.date"
              :year="yearIndex"
              :month="monthIndex"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MoviePreview from '@/components/MoviePreview'
import MonthTitle from '@/components/MonthTitle'
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
  components: { MoviePreview, MonthTitle },
  methods: {
    _loadData() {
      this.$store.dispatch('loadData')
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
