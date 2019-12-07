<template>
  <div class="movie-page-wrapper">
    <div class="movie-page" v-if="_movie">
      <div class="container">
        <div class="movie-page__title">{{ _movie.title }}</div>
        <div class="row">
          <div class="col movie-page__col-img">
            <img :src="_movie.img" class="movie-page__img" alt="" />
          </div>
          <div class="col movie-page__col-table">
            <table class="movie-page__table">
              <tr>
                <td>Страна</td>
                <td>{{ _movie.country }}</td>
              </tr>
              <tr>
                <td>Режиссер</td>
                <td>{{ _movie.producer }}</td>
              </tr>
              <tr>
                <td>В ролях</td>
                <td>{{ _movie.starring }}</td>
              </tr>
              <tr>
                <td>Жанр</td>
                <td>{{ _movie.genre }}</td>
              </tr>
              <tr>
                <td>Релиз в России</td>
                <td>{{ _movie.russian_release }}</td>
              </tr>
              <tr>
                <td>Цифровой релиз</td>
                <td>{{ _movie.digital_release }}</td>
              </tr>
              <tr>
                <td>IMDB</td>
                <td>{{ _movie.imdb }}</td>
              </tr>
              <tr>
                <td>Кинопоиск</td>
                <td>{{ _movie.kinopoisk }}</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="movie-page__description">{{ _movie.description }}</div>
        <div class="movie-page__trailer">
          <iframe
            :src="`https://www.youtube.com/embed/${_movie.trailer}`"
            frameborder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <Loading v-if="isLoading" />
    </div>
  </div>
</template>

<script>
import Loading from '@/components/app/Loading'
export default {
  head() {
    return {
      title: `${this._movie.title} - График выхода цифровых релизов`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'График выхода цифровых релизов'
        }
      ]
    }
  },
  components: { Loading },
  data: () => ({
    isLoading: false
  }),
  methods: {
    async _loadData() {
      const title = this.$router.history.current.query.title
      const month = this.$router.history.current.query.month
      const year = this.$router.history.current.query.year
      await this.$store.dispatch('loadMovie', { title, month, year })
      setTimeout(() => {
        this.isLoading = false
      }, 300)
    }
  },
  computed: {
    _movie() {
      if (this.$store.state.pageData) {
        return this.$store.state.pageData
      } else {
        return ''
      }
    }
  },
  created() {
    this._loadData()
  }
}
</script>

<style lang="scss" scoped>
.movie-page-wrapper {
  min-height: 100vh;
}
.movie-page__title {
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  padding: 20px 0 10px;
  border-bottom: 2px solid #000;
  margin-bottom: 40px;
}

.movie-page__col-img {
  width: 40%;
  @media (max-width: 767px) {
    width: 100%;
  }
}

.movie-page__img {
  background-color: #000000;
  object-fit: cover;
  width: 100%;
  display: block;
  height: 500px;
  @media (max-width: 767px) {
    max-width: 400px;
    margin: 0 auto;
  }
}

.movie-page__col-table {
  flex: 1;
}

.movie-page__table {
  width: 100%;
  tr {
    &:nth-child(2n) {
      background-color: rgba(#000, 0.3);
    }
    td {
      padding: 10px;
      &:first-child {
        font-weight: 500;
        width: 160px;
        @media (max-width: 479px) {
          width: 110px;
        }
      }
      &:last-child {
        width: auto;
      }
    }
  }
}

.movie-page__description {
  padding: 30px 0;
  font-size: 18px;
  line-height: 1.6;
}

.movie-page__trailer {
  width: 100%;
  padding-top: 56.25%;
  position: relative;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
