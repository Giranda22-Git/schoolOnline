<template>
    <div class="wrapper">
        <div class="front">
            <div class="top-content-wrapper">
                <div class="search">
                    <form class="data-search" onsubmit="return false">
                        <input type="text" class="searching" placeholder="поиск">
                        <button @click="search_user" class="submit">
                            <span> Найти </span>
                        </button>
                    </form>
                    <div class="type">
                        <label for="id">id</label>
                        <input type="radio" name="type" id="id" value="id">
                        <label for="privilege">privilege</label>
                        <input type="radio" name="type" id="privilege" value="privilege">
                        <label for="phone">phone</label>
                        <input type="radio" name="type" id="phone" value="phone">
                        <label for="firstName">firstName</label>
                        <input type="radio" name="type" id="firstName" value="firstName">
                        <label for="lastName">lastName</label>
                        <input type="radio" name="type" id="lastName" value="lastName">
                        
                    </div>
                </div>
                <div class="found-wrapper">
                    <div class="found-user"
                        v-for="index in Users"
                        :key="index._id"
                    >
                        <div class="name">
                            <div class="data lastName"> lastName: {{ index.lastName }} <input type="text" v-bind:class="'data-lastName-' + index._id" placeholder="new data"> </div> 
                            <div class="data firstName"> firstName: {{ index.firstName }}  <input type="text" v-bind:class="'data-firstName-' + index._id" placeholder="new data"> </div>
                        </div>
                        <div class="data-two">
                            <div class="data phone"> phone: {{ index.phone }} <input type="text" v-bind:class="'data-phone-' + index._id" placeholder="new data"> </div>
                            <div class="data password"> password: {{ index.password }} <input type="text" v-bind:class="'data-password-' + index._id" placeholder="new data"> </div>
                        </div>
                        <div class="data-three">
                            <div class="data privilege"> privilege: {{ index.privilege }} <input type="text" v-bind:class="'data-privilege-' + index._id" placeholder="new data"></div>
                            <div class="data _id"> id: {{ index._id }} </div>
                        </div>
                        <div class="change" @click="change(index._id)">
                            change
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom-content-wrapper">
                <button class="refresh" @click="search_text">refresh</button>
                <div class="text-found-wrapper">
                    <div class="found-text"
                        v-for="index in Texts"
                        :key="index._id"
                    >
                        <div class="top-content-text">
                            block: {{ index.block }}
                        </div>
                        <div class="bottom-content-text">
                            <div class="content-texts"
                                v-for="(element, i) in index.texts"
                                :key="index._id + '-' + i"
                            >
                                <div class="top-wrapper-text">
                                    <div class="left-content-text"> {{ element }} </div>
                                    <div class="right-content-text">
                                        <textarea v-bind:class="'data-text-' + index._id + '-' + i" name="text" id="text" cols="30" rows="10"></textarea>
                                    </div>
                                </div>
                                <button @click="changeText(index._id,index._id + '-' + i,i)" class="bottom-wrapper-text">
                                    change
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="startButton" @click="smsC">
                Start
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import sweetalert2 from 'sweetalert2'
const $ = require( "jquery" )
export default {
    name: 'admin',
    data: () => ({
        res: null ,
        Users: null,
        result: null,
        Texts: null,
        textRes: null
    }),
    methods: {
        async changeText(id, key, index){
            const Params = {
                index: index,
                result: $(`.data-text-${key}`).val()
            }
            await axios.put(`http://localhost:3000/texts/${id}`, Params)
            .then( response => {
                this.textRes = response.data
            })
            .then(
                sweetalert2.fire({
                    title: 'OK',
                    text: 'Вы Успешно изменили текст',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            )
        },
        async search_text() {
            await axios.get(`http://localhost:3000/texts`)
            .then( response => {
                this.Texts = response.data
            })
        },
        async Valid() {
            await axios.get(`http://localhost:3000/users/search/phone/${localStorage.getItem('autorize-phone')}`)
            .then( response => {
                if(response.data == "") {
                    window.location.href = 'https://udb.kz/'
                }
                else {
                    this.res = response.data
                }
            })
            .catch(function (error) {
                window.location.href = 'https://udb.kz/'
            })
            if(this.res == null){
                window.location.href = 'https://udb.kz/'
            } else {
                if(this.res.privilege != 'admin'){
                    window.location.href = 'https://udb.kz/'
                }
            }
        },
        async search_user() {
            await axios.get(`http://localhost:3000/users/search/${$('input[name=type]:checked').val()}/${ $('.searching').val() }`)
            .then( response => {
                if(response.data == "") {
                    sweetalert2.fire({
                        title: 'Ошибка',
                        text: 'По вашему запросу ничего не найдено',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    })
                }
                else {
                    this.Users = response.data
                }
            })
            .catch(function (error) {
                console.log(error)
            })
        },
        async smsC(){
            await axios.post('https://smsc.kz/sys/send.php?login=Sanzharkin777&psw=Marsel19842013&phones=+77717773331&mes=Здравствуйте Айнур Омпанкызы курс стартует уже завтра пожалуйста авторизируйтесь на udb.kz, ваш логин: +7(771)777-3331, пароль: r4oshnf3')
            .then(response => {
                
            })
            .catch(error => {
                console.log(error)
            })
        },
        async change(id) {
            let Params = {}
            if($(`.data-firstName-${id}`).val() != "") Params.firstName = $(`.data-firstName-${id}`).val()
            if($(`.data-lastName-${id}`).val() != "") Params.lastName = $(`.data-lastName-${id}`).val()
            if($(`.data-patronymic-${id}`).val() != "") Params.patronymic = $(`.data-patronymic-${id}`).val()
            if($(`.data-phone-${id}`).val() != "") Params.phone = Number($(`.data-phone-${id}`).val())
            if($(`.data-password-${id}`).val() != "") Params.password = $(`.data-password-${id}`).val()
            if($(`.data-privilege-${id}`).val() != "") Params.privilege = $(`.data-privilege-${id}`).val()
            if($(`.data-premiumDate-${id}`).val() != "") Params.premiumDate = $(`.data-premiumDate-${id}`).val()
            if($(`.data-email-${id}`).val() != "") Params.email = $(`.data-email-${id}`).val()
            
            if($(`.data-privilege-${id}`).val() != "" ){
                if(Params.privilege != 'admin' && Params.privilege != 'user' && Params.privilege != 'premium'){
                    sweetalert2.fire({
                        title: 'Ошибка',
                        text: 'Вы ввели некорректную привилегию',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    })
                    return
                }
            }
            else if($(`.data-password-${id}`).val() != "" ){
                if(Params.password.length < 6){
                    sweetalert2.fire({
                        title: 'Ошибка',
                        text: 'Пароль должен состоять минимум из 6 символов',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    })
                    return
                }
            }
            else if($(`.data-phone-${id}`).val() != "" ){
                if(Params.phone.length < 11){ 
                    sweetalert2.fire({
                        title: 'Ошибка',
                        text: 'Введите номер телефона корректно',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    })
                    return 
                }
            }
            await axios.put(`http://localhost:3000/users/${id}`, Params)
            .then( response => { this.result = response.data } )
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
                })
            )
        },
        async refresh(phone) {
            await axios.get('http://localhost:3000/users/search/phone/' + phone)
            .then(response => {
                localStorage.setItem('autorize-privilege', response.data.privilege)
                localStorage.setItem('autorize-firstName', response.data.firstName),
                localStorage.setItem('autorize-lastName', response.data.lastName),
                localStorage.setItem('autorize-phone', response.data.phone),
                localStorage.setItem('autorize-password', response.data.password)
            })
        }
    },
    mounted() {
        this.Valid()
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
    }
}
</script>

<style lang="sass" scoped>
    *
        outline: 1px solid red
    
    .wrapper
        width: 100vw
        height: auto
        background: #1D1D1D
        padding-top: 7% !important
        .front
            max-width: 1440px
            height: 100%
            margin: 0 auto
            .startButton
                width: 50%
                height: 10%
                background-color: #fff
                margin: 0 auto
                display: flex
                justify-content: center
                align-items: center
                font-size: 5vh
                margin-top: 20%
                cursor: pointer
            .top-content-wrapper
                display: flex
                flex-direction: column
                justify-content: flex-start
                align-items: center
                min-height: 80vh
                font-size: 2vh !important
                input
                    font-size: 1.6vh !important
            .search
                display: flex
                flex-direction: column
                justify-content: flex-start
                align-items: center
                width: 100%
                height: 6%
                color: white
                font-size: 2vh
                .data-search
                    width: 100%
                    display: flex
                    justify-content: center
                    .searching
                        width: 50%
                        height: 100% !important
                        font-size: 2vh
                    .submit
                        height: 100%
                        width: 10%
                        background-color: #fff
                        color: black
                        display: flex
                        justify-content: center
                        align-items: center
                        cursor: pointer
                        font-size: 1.6vh
                .type
                    width: 65%
                    height: 100%
                    display: flex
                    justify-content: space-evenly
                    align-items: center
                    & *
                        cursor: pointer
            .found-wrapper
                width: 100%
                height: 100%
                .found-user
                    width: 100%
                    height: 20vh
                    background-color: darken(#fff, 10%)
                    display: flex
                    justify-content: space-evenly
                    align-items: center
                    &:nth-child(even)
                        background-color: darken(#fff, 30%)
                    .data
                        margin-bottom: 3%
                        cursor: pointer
                    .change
                        width: 5%
                        height: 25%
                        text-align: center
                        line-height: 2vh
                        background-color: blue
                        color: white
                        cursor: pointer
            .bottom-content-wrapper
                display: flex
                flex-direction: column
                justify-content: flex-start
                align-items: center
                height: 40%
                overflow-y: scroll
                .refresh
                    height: 5%
                    width: 100%
                    background-color: blue
                    color: white
                    font-size: 2vh
                    cursor: pointer
                .text-found-wrapper
                    height: 95%
                    width: 100%
                    display: flex
                    flex-direction: column
                    justify-content: flex-start
                    align-items: center
                    overflow-y: auto
                    .found-text
                        width: 100%
                        height: 100%
                        display: flex
                        flex-direction: column
                        .top-content-text
                            height: 20%
                            width: 100%
                            color: white
                            font-size: 2vh
                            text-align: center
                            display: flex
                            justify-content: center
                            align-items: center
                        .bottom-content-text
                            height: 70%
                            width: 100%
                            overflow-y: auto
                            .content-texts
                                width: 100%
                                height: 100%
                                .top-wrapper-text
                                    width: 100%
                                    height: 70%
                                    display: flex
                                    .left-content-text
                                        width: 50%
                                        height: 100%
                                        color: white
                                        overflow-y: scroll
                                        font-size: 2vh
                                    .right-content-text
                                        width: 50%
                                        height: 100%
                                        textarea
                                            width: 100%
                                            height: 100%
                                            color: black
                                            font-size: 2vh
                                .bottom-wrapper-text
                                    height: 30%
                                    width: 100%
                                    background-color: blue
                                    color: white
                                    font-size: 2vh


</style>