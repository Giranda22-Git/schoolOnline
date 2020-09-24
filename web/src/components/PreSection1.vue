<template>
    <section class="wrapper" id="sec3">
        <div class="front">
          <div class="Text animate__animated" id="sec3-animate">
            <div class="title">Курстан не <span> үйренесiң? </span></div>
            <ul>
              <li v-html="result.texts[0]"></li> <br> <br>
              <li v-html="result.texts[1]"></li> <br> <br>
              <li v-html="result.texts[2]"></li> <br> <br>
              <li v-html="result.texts[3]"></li> <br> <br>
              <li v-html="result.texts[4]"></li> <br> <br>
              <li v-html="result.texts[5]"></li> <br> <br>
              <li v-html="result.texts[6]"></li> <br> <br>
              <li v-html="result.texts[7]"></li> <br> <br>
              <li v-html="result.texts[8]"></li> <br> <br>
              <li v-html="result.texts[9]"></li>
            </ul>
          </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PreSection1',
  data: () => ({
    result: {
      texts: [
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
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
      await axios.get(`https://api.udb.kz/texts/${3}`)
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
  .wrapper
    width: 100vw
    height: 100vh
    background: #000 url(../assets/PreSection1/bg.svg) center no-repeat
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
        .title
          font-family: kurut
          color: #FA1451
          font-size: 6vh
          width: 100%
          height: 28%
          padding-bottom: 4%
          span
            letter-spacing: .25vh
        ul
          list-style: none
          padding-left: 2%
          & li
            position: relative
            font-family: GothamLight
            font-size: 2vh

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
      height: 17.5vh !important
      .front
        .SVG_text
          background-size: 95%
        .Text
          font-size: 3vw !important
</style>