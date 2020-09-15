<template>
    <transition name="fade">
    <div class="wrapper">
        <div class="close" @click="close"></div>
        <div class="front">
            <form class="left-bottom-content-1" onsubmit="return false">
                <input type="text" class="change-name" placeholder="аты-жөні" required>
                <input type="number" class="change-phone" placeholder="ұялы телефон" required>
                <input type="email" class="change-email" placeholder="пошта" required>
                <input type="password" class="change-password" placeholder="пароль" required>
                <button class="change" @click="Change">өзгерту</button>
            </form>
        </div>
    </div>
    </transition>
</template>

<script>
import axios from 'axios'
import sweetalert2 from 'sweetalert2'
const $ = require( "jquery" )
export default {
    name: 'modalSettings',
    data: () => ({
        res: null
    }),
    props: {
        autorizedData: {
            type: Object,
            default: () => {}
        }
    },
    watch: {
        autorizedData: function () {
            $('.change-name').val(`${this.autorizedData.lastName} ${this.autorizedData.firstName} ${this.autorizedData.patronymic}`)
            $('.change-phone').val(Number(this.autorizedData.phone))
            $('.change-email').val(this.autorizedData.email)
            $('.change-password').val(this.autorizedData.password)
        }
    },
    mounted() {
        if (localStorage.getItem('autorize-email') != null) {
            $('.change-name').val(`${localStorage.getItem('autorize-lastname')} ${localStorage.getItem('autorize-firstname')} ${localStorage.getItem('autorize-patronymic')}`)
            $('.change-phone').val(Number(localStorage.getItem('autorize-phone')))
            $('.change-email').val(localStorage.getItem('autorize-email'))
            $('.change-password').val(localStorage.getItem('autorize-password'))
        }
        $('.change-password').hover(
            function () {
                $('.change-password').attr('type', 'text')
            },
            function () {
                $('.change-password').attr('type', 'password')
            }
        )
    },
    methods: {
        close() {
            this.$emit('close')
        },
        async Change() {
            const name = $('.change-name').val().split(' ')
            const Params = {
                firstName: name[1],
                lastName: name[0],
                patronymic: name[2],
                phone: Number($('.change-phone').val()),
                email: $('.change-email').val(),
                password: $('.change-password').val()
            }
            if(name.length != 3 && name.length != 2){
                sweetalert2.fire({
                    title: 'Ошибка',
                    text: 'Заполните поле ФИО полностью',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
                return
            }
            else if(Params.password.length < 6){
                sweetalert2.fire({
                    title: 'Ошибка',
                    text: 'Пароль должен состоять минимум из 6 символов',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
                return
            }
            else if(Params.phone.length < 11){ 
                sweetalert2.fire({
                    title: 'Ошибка',
                    text: 'Введите номер телефона корректно',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
                return 
            }
            else if(
                Params.firstName == localStorage.getItem('autorize-firstname') &&
                Params.lastName == localStorage.getItem('autorize-lastname') &&
                Params.patronymic == localStorage.getItem('autorize-patronymic') &&
                Params.email == localStorage.getItem('autorize-email') &&
                Params.phone == localStorage.getItem('autorize-phone') &&
                Params.password == localStorage.getItem('autorize-password')
            ) {
                sweetalert2.fire({
                    title: 'Ошибка',
                    text: 'Вы должны изменить хоть что то',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
                return 
            }
            await axios.put(`http://localhost:3000/users/email/${localStorage.getItem('autorize-email')}`, Params)
            .then( response => { this.res = response.data } )
            .catch(function (error) {
                sweetalert2.fire({
                    title: 'Ошибка',
                    text: `код ошибки: ${error.response.status}`,
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            })
            .then(
                sweetalert2.fire({
                    title: 'OK',
                    text: `Вы успешно изменили параметры`,
                    icon: 'success',
                    confirmButtonText: 'OK'
                }),
                localStorage.setItem('autorize-firstname', Params.firstName),
                localStorage.setItem('autorize-lastname', Params.lastName),
                localStorage.setItem('autorize-patronymic', Params.patronymic),
                localStorage.setItem('autorize-email', Params.email),
                localStorage.setItem('autorize-phone', Params.phone),
                localStorage.setItem('autorize-password', Params.password),
                this.$emit('autorized', Params),
                this.close()
            )
        }
    }
    
}
</script>

<style lang="sass" scoped>
    @import '~@sweetalert2/theme-dark/dark.css'
    @font-face
        font-family: GothamLight
        src: url(../assets/Gotham/GothamLight.ttf)
    .fade-enter-active, .fade-leave-active
        transition-property: opacity
        transition-duration: .3s

    .fade-enter-active
        transition-delay: .05s

    .fade-enter, .fade-leave-active
        opacity: 0
    .wrapper
        width: 25vw !important
        height: 45vh !important
        background: #1D1D1D
        border: 1px solid white
        display: flex
        justify-content: center
        align-items: center
        position: relative
        .close
            position: absolute
            width: 2vw
            height: 2vw
            background: url(../assets/Vector.svg) center no-repeat
            right: 0
            top: -8%
            cursor: pointer
        .front
            width: 90%
            height: 90%
            background-color: #000
            
            .left-bottom-content-1
                display: flex
                flex-direction: column
                justify-content: space-evenly
                align-items: center
                height: 100%
                width: 100%
                & *
                    width: 80%
                    height: 10%
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
            .change
                color: #FA1451
                border: none
                font-family: GothamLight
                font-size: 2vh
                cursor: pointer
                outline: none
</style>