<template>
    <section class="wrapper" id="sec3">
        <div class="wrapper-front">
            <div class="front">
                <div class="anime animate__animated" id="sec3-animate">
                    <div class="SVG_Text"></div>
                    <p>
                        <span class="first"> КУРСТЫҢ БАҒАСЫ </span> <br>
                        <span class="second"> <span class="price"> 14 000 </span> ТЕҢГЕ </span>  <br>
                        <span class="third"> Өз мүмкіндігіңді жіберіп алма! <br></span><span class="third">
                        Курсты дәл қазір сатып ал! </span>
                        
                    </p>
                    <button>
                        <span> ТӨЛЕМГЕ ӨТУ </span>
                    </button>
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
                $('.wrapper-front').css('opacity', '0.6')
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
    
    @font-face
        font-family: GothamBold
        src: url(../assets/Gotham/GothamBold.ttf)
    
    @font-face
        font-family: GothamLight
        src: url(../assets/Gotham/GothamLight.ttf)
    @font-face
        font-family: GothamMedium
        src: url(../assets/Gotham/GothamMedium.ttf)
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
            .anime
                width: 100%
                height: 100%
            .SVG_Text
                width: 100%
                height: 25%
                background: url(../assets/section3/secondElement.svg) -10% 45% no-repeat
            p
                color: #FFF
                text-align: left
                .first
                    font-size: 4vh
                    font-family: GothamBold
                .second
                    font-size: 6vh
                    font-family: GothamMedium
                    .price
                        color: rgb(245, 0, 65)
                .third
                    font-family: GothamLight
                    font-size: 2.2vh
            button
                font-family: GothamBold
                font-size: 6vh
                color: white
                background: rgb(245, 0, 65)
                border: none
                padding: 1.5% 2% 1% 2%
                border-radius: 22px
                box-shadow: 0px 0px 23px #FA1452;
                margin-top: 6%
                
                span
                    width: 100%
                    height: auto
    @media screen and ( max-width: 480px )
        .hover-block
            height: 31.5vh !important
        .wrapper
            height: 40vh !important
        .wrapper-front
            height: 40vh !important
            background-size: 100% !important
            .front
                height: 48vh !important
                .anime
                    margin-top: 4vh
                    .SVG_Text
                        background: url(../assets/section3/secondElement_mobile.svg) !important
                        height: 10vh
                        background-size: 100% !important
                        background-position-y: 28% !important
                    p
                        .first
                            margin-left: 2vh
                            font-size: 3vh
                        .second
                            margin-left: 2vh
                            font-size: 4vh
                        .third
                            padding-left: 2vh
                            font-size: 1.5vh
                    button
                        margin-left: 2vh
                        font-size: 3.2vh !important   
</style>