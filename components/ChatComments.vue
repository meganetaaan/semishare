<template>
  <div class="chat-comments">
    <v-list two-line>
      <template v-for="item in items">
        <v-list-tile avatar v-bind:key="item.title" @click="">
          <v-list-tile-avatar>
            <img v-bind:src="item.avatar">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="item.userId"></v-list-tile-title>
            <v-list-tile-sub-title v-html="item.text"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
    <ul>
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
