<template>
    <section class="wrapper" id="sec2">
        <div class="front">
            <div class="top-content-wrapper">
                <div class="time day"> <span class="data">14</span><span class="text">күн</span> </div>
                <div class="time hour"> <span class="data">13</span><span class="text">сағат</span> </div>
                <div class="time minute"> <span class="data">06</span><span class="text">минут</span> </div>
                <div class="time second"> <span class="data">54</span><span class="text">секунд</span> </div>
            </div>
            <div class="bottom-content-wrapper">
                <div class="left-content-wrapper animate__animated" id="sec2-left-animate">
                    <div class="SVG_Text">

                    </div>
<div class="text">
    <span class="first"> Төреғали Төреәлі </span> <br>
    <span class="second"> ҰЛЫ ДАЛА БАЛАСЫ </span> <br> <br>
    <div class="third" v-html="result.texts[0]"></div>
</div>
                </div>
                <div class="right-content-wrapper animate__animated" id="sec2-right-animate">
                    <div class="top">

                    </div>
                    <div class="bottom">
                        <div class="void"></div>
                        <video autoplay loop preload src="../assets/section2/Gif.mp4" class="bottom">

                        </video>
                    </div>
                </div>  
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name: 'section2',
    data: () => ({
        result: {
            texts: [
                "lorem ipsum"
            ]
        }
    }),
    methods: {
        async allTexts() {
        await axios.get(`http://localhost:3000/texts/${5}`)
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
        background-color: #000
        .front
            max-width: 1440px
            height: 100%
            margin: 0 auto
            display: flex
            background: #000 url(../assets/section2/bg.svg) no-repeat
            background-size: 100%
            background-position-x: center
            background-position-y: 20%
            box-shadow: inset 0 0 30px 20px black
            padding-top: 4%
            flex-direction: column
            align-items: center
            .top-content-wrapper
                width: 80%
                height: 17%
                color: white
                font-family: GothamBold
                display: flex
                justify-content: space-evenly
                .time
                    display: flex
                    flex-direction: column
                    width: 17vh
                    height: 17vh
                    border-radius: 50%
                    border: 7px solid #FA1452
                    justify-content: center
                    align-items: center
                    font-size: 3vh
                    .data
                        font-weight: 900
                        font-size: 3.5vh
            .bottom-content-wrapper
                height: 83%
                width: 100%
                display: flex
                .left-content-wrapper,
                .right-content-wrapper
                    width: 50%
                    height: 100%
                .right-content-wrapper
                    
                    .top, .bottom
                        width: 100%
                        height: 50%
                    .top
                        background: url(../assets/section2/secondElement.svg) left center no-repeat
                        background-size: 70%
                    .bottom
                        display: flex
                        justify-content: space-around
                        video
                            width: 50%
                            height: 100%
                        .void
                            width: 1%

                .left-content-wrapper
                    
                    display: flex
                    flex-direction: column
                    justify-content: flex-end
                    .SVG_Text
                        background: url(../assets/section2/firstElement.svg) no-repeat
                        background-position-x: 300%
                        background-position-y: center
                        width: 100%
                        height: 15%
                    .text
                        color: white
                        font-size: 1.8vh
                        font-family: GothamLight
                        .first
                            font-size: 2.8vh
                        .second
                            font-size: 3.7vh
                            font-family: GothamBold
    @media screen and ( max-width: 480px )
        .wrapper
            height: 100vh !important
            .top-content-wrapper
                width: 100% !important
                height: 13% !important
                .time
                    width: 10vh !important
                    height: 10vh !important
                    border: 4px solid #FA1452 !important
                    font-size: 1.6vh !important
            .bottom-content-wrapper
                .right-content-wrapper
                    display: none !important
                .left-content-wrapper
                    width: 100% !important
                    padding: 2% !important
                    .SVG_Text
                        margin-left: 5vh !important                        
                        background-size: 100% !important
                    .text
                        font-size: 1.6vh !important
                        line-height: 2.5vh !important
                        .second
                            font-size: 3vh !important
                    .media_del
                        display: none !important

</style>