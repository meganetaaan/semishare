<template>
  <section class="semi">
    <v-layout row wrap>
      <v-flex sm12 md8>
        <v-card>
          <web-rtc-client :presenter-peer-id="presenterPeerId" :is-presenter="isPresenter"/>
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
  data () {
    return {
      presenterPeerId: '',
      isPresenter: true
    }
  },
  async asyncData () {
    let { data } = await axios.get('/api/semis')
    const isPresenter = data.length === 0
    const presenterPeerId = isPresenter ? '' : data.peerId
    /*
    if (data.length === 0) {
      axios.put('api/smeis', {

      })
    }
    */
    console.debug(data)
    return {
      semi: data[0],
      presenterPeerId,
      isPresenter
    }
  },
  head () {
    return {
      title: 'Semi'
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

