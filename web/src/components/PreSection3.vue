<template>
  <div class="wrapper" id="sec5">
    <div class="front">
        <div class="Text">
          <div class="title">Курс бонустары</div>
          <div class="inputs-wrapper">
            <div id="block1" class="block"></div>
            <div id="block2" class="block"></div>
            <div id="block3" class="block"></div>
          </div>
          <a href="#sec7" class="button">
            МҮМКІНДІГІҢДІ <br>
ЖІБЕРМЕ
          </a>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import TypeIt from 'typeit'
const $ = require( "jquery" )
export default {
  name: 'PreSection3',
  data: () => ({
    result: {
      texts: [
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum"
      ]
    },
    check: true
  }),
  methods: {
    async allTexts() {
      await axios.get(`https://api.udb.kz/texts/${5}`)
      .then( response => {
        this.result = response.data
        let inputOne = new TypeIt('#block1')

        let sec5 = $('#sec5').offset().top
        window.addEventListener('scroll', () => {
          if (this.check && pageYOffset >= sec5 - ($('#sec5').height() - ($('#sec5').height() / 4))){
            const inputThree = new TypeIt('#block3', {
              strings: this.result.texts[2],
              speed: 50,
              loop: false
            })

            const inputTwo = new TypeIt('#block2', {
              strings: this.result.texts[1],
              speed: 50,
              loop: false,
              afterComplete: async ( step, instance ) => {
                await inputThree.go()
              }
            })

            inputOne = new TypeIt('#block1', {
              strings: this.result.texts[0],
              speed: 50,
              loop: false,
              afterComplete: async ( step, instance) => {
                await inputTwo.go()
              }
            })

            inputOne.go()
            this.check = false
          }
        })
      })
    }
  },
  mounted() {
    this.allTexts()
  }
}
</script>

<style lang="sass" scoped>
  @font-face
    font-family: GothamLight
    src: url(../assets/Gotham/GothamLight.ttf)
      
  @font-face
    font-family: GothamBold
    src: url(../assets/Gotham/GothamBold.ttf)

  @font-face
    font-family: kurut
    src: url(../assets/font/kurut.ttf)
  .wrapper
    width: 100vw
    height: 100vh
    background: #000 url(../assets/PreSection3/bg.svg) center no-repeat
    background-size: cover
    .front
      max-width: 1440px
      height: 100%
      margin: 0 auto
      display: flex
      justify-content: flex-start
      align-items: center
      .Text
        color: white
        padding-left: 4%
        width: 100%
        position: relative
        z-index: 2
        height: 70%
        .title
          font-family: kurut
          color: #FA1451
          font-size: 6vh
          width: 100%
          height: 20%
        .inputs-wrapper
          width: 100%
          height: 35% 
          display: flex
          flex-direction: column
          justify-content: space-evenly
          align-items: flex-start
          .block
            height: 22.5%
            width: 50%
            background-color: #1D1D1D
            font-family: GothamBold
            font-size: 2vh
            border-radius: 25px
            display: flex
            justify-content: center
            align-items: center
        .button
          height: 20%
          width: 40%
          margin: 0 auto
          margin-top: 5%
          display: flex
          justify-content: center
          align-items: center
          text-align: center
          font-family: GothamBold
          font-size: 4vh
          font-weight: 900
          background-color: #FA1452
          border-radius: 22px
          box-shadow: 0px 0px 23px #FA1452
          cursor: pointer
          color: white
          text-decoration: none

</style>