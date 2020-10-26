<template>
    <div class="wrapper">
        <div class="front">
            <div class="peaple"></div>
            <div class="camera"></div>
            <div class="left-content-wrapper">
                <div class="register-block">
                    <form class="left-bottom-content-2" onsubmit="return false">
                        <input type="text" class="auto-phone" placeholder="ұялы телефон" required>
                        <input type="password" class="auto-password" placeholder="пароль" required>
                        <button class="SignIn" @click="Autorization">кіру</button>
                    </form>
                </div>
            </div>
            <div class="right-content-wrapper">
                
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import sweetalert2 from 'sweetalert2'
const $ = require( "jquery" )
export default {
    name: 'Register',
    data: () => ({
        register: null,
        res: null
    }),
    mounted() {
        if (localStorage.getItem('autorize-phone') != null) {
            const user = {
                firstName: localStorage.getItem('autorize-firstName'),
                lastName: localStorage.getItem('autorize-lastName'),
                phone: localStorage.getItem('autorize-phone'),
                privilege: localStorage.getItem('autorize-privilege')
            }
            this.refresh(user.phone)
            this.$emit("autorization", user)
        }
    },
    methods: {
        async refresh(phone) {
            await axios.get('http://localhost:3000/users/search/one/phone/' + phone)
            .then(response => {
                localStorage.setItem('autorize-privilege', response.data.privilege)
                localStorage.setItem('autorize-firstName', response.data.firstName),
                localStorage.setItem('autorize-lastName', response.data.lastName),
                localStorage.setItem('autorize-phone', response.data.phone),
                localStorage.setItem('autorize-password', response.data.password)
            })
        },
        One() {
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
                 $('.peaple').css({'background-position-x': '150%'})
                $('.camera').css({'background-position-x': '200%'})
                $('.left-bottom-content-1').css({'z-index': '102', 'opacity': '1'})
                $('.left-bottom-content-2').css({'z-index': '101', 'opacity': '0'})
        }else{
            $('.peaple').css({'background-position-x': '150%'})
            $('.camera').css({'background-position-x': '200%'})
            $('.One').css({'transform': 'translateX(0%) translateY(0%)', 'height': '100%'} )
            $('.Two').css({'transform': 'translateX(0%) translateY(-15%)', 'height': '115%'})
            $('.left-bottom-content-1').css({'z-index': '102', 'opacity': '1'})
            $('.left-bottom-content-2').css({'z-index': '101', 'opacity': '0'})
        }
        },
        Two() {if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            $('.peaple').css({'background-position-x': '80%'})
            $('.camera').css({'background-position-x': '100%'})
            $('.left-bottom-content-1').css({'z-index': '101', 'opacity': '0'})
            $('.left-bottom-content-2').css({'z-index': '102', 'opacity': '1'})
        }else{
            $('.peaple').css({'background-position-x': '80%'})
            $('.camera').css({'background-position-x': '100%'})
            $('.Two').css({'transform': 'translateX(-100%) translateY(0%)', 'height': '100%'} )
            $('.One').css({'transform': 'translateX(100%) translateY(-15%)', 'height': '115%'})
            $('.left-bottom-content-1').css({'z-index': '101', 'opacity': '0'})
            $('.left-bottom-content-2').css({'z-index': '102', 'opacity': '1'})
        }
        },
        async Autorization() {
            await axios.get(`http://localhost:3000/users/search/phone/${$('.auto-phone').val()}`)
            .then( response => {
                if(response.data == "") {
                    sweetalert2.fire({
                        title: 'Ошибка',
                        text: `такого пользователя не существует`,
                        icon: 'error',
                        confirmButtonText: 'OK'
                    })
                }
                else {
                    this.res = response.data[0]
                }
            })
            .catch(function (error) {
                console.log(error)
            })
            if ( $('.auto-password').val() == this.res.password ) {
                if (localStorage.getItem('autorize-phone') == this.res.phone)
                {
                    sweetalert2.fire({
                        title: 'OK',
                        text: `Вы уже авторизированны`,
                        icon: 'info',
                        confirmButtonText: 'OK'
                    })
                } else {
                    localStorage.setItem('autorize-firstName', this.res.firstName)
                    localStorage.setItem('autorize-lastName', this.res.lastName)
                    localStorage.setItem('autorize-phone', this.res.phone)
                    localStorage.setItem('autorize-privilege', this.res.privilege)
                    this.$emit('autorization', this.res)
                    sweetalert2.fire({
                        title: 'OK',
                        text: `С возвращением ${this.res.lastName} ${this.res.firstName}`,
                        icon: 'success',
                        confirmButtonText: 'Перейти на страницу вашего аккаунта'
                    }).then((result) => {
                        if (result.value) {
                            window.location.href = 'http://localhost:8080/Account'
                        }
                    })
                    
                }
            } else {
                sweetalert2.fire({
                    title: 'Ошибка',
                    text: `пароль введён неверно`,
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            }
        }
    }
}
</script>

<style lang="sass" scoped>
    button
        outline: none
    @font-face
        font-family: GothamLight
        src: url(../assets/Gotham/GothamLight.ttf)
        
    @font-face
        font-family: GothamMedium
        src: url(../assets/Gotham/GothamMedium.ttf)

    @font-face
        font-family: GothamBold
        src: url(../assets/Gotham/GothamBold.ttf)
    @import '~@sweetalert2/theme-dark/dark.css'
    .wrapper
        width: 100vw
        height: 100vh
        background-color: #1D1D1D
        .front
            max-width: 1440px
            height: 100%
            margin: 0 auto
            display: flex
            align-items: flex-end
            position: relative
            .peaple
                width: 100%
                height: 100%
                position: absolute
                bottom: 0
                right: 0
                background: url(../assets/Register/bg.svg) no-repeat
                background-position: right
                z-index: 3
                transition: 1s
            .camera
                width: 100%
                height: 100%
                position: absolute
                bottom: 0
                right: 0
                background: url(../assets/Register/camera.svg) no-repeat
                background-position-y: 20%
                background-position-x: 200%
                z-index: 2
                transition: 1s
            .left-content-wrapper,
            .right-content-wrapper
                width: 50%
                height: 90%
                
            .left-content-wrapper
                color: white
                .register-block
                    width: 60%
                    height: 60%
                    position: relative
                    z-index: 100
                    .left-top-content
                        display: flex
                        height: 8%
                        .One
                            color: #FA1451
                            background-color: #fff
                            width: 7%
                            text-align: center
                            font-size: 3.5vh
                            cursor: pointer
                            transition: .5s
                        .Two
                            color: #000
                            background-color: #FA1451
                            width: 7%
                            text-align: center
                            font-size: 3.5vh
                            transform: translateY(-15%)
                            cursor: pointer
                            height: 115%
                            transition: .5s
                    .left-bottom-content-2
                        display: flex
                        flex-direction: column
                        justify-content: space-evenly
                        align-items: center
                        height: 50%
                        background-color: #FA1451
                        position: absolute
                        width: 100%
                        bottom: 0
                        left: 0
                        z-index: 101
                        transition: 1s
                        & *
                            width: 80%
                            height: 20%
                        input
                            background-color: transparent !important
                    .left-bottom-content-1
                        display: flex
                        flex-direction: column
                        justify-content: space-evenly
                        align-items: center
                        height: 92%
                        background-color: #000
                        position: absolute
                        bottom: 0
                        left: 0
                        width: 100%
                        z-index: 102
                        transition: 1s
                        & *
                            width: 80%
                            height: 8%
                    input
                        background-color: #000
                        border: 1px solid white
                        outline: none
                        color: white
                        font-size: 1.8vh
                        text-align: center
                    ::-webkit-input-placeholder
                        color:#FFF
                        font-size: 1.8vh
                        font-family: GothamLight
                        text-align: center
                        transition: opacity .5s
                        opacity: 1
                    input:focus::-webkit-input-placeholder
                        opacity: 0
                    ::-moz-placeholder
                        color:#FFF
                        font-size: 1.8vh
                        font-family: GothamLight
                        text-align: center
                        transition: opacity .5s
                        opacity: 1
                    input:focus::-moz-placeholder
                        opacity: 0
                    :-moz-placeholder
                        color:#FFF
                        font-size: 1.8vh
                        font-family: GothamLight
                        text-align: center
                        transition: opacity .5s
                        opacity: 1
                    input:focus:-moz-placeholder
                        opacity: 0
                    :-ms-input-placeholder
                        color:#FFF
                        font-size: 1.8vh
                        font-family: GothamLight
                        text-align: center
                        transition: opacity .5s
                        opacity: 1
                    input:focus:-ms-input-placeholder
                        opacity: 0
                    .HZ
                        background-color: #FA1451
                        border: none
                        font-family: GothamMedium
                        font-size: 2vh
                        cursor: pointer
                    .SignIn
                        color: #FA1451
                        border: none
                        font-family: GothamLight
                        font-size: 2vh
                        cursor: pointer
    @media screen and ( max-width: 480px )
        .peaple
            background: none !important
        .camera 
            display: none !important
        .left-content-wrapper
            width: 100% !important
            .register-block
                width: 90% !important
                .left-top-content
                    display: flex
                    height: 8%
                    .One
                        color: #FA1451
                        background-color: #fff
                        width: 50% !important
                        text-align: center
                        font-size: 3.5vh
                        cursor: pointer
                        transition: .5s
                    .Two
                        color: #000
                        background-color: #FA1451
                        width: 50% !important
                        text-align: center
                        font-size: 3.5vh
                        transform: translateY(0%) !important
                        cursor: pointer
                        height: 100% !important
                        transition: .5s
            .left-bottom-content-1
                width: 100% !important
                input
                    width: 90% !important
                .HZ
                    width: 90% !important
                .SignIn
                    width: 90% !important
            .left-bottom-content-2
                width: 100% !important
        .right-content-wrapper
            display: none !important

</style>