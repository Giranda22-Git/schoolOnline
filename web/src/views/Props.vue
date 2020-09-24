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
export default {
    name: 'OBJECTIVES',
    mounted() {
        if (localStorage.getItem('autorize-email') != null) {
            const user = {
                firstName: localStorage.getItem('autorize-firstname'),
                lastName: localStorage.getItem('autorize-lastname'),
                patronymic: localStorage.getItem('autorize-patronymic'),
                email: localStorage.getItem('autorize-email'),
                phone: localStorage.getItem('autorize-phone'),
                password: localStorage.getItem('autorize-password'),
                privilege: localStorage.getItem('autorize-privilege')
            }
            this.$emit('autorization', user)
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