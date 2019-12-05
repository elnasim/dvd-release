<template>
  <transition name="fade">
    <div class="loading">Loading...</div>
  </transition>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 22px;
  color: #ffffff;
  letter-spacing: 2px;
  transition: 0.25s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
