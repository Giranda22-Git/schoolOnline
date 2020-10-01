<template>
    <div class="wrapper">
        <div class="front">
            <div class="left-header-content">
                <div class="nav_button">
                    <div class="nav_click" @click="nav_open">
                        <span> {{ this.currentBlock }} </span>
                    </div>
                    <nav class="menu">
                        <a href="#sec1">1</a>
                        <a href="#sec2">2</a>
                        <a href="#sec3">3</a>
                        <a href="#sec4">4</a>
                        <a href="#sec5">5</a>
                        <a href="#sec6">6</a>
                        <a href="#sec7">
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.9099 0L0 21.9099L13.0901 35L35 13.0901L21.9099 0ZM16.0741 28.3235C14.4287 26.6782 11.7514 26.6781 10.106 28.3235L9.70889 28.7207L6.27937 25.2912L6.67659 24.894C8.32192 23.2486 8.32192 20.5713 6.67659 18.9259L6.27937 18.5288L18.5288 6.27937L18.9259 6.67659C19.7487 7.49925 20.8293 7.91055 21.91 7.91055C22.9906 7.91055 24.0714 7.49925 24.8941 6.67659L25.2912 6.27937L28.7208 9.70889L28.3235 10.106C26.6782 11.7514 26.6782 14.4287 28.3235 16.0741L28.7208 16.4713L16.4713 28.7207L16.0741 28.3235ZM29.7725 14.6251C28.9262 13.7786 28.9262 12.4015 29.7725 11.5551L30.1698 11.158L32.1019 13.0901L30.1698 15.0223L29.7725 14.6251ZM23.8421 4.8303L23.445 5.22752C22.5984 6.07382 21.2213 6.07389 20.375 5.22752L19.9779 4.8303L21.91 2.89814L23.8421 4.8303ZM4.8303 19.9778L5.22752 20.3749C6.07389 21.2214 6.07389 22.5985 5.22752 23.4449L4.8303 23.842L2.89814 21.9099L4.8303 19.9778ZM11.1579 30.1697L11.555 29.7725C12.4015 28.9261 13.7786 28.926 14.625 29.7725L15.0221 30.1697L13.09 32.1019L11.1579 30.1697Z" fill="white"/>
<path d="M13.8529 13.8531C11.842 15.8641 11.842 19.136 13.8529 21.1469C14.8583 22.1523 16.179 22.6549 17.4998 22.6549C18.8205 22.6549 20.1412 22.1523 21.1466 21.1469C23.1575 19.1359 23.1575 15.864 21.1466 13.8531C19.1357 11.8422 15.8637 11.8422 13.8529 13.8531ZM19.6975 19.6978C18.4857 20.9095 16.5138 20.9095 15.3019 19.6978C14.0901 18.486 14.0901 16.514 15.3019 15.3021C15.9078 14.6962 16.7037 14.3933 17.4997 14.3933C18.2956 14.3933 19.0916 14.6962 19.6975 15.3021C20.9093 16.514 20.9093 18.486 19.6975 19.6978Z" fill="white"/>
<path d="M10.1641 23.3819L11.6129 21.9331L13.0618 23.3819L11.6129 24.8308L10.1641 23.3819Z" fill="white"/>
<path d="M21.9307 11.6181L23.3795 10.1692L24.8284 11.6181L23.3795 13.0669L21.9307 11.6181Z" fill="white"/>
</svg>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=+77771456152">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.3377 4.65039C24.3295 1.65313 20.3289 0.00175781 16.0669 0C7.28466 0 0.13718 7.11309 0.133647 15.8557C0.13247 18.6504 0.866058 21.3785 2.26043 23.7832L0 32L8.44647 29.7949C10.7738 31.0584 13.394 31.7242 16.0604 31.725H16.0671C24.8484 31.725 31.9967 24.6113 32 15.8684C32.0018 11.6313 30.346 7.64746 27.3377 4.65039ZM16.0669 29.0471H16.0614C13.6852 29.0461 11.3547 28.4105 9.32117 27.21L8.8378 26.9242L3.82553 28.2328L5.16338 23.3693L4.8484 22.8707C3.52272 20.7723 2.82269 18.3469 2.82386 15.8566C2.82661 8.59004 8.76754 2.67813 16.0722 2.67813C19.6095 2.6793 22.9346 4.05195 25.4348 6.54316C27.935 9.03438 29.3112 12.3457 29.31 15.8674C29.3068 23.1346 23.3663 29.0471 16.0669 29.0471ZM23.331 19.1762C22.933 18.9777 20.9756 18.0195 20.6105 17.8871C20.2459 17.7549 19.9802 17.6891 19.715 18.0855C19.4495 18.482 18.6867 19.3746 18.4543 19.6389C18.222 19.9033 17.99 19.9365 17.5918 19.7381C17.1936 19.5398 15.9109 19.1213 14.3901 17.7715C13.2068 16.7209 12.4078 15.4234 12.1754 15.027C11.9435 14.6301 12.1735 14.4363 12.3501 14.2184C12.7811 13.6857 13.2126 13.1273 13.3453 12.8631C13.4782 12.5986 13.4116 12.3672 13.3119 12.1689C13.2126 11.9707 12.4164 10.0205 12.0848 9.22695C11.7614 8.45469 11.4334 8.55898 11.1889 8.54688C10.9569 8.53535 10.6914 8.53301 10.4259 8.53301C10.1605 8.53301 9.72917 8.63203 9.36415 9.02891C8.99931 9.42559 7.97095 10.384 7.97095 12.3342C7.97095 14.2844 9.39751 16.1684 9.59651 16.4328C9.79551 16.6973 12.4039 20.6992 16.3974 22.4152C17.3473 22.8238 18.0887 23.0674 18.6671 23.25C19.6208 23.5516 20.4885 23.509 21.1746 23.407C21.9396 23.2932 23.5298 22.4484 23.8618 21.523C24.1935 20.5975 24.1935 19.8043 24.0938 19.6389C23.9945 19.4736 23.729 19.3746 23.331 19.1762Z" fill="#FA1451"/>
</svg>

                        </a>
                    </nav>
                </div>
                
                <div class="logo"> <router-link to="/"></router-link></div>
                <div class="logo-1"> <router-link to="/"></router-link></div>
                <div class="logo-2"> <router-link to="/"></router-link></div>
            </div>
            <div class="center-header-content">
                <div class="logo"> <router-link to="/"></router-link></div>
                <div class="logo-1"> <router-link to="/"></router-link></div>
                <div class="logo-2"> <router-link to="/"></router-link></div>
                <nav>
                    <ul>
                        <li>
                            <a href="#sec2">Бағдарлама</a>
                        </li>
                        <li>
                            <a href="#sec3">Не үйренесің?</a>
                        </li>
                        <li>
                            <a href="#sec4">Курс сен үшін</a>
                        </li>
                        <li>
                            <a href="#sec5">Бонустар</a>
                        </li>
                        <li>
                            <a href="#sec6">Курс авторы</a>
                        </li>
                        <li>
                            <a href="#sec7">Төлем</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="right-header-content">
                <div class="mobile-account">
                    <router-link to="/Register" v-show="!isAutorized"></router-link>
                    <router-link to="/Account" v-show="isAutorized"></router-link>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M15.3133 15.8983C17.3649 15.8983 19.1413 15.1625 20.5927 13.7108C22.0442 12.2594 22.7799 10.4834 22.7799 8.43168C22.7799 6.38066 22.0442 4.60447 20.5926 3.15252C19.1408 1.7013 17.3645 0.965515 15.3133 0.965515C13.2616 0.965515 11.4856 1.7013 10.0342 3.15277C8.5827 4.60423 7.84668 6.38042 7.84668 8.43168C7.84668 10.4834 8.5827 12.2596 10.0344 13.7111C11.4861 15.1623 13.2623 15.8983 15.3133 15.8983Z" fill="#FA1451"/>
<path d="M28.3784 24.803C28.3366 24.1989 28.252 23.54 28.1272 22.8441C28.0015 22.1432 27.8393 21.4804 27.6454 20.8748C27.4452 20.2487 27.1727 19.6304 26.8359 19.038C26.4864 18.423 26.0758 17.8876 25.6149 17.447C25.1332 16.986 24.5434 16.6154 23.8613 16.3451C23.1816 16.0762 22.4283 15.9399 21.6225 15.9399C21.3059 15.9399 21 16.0698 20.409 16.4546C20.0452 16.6918 19.6197 16.9662 19.1448 17.2696C18.7387 17.5283 18.1886 17.7708 17.5091 17.9902C16.8461 18.2048 16.173 18.3136 15.5087 18.3136C14.8443 18.3136 14.1714 18.2048 13.5078 17.9902C12.829 17.7709 12.2789 17.5285 11.8732 17.2698C11.4028 16.9693 10.9771 16.6949 10.6079 16.4543C10.0176 16.0695 9.71129 15.9397 9.39485 15.9397C8.58881 15.9397 7.83576 16.0762 7.15626 16.3453C6.47465 16.6152 5.88455 16.9858 5.40229 17.4473C4.9418 17.8881 4.53099 18.4233 4.1819 19.038C3.84535 19.6304 3.57288 20.2484 3.37232 20.8749C3.17862 21.4807 3.01661 22.1432 2.89078 22.8441C2.76615 23.5389 2.68147 24.1981 2.63961 24.8036C2.59845 25.3968 2.57764 26.0124 2.57764 26.6343C2.57764 28.2525 3.09205 29.5624 4.10645 30.5287C5.10832 31.4819 6.43396 31.9657 8.04602 31.9657H22.9727C24.5848 31.9657 25.9099 31.4822 26.912 30.5287C27.9266 29.5632 28.4411 28.2529 28.4411 26.634C28.4409 26.0093 28.4198 25.3932 28.3784 24.803Z" fill="#FA1451"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="31" height="31" fill="white" transform="translate(0.034668 0.965515)"/>
</clipPath>
</defs>
</svg>

                </div>
                <div class="call-center">
                    <a href="https://api.whatsapp.com/send?phone=+77771456152"></a>
                
                    <div class="account-fixed-register" v-show="!isAutorized">
                        <router-link to="/Register" ></router-link>
                    </div>
                    <router-link to="/Account" class="account-fixed-autorized" v-show="isAutorized">
                        <div class="passed">
                            <div class="autorized" >
                                {{ autorizedData.lastName }} {{ autorizedData.firstName }}
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const $ = require( "jquery" )
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
        },
        currentBlock: {
            type: Number,
            default: 1
        }
    },
    methods:{
        mob_menu(){
            $('.prof_modal').css({'display': 'block !important'})
        },
        nav_open() {
            $('nav.menu').toggleClass('menu_active')
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
                width: 25%
                height: 100%
                display: flex
                .nav_button
                    display: none
                    width: 58px
                    height: 58px
                    border-radius: 50%
                    border: 1px solid #FFFFFF
                    justify-content: center
                    align-items: center
                    position: relative
                    background-color: #3D3D3D
                    
                    .nav_click
                        cursor: pointer
                        span
                            position: absolute
                            left: 50%
                            top: 50%
                            transform: translate(-50%, -50%)
                            color: white
                            font-size: 6vw
                            z-index: 201
                    .menu
                        a
                            display: flex
                            justify-content: center
                            align-items: center
                            width: 58px
                            height: 58px
                            border-radius: 50%
                            border: 1px solid #fff
                            color: white
                            text-decoration: none
                            font-size: 6vw
                            transition: .6s
                            position: absolute
                            left: 50%
                            top: 50%
                            transform: translate(-50%, -50%)
                            z-index: -1
                    .menu_active a:nth-child(1)
                        transform: translate(-50%, 100%)
                    .menu_active a:nth-child(2)
                        transform: translate(-50%, 230%)
                    .menu_active a:nth-child(3)
                        transform: translate(-50%, 360%)
                    .menu_active a:nth-child(4)
                        transform: translate(-50%, 490%)
                    .menu_active a:nth-child(5)
                        transform: translate(-50%, 620%)
                    .menu_active a:nth-child(6)
                        transform: translate(-50%, 750%)
                    .menu_active a:nth-child(7)
                        transform: translate(-50%, 880%)
                    .menu_active a:nth-child(8)
                        transform: translate(-50%, 1010%)
                    
            .right-header-content
                width: 20% !important
                height: 100%
                display: flex
                justify-content: space-around
                align-items: center
                .mobile-account
                    width: 58px
                    height: 58px
                    justify-content: center
                    align-items: center
                    border-radius: 50%
                    border: 1px solid #ffffff
                    display: none
                    position: relative
                    a
                        position: absolute
                        width: 100%
                        height: 100%

                .call-center
                    background: url(../assets/phone.svg) center no-repeat
                    background-size: contain
                    cursor: pointer
                    position: relative
                    width: 100%
                    height: 60%
                    a
                        width: 100%
                        height: 100%
                        display: block
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
                        right: 10vw
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
                                justify-content: flex-start
                                align-items: center
                                font-size: 2.1vh
                                white-space: nowrap
                                text-transform: capitalize
                                color: white
                                font-family: GothamLight
                                text-align: left
                                padding-left: 20%
                                line-height: 2.5vh
                                    
                        &:hover
                            transform: scale(1.15)
                    ul
                        display: none
                        flex-direction: column
                        justify-content: space-evenly
                        align-items: center
                        background-color: #3D3D3D
                        width: 13vw
                        height: 15vh
                        position: absolute
                        bottom: -500%
                        left: 0
                        z-index: 100
                        &:hover
                            display: flex
                        &:first-child
                            color: #FA1451
                            font-family: GothamLight
                        li
                            width: 100%
                            text-align: center
                            font-size: 1.5vh
                            a
                                color: white
                                text-decoration: none
                            span
                                background: url(../assets/phone.svg) center no-repeat
                                background-size: 30%
                                display: inline-block

            .logo, .logo-1, .logo-2
                height: 100%
                cursor: pointer
                a
                    width: 100%
                    height: 100%
                    display: block
            .logo
                background: url(../assets/Comp6_000001.svg) center no-repeat
                width: 33%
            .logo-1
                background: url(../assets/UDB.svg) center no-repeat
                background-size: contain
                background-position-x: center
                background-position-y: 60%
                width: 35%
            .logo-2
                background: url(../assets/onlineschool.svg) center no-repeat
                background-size: contain
                width: 31%
                margin-left: 3%
            .center-header-content
                min-width: 80%
                height: 100%
                .logo, .logo-1, .logo-2
                    display: none
                nav
                    min-width: 100%
                    height: 100%
                    display: flex
                    align-items: center
                    font-size: 1.7vh;
                    line-height: 28px;
                    margin: 0 auto
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
    @media (max-width: 1024px)
        .center-header-content
            min-width: 60% !important
            display: flex
            justify-content: center
            align-items: center
            .logo, .logo-1, .logo-2, 
                display: block !important
                width: 25% !important
            nav
                display: none !important
        .left-header-content
            display: flex
            justify-content: center
            align-items: center
            .logo, .logo-1, .logo-2, 
                display: none !important
            .nav_button
                display: block !important
        .right-header-content
            .call-center
                display: none !important
            .mobile-account
                display: flex !important

</style>