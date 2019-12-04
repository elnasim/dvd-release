<template>
  <div class="col">
    <div class="month-title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="scss" scoped>
.month-title {
  text-align: center;
  margin: 20px 0;
  border-bottom: 2px solid #000;
  padding-bottom: 4px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
}
</style>
