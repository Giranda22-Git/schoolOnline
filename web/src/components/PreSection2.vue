<template>
    <section class="wrapper" id="sec4">
      <div class="front">
        <div class="Text animate__animated" id="sec4-animate">
          <div class="title">Курс сен үш&#105;н арналган, егер:</div>
          <ul>
            <li v-html="result.texts[0]"></li> <br> <br>
            <li v-html="result.texts[1]"></li> <br> <br>
            <li v-html="result.texts[2]"></li> <br> <br>
            <li v-html="result.texts[3]"></li> <br> <br>
            <li v-html="result.texts[4]"></li> <br> <br>
            <li v-html="result.texts[5]"></li>
          </ul>
        </div>
      </div>
      <div class="bg">
          
      </div>
    </section>
</template>
<script>
import axios from 'axios'
export default {
  name: 'PreSection2',
  data: () => ({
    result: {
      texts: [
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum"
      ]
    }
  }),
  methods: {
    async allTexts() {
      await axios.get(`https://api.udb.kz/texts/${4}`)
      .then( response => {
        this.result = response.data
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
    font-family: kurut
    src: url(../assets/font/kurut.ttf)
  
  .bg
    position: absolute
    right: 5%
    bottom: -5%
    background: url(../assets/PreSection2/bg.svg) center no-repeat
    width: 50% !important
    height: 100% !important
    background-size: 140%
    z-index: 1

  .wrapper
    width: 100vw
    height: 100vh
    position: relative

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
        .title
          font-family: kurut
          color: #FA1451
          font-size: 6vh
          width: 100%
          height: 28%
          padding-bottom: 6%
          span
            letter-spacing: .25vh
        ul
          list-style: none
          padding-left: 2%
          & li
            position: relative
            font-family: GothamLight
            font-size: 2.5vh

        ul li::before
          content: "\2022"
          position: absolute
          color: #FA1451
          font-size: 2.8vh
          font-weight: bold
          display: inline-block
          left: -2%
          top: 50%
          transform: translateY(-43%)
  @media screen and ( max-width: 480px )
    .wrapper
      background: #000
      .bg
        display: none !important
      .front
        .title
          font-size: 4.8vh !important
          padding-bottom: 10% !important
          text-align: center
        .Text
          color: white
          font-family: GothamLight
          padding-left: 4%
        
        ul
          padding-left: 5% !important
        li
          font-size: 2.8vh !important
        ul li::before
          left: -5% !important 
</style>