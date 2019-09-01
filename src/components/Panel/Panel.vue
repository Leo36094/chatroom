<template>
  <div class="panel">
    <div class="panel-left">
      <Button
        v-for="button in buttonTypes"
        :key="button.id"
        :name="button.name"
        :active="button.active"
        @click.native="handleAnimalType(button)"
      />
    </div>
    <div class="panel-center">
      <h2 class="panel-title">Welcome</h2>
      <p class="panel-description">阿貓阿狗聊天室</p>
      <Animal class="panel-photo" :animalType="currentAnimal" />
      <Input class="panel-input" v-model="nickName" placeholder="輸入暱稱" />
      <Button shape="rounded" name="進入聊天" @click.native="goChat" />
    </div>
    <div class="panel-right">
      <Card
        v-for="card in animals"
        :key="card.order"
        :animalType="card"
        @click.native="changAnimal(card)"
      />
    </div>
  </div>
</template>

<script>
import Animal from '@/components/Animal/Animal'
import Button from '@/components/Button/Button'
import Card from '@/components/Card/Card'
import Input from '@/components/Input/Input'

export default {
  components: {
    Animal,
    Button,
    Card,
    Input
  },
  data: () => ({
    animals: [
      { type: 'dog', order: '1' },
      { type: 'dog', order: '2' },
      { type: 'dog', order: '3' },
      { type: 'dog', order: '4' }
    ],
    buttonTypes: [
      { name: '狗狗', id: '1', active: true },
      { name: '貓貓', id: '2', active: false }
    ],
    currentAnimal: { type: 'dog', order: '1' },
    nickName: ''
  }),
  methods: {
    handleAnimalType (button) {
      this.buttonTypes.forEach(item => (item.active = false))
      button.active = !button.active
      if (button.name === '狗狗') {
        this.animals.forEach(item => (item.type = 'dog'))
      } else this.animals.forEach(item => (item.type = 'cat'))
    },
    changAnimal (card) {
      this.currentAnimal = card
      console.log('this.currentAnimal', this.currentAnimal)
    },
    goChat () {
      if (this.nickName) {
        this.$router.push('/chat')
      } else alert('請輸入暱稱')
    }
  }
}
</script>

<style lang="scss" scoped>
.panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  background: $color-primary-darker;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 21px;
  color: #fff;
  text-align: center;
  min-width: 768px;
  &-title {
    font-size: 46px;
    font-weight: bold;
    margin-bottom: 16px;
  }
  &-description {
    font-size: 24px;
  }
  &-photo {
    margin: 35px 0;
  }
  &-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 150px 0 70px;
  }
  &-input {
    width: 300px;
  }
}
</style>
