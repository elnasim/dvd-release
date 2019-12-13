<template>
  <div class="main-page">
    <div class="container" v-if="data">
      <div class="row">
        <div class="col main-page__data">
          <div v-for="(month, monthIndex) in data" :key="monthIndex">
            <div class="row">
              <MonthTitle :title="`${monthIndex}`" />
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
                :month="monthIndex"
              />
            </div>
          </div>
        </div>
        <div class="col main-page__sidebar">
          <MovieFilter />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MoviePreview from '@/components/MoviePreview'
import MonthTitle from '@/components/MonthTitle'
import MovieFilter from '@/components/app/MovieFilter'
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
  components: { MoviePreview, MonthTitle, MovieFilter },
  methods: {
    async _loadData() {
      const month = 'december'
      await this.$store.dispatch('loadData', month)
    }
  },
  computed: {
    data() {
      if (this.$store.state.data) {
        return this.$store.state.data
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

<style lang="scss" scoped>
.main-page__data {
  width: 80%;
}

.main-page__sidebar {
  flex: 1;
}
</style>
