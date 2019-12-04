<template>
  <div>
    <div class="app">
      <Header />
      <div class="app-body">
        <nuxt />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '@/components/app/Header'
import Footer from '@/components/app/Footer'
export default {
  components: { Header, Footer }
}
</script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-body {
  flex: 1;
}
</style>
