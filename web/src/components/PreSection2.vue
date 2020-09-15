<template>
    <section class="wrapper">
      <div class="front">
        <div class="SVG_text">

          </div>
          <div class="Text" v-html="result.texts[0]">
          </div>
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
        "lorem ipsum"
      ]
    }
  }),
  methods: {
    async allTexts() {
      await axios.get(`http://localhost:3000/texts/${4}`)
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
    
  .wrapper
    width: 100vw
    height: 25vh
    background-color: #000
    
    .front
      max-width: 1440px
      height: 100%
      margin: 0 auto
      display: flex
      flex-direction: column
      justify-content: center
      align-items: flex-start

      .SVG_text
        background: url(../assets/PreSection2/SVG_Text.svg) left center no-repeat
        width: 100%
        height: 28%
      .Text
        color: white
        font-family: GothamLight
        font-size: 2vh
        padding-left: 4%
  @media screen and ( max-width: 480px )
    .wrapper
      .front
        .SVG_text
          background-size: 100% !important
        .Text
          color: white
          font-family: GothamLight
          font-size: 3vw !important
          padding-left: 4%
</style>