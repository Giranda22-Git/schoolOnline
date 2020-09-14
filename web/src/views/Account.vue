<template>
    <div class="wrapper">
        <div class="front">
            <div class="left-content-wrapper animate__animated animate__bounceInLeft">
                <div class="video-wrapper">
                    <video autoplay loop preload src="../assets/section2/Gif.mp4" class="left-video"></video>
                    <video autoplay loop preload src="../assets/section2/Gif.mp4" class="right-video"></video>
                </div>
                <div class="video-link">
                    <ul>
                        <router-link to="/watch">
                            <span>1. Сөз қадірің өз қадірің! </span>
                        </router-link>
                        <router-link to="/watch">
                            <span>2. Киелі сахна</span>
                        </router-link>
                        <router-link to="/watch">
                            <span>3. Театр, кино!</span>
                        </router-link>
                        <router-link to="/watch">
                            <span>4. Әннің де естісі бар есері бар </span>
                        </router-link>
                        <router-link to="/watch">
                            <span>5. Табыс формуласы</span>
                        </router-link>
                    </ul>
                </div>
            </div>
            <div class="right-content-wrapper animate__animated animate__bounceInRight">
                <div class="Comp1"></div>
                <div class="Comp2"></div>
                <div class="Comp3"></div>
                <div class="Comp4"></div>
                <div class="Comp5">Басталуы: 30 қыркүйек</div>
                <button>
                    <router-link to="/kaspi-pay"> ТӨЛЕМГЕ ӨТУ </router-link>
                </button>
                <div class="Comp6"></div>
            </div>
            <modalSettings class="modalSettings" />
        </div>
    </div>
</template>

<script>
import modalSettings from '@/components/modalSettings.vue'
export default {
    name: 'Account',
    components: {
        modalSettings
    }
}
</script>

<style lang="sass" scoped>
    @font-face
        font-family: GothamBold
        src: url(../assets/Gotham/GothamBold.ttf)
    
    @font-face
        font-family: GothamLight
        src: url(../assets/Gotham/GothamLight.ttf)
    
    .wrapper
        width: 100vw
        height: 100vh
        background: #1D1D1D
        .front
            max-width: 1440px
            height: 100%
            margin: 0 auto
            display: flex
            position: relative
            .modalSettings
                position: absolute
                top: 50%
                left: 50%
                transform: translate(-50%, -50%)
                z-index: 50
            .left-content-wrapper
                width: 40%
                height: 100%
                display: flex
                flex-direction: column
                justify-content: space-evenly
                align-items: center
                position: relative
                z-index: 20
                .video-wrapper
                    height: 40%
                    width: 100%
                    display: flex
                    justify-content: center
                    align-items: center
                .video-link
                    height: 40%
                    width: 100%
                    ul
                        display: flex
                        flex-direction: column
                        justify-content: space-evenly
                        align-items: center
                        height: 100%
                        a
                            width: 80%
                            height: 10%
                            border-radius: 15px
                            background-color: #3D3D3D
                            display: flex
                            align-items: center
                            justify-content: center
                            text-decoration: none
                            span
                                color: #FA1452
                                
                                font-family: GothamBold
                                font-size: 2vh
                                display: block


            .right-content-wrapper
                width: 60%
                height: 100%
                position: relative
                z-index: 10
                .Comp1
                    width: 60%
                    height: 40%
                    background: url(../assets/Comp/Comp1.svg) center no-repeat
                    position: absolute
                    bottom: 14%
                    right: 10%
                    z-index: 1
                .Comp2
                    width: 60%
                    height: 40%
                    background: url(../assets/Comp/Comp2.svg) center no-repeat
                    position: absolute
                    left: -14%
                    bottom: 20%
                    z-index: 1
                .Comp3
                    width: 60%
                    height: 40%
                    background: url(../assets/Comp/Comp3.svg) center no-repeat
                    position: absolute
                    top: 11%
                    left: 17%
                    z-index: 1
                .Comp4
                    width: 100%
                    height: 40%
                    background: url(../assets/Comp/Comp4.svg) center no-repeat
                    position: absolute
                    top: 20%
                    left: 0%
                    z-index: 1
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
                    z-index: 1
                .Comp6
                    position: absolute
                    width: 2vw
                    height: 2vw
                    background: url(../assets/settings.svg) center no-repeat
                    top: 11%
                    right: 45%
                    background-size: 90%
                    cursor: pointer
                    transition: .3s
                    &:hover
                        transform: scale(1.2)
                button
                    font-family: GothamBold
                    font-size: 2.5vh
                    color: white
                    background: rgb(245, 0, 65)
                    border: none
                    padding: 1.5% 2% 1% 2%
                    border-radius: 22px
                    box-shadow: 0px 0px 23px #FA1452;
                    margin-top: 6%
                    outline: none
                    cursor: pointer
                    width: 20vw
                    height: 5vh
                    position: absolute
                    right: 0
                    top: 15%
                
                    a
                        text-decoration: none
                        color: white
    
</style>