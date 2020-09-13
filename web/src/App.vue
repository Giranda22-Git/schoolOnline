<template>
  <div id="app">
    <TheHeader :isAutorized="autorized" :autorizedData="autorized_data" />
    <Profile_modal class="prof_modal" />
    <div class="account-fixed"></div>
    <transition name="fade">
      <router-view @autorization="autorization" />
    </transition>
    <TheFooter />
  </div>
</template>

<script>
import Profile_modal from '@/components/Profile_modal.vue'
import TheHeader from '@/components/TheHeader.vue'
const $ = require( "jquery" )
export default {
  name: 'mainApp',
  data: () => ({
    autorized: false,
    autorized_data: new Object
  }),
  components: {
    TheHeader,
    Profile_modal
  },
  mounted() {
    let
      sec2 = $('#sec2').offset().top,
      sec3 = $('#sec3').offset().top,
      secPrice = $('#secPrice').offset().top
    ;
    window.addEventListener('scroll', function() {
      if (pageYOffset >= sec2 - $('#sec2').height()) {
        $('#sec2-left-animate').addClass('animate__backInLeft')
        $('#sec2-right-animate').addClass('animate__backInRight')
      }
      if (pageYOffset >= sec3 - ($('#sec3').height() - ($('#sec3').height() / 3))){
        $('#sec3-animate').addClass('animate__flipInX')
      }
      if (pageYOffset >= secPrice - ($('#secPrice').height() - ($('#secPrice').height() / 4))){
        $('#secPrice-left-animate').addClass('animate__bounceInLeft')
        $('#secPrice-right-animate').addClass('animate__bounceInRight')
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
  body, ul, h1, p
    margin: 0px
    padding: 0px
    list-style-type: none
  body
    background-color: #1D1D1D
    overflow-x: hidden
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
