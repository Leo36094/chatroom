<template>
  <div class="card">
    <div class="card-img__container">
      <img
        class="card-img"
        :src="require(`../../assets/${animalType.type}-${animalType.order}.png`)"
        alt="card"
      />
    </div>
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
.card {
  width: 112px;
  height: 143px;
  margin-bottom: 20px;
  border-radius: 9px;
  border: 1px solid #fff;
  background-color: $color-primary-dark;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    border-color: $color-hover;
  }
  &-img {
    width: 100%;
  }
  &-img__container {
    width: 62px;
    height: 103px;
  }
}
</style>
