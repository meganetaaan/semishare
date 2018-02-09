<template>
  <section class="semi">
    <v-layout row wrap>
      <v-flex sm12 md8>
        <v-card>
          <web-rtc-client />
        </v-card>
      </v-flex>
      <v-flex sm12 md4>
        <v-card>
          <chat />
        </v-card>
      </v-flex>
      <v-flex sm12 md6>
        <v-card>
          <deck />
        </v-card>
      </v-flex>
    </v-layout>
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

