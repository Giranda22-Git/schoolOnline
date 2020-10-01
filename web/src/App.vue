<template>
  <div id="app">"
    <TheHeader :isAutorized="autorized" :autorizedData="autorized_data" :currentBlock="currentBlock"/>
    <Profile_modal class="prof_modal" />
    <div class="account-fixed"></div>
    <transition name="fade">
      <router-view :autorizedData="autorized_data" @autorization="autorization" @autorized="autorization" :VideoList="VideoList" />
    </transition>
    <TheFooter />
  </div>
</template>

<script>
import Profile_modal from '@/components/Profile_modal.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import axios from 'axios'
const $ = require( "jquery" )
export default {
  name: 'mainApp',
  data: () => ({
    autorized: false,
    autorized_data: new Object,
    currentBlock: 1,
    VideoList: [],
    VideosData: {}
  }),
  components: {
    TheHeader,
    Profile_modal,
    TheFooter
  },
  mounted() {
    this.VideoListGet()
    let
      sec2 = $('#sec2').offset().top,
      sec3 = $('#sec3').offset().top,
      sec4 = $('#sec4').offset().top,
      sec5 = $('#sec5').offset().top,
      sec6 = $('#sec6').offset().top,
      sec7 = $('#sec7').offset().top
    ;

    window.addEventListener('scroll', function() {
      if (pageYOffset < sec2- $('#sec2').height()) {
        this.currentBlock = 1
      }
      if (pageYOffset >= sec2 - $('#sec2').height()) {
        $('#sec2-left-animate').addClass('animate__backInLeft')
        $('#sec2-right-animate').addClass('animate__backInRight')
        this.currentBlock = 2
      }
      if (pageYOffset >= sec3 - ($('#sec3').height() - ($('#sec3').height() / 4))){
        $('#sec3-animate').addClass('animate__jackInTheBox')
        this.currentBlock = 3
      }
      if (pageYOffset >= sec4 - ($('#sec4').height() - ($('#sec4').height() / 4))){
        $('#sec4-animate').addClass('animate__lightSpeedInLeft')
        this.currentBlock = 4
      }
      if (pageYOffset >= sec5 - ($('#sec5').height() - ($('#sec5').height() / 4))){
        $('#sec4-animate').addClass('animate__lightSpeedInLeft')
        this.currentBlock = 5
      }
      if (pageYOffset >= sec6 - ($('#sec6').height() - ($('#sec6').height() / 4))){
        $('#sec6-animate').addClass('animate__jackInTheBox')
        this.currentBlock = 6
      }
      if (pageYOffset >= sec7 - ($('#sec7').height() - ($('#sec7').height() / 4))){
        $('#sec7-animate').addClass('animate__jackInTheBox')
        this.currentBlock = 7
      }
    })
    if (localStorage.getItem('autorize-phone') != null) {
      
      const user = {
        firstName: localStorage.getItem('autorize-firstName'),
        lastName: localStorage.getItem('autorize-lastName'),
        phone: localStorage.getItem('autorize-phone'),
        privilege: localStorage.getItem('autorize-privilege')
      }
      this.refresh(user.phone)
      this.autorization(user)
    }
    
  },
  methods: {
    async VideoListGet() {
      await axios.get('https://api.udb.kz/Videos')
      .then(response => {
        this.VideoList = response.data
      })
    },
    autorization(data) {
      this.autorized = true
      this.autorized_data = data
    },
    logOut(){
      this.autorized = false
      for (var data in this.autorized_data) delete this.autorized_data[data]
      localStorage.clear()
    },
    async refresh(phone) {
      await axios.get('https://api.udb.kz/users/search/phone/' + phone)
      .then(response => {
        localStorage.setItem('autorize-privilege', response.data.privilege)
        localStorage.setItem('autorize-firstName', response.data.firstName),
        localStorage.setItem('autorize-lastName', response.data.lastName),
        localStorage.setItem('autorize-phone', response.data.phone),
        localStorage.setItem('autorize-password', response.data.password)
        const user = {
          firstName: localStorage.getItem('autorize-firstName'),
          lastName: localStorage.getItem('autorize-lastName'),
          phone: localStorage.getItem('autorize-phone'),
          password: localStorage.getItem('autorize-password'),
          privilege: localStorage.getItem('autorize-privilege')
        }
        this.autorization(user)
      })
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
  ::-webkit-scrollbar 
    width: 3px 
    height: 3px
  ::-webkit-scrollbar-button 
    background-color: #666
  ::-webkit-scrollbar-track
    background-color: rgb(46, 46, 46)
  ::-webkit-scrollbar-track-piece 
    background-color: rgb(46, 46, 46)
  ::-webkit-scrollbar-thumb 
    height: 50px
    background-color: #666
    border-radius: 3px
  ::-webkit-scrollbar-corner 
    background-color: rgb(46, 46, 46)
  ::-webkit-resizer 
    background-color: #666
</style>
