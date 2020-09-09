<template>
  <div id="app">
    <TheHeader />
    <div class="account-fixed">
      
    </div>
    <router-view/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
const $ = require( "jquery" )
export default {
  name: 'mainApp',
  data: () => ({

  }),
  components: {
    TheHeader
  },
  mounted() {
    let 
      sec2 = $('#sec2').offset().top,
      sec3 = $('#sec3').offset().top,
      sec4 = $('#sec4').offset().top
    ;
    window.addEventListener('scroll', function() {
      if (pageYOffset >= sec2 - $('#sec2').height()) {
        $('#sec2-left-animate').addClass('animate__backInLeft')
        $('#sec2-right-animate').addClass('animate__backInRight')
      }
      if (pageYOffset >= sec3 - ($('#sec3').height() - ($('#sec3').height() / 3))){
        $('#sec3-animate').addClass('animate__flipInX')
      }
      if (pageYOffset >= sec4 - ($('#sec4').height() - ($('#sec4').height() / 3))){
        $('#sec4-animate').addClass('animate__flipInX')
      }
      
    });
  }
}
</script>

<style lang="sass">
  @import url(../node_modules/animate.css/animate.css)
  *
    box-sizing: border-box !important
  body, ul, h1, p
    margin: 0px
    padding: 0px
    list-style-type: none
</style>
