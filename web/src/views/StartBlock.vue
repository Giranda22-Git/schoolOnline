<template>
  <div class="wrapper" id="sec1">
    <div class="front">
      <div class="left-content-wrapper animate__animated animate__bounceInLeft">

      </div>
      <div class="right-content-wrapper animate__animated animate__bounceInRight">
        <div class="Comp1"></div>
        <div class="Comp2"></div>
        <div class="Comp3"></div>
        <div class="Comp4"></div>
        <div class="Comp5" v-html="result.texts[0]"></div>
        <a href="#sec7" class="Comp6">ҚАТЫСАМЫН</a>
        <div class="Comp7" v-html="result.texts[1]"></div>
        <div class="Comp8" v-html="result.texts[2]"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'StartBlock',
  data: () => ({
    result: {
      texts: [
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum"
      ]
    }
  }),
  methods: {
    async allTexts() {
      await axios.get(`https://api.udb.kz/texts/${1}`)
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
    font-family: GothamBold
    src: url(../assets/Gotham/GothamBold.ttf)
  @font-face
    font-family: GothamLight
    src: url(../assets/Gotham/GothamLight.ttf)
  .wrapper
    width: 100vw
    height: 100vh
    background-color: #1D1D1D
    .front
      max-width: 1440px
      height: 100%
      margin: 0 auto
      display: flex

      .left-content-wrapper
        width: 40%
        height: 100%
        background: url(../assets/Portret.svg) no-repeat
        background-size: 110%
        background-position-y: 10%
        background-position-x: 140%
      .right-content-wrapper
        width: 60%
        height: 100%
        position: relative
        .Comp1
          width: 60%
          height: 40%
          background: url(../assets/Comp/Comp1.svg) center no-repeat
          position: absolute
          bottom: 14%
          right: 10%
        .Comp2
          width: 60%
          height: 40%
          background: url(../assets/Comp/Comp2.svg) center no-repeat
          position: absolute
          left: -14%
          bottom: 20%
        .Comp3
          width: 60%
          height: 40%
          background: url(../assets/Comp/Comp3.svg) center no-repeat
          position: absolute
          bottom: 50%
          left: 17%
        .Comp4
          width: 100%
          height: 40%
          background: url(../assets/Comp/Comp4.svg) center no-repeat
          position: absolute
          bottom: 39%
          left: 0%
        .Comp5
          width: 100%
          position: absolute
          bottom: 41%
          left: 0
          text-align: center
          font-family: GothamLight
          color: white
          font-size: 3.1vh
          font-weight: 100
        .Comp6
          width: 40%
          height: 7.5%
          border-radius: 22px
          position: absolute
          bottom: 30%
          left: 50%
          transform: translateX(-50%)
          text-align: left
          font-family: GothamBold
          color: white
          font-size: 3.5vh
          display: flex
          justify-content: center
          align-items: center
          background-color: #FA1452
          box-shadow: 0px 0px 23px #FA1452
          cursor: pointer
          text-decoration: none
        .Comp7
          width: 100%
          position: absolute
          font-family: GothamLight
          color: white
          font-size: 3vh
          font-weight: 400
          bottom: 46%
          left: 0
          text-align: center
        .Comp8
          width: 100%
          position: absolute
          font-family: GothamLight
          color: white
          font-size: 3vh
          font-weight: 400
          top: 30%
          left: 0
          text-align: center
  @media screen and ( max-width: 1024px )
    .wrapper
      height: 100vh !important
      .front
        max-width: 1440px
        .left-content-wrapper
          display: none !important
        .right-content-wrapper
          width: 100vw !important
          height: 100% !important
          .Comp1
            background-size: 92.5% !important
          .Comp2
            background-size: 92.5% !important
          .Comp3
            background-size: 92.5% !important
          .Comp4
            height: 40% !important
            background: url(../assets/Comp/Comp4.svg) center no-repeat !important
            background-size: 90% !important
            position: absolute !important
          .Comp5
            font-size: 3vh !important
            font-weight: 1000000 !important
          .Comp6
            font-size: 2.5vh !important
            width: 60% !important
            height: 10% !important
            bottom: 25% !important

</style>