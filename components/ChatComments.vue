<template>
  <div class="chat-comments">
    <ul>
      <li v-for="comment in items" >
        <ChatComment :key="comment.id" :userId="comment.userId" :text="comment.text"/>
      </li>
    </ul>
  </div>
</template>

<script>
import ChatComment from './ChatComment'

export default {
  name: 'ChatComments',
  components: {ChatComment},
  data () {
    return {}
  },
  props: {
    items: {
      type: Array,
      default: () => { return [] }
    }
  },
  mounted () {
    console.log(this.items)
  },
  getters: {
    sortedItems () {
      return this.items.sort((item1, item2) => {
        console.log(item1, item2)
        return item1.timestamp - item2.timestamp
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
