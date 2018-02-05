<template>
  <section class="semi">
    <web-rtc-client />
  </section>
</template>

<script>
import axios from '~/plugins/axios'
import WebRtcClient from '~/components/WebRtcClient.vue'

export default {
  components: {
    WebRtcClient
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

