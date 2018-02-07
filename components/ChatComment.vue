<template>
  <div class="chat-comment">
    <span>{{userId}}</span><span>{{text}}</span>
  </div>
</template>

<script>
export default {
  name: 'ChatComment',
  props: ['userId', 'text']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
