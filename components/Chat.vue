<template>
  <div class="chat">
    <div>
      <chat-comments :items="comments"/>
      <chat-input @submit="onSubmit"/>
    </div>
  </div>
</template>

<script>
import ChatComments from './ChatComments.vue'
import ChatInput from './ChatInput.vue'
export default {
  name: 'Chat',
  components: {ChatComments, ChatInput},
  data () {
    return {
      comments: [{
        id: 'ifh2iuuhfiu',
        timestamp: Date.now(),
        userId: 'saidhfqu2381',
        text: 'hi there'
      }]
    }
  },
  methods: {
    onSubmit (payload) {
      this.comments.push({
        id: 'hoewif;adsfj',
        timestamp: Date.now(),
        user: {
          id: ';aoiwhef;i',
          name: 'Cate'
        },
        text: payload.text
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
