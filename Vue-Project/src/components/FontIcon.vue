<template>
  <i v-if="id" class="iconfont" :class="id"></i>
</template>

<script>
  export default {
    name: "FontIcon",
    props: {
      id: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>

</style>
