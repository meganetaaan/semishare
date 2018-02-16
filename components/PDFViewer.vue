<template>
  <div class="pdf-viewer">
    pdfpdfpdf
    <!-- <pdf :page="page" :src="src"></pdf> -->
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

<style scoped>
.pdf-viewer {
  width: auto;
  height: 100%;
}
</style>
