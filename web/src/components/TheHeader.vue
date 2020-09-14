<template>
    <div class="wrapper">
        <div class="front">
            <div class="left-header-content">
                <div class="mobileMenu">
                    <div class="buble">

                    </div>
                </div>
                <div class="logo"> <router-link to="/"></router-link></div>
                <nav>
                    <ul>
                        <li>
                            <a href="#">ТТТ туралы</a>
                        </li>
                        <li>
                            <a href="#">Не үйренесіз?</a>
                        </li>
                        <li>
                            <a href="#">Ерекшеліктер</a>
                        </li>
                        <li>
                            <a href="#">Бағасы</a>
                        </li>
                        <li>
                            <a href="#">Төлем</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="right-header-content">
                <div class="telegram"></div>
                <div class="instagram"></div>
                <div class="youtube">
                    <div class="account-fixed-register" v-show="!isAutorized">
                        <router-link to="/Register" ></router-link>
                    </div>
                    <router-link to="/Account" class="account-fixed-autorized" v-show="isAutorized">
                        <div class="passed">
                            <div class="autorized" >
                                <div class="username"> {{ autorizedData.lastName }} {{ autorizedData.firstName }} </div>
                                <div class="emailadd"> {{ autorizedData.email }} </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheHeader',
    data: () => ({
        name: localStorage.getItem('autorize-lastname') + ' ' + localStorage.getItem('autorize-firstname'),
        emailadd: localStorage.getItem('autorize-email')
    }),
    props: {
        isAutorized: {
            type: Boolean,
            default: false
        },
        autorizedData: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style lang="sass" scoped>
    @font-face
        font-family: GothamLight
        src: url(../assets/Gotham/GothamLight.ttf)
    @font-face
        font-family: SuitcaseTypeFoundryAtypRegularVariable
        src: url(../assets/AtypRegularVariable/SuitcaseTypeFoundryAtypRegularVariable.ttf)
    .mobileMenu
        width: 55px !important
        height: 100% !important
        margin-left: 5%
        display: flex
        align-items: center
        justify-content: center
        cursor: pointer
        display: none
        z-index: 100
        .buble
            width: 70% !important
            height: 2px !important
            background-color: #FA1451
            position: relative
            z-index: 100
            &:before, &:after
                content: ''
                width: 7.5vw !important
                height: 2px !important
                background-color: #FA1451
                position: absolute
                z-index: 100
            &:before
                top: -500%
            &:after
                bottom: -500%
        

        
    .wrapper
        width: 100vw
        height: 67px
        background-color: #000
        position: fixed
        left: 0
        top: 0
        background-color: #3D3D3D
        z-index: 200

        .front
            max-width: 1440px
            height: 100%
            margin: 0 auto
            color: white
            display: flex
            justify-content: space-between
            align-items: center
            .left-header-content
                width: 70%
                height: 100%
                display: flex
            .right-header-content
                width: 12%
                height: 100%
                display: flex
                justify-content: space-around
                align-items: center
                & *
                    height: 50%
                    width: 20%
                .telegram
                    background: url(../assets/telegram.svg) center no-repeat
                    background-size: cover
                    cursor: pointer
                .instagram
                    background: url(../assets/instagram.svg) center no-repeat
                    background-size: cover
                    cursor: pointer
                .youtube
                    background: url(../assets/youtube.svg) center no-repeat
                    background-size: cover
                    cursor: pointer
                    position: relative
                            
                .account-fixed-register
                    width: 3.8vw
                    height: 3.8vw
                    position: absolute
                    right: 0vw
                    top: 8vh
                    border-radius: 50%
                    border: 1px solid #FFF
                    background: #3D3D3D url(../assets/user1.svg) center no-repeat
                    background-size: 45%
                    animation: radial-pulse 1s infinite;
                    transition: .5s
                    a
                        width: 100%
                        height: 100%
                        display: block

                    &:hover
                        transform: scale(1.15)
                .account-fixed-autorized
                    width: 3.8vw
                    height: 3.8vw
                    position: absolute
                    right: 15vw
                    top: 8vh
                    border-radius: 50%
                    border: 1px solid #FFF
                    background: #3D3D3D url(../assets/user1.svg) center no-repeat
                    background-size: 45%
                    animation: radial-pulse 1s infinite;
                    transition: .5s
                    display: block
                    .passed
                        position: relative
                        width: 100%
                        height: 100%

                        .autorized
                            width: 400%
                            height: 100%
                            display: flex
                            position: absolute
                            right: -400%
                            bottom: 0
                            flex-direction: column
                            justify-content: center
                            align-items: flex-start
                            .username, .emailadd
                                width: 100%
                                height: 50%
                                color: white
                                font-family: GothamLight
                                text-align: left
                                padding-left: 5%
                                line-height: 2.5vh
                                font-size: 1.6vh
                                white-space: nowrap
                            .username
                                text-transform: capitalize
                                font-size: 2.1vh


                    &:hover
                        transform: scale(1.15)
                    



            .logo
                width: 10%
                height: 100%
                background: url(../assets/Comp6_000001.svg) center no-repeat
                cursor: pointer
                a
                    width: 100%
                    height: 100%
                    display: block
            nav
                min-width: 80%
                height: 100%
                display: flex
                align-items: center
                font-size: 1.7vh;
                line-height: 28px;
                color: #FFFFFF;
                
                ul
                    display: flex
                    justify-content: space-evenly
                    width: 100%

                    a
                        color: white
                        text-decoration: none
                        font-size: 1.3em
                        font-family: SuitcaseTypeFoundryAtypRegularVariable
                        position: relative
                        
                        &:before
                            content: ''
                            position: absolute
                            left: 0
                            bottom: 0
                            width: 0%
                            height: 1px
                            background-color: white
                            transition: .5s
                        &:hover:before
                            width: 100%
                        &:hover
                            color: rgb(245, 0, 65)
    @keyframes radial-pulse
        0%
            box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.5)
        100%
            box-shadow: 0 0 0 40px rgba(0, 0, 0, 0)
    @media (max-width: 720px)
        nav
            display: none !important
        .logo
            width: 100% !important
        .telegram,
        .instagram,
        .youtube
            display: none !important
        .left-header-content
            width: 40% !important
        .right-header-content
            display: none !important
        .mobileMenu
            display: flex 

</style>