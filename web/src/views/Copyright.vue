<template>
    <div class="wrapper">
        <div class="front">
            <span class="title"> Авторлық құқық жөніндегі ескерту </span> <br> <br>

            <span class="subTitle"> Сайт контенті </span> <br>
            https://udb.kz/, @toregalitoreali, t.me/toresh, //bit.ly/ToregaliToreali, vk.com/toregalitoreali сияқты веб-сайттардың, инстаграм парақшаның, YOUTUBE, Telegram, ВКонтакте, аккаунттың барлық контенті (әсіресе, онлайн білім беруге қатысты барлық курстар; сурет пен бейнероликтер; мәтіндер т.б.) авторлық құқықпен қорғалған. <br>
            Компанияның жазбаша келісімінсіз «UDB Online School» контентін рұқсатсыз (кез келген мақсатта) қолдануға, толық не жартылай көшіруге, өзгертуге және таратуға тыйым салынады. <br>
            Контент құқығы ЖК«TORESH» және «TTT PRODUCTION» компаниясына тиесілі. Барлық құқық қорғалған. Авторлық құқықты кез-келген жолмен бұзған жағдайда, Қазақстан Республикасының заңнамасына сәйкес азаматтық, әкімшілік және қылмыстық жауапкершілікке тартылады. <br>
            <br>
            <span class="subTitle"> Өнім белгісі </span> <br>
            Компания өнімі мен қызметінің белгілері, логотипі, суреттері сондай-ақ, «UDB Online School» атауы тіркелген және бізге тиесілі. Барлық құқық қорғалған. Үшінші жақтың бренд атауын, тауар белгісін т.б. қолдануы заңсыз және сол үшін жауапқа тартылады. <br>

        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Copyright',
    methods: {
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
            .subTitle
                color: white
                font-family: GothamBold
</style>