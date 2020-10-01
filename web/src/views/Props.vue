<template>
    <div class="wrapper">
        <div class="front">

<span class="title"> РЕКВИЗИТТЕР </span> <br> <br>

“UDB Online School” by ЖК «TORESH» <br>
Телефон: +7 777 479 92 92 <br>
Э-адрес: info@udb.kz <br>
Заңды мекенжайы: Қазақстан республикасы, Алматы қаласы, <br>
050000, Қалқаман-2 шағын ауданы, Айбергенова, 75 <br>
ЖСН/БИН: 920712401245 <br>

        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'OBJECTIVES',
    methods: {
        async refresh(phone) {
            await axios.get('https://api.udb.kz/users/search/phone/' + phone)
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
    @font-face
        font-family: GothamBold
        src: url(../assets/Gotham/GothamBold.ttf)
    
    @font-face
        font-family: GothamLight
        src: url(../assets/Gotham/GothamLight.ttf)
    .wrapper
        width: 100vw
        height: 70vh
        background-color: #000
        .front
            max-width: 1440px
            height: 100%
            margin: 0 auto
            text-align: left
            font-size: 2vh
            font-family: GothamLight
            color: white
            padding-top: 14%
            line-height: 2.5vh
            .title
                color: #FA1451
                font-family: GothamBold
</style>