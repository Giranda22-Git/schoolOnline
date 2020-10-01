<template>
    <div class="wrapper-modal">
        <svg @click="close" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x close" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
        <div class="front">
            <div class="kaspi-button" v-show="payMethods != 'kaspi' && payMethods != 'cloud'" @click="method_kaspi">
                Kaspi GOLD
            </div>
            <div class="cloudPay-button" v-show="payMethods != 'kaspi' && payMethods != 'cloud'" @click="method_cloud">
                <img src="../assets/section3/visa.svg" alt="...Load">
                <img src="../assets/section3/MasterCard.svg" alt="...Load">
            </div>
            <div class="method-cloudPay" v-show="payMethods == 'cloud'">
                <form class="register-block" onsubmit="return false">
                    <input name="cloud-register" class="register-name-cloud" type="text" placeholder="аты-жөні" required>
                    <input name="cloud-register" class="registerCloudPhone" type="text" placeholder="ұялы телефон" required>
                    <button class="register-button" @click="register('cloud')">ЖІБЕРУ</button>
                </form>
            </div>
            <div class="method_kaspi" v-show="payMethods == 'kaspi'">
                <div class="kaspi_card">
                    <div class="front-card">
                        <div class="logo-kaspi">
                            kaspi GOLD
                        </div>
                        <p>
                            5169 4931 3295 6692 <br>
                            MULDIR ORYNBEK <br>
                            +7(777)4799292
                        </p>
                    </div>
                </div>
                <div class="bottom-card-content">
                    <p>
        1. 14000тг төлемді карта нөмері арқылы <br>
        <span> 5169 4931 3295 6692 </span>, немесе телефон нөмері
        арқылы <span> +7(777)4799292 жіберіңіз </span> <br>
        2. Төмендегі форманы толтырыңыз <br>
                    </p>
                    <form class="register-block" onsubmit="return false">
                        <input name="kaspi-register" class="register-name" type="text" placeholder="аты-жөні" required>
                        <input name="kaspi-register" class="register-phone" type="text" placeholder="ұялы телефон" required>
                        <button class="register-button" @click="register('kaspi')">ЖІБЕРУ</button>
                    </form>
                    <p>3. Курс басталуына бір күн қалғанда сізге sms-хабарлама келеді.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import sweetalert2 from 'sweetalert2'
import Inputmask from "inputmask"
const $ = require( "jquery" )
export default {
    name: 'modalPay',
    data: () => ({
        payMethods: true,
        widget: new cp.CloudPayments({language: "kk-KZ"})
    }),
    mounted() {
        Inputmask({ 'mask': '+7(999)999-9999' }).mask('.register-phone')
        Inputmask({ 'mask': '+7(999)999-9999' }).mask('.registerCloudPhone')
    },
    methods: {
        async register(data) {
            let name = null
            let phone = null
            if(data == 'cloud'){
                name = $('.register-name-cloud').val().split(' '),
                phone = $('.registerCloudPhone').val()
            } else if(data == 'kaspi') {
                name = $('.register-name').val().split(' '),
                phone = $('.register-phone').val()
            }

            if(name.length != 2){
                sweetalert2.fire({
                    title: 'Ошибка',
                    text: 'Толық аты-жөніңізді толтырыңыз',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
                return
            } 
            if(phone.length != 15 || phone[phone.length - 1] == '_'){
                sweetalert2.fire({
                    title: 'Ошибка',
                    text: 'Телефон нөміріңізді толығымен толтырыңыз',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
                return
            }
            const params = {
                firstName: name[1],
                lastName: name[0],
                phone: phone
            }
            try {
                await axios.post('https://api.udb.kz/users', params)
                .then( response => { this.register = response.data } )
                .catch(function (error) {
                    sweetalert2.fire({
                        title: 'Ошибка',
                        text: `код ошибки: ${error.response.status}, мүмкін бұл телефон нөмірі тіркелген болар`,
                        icon: 'error',
                        confirmButtonText: 'OK'
                    })
                    throw new Error(error)
                })
                .then((inCache) => {
                    localStorage.setItem('autorize-firstName', this.register.ops[0].firstName)
                    localStorage.setItem('autorize-lastName', this.register.ops[0].lastName)
                    localStorage.setItem('autorize-phone', this.register.ops[0].phone)
                    localStorage.setItem('autorize-privilege', this.register.ops[0].privilege)
                    this.$emit('autorization', this.register.ops[0])
                    data == 'kaspi' ? sweetalert2.fire({
                        title: 'OK',
                        text: `Құттықтаймыз ${this.register.ops[0].lastName} ${this.register.ops[0].firstName} Сіз сәтті тіркелдіңіз`,
                        icon: 'success',
                        confirmButtonText: 'Өз аккаунтыңызға өту'
                    }).then((result) => {
                        if (result.value) {
                            window.location.href = 'https://udb.kz/Account'
                        }
                    }) : (this.pay(), this.close())
                })
            }
            catch (err){
                console.log(err)
            }
        },
        close() {
            this.$emit('close')
            this.payMethods = true
        },
        method_kaspi() {
            this.payMethods = 'kaspi'
        },
        method_cloud() {
            this.payMethods = 'cloud'
        },
        
        async pay(){
            let vm = this
            this.widget.pay('charge', // или 'charge'
                { //options
                    publicId: 'pk_067189fa41a13b1b84ff306bc291a', //id из личного кабинета
                    apiSecret: '2d3af295e380adf4820b4fdd33ddb3ee',
                    description: 'Курс үшін төлем udb.kz', //назначение
                    amount: 14000, //сумма
                    currency: 'KZT', //валюта
                    skin: "classic"
                },
                {
                    onSuccess: async function (options) { // success
                        if( localStorage.getItem('autorize-phone') != null ){
                            await axios.get('https://api.udb.kz/users/search/phone/'+localStorage.getItem('autorize-phone'))
                            .then( async response => {
                                if ( response.data.phone == localStorage.getItem('autorize-phone') && 
                                response.data.lastName == localStorage.getItem('autorize-lastName') &&
                                response.data.firstName == localStorage.getItem('autorize-firstName'))
                                {
                                    try{
                                        await axios.put('https://api.udb.kz/users/'+response.data._id, {privilege: "premium"})
                                        .catch(function (error) {
                                            sweetalert2.fire({
                                                title: 'Ошибка',
                                                text: `код ошибки: ${error.response.status}, Төлем сәтті өтпеді`,
                                                icon: 'error',
                                                confirmButtonText: 'OK'
                                            })
                                            throw new Error(error)
                                        })
                                        .then( async inCache => {
                                            await axios.get('https://api.udb.kz/users/'+response.data._id)
                                            .catch(function (error) {
                                                throw new Error(error)
                                            })
                                            .then( response => {
                                                localStorage.setItem('autorize-firstName', response.data.firstName)
                                                localStorage.setItem('autorize-lastName', response.data.lastName)
                                                localStorage.setItem('autorize-phone', response.data.phone)
                                                localStorage.setItem('autorize-privilege', response.data.privilege)
                                                vm.$emit('autorization', response.data)
                                            })
                                            
                                            
                                            sweetalert2.fire({
                                                title: 'OK',
                                                text: `Құттықтаймыз ${response.data.lastName} ${response.data.firstName} сіз udb.kz сайтындағы курсқа ие болдыңыз`,
                                                icon: 'success',
                                                confirmButtonText: 'Өз аккаунтыңызға өту'
                                            }).then((result) => {
                                                if (result.value) {
                                                    window.location.href = 'https://udb.kz/Account'
                                                }
                                            })
                                        })
                                    }
                                    catch(err){
                                        console.log(err)
                                    }
                                }
                            })
                        }
                    },
                    onFail: function (reason, options) { // fail
                        console.log('fail')
                    },
                    onComplete: function (paymentResult, options) { //Вызывается как только виджет получает от api.cloudpayments ответ с результатом транзакции.
                        //например вызов вашей аналитики Facebook Pixel
                    }
                }
            )
        }
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
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap')
    .register-block
        width: 100%
        height: 45%
        display: flex
        flex-direction: column
        justify-content: space-evenly
        align-items: center
        input
            width: 50%
            height: 20%
            font-size: 2vh
            outline: none
            border: 2px solid #FA1451
            text-align: center
            font-family: GothamLight
        button
            width: 50%
            height: 20%
            font-size: 2vh
            background-color: #FA1451
            border-radius: 25px
            color: white
            font-family: GothamLight
            display: flex
            justify-content: center
            align-items: center
            cursor: pointer
            outline: none

        ::-webkit-input-placeholder 
            color:#FA1451
        ::-moz-placeholder          
            color:#FA1451
        :-moz-placeholder           
            color:#FA1451
        :-ms-input-placeholder      
            color:#FA1451
    .wrapper-modal
        width: 100vw
        height: 80vh
        .close
            width: 3.5%
            height: 7%
            color: white
            position: absolute
            cursor: pointer
            z-index: 200
            right: 30%
            top: 0%
        .front
            position: relative
            width: 100%
            height: 100%
            display: flex
            justify-content: space-evenly
            align-items: flex-end
            .kaspi-button
                width: 40vw
                height: 20vh
                background-color: #A58B5D
                border-radius: 25px
                display: flex
                justify-content: center
                align-items: center
                text-align: center
                font-family: GothamBold
                font-size: 5vh
                cursor: pointer
                color: #80633C
            .cloudPay-button
                width: 40vw
                height: 20vh
                border-radius: 25px
                background-color: #fff
                display: flex
                justify-content: space-evenly
                align-items: center
                font-family: GothamBold
                font-size: 5vh
                cursor: pointer
                & *
                    width: 50%
                    height: 50%
            .method-cloudPay
                width: 40vw
                height: 20vh
                background-color: white
                border: 1px solid #FA1451
                box-shadow: 0px 4px 4px #FA1451
                border-radius: 25px
                overflow-y: auto
                .register-block
                    height: 100% !important
            .method_kaspi
                width: 40vw
                height: 80vh
                background-color: white
                border: 1px solid #FA1451
                box-shadow: 0px 4px 4px #FA1451
                border-radius: 25px
                overflow-y: auto
                .bottom-card-content
                    width: 90%
                    height: 55%
                    margin: 0 auto
                    padding-top: 3%
                    p
                        font-family: GothamLight
                        color: black
                        font-size: 3vh
                        span
                            color: #FA1451
                    
                        
                .kaspi_card
                    width: 100%
                    height: 45%
                    border-radius: 25px
                    background-color: #A58B5D
                    padding-top: 3%
                    padding-bottom: 3%
                    .front-card
                        width: 70%
                        height: 100%
                        margin: 0 auto
                        display: flex
                        flex-direction: column
                        justify-content: center
                        align-items: center
                    .logo-kaspi
                        font-family: Roboto, sans-serif
                        font-weight: bold
                        color: #80633C
                        font-size: 5vh
                    p
                        width: 100%
                        height: 60%
                        font-family: GothamLight
                        color: black
                        font-size: 4.5vh
                        display: flex
                        justify-content: center
                        align-items: center
                        text-align: center
    @media screen and ( max-width: 480px )
        .register-block
            input
                width: 80% !important
        .close
            top: -15% !important
            width: 15% !important
            height: 7.5% !important
            right: 5% !important
        .front
            align-items: center !important
        .method_kaspi
            width: 95% !important
            .front-card
                width: 90% !important
            .kaspi_card p
                font-size: 3.5vh !important
        .method-cloudPay
            width: 90% !important
                

</style>