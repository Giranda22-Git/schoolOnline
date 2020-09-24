<template>
  <div id="app">
    <TheHeader :isAutorized="autorized" :autorizedData="autorized_data" />
    <Profile_modal class="prof_modal" />
    <div class="account-fixed"></div>
    <transition name="fade">
      <router-view :autorizedData="autorized_data" @autorization="autorization" @autorized="autorization" />
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
    autorized: false,
    autorized_data: new Object
  }),
  components: {
    TheHeader,
    Profile_modal,
    TheFooter
  },
  mounted() {
    let
      sec2 = $('#sec2').offset().top,
      sec3 = $('#sec3').offset().top,
      sec4 = $('#sec4').offset().top,
      sec5 = $('#sec5').offset().top,
      sec6 = $('#sec6').offset().top,
      sec7 = $('#sec7').offset().top
    ;

    window.addEventListener('scroll', function() {
      if (pageYOffset >= sec2 - $('#sec2').height()) {
        $('#sec2-left-animate').addClass('animate__backInLeft')
        $('#sec2-right-animate').addClass('animate__backInRight')
      }
      if (pageYOffset >= sec3 - ($('#sec3').height() - ($('#sec3').height() / 4))){
        $('#sec3-animate').addClass('animate__jackInTheBox')
      }
      if (pageYOffset >= sec4 - ($('#sec4').height() - ($('#sec4').height() / 4))){
        $('#sec4-animate').addClass('animate__lightSpeedInLeft')
      }
      if (pageYOffset >= sec6 - ($('#sec6').height() - ($('#sec6').height() / 4))){
        $('#sec6-animate').addClass('animate__jackInTheBox')
      }
      if (pageYOffset >= sec7 - ($('#sec7').height() - ($('#sec7').height() / 4))){
        $('#sec7-animate').addClass('animate__jackInTheBox')
      }
    })
    if (localStorage.getItem('autorize-email') != null) {
      const user = {
        firstName: localStorage.getItem('autorize-firstname'),
        lastName: localStorage.getItem('autorize-lastname'),
        patronymic: localStorage.getItem('autorize-patronymic'),
        email: localStorage.getItem('autorize-email'),
        phone: localStorage.getItem('autorize-phone'),
        password: localStorage.getItem('autorize-password'),
        privilege: localStorage.getItem('autorize-privilege')
      }
      this.autorization(user)
    }
    
  },
  methods: {
    autorization(data) {
      this.autorized = true
      this.autorized_data = data
    },
    logOut(){
      this.autorized = false
      for (var data in this.autorized_data) delete this.autorized_data[data]
      localStorage.clear()
    }
  }
}
</script>

<style lang="sass">
  @import url(../node_modules/animate.css/animate.css)
  *
    box-sizing: border-box !important
  html
    scroll-behavior: smooth
  body, ul, h1, p
    margin: 0px
    padding: 0px
    list-style-type: none
  body
    background-color: #1D1D1D
    overflow-x: hidden !important
  .fade-enter-active, .fade-leave-active
    transition-property: opacity
    transition-duration: .3s

  .fade-enter-active
    transition-delay: .3s

  .fade-enter, .fade-leave-active
    opacity: 0
  .prof_modal
    display: none
  .navblock
    position: absolute
</style>
