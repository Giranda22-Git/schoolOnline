<template>
    <section class="wrapper">
      <div class="front">
        <div class="SVG_text">

          </div>
          <div class="Text">
            + шабыт пен пайдалы тәжірибеге толы 5 лекцияны онлайн көру <br>
            + лекциялар арнайы сілтеме арқылы жабық топта қолжетімді болады <br>
            + үй тапсырмасы беріледі <br>     
            + үй тапсырмасын үздік орындаған студенттер «Ұлы дала баласы» шоуына қатысуға жолдама алады <br> 
            + Үздік 20 студенттің Төреғали Төреәлімен кездесуі өтеді
          </div>
      </div>
    </section>
</template>

<script>
export default {
    name: 'PreSection2'
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