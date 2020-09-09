<template>
    <section class="wrapper" id="sec3">
        <div class="wrapper-front">
            <div class="front">
                <div class="animate__animated" id="sec3-animate">
                    <h1>
                        Курстан не үйренесіз?
                    </h1>
                    <p>
                        Шығармашылық қабілеттеріңізді шыңдауға
                        <br><br>
                        мүмкіндік аласыз;
                        <br><br>
                        Бойыңыздағы дарынды ашып,
                        <br><br>
                        түрлі образға ене білу қабілетін дамытасыз;
                        <br><br>
                        Айтыскерлік, әншілік, әртістік пен актерлік өнерді
                        <br><br>
                        ұштастырудың қыр-сырын меңгересіз.
                    </p>
                </div>
            </div>
            <div class="hover-block">

            </div>
        </div>
    </section>
</template>

<script>
const $ = require( "jquery" )
export default {
    name: 'Section3',
    mounted() {
        $('.hover-block').hover(
            function () {
                $('.wrapper-front').css('opacity', '0.5')
            },
            function () {
                $('.wrapper-front').css('opacity', '0.8')
            },
        )
    }
}
</script>

<style lang="sass" scoped>
    @font-face
        font-family: SuitcaseTypeFoundryAtypRegularVariable
        src: url(../assets/AtypRegularVariable/SuitcaseTypeFoundryAtypRegularVariable.ttf)
    .hover-block
        width: 30vw
        height: 70vh
        position: absolute
        right: 18%
        top: 15%
    .wrapper
        width: 100vw
        height: 100vh
        background: url(../assets/section3/firstElement.svg) center no-repeat
        background-size: cover
        .wrapper-front
            width: 100vw
            height: 100vh
            background-color: black
            opacity: 0.8
            position: relative
            transition: 1s
        .front
            max-width: 1440px
            height: 100%
            margin: 0 auto
            display: flex
            flex-direction: column
            align-items: flex-start
            justify-content: center
            opacity: 1 !important
            h1
                font-family: SuitcaseTypeFoundryAtypRegularVariable
                font-weight: 800
                font-size: 4vh
                color: #FA1451
                padding-left: 5vw
                padding-bottom: 5vh
            p
                font-family: SuitcaseTypeFoundryAtypRegularVariable
                font-weight: 400
                font-size: 2.1vh
                color: #FFF
                text-align: left
                padding-left: 5vw

</style>