<template>
  <section class="wrapper" id="secPrice">
    <div class="front">
      <div class="SVG_Text">

      </div>
      <div class="start_wrapper">
        <div class="column_1 animate__animated" id="secPrice-left-animate">
          <div class="row">
            <div class="right">
              <span> 1. Сөз қадірің өз қадірің! </span> 
              <div class="right-text" v-html="result.texts[0]"></div>
            </div>
          </div>
          <div class="row">
            <div class="right">
              <span> 2. Киелі сахна </span> 
              <div class="right-text" v-html="result.texts[1]"></div>
            </div>
          </div>
          <div class="row">
            <div class="right">
              <span> 3. Театр, кино! </span>
              <div class="right-text" v-html="result.texts[2]"></div>
            </div>
          </div>
        </div>
        <div class="column_2 animate__animated" id="secPrice-right-animate">
          <div class="row">
            <div class="right">
              <span> 4. Әннің де естісі бар есері бар </span> 
              <div class="right-text" v-html="result.texts[3]"></div>
            </div>
          </div>
          <div class="row">
            <div class="right">
              <span> 5. Табыс формуласы </span>
              <div class="right-text" v-html="result.texts[4]"></div>
            </div>
          </div>
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
        display: flex
        padding-top: 5%
        .column_1, .column_2
          width: 50%
          height: 100%
          .row
            width: 100%
            height: 25%
            display: flex
            justify-content: center
            align-items: center
            .right
              width: 85%
              height: 50%
              color: white
              font-family: GothamLight
              font-size: 2vh

              span
                color: #FA1452
                font-family: GothamBold
                font-size: 2.3vh !important
  @media screen and ( max-width: 480px )
    .wrapper
      .front
        padding: 2.5% !important
        .SVG_Text
          background-position-y: 45% !important
          background-size: 100% !important
          height: 9%
        .start_wrapper
          width: 100%
          height: 100%
          display: block !important
          .column_1, .column_2
            height: auto
            width: 100%
            .row
              width: 100%
              height: 18vh
              display: flex
              justify-content: center
              align-items: center
              .left
                display: none !important
              .left1
                display: none !important
              .left2
                display: none !important
              .left3
                display: none !important
              .left4
                display: none !important
              .left5
                display: none !important
              .right
                width: 100vw
                height: 14vh !important
                color: white
                font-family: GothamLight
                font-size: 2vh

                span
                  color: #FA1452
                  font-family: GothamBold
                  font-size: 1.8vh !important

</style>