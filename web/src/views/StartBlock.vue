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
        <div class="Comp5">Басталуы: 30 қыркүйек</div>
        <div class="Comp6">
          Ұлы дала баласы боламын десең... <br>
          Курсытың өткізілу мерзімі – 30 қыркүйек-17 қазан <br>
          Лекциялардың өткізілуі – 30 қыркүйек – 12 қазан <br>
          Үй тапсырмасы – 13-17 қазан <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StartBlock'
}
</script>

<style lang="sass" scoped>
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
          top: 11%
          left: 17%
        .Comp4
          width: 100%
          height: 40%
          background: url(../assets/Comp/Comp4.svg) center no-repeat
          position: absolute
          top: 20%
          left: 0%
        .Comp5
          width: 100%
          position: absolute
          bottom: 45%
          left: 0
          text-align: center
          font-family: GothamLight
          color: white
          font-size: 3.1vh
          font-weight: 100
        .Comp6
          width: 100%
          position: absolute
          padding-left: 15%
          bottom: 30%
          left: 0
          text-align: left
          font-family: GothamLight
          color: white
          font-size: 2vh
          font-weight: 100
          

        
</style>