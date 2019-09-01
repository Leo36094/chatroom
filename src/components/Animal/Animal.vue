<template>
  <div class="animal">
    <img
      class="animal-img"
      :src="require(`../../assets/${animalType.type}-${animalType.order}.png`)"
      alt="animal"
    />
  </div>
</template>

<script>
export default {
  props: {
    animalType: {
      type: Object,
      default: () => ({ type: 'dog', order: '1' })
    }
  },
  data: () => ({}),
  computed: {}
}
</script>

<style lang="scss" scoped>
.animal {
  width: 200px;
  height: 330px;
  &-img {
    width: 100%;
  }
}
</style>
