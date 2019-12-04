<template>
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
              <td>Год</td>
              <td>2019</td>
            </tr>
            <tr>
              <td>Год</td>
              <td>2019</td>
            </tr>
            <tr>
              <td>Год</td>
              <td>2019</td>
            </tr>
            <tr>
              <td>Год</td>
              <td>2019</td>
            </tr>
            <tr>
              <td>Год</td>
              <td>2019</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="movie-page__description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
        molestias excepturi ipsam temporibus dolores, eum unde iure laborum
        repellendus quaerat voluptatem beatae in quis, amet atque fugit dolor,
        ut dolore. Est, consectetur facere aliquid cum velit quos molestias quo
        maxime! Tenetur cupiditate corrupti incidunt neque facere officia
        numquam ex voluptatibus?
      </div>
      <div class="movie-page__trailer">
        <iframe
          src="https://www.youtube.com/embed/sfukLlXNj24"
          frameborder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    _movie() {
      if (this.$store.state.pageData) {
        return this.$store.state.pageData
      } else {
        return null
      }
    }
  },
  created() {
    const title = this.$router.history.current.query.title
    const month = this.$router.history.current.query.month
    const year = this.$router.history.current.query.year
    this.$store.dispatch('loadMovie', { title, month, year })
  }
}
</script>

<style lang="scss" scoped>
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
}

.movie-page__img {
  background-color: #000000;
  object-fit: cover;
  width: 100%;
  display: block;
  height: 500px;
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
      width: 50%;
      padding: 10px;
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
