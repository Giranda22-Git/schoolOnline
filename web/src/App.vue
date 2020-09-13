<template>
  <div id="app">
    <TheHeader />
    <Profile_modal class="prof_modal" />
    <div class="account-fixed"></div>
    <transition name="fade">
      <router-view/>
    </transition>
    <TheFooter />
  </div>
</template>

<script>
import Profile_modal from '@/components/Profile_modal.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
const $ = require( "jquery" )
export default {
  name: 'mainApp',
  data: () => ({
    
  }),
  components: {
    TheHeader,
    TheFooter,
    Profile_modal
  },
  mounted() {
    /*let
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
    });*/
  }
}
</script>

<style lang="sass">
  @import url(../node_modules/animate.css/animate.css)
  *
    box-sizing: border-box !important
  html
    scroll-behavior: smooth
    overflow-x: hidden !important
  body, ul, h1, p
    margin: 0px
    padding: 0px
    list-style-type: none
  body
    background-color: #1D1D1D
  .fade-enter-active, .fade-leave-active
    transition-property: opacity
    transition-duration: .3s

  .fade-enter-active
    transition-delay: .3s

  .fade-enter, .fade-leave-active
    opacity: 0
  .prof_modal
    display: none
</style>
