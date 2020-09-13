<template>
    <div class="wrapper">
        <div class="front">
            <div class="peaple"></div>
            <div class="camera"></div>
            <div class="left-content-wrapper">
                <div class="register-block">
                    <div class="left-top-content">
                        <div class="One" @click="One">1</div>
                        <div class="Two" @click="Two">2</div>
                    </div>
                    <form class="left-bottom-content-1" onsubmit="return false">
                        <input type="text" class="name" placeholder="аты-жөні" required>
                        <input type="number" class="phone" placeholder="ұялы телефон" required>
                        <input type="email" class="email" placeholder="пошта" required>
                        <input type="password" class="password" placeholder="пароль" required>
                        <button class="HZ" @click="Registration">тіркелу</button>
                        <button class="SignIn" @click="Two" onclick="event.preventDefault()" >кіру</button>
                    </form>
                    <form class="left-bottom-content-2">
                        <input type="email" class="auto-email" placeholder="пошта" required>
                        <input type="password" class="auto-password" placeholder="пароль" required>
                        <button class="SignIn">кіру</button>
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
        res: null
    }),
    methods: {
        One() {
            $('.peaple').css({'background-position-x': '150%'})
            $('.camera').css({'background-position-x': '200%'})
            $('.One').css({'transform': 'translateX(0%) translateY(0%)', 'height': '100%'} )
            $('.Two').css({'transform': 'translateX(0%) translateY(-15%)', 'height': '115%'})
            $('.left-bottom-content-1').css({'z-index': '102', 'opacity': '1'})
            $('.left-bottom-content-2').css({'z-index': '101', 'opacity': '0'})
        },
        Two() {
            $('.peaple').css({'background-position-x': '80%'})
            $('.camera').css({'background-position-x': '100%'})
            $('.Two').css({'transform': 'translateX(-100%) translateY(0%)', 'height': '100%'} )
            $('.One').css({'transform': 'translateX(100%) translateY(-15%)', 'height': '115%'})
            $('.left-bottom-content-1').css({'z-index': '101', 'opacity': '0'})
            $('.left-bottom-content-2').css({'z-index': '102', 'opacity': '1'})
        },
        async Registration() {
            const 
                name = $('.name').val().split(' '),
                email = $('.email').val(),
                password = $('.password').val(),
                phone = $('.phone').val()
            ;
            if(name.length != 3){
                sweetalert2.fire({
                    title: 'Ошибка',
                    text: 'Заполните поле ФИО полностью',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
                return
            }
            else if(password.length < 6){
                sweetalert2.fire({
                    title: 'Ошибка',
                    text: 'Пароль должен состоять минимум из 6 символов',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
                return
            }
            else if(phone.length < 11){ 
                sweetalert2.fire({
                    title: 'Ошибка',
                    text: 'Введите номер телефона корректно',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
                return 
            }
            
            const params = {
                firstName: name[0],
                lastName: name[1],
                patronymic: name[2],
                email: email,
                password: password,
                phone: phone
            }
            /*
    "firstName": "xcdgsrrf",
	"lastName": "wewee",
	"patronymic": "wew",
	"email": "sdcsxcsd@bk.ru",
	"password": "garganzola25",
    "privilege": "sjdnjwdjs"*/
            await axios.post('http://localhost:3000/users', params)
            .then( response => {this.res = response.data} )
            .catch(function (error) {
                sweetalert2.fire({
                    title: 'Ошибка',
                    text: `код ошибки: ${error.response.status}, возможно такое ФИО или адресс электронной почты уже используется`,
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            })

            sweetalert2.fire({
                title: 'OK',
                text: `Поздравляем ${this.res.ops[0].lastName} ${this.res.ops[0].firstName} ${this.res.ops[0].patronymic} вы успешно зарегистрированы`,
                icon: 'success',
                confirmButtonText: 'OK'
            })
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
                background-position-y: -400%
                background-position-x: 150%
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
                display: flex
                align-items: center
                justify-content: center
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
                        justify-content: center
                        align-items: center
                        height: 92%
                        background-color: #FA1451
                        position: absolute
                        width: 100%
                        bottom: 0
                        left: 0
                        z-index: 101
                        opacity: 0
                        transition: 1s
                        & *
                            width: 80%
                            height: 8%
                            margin-bottom: 5%
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

</style>