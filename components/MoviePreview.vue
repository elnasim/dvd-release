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
        <div class="movie-preview__date">{{ release }}</div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['title', 'img', 'kinopoisk', 'imdb', 'release', 'year', 'month']
}
</script>

<style lang="scss" scoped>
.col {
  width: 33.33%;
  margin-bottom: 20px;
  @media (max-width: 1199px) {
    width: 50%;
  }
  @media (max-width: 575px) {
    width: 100%;
  }
}

.movie-preview {
  border-radius: 6px;
  overflow: hidden;
  display: block;
  color: #000000;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.75);
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
  @media (max-width: 1199px) {
    height: 500px;
  }
}

.movie-preview__bottom {
  text-align: center;
  font-weight: 500;
}
</style>
