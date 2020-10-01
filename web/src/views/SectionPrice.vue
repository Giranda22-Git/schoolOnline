<template>
  <section class="wrapper" id="sec2">
    <div class="front">
      <div class="SVG_Text">

      </div>
      <div class="start_wrapper"> 
        <div class="wrapper-top-content animate__animated" id="sec2-left-animate">
          <div class="wrapper-left-top-content">
            <div class="block-1 block">
              <div class="picture first-picture">

              </div>
              <div class="text">
                <p> 1. ШЕШЕНДІК <br>
        ӨНЕР </p>
              </div>
            </div>
            <div class="block-2 block">
              <div class="picture">

              </div>
              <div class="text">
              <p>  2. КИНО ЖӘНЕ <br>
        ТЕАТР </p>
              </div>
            </div>
          </div>
          <div class="wrapper-right-top-content">
            <div class="block-3 block">
              <div class="picture">

              </div>
              <div class="text">
              <p> 3. ЭСТРАДА </p>
              </div>
            </div>
            <div class="block-4 block">
              <div class="picture">
                <div class="picture-front"></div>
              </div>
              <div class="text">
              <p> 4. КӨРКЕМ <br>
      МІНЕЗ </p>
              </div>
            </div>
            <div class="block-5 block">
              <div class="picture">

              </div>
              <div class="text">
              <p> 5. СПОРТ </p>
              </div>
            </div>
          </div>
        </div>
        <div class="wrapper-bottom-content animate__animated" id="sec2-right-animate">
          <div class="text-block" v-html="result.texts[0]"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SectionPrice',
  data: () => ({
    result: {
      texts: [
        "lorem ipsum",
      ]
    }
  }),
  methods: {
    async allTexts() {
      await axios.get(`https://api.udb.kz/texts/${2}`)
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
    font-family: GothamBold
    src: url(../assets/Gotham/GothamBold.ttf)

  .wrapper
    width: 100vw
    height: 100vh
    background: #1D1D1D url(../assets/SectionPrice/bg.svg) center no-repeat
    background-size: cover
    
    .front
      max-width: 1440px
      height: 100%
      margin: 0 auto
      
      .SVG_Text
        background: url(../assets/SectionPrice/SVG_Text.svg) no-repeat
        background-position-x: left
        background-position-y: 42%
        width: 100%
        height: 20%
      .start_wrapper
        width: 100%
        height: 70%
        & *
          width: 100%
          height: 50%
        .wrapper-bottom-content
          display: flex
          justify-content: center
          align-items: flex-start
          padding-left: 10%
          padding-top: 3%
          .text-block
            font-family: GothamLight
            font-size: 2.5vh
            color: white
        .wrapper-top-content
          display: flex
          justify-content: space-evenly
          align-items: center
          width: 100%
          height: 50%
          .wrapper-left-top-content
            display: flex
            justify-content: flex-end
            align-items: center
            height: 100%
            width: 40%
            .block
              width: 40% 
              height: 60%
              margin-left: 9%
          .wrapper-right-top-content
            width: 60%
            height: 100%
            display: flex
            justify-content: space-evenly !important
            align-items: center
            .block
              width: 26.665% 
              height: 60%
          .block
            width: 15%
            height: 60%
            .picture
              width: 100%
              height: 70%
              background-size: cover !important
            .first-picture
              background-position-x: right !important
            .text
              width: 100%
              height: 30%
              text-align: center
              color: #FA1452
              font-family: GothamBold
              font-size: 1.8vh
              display: flex
              justify-content: center
              align-items: center
              background-color: #000
          .block-1
            .picture
              background: #000 url(../assets/SectionPrice/icons/one.svg) center no-repeat
          .block-2
            .picture
              background: #000 url(../assets/SectionPrice/icons/two.svg) center no-repeat
          .block-3
            .picture
              background: #000 url(../assets/SectionPrice/icons/three.svg) center no-repeat
          .block-4
            .picture
              background: linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(196, 196, 196, 0.2) 0.01%, rgba(255, 255, 255, 0) 103.56%), linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #FFF7F7 0%, #C4C4C4 44.79%), linear-gradient(0deg, #604949, #604949)
              .picture-front
                height: 100%
                width: 100%
                background: url(../assets/SectionPrice/icons/four.svg) center no-repeat
          .block-5
            .picture
              background: #000 url(../assets/SectionPrice/icons/five.svg) center no-repeat
  @media screen and (max-width: 1100px) 
    .wrapper-top-content
      flex-direction: column !important
      height: 58% !important
      .wrapper-left-top-content
        justify-content: space-evenly !important
      .wrapper-left-top-content, .wrapper-right-top-content
        width: 100% !important
        height: 40% !important
        .block
          height: 100% !important
          margin-left: 0 !important
    .wrapper-bottom-content
      padding: 0 !important
    .text-block
      font-size: 2.3vh !important
      width: 90% !important
      height: 100% !important
      margin: 0 auto !important
    .SVG_Text
      background-position-x: 32%  !important
      background-position-y: 45%  !important
      background-size: 124% !important
    .picture
      height: 60% !important
    .text
      font-size: 2vh !important
      height: 40% !important
        

</style>