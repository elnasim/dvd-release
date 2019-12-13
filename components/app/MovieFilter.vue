<template>
  <div class="movie-filter">
    <div class="movie-filter__title">Месяц</div>
    <nuxt-link to="/page?month=december" class="movie-filter__link">
      Декабрь
    </nuxt-link>
    <nuxt-link to="/page?month=january" class="movie-filter__link">
      Январь
    </nuxt-link>
    <nuxt-link to="/page?month=december" class="movie-filter__link">
      Февраль
    </nuxt-link>
    <nuxt-link to="/page?month=december" class="movie-filter__link">
      Март
    </nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.movie-filter {
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.75);
  padding: 20px;
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 6px;
  margin-top: 40px;
}

.movie-filter__title {
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 5px;
}

.movie-filter__link {
  color: #000000;
  text-decoration: underline;
}
</style>
