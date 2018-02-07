<template>
  <div class="chat-input">
    <form @submit.prevent="onSubmit">
      <input v-model="text" placeholder="comment">
      <button @click="onSubmit" >send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ChatInput',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    onSubmit () {
      this.$emit('submit', { text: this.text })
      this.text = ''
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
