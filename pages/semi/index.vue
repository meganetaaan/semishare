<template>
  <section class="semi">
    <web-rtc-client />
    <chat />
    <no-ssr>
      <deck />
    </no-ssr>
  </section>
</template>

<script>
import axios from '~/plugins/axios'
import WebRtcClient from '~/components/WebRtcClient.vue'
import Chat from '~/components/Chat.vue'
import Deck from '~/components/PDFViewer.vue'

export default {
  components: {
    WebRtcClient,
    Chat,
    Deck
  },
  async asyncData () {
    let { data } = await axios.get('/api/users')
    return { users: data }
  },
  head () {
    return {
      title: 'Users'
    }
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>

