<template>
  <div class="pdf-viewer">
    <pdf :page="page" :src="src"></pdf>
  </div>
</template>

<script>
export default {
  name: 'PDFViewer',
  data () {
    return {
      src: '/dummydata/example.pdf',
      page: 0
    }
  },
  mounted () {
    this.src = '/dummydata/example.pdf'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pdf-viewer {
  width: 640px;
  height: 480px;
}
</style>
