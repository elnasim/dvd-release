<template>
  <header class="header">
    <div class="container header-container">
      <nuxt-link to="/" class="header__logo">DVD Release</nuxt-link>
      <nav class="header__nav">
        <nuxt-link to="/" class="header-nav__link">Главная</nuxt-link>
        <nuxt-link to="/about" class="header-nav__link">О сайте</nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss">
.header {
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__logo {
  color: #ffffff;
  text-transform: uppercase;
  font-size: 20px;
}

.header-nav__link {
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  display: inline-block;
  padding: 20px;
  transition: 0.25s;
  &:hover {
    background-color: lighten(#000, 15%);
  }
}
</style>
