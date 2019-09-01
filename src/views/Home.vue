<template>
  <div class="home">
    <Panel />
  </div>
</template>

<script>
// @ is an alias to /src
import Panel from '@/components/Panel/Panel'
export default {
  name: 'home',
  components: { Panel }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $color-primary;
  height: 100vh;
  width: 100%;
}
</style>
