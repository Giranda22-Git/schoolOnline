<template>
    <section class="wrapper">
        <div class="front">
          <div class="SVG_text">

          </div>
          <div class="Text">
            -	шығармашылық қабілеттеріңізді шыңдауға мүмкіндік аласыз; <br>
            -	бойыңыздағы дарынды ашып, түрлі образға ене білу қабілетін дамытасыз; <br>
            -	айтыскерлік, әншілік, әртістік және актерлік өнерді ұштастырудың қыр-сырын меңгересіз <br>
          </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'PreSection1'
}
</script>

<style lang="sass" scoped>
  @font-face
    font-family: GothamLight
    src: url(../assets/Gotham/GothamLight.ttf)
  .wrapper
    width: 100vw
    height: 20vh
    background-color: #000
    
    .front
      max-width: 1440px
      height: 100%
      margin: 0 auto
      padding-top: 1.1%

      .SVG_text
        background: url(../assets/PreSection1/H1TEXT.svg) left center no-repeat
        width: 100%
        height: 28%
      .Text
        color: white
        font-family: GothamLight
        font-size: 2vh
        padding-left: 4%
  @media screen and ( max-width: 480px )
    .wrapper
      height: 17.5vh !important
      .front
        .SVG_text
          background-size: 95%
        .Text
          font-size: 3vw !important
</style>