<template>
    <div class="wrapper">
        <div class="front">
            
<span class="title"> МІНДЕТТЕР </span> <br> <br>

<span class="subTitle"> ТҰЛҒАЛАР: </span> <br>
Сатып алушы – интернет-дүкендегі/web-қосымшадағы/мобильді қосымшадағы немесе басқа да интернет-сервистерде/платформаларда сатушының кез-келген курсын (курстар пакетін) сатып алатын/сатып алған /қолданған/қолданып жүрген азамат.
Сатушы – ЖК«TORESH». <br> <br>

<span class="subTitle"> 1. ОРТАҚ ШАРТТАР </span> <br>
1.1. Сатушының кез-келген курсын (курстар пакетін) сатып алған немесе жеке кабинетке кіріп, курстың материалы мен контентін пайдаланатын Сатып алушыға осы нағыз міндеттер жүктеледі. <br>
1.2. Сатып алушы осы шарттарды адал және тиісті түрде орындауға міндетті. <br> <br>

<span class="subTitle"> 2. АВТОРЛЫҚ ҚҰҚЫҚ АЯСЫНДАҒЫ МІНДЕТТЕР </span> <br>
2.1. Сатып алушы Ұлттық (қазақстандық) заңнама немесе халықаралық құқық нормаларын, соның ішінде зияткерлік меншік, авторлық және/немесе сабақтас құқықтар саласындағы заңды бұзатын әрекеттер істемеуі тиіс. <br>
2.2. Сатып алушы Сатушының жеке кабинеттегі кез-келген материалы мен контентін (курстар) және де Сатушыға тиісті кез-келген материалды құқық иелерінің алдын-ала келісімінсіз кез-келген тәсілмен пайдалануына, жаңғыртуына, таратуына, көшіруіне, көпшілік алдында көрсетуіне, жалпы жұрттың назарына эфирге беруіне, аударуына, қайта жасауына немесе басқа да тәсілдермен қандай да бір мақсатта қолдануына тыйым салынады. <br>
2.3. Сатып алушы Сатушыдан алған жеке кабинеттің құпия сөзі мен логинін үшінші тұлғаға бермеуге, сатпауға, таратпауға міндеттеледі. <br>
2.4. Авторлар мен құқық иеленушілердің мүліктік және жеке мүліктік емес құқықтарын, заңды мүдделерін және осы міндеттеменің өзге де шарттарын бұзатын Сатып алушыға Қазақстан Республикасының қолданыстағы заңнамасына сәйкес азаматтық-құқықтық, әкімшілік және қылмыстық жауапкершіліктің кез-келген заңды шаралары қолданылуы мүмкін. Заңды шаралардың ішіне ескерту, бұғаттау, алып тастау және заңды бұзған күнінен бастап Қазақстан Республикасының Республикалық бюджет туралы заңнамасында белгіленген 1000 (мың) АЕК-ке дейінгі (айлық есептік көрсеткіш) айыппұл салынады. Сатушы жоғарыда аталған шаралардың кез-келгенін өз қалауы бойынша қолдануға құқылы. Сатушы жоғарыда көрсетілген айыппұл мөлшерін өз қалауы бойынша азайтуға құқылы.
<br> <br>
<span class="subTitle"> 3. БАСҚА ШАРТТАР </span> <br>
3.1. Осы міндеттен туындауы мүмкін даулар Қазақстан Республикасының қолданыстағы заңнамасына сәйкес шешілуі тиіс. <br>
3.2. Соттың осы міндеттеменің қандай да бір ережесін жарамсыз деп тануы бұл міндеттемедегі өзге ережелердің жарамсыз болуына әкеп соқпайды. <br>
3.3.Сатып алушы осы міндеттеменің ережелерін бұзған жағдайда Сатушы тарапынан әрекет болмаса, Қазақстан Республикасының қолданыстағы заңнамасына сәйкес Сатушы өз мүдделері мен құқықтарын қорғау үшін тиісті іс-әрекеттерді кешірек қолдану құқығынан айырылмайды. <br>
Сатып алушы осы міндеттеменің барлық тармақтарымен танысқанын растайды. Оларды қабылдайды және келіседі. <br>

        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'OBJECTIVES',
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
        height: 120vh
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