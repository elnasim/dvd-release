<template>
  <header class="header">
    <div class="container">
      <nuxt-link to="/" class="header__logo">DVD Release</nuxt-link>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss">
.header {
  background-color: #000;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header__logo {
  color: #ffffff;
  text-transform: uppercase;
  font-size: 20px;
}
</style>
