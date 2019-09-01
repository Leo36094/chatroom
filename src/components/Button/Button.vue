<template>
  <div
    class="button"
    :class="{ 'button--rounded': shape === 'rounded',}"
    :data-is-active="active"
  >{{name}}</div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: () => '狗狗'
    },
    active: {
      type: Boolean,
      default: () => false
    },
    shape: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  padding: 10px;
  min-width: 165px;
  color: $color-hover;
  margin-bottom: 30px;
  border-radius: 9px;
  background-color: $color-primary-dark;
  border: 2px solid #fff;
  font-size: $font-size-md;
  transition: all 0.3s linear;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &[data-is-active='true'] {
    border: 2px solid $color-hover;
  }
  &--rounded {
    border-radius: 30px;
    min-width: 125px;
    background-color: #fff;
  }
}
</style>
