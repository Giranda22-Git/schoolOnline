<template>
        <div class="wrapper-front">
            <div class="front">
                <div class="anime animate__animated animate__bounceInLeft">
                    <div class="SVG_Text"></div>
                    <p>
                        <span class="first"> КУРСТЫҢ БАҒАСЫ </span> <br>
                        <span class="second"> <span class="price"> 14 000 </span> ТЕҢГЕ </span>  <br>
                        <span class="third"> Өз мүмкіндігіңді жіберіп алма! <br></span><span class="third">
                         Курсты дәл қазір сатып ал!</span>
                        
                    </p>
                    <button>
                        <span> ОНЛАЙН ТӨЛЕУ </span>
                    </button>
                </div>
                <div class="pay_block animate__animated animate__bounceInRight">
                    <span class="toley"> каспи төлеу </span>
                    <span class="number">+7077077707</span>
                    <img src="../assets/QR_pay.svg">
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'Kaspi_pay'
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
    .wrapper-front
        width: 100vw
        height: 100vh
        background: url(../assets/section3/firstElement.svg) center no-repeat
        background-size: cover
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
        background-color: rgba(0,0 ,0 ,0.6)
        .anime
            width: 100%
            height: 100%
            .SVG_Text
                margin-top: 10vh
                width: 100%
                height: 32%
                background: url(../assets/section3/secondElement.svg) -10% 45% no-repeat
            p
                color: #FFF
                text-align: left
                .first
                    font-size: 5vh
                    font-family: GothamBold
                .second
                    font-size: 7vh
                    font-family: GothamMedium
                    .price
                        color: rgb(245, 0, 65)
                .third
                    font-family: GothamLight
                    font-size: 2.5vh
            button
                font-family: GothamBold
                font-size: 6vh
                color: white
                background: rgb(245, 0, 65)
                border: none
                padding: 1.5% 2% 1% 2%
                border-radius: 22px
                box-shadow: 0px 0px 23px #FA1452;
                margin-top: 4%
                outline: none
                cursor: pointer
                
                span
                    width: 100%
                    height: auto
        .pay_block
            border: 1px solid #FA1451
            border-radius: 25px
            position: absolute
            background-color: white
            height: 60%
            width: 32.5%
            top: 26.5%
            left: 57%
            display: flex
            align-items: center
            flex-direction: column
            border-bottom: 3px solid red
            .toley
                font-family: GothamLight
                color: #FA1452
                font-size: 3.4vw
                text-align: center
                line-height: 20vh
            .number
                font-family: GothamLight
                color: black
                font-size: 3.4vw
                margin-top: -4vh
            img
                margin-top: 2vh
                height: 45%
    @media screen and ( max-width: 480px )
        .wrapper-front
            height: 85vh !important
            background: url() !important
            background-color: black !important
        .front
            height: 48vh !important
            margin-top: 8vh
            .anime
                .SVG_Text
                    background: url(../assets/section3/secondElement_mobile.svg) !important
                    height: 20vh
                p
                    .first
                        margin-left: 2vh
                        font-size: 3vh
                    .second
                        margin-left: 2vh
                        font-size: 4vh
                    .third
                        padding-left: 2vh
                        font-size: 2vh
                button
                    margin-left: 2vh
                    font-size: 3.5vh !important
        .pay_block
            position: relative !important
            border-radius: 0px !important
            width: 100vw !important
            height: 45vh !important
            left: 0% !important
            border: none !important
            .toley
                line-height: 15vh !important
                font-size: 4vh !important
            .number
                font-size: 3.5vh !important
            img
                height: 55% !important
</style>