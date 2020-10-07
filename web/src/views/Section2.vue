<template>
    <section class="wrapper" id="sec6">
        <div class="front">
            <div class="left-content-wrapper animate__animated" id="sec6-animate">
                <div class="SVG_Text">
                    Курс авторы
                </div>
                <div class="text">
                    <span class="first"> Төреғали Төреали </span> <br>
                    <span class="second"> ҰЛЫ ДАЛА БАЛАСЫ </span> <br> <br> <br>
                    <ul>
                        <li v-html="result.texts[0]"></li> <br>
                        <li v-html="result.texts[1]"></li> <br>
                        <li v-html="result.texts[2]"></li> <br>
                        <li v-html="result.texts[3]"></li> <br>
                        <li v-html="result.texts[4]"></li> <br>
                        <li v-html="result.texts[5]"></li> <br>
                        <li v-html="result.texts[6]"></li> <br>
                        <li v-html="result.texts[7]"></li>
                    </ul>
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
            await axios.get(`http://localhost:3000/texts/${6}`)
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
    @font-face
        font-family: kurut
        src: url(../assets/font/kurut.ttf)
    .wrapper
        width: 100vw
        height: 100vh
        background: #000 url(../assets/section2/bg.svg) no-repeat
        background-size: cover
        .front
            max-width: 1440px
            height: 100%
            margin: 0 auto
            display: flex
            justify-content: flex-start
            align-items: center

            .left-content-wrapper
                width: 100%
                height: 65%
                display: flex
                flex-direction: column
                justify-content: space-evenly
                align-items: flex-start
                .SVG_Text
                    width: 100%
                    height: 15%
                    font-family: kurut
                    font-size: 7vh
                    color: #FA1451
                    padding-left: 3%
                .text
                    color: white
                    font-size: 2.5vh
                    font-family: GothamLight
                    width: 100%
                    padding-left: 2%
                    .first
                        font-size: 2.8vh
                    .second
                        font-size: 3.7vh
                        font-family: GothamBold
                    ul
                        list-style: none
                        padding-left: 2%
                        & li
                            position: relative
                            font-family: GothamLight
                            font-size: 2.2vh

                    ul li::before
                        content: "\2022"
                        position: absolute
                        color: #FA1451
                        font-size: 2.8vh
                        font-weight: bold
                        display: inline-block
                        left: -2%
                        top: 50%
                        transform: translateY(-43%)
    @media screen and ( max-width: 1024px )
        .wrapper
            height: 100vh !important
            background-position: center
            .left-content-wrapper
                width: 100% !important
                padding: 2% !important
                .SVG_Text
                    margin-left: 0vh !important                        
                    background-size: 100% !important
                    text-align: center !important
                .text
                    line-height: 2.5vh !important
                    
                    ul li
                        font-size: 2.25vh !important
                    ul li:before
                        left: -5% !important
                    .first
                        text-align: center !important
                        width: 100% !important
                        display: block
                    .second
                        font-size: 3vh !important
                        text-align: center !important
                        width: 100% !important
                        display: block
            

</style>