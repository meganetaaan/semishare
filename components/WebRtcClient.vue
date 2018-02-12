<template>
  <div class="web-rtc-client">
    <!-- <span>
      <input v-model="peerId" placeholder="peer id">
      <button @click="onClick">Call</button>
    </span> -->
    <span>id: {{myId}}</span>
    <video v-if="localStream" class="local-video" ref="localVideo" autoplay style=""></video>
    <div v-else class="local-video">no presenter</div>
    <template v-for="s of streams">
      <video class="remote-video" :key="s.id" :ref="s.id" autoplay style=""></video>
    </template>
  </div>
</template>

<script>
import config from '../assets/config'
if (process.browser) {
  var Peer = require('peerjs')
  var peer = new Peer({ key: config.apiKey })
  console.log('peer: ', Peer)
}

export default {
  name: 'WebRtcClient',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      peerId: '',
      myId: '',
      localStream: null,
      streams: []
    }
  },
  props: {
    isPresenter: {
      type: Boolean,
      default: false
    },
    presenterPeerId: {
      tpye: String,
      default: ''
    }
  },
  mounted () {
    if (this.isPresenter) {
      this.startVideoStream()
    }
    peer.on('open', id => {
      this.myId = id
    })
    peer.on('call', call => {
      call.answer(this.localStream)
      this.setupCall(call)
    })
  },
  watch: {
    localStream () {
      this.$nextTick(() => {
        this.$refs.localVideo.srcObject = this.localStream
      })
    },
    streams () {
      this.$nextTick(() => {
        for (let s of this.streams) {
          this.$refs[s.id][0].srcObject = s
        }
      })
    }
  },
  methods: {
    async startVideoStream () {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
      })
      this.localStream = stream
    },
    setupCall (call) {
      const vm = this
      call.on('stream', stream => {
        // add received stream
        vm.streams.push(stream)
      })
      call.on('close', () => {
        // remove closed stream
        const closedStream = this.remoteStream
        const idx = this.streams.indexOf(closedStream)
        vm.streams.splice(idx, 1)
      })
    },
    onClick () {
      this.connect()
    },
    async connect () {
      const peerId = this.peerId
      if (peerId == null) {
        console.warn('peerId is empty')
        return
      }
      const call = peer.call(peerId, this.localStream)
      this.setupCall(call)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.local-video {
  position: relative;
  width: 100%;
  height: auto;
}
.remote-video {
  position: absolute;
  z-index: 1;
  bottom: 30px;
  left: 30px;
  width: 30%;
  height: auto;
}
</style>
