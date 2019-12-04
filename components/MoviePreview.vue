<template>
  <div class="col">
    <nuxt-link
      :to="`movie?title=${title}&year=${year}&month=${month}`"
      class="movie-preview"
    >
      <div class="movie-preview__title">{{ title }}</div>
      <img :src="img" class="movie-preview__img" />
      <div class="movie-preview__bottom">
        <div class="movie-preview__rating">IMDB: {{ imdb }}</div>
        <div class="movie-preview__rating">Кинопоиск: {{ kinopoisk }}</div>
        <div class="movie-preview__date">{{ date }}</div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['title', 'img', 'kinopoisk', 'imdb', 'date', 'year', 'month']
}
</script>

<style lang="scss" scoped>
.col {
  width: 25%;
  margin-bottom: 20px;
}

.movie-preview {
  border-radius: 6px;
  overflow: hidden;
  display: block;
  color: #000000;
}

.movie-preview__title {
  background-color: orangered;
  text-align: center;
  color: #ffffff;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.movie-preview__img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
}

.movie-preview__bottom {
  border-bottom: 2px solid #000;
  border-left: 2px solid #000;
  border-right: 2px solid #000;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  text-align: center;
}
</style>
