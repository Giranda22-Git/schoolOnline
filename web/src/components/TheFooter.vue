<template>
    <div class="wrapper">
        <div class="front">
            <div class="top-content-wrapper">

            </div>
            <div class="bottom-content-wrapper">
                <div class="block">
                    <a href="#">Ұлы дала баласы боламын десең...</a>
                    <a href="#">КУРС ЕРЕКШЕЛІКТЕРІ</a>
                    <a href="#">КУРС</a>
                </div>
                <div class="block">
                    <a href="#">КУРСТАН НЕ ҮЙРЕНЕТІНІҢІЗ</a>
                    <a href="#">КУРС АВТОРЫ</a>
                    <a href="#"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M8.87173 8.67065C10.0629 8.67065 11.0944 8.24342 11.9372 7.4005C12.78 6.55771 13.2072 5.52651 13.2072 4.33519C13.2072 3.14427 12.78 2.11294 11.9371 1.26988C11.0941 0.427229 10.0628 0 8.87173 0C7.6804 0 6.6492 0.427229 5.80641 1.27001C4.96362 2.1128 4.53625 3.14414 4.53625 4.33519C4.53625 5.52651 4.96362 6.55785 5.80655 7.40064C6.64948 8.24328 7.68082 8.67065 8.87173 8.67065Z" fill="#FA1451"/>
<path d="M16.4577 13.8412C16.4333 13.4905 16.3842 13.1079 16.3118 12.7039C16.2388 12.2968 16.1447 11.912 16.0321 11.5603C15.9158 11.1968 15.7576 10.8378 15.562 10.4938C15.359 10.1368 15.1206 9.82586 14.8531 9.57002C14.5734 9.30237 14.2309 9.08717 13.8348 8.93021C13.4401 8.77406 13.0027 8.69496 12.5349 8.69496C12.3511 8.69496 12.1734 8.77035 11.8302 8.99379C11.619 9.13153 11.3719 9.29083 11.0962 9.46702C10.8604 9.61726 10.541 9.75802 10.1464 9.88546C9.76149 10.01 9.37065 10.0732 8.98489 10.0732C8.59914 10.0732 8.20844 10.01 7.82309 9.88546C7.42896 9.75816 7.10953 9.6174 6.87401 9.46716C6.60086 9.29262 6.35367 9.13331 6.1393 8.99365C5.79652 8.77022 5.61868 8.69482 5.43494 8.69482C4.96692 8.69482 4.52966 8.77406 4.13512 8.93034C3.73933 9.08703 3.3967 9.30223 3.11668 9.57016C2.8493 9.82614 2.61076 10.1369 2.40807 10.4938C2.21265 10.8378 2.05444 11.1967 1.93799 11.5605C1.82552 11.9122 1.73145 12.2968 1.65839 12.7039C1.58601 13.1073 1.53685 13.4901 1.51254 13.8416C1.48865 14.186 1.47656 14.5435 1.47656 14.9045C1.47656 15.8441 1.77525 16.6048 2.36426 17.1658C2.94598 17.7194 3.71571 18.0002 4.65175 18.0002H13.3189C14.2549 18.0002 15.0244 17.7195 15.6062 17.1658C16.1954 16.6052 16.494 15.8444 16.494 14.9044C16.4939 14.5417 16.4817 14.184 16.4577 13.8412Z" fill="#FA1451"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="18" height="18" fill="white"/>
</clipPath>
</defs>
</svg>
кіру</a>
                </div>
                <div class="block">
                    <a href="#">КУРС БАҒДАРЛАМАСЫ:</a>
                    <a href="#">КУРСТЫҢ БАҒАСЫ</a>
                    <div class="divs">
                        <a href="#" class="first"></a>
                        <a href="#" class="second"></a>
                        <a href="#" class="third"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheFooter'

}
</script>

<style lang="sass" scoped>
    @font-face
        font-family: GothamBold
        src: url(../assets/Gotham/GothamBold.ttf)
    
    @font-face
        font-family: GothamLight
        src: url(../assets/Gotham/GothamLight.ttf)
    @font-face
        font-family: GothamMedium
        src: url(../assets/Gotham/GothamMedium.ttf)
    .wrapper
        width: 100vw
        height: 40vh
        background-color: #000
        .front
            max-width: 1440px
            height: 100%
            margin: 0 auto
            display: flex
            flex-direction: column
            justify-content: space-evenly
            .top-content-wrapper
                width: 100%
                height: 15%
                background: url(../assets/footer/logo.svg) center no-repeat
            .bottom-content-wrapper
                width: 100%
                height: 45%
                display: flex
                justify-content: space-evenly
                .block
                    width: 24%
                    color: white
                    display: flex
                    flex-direction: column
                    font-size: 2vh
                    font-family: GothamLight
                    justify-content: space-evenly
                    text-align: center
                
                    a
                        color: white
                        text-decoration: none
                    .first
                        background: url(../assets/footer/first.svg) center no-repeat
                    .second
                        background: url(../assets/footer/second.svg) center no-repeat
                    .third
                        background: url(../assets/footer/third.svg) center no-repeat
                    .divs
                        width: 100%
                        height: 15%
                        display: flex
                        justify-content: center

                    .divs *
                        width: 14%
                        height: 100%

</style>