<style lang="scss">
.input {
  width: calc(100% - 20px);
  border: none;
  border-radius: 9px;
  font-size: 14px;
  height: 32px;
  padding: 9px 20px;
  margin-bottom: 20px;
  background-color: $color-primary-light;
  color: $color-primary-darker;

  &:focus,
  &:active {
    outline: none;
  }
}

input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
<template>
  <input
    class="input"
    :value="value"
    @input="$emit('input',$event.target.value)"
    :placeholder="placeholder"
    :type="type"
  />
</template>

<script>
export default {
  components: {},
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>
