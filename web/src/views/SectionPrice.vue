<template>
  <section class="wrapper">
    <div class="front">
      <div class="SVG_Text">

      </div>
      <div class="start_wrapper">
        <div class="column_1">
          <div class="row">
            <div class="left1 left"></div>
            <div class="right">
              <span> 1. Сөз қадірің өз қадірің! </span> <br>
              - Әдебиетке құштарлық – сөздік қор <br>
              - Ораторлық шеберлік <br>
              - Айтыс өнері <br>
              - Аудитория назарын өзіңе аудару
            </div>
          </div>
          <div class="row">
            <div class="left2 left"></div>
            <div class="right">
              <span> 2. Киелі сахна </span> <br>
              - Импровизация <br>
              - Сахна мәдениеті <br>
              - Cахнаға шығу алдындағы дайындық <br>
              - Көрермендермен байланыс орнату
            </div>
          </div>
          <div class="row">
            <div class="left3 left"></div>
            <div class="right">
              <span> 3. Театр, кино! </span> <br>
              - Актер деген кім <br>
              - Образға ену <br>
              - Актерлік шеберліктің пайдасы <br>
              - Актерлік шеберлікті дамыту
            </div>
          </div>
        </div>
        <div class="column_2">
          <div class="row">
            <div class="left4 left"></div>
            <div class="right">
              <span> 4. Әннің де естісі бар есері бар </span> <br>
              - Әннің тәрбиелік мәні, астарлы әндер, әннің мәтіні <br>
              - Хит әннің формуласы <br>
              - 3-4 әннің мәтінін талдау, хитке айналу құпиясын ашу
            </div>
          </div>
          <div class="row">
            <div class="left5 left"></div>
            <div class="right">
              <span> 5. Табыс формуласы </span> <br>
              - Әртіс өміріндегі спорт <br>
              - Рухты көтеру <br>
              - Отбасы <br>
              - Тәлімгер мен шәкірт
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionPrice'
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
            .left
              width: 30%
              height: 100%
            .left1
              background: url(../assets/SectionPrice/icons/one.svg) center no-repeat
            .left2
              background: url(../assets/SectionPrice/icons/two.svg) center no-repeat
            .left3
              background: url(../assets/SectionPrice/icons/three.svg) center no-repeat
            .left4
              background: url(../assets/SectionPrice/icons/four.svg) center no-repeat
            .left5
              background: url(../assets/SectionPrice/icons/five.svg) center no-repeat
            .right
              width: 70%
              height: 50%
              color: white
              font-family: GothamLight
              font-size: 1.6vh

              span
                color: #FA1452
                font-family: GothamBold
                font-size: 1.8vh !important


</style>