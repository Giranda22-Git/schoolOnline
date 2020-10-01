<template>
    <div class="wrapper">
        <div class="front ">
            <div class="left-content-wrapper animate__animated animate__bounceInLeft">
                <div class="autorized" >
                    <div class="account_icon"></div>
                    <div class="username"> {{ autorizedData.lastName }} {{ autorizedData.firstName }} </div>
                </div>
                <div class="video-link">
                    <ul>
                        <div class="panel"
                            v-for="index in VideoList"
                            :key="index._id"
                        >
                            <router-link 
                                v-if="autorizedData.privilege == 'admin' || autorizedData.privilege == 'premium' && index.isOpen"
                                :to='{ path: `/watch/${ index._id }` }'
                                @click="returnData(index)"
                            ></router-link>
                            <span>{{ index.title }}</span> <span class="date">&nbsp; {{ index.date }} </span>
                        </div>
                        <router-link to="/Account" class="post-data a">
                            <span>ҮЙ ТАПСЫРМАСЫ</span>
                        </router-link>
                        <router-link to="/Account" class="post-data a">
                            <span>27 қазан сағат 00:00 дейін <br> ҮЙ ТАПСЫРМАСЫН ЖҮКТЕ</span>
                        </router-link>
                        <router-link to="/Account" class="post-data a">
                            <span>Сертификат</span>
                        </router-link>
                    </ul>
                </div>
            </div>
            <div class="right-content-wrapper animate__animated animate__bounceInRight">
                <div class="Comp1"></div>
                <div class="Comp2"></div>
                <div class="Comp3"></div>
                <div class="Comp4"></div>
                <div class="Comp5">Басталуы: 15 қазан</div>
                <a href="/admin" v-if="autorizedData.privilege == 'admin' "> Admin </a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
const $ = require( "jquery" )
export default {
    name: 'Account',
    data: () => ({
        isModalVisible: false,
        theme: "locked",
        isTheme: false
    }),
    props: {
        autorizedData: {
            type: Object,
            default: () => {}
        },
        VideoList: {
            type: Array,
            default: []
        }
    },
    watch: {
        autorizedData(newVal, oldVal){
            this.autorizedData = newVal
            if(this.autorizedData.privilege != 'premium' || this.autorizedData.privilege != 'admin'){
                this.isTheme = false
            } else {
                this.isTheme = true
            }
        }
    },
    methods: {
        returnData(data) {
            this.$emit('VideosDataInput', data)
        },
        autorized(data) {
            this.$emit('autorized', data)
        },
        close() {
            this.isModalVisible = false
        },
        open() {
            this.isModalVisible = true
        },
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
        if(this.autorizedData.privilege != 'premium' || this.autorizedData.privilege != 'admin') {
            this.isTheme = false
        } else {
            this.isTheme = true
        }
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
        height: 100vh
        background: #1D1D1D
        .front
            max-width: 1440px
            height: 100%
            margin: 0 auto
            display: flex
            position: relative
            .modalSettings
                position: absolute
                top: 50%
                left: 50%
                transform: translate(-50%, -50%)
                z-index: 50
            .left-content-wrapper
                width: 40%
                height: 100%
                display: flex
                flex-direction: column
                justify-content: space-evenly
                align-items: center
                position: relative
                z-index: 20
                .video-wrapper
                    height: 40%
                    width: 100%
                    display: flex
                    justify-content: center
                    align-items: center
                .autorized
                    display: none
                .video-link
                    height: 60%
                    width: 100%
                    ul
                        display: flex
                        flex-direction: column
                        justify-content: space-evenly
                        align-items: center
                        height: 100%
                        .panel
                            width: 80%
                            height: 10%
                            border-radius: 15px
                            background-color: #3D3D3D
                            display: flex
                            align-items: center
                            justify-content: center
                            text-decoration: none
                            position: relative
                            a
                                width: 100%
                                height: 100%
                                border-radius: 15px
                                display: flex
                                align-items: center
                                justify-content: center
                                text-decoration: none
                                position: absolute
                        .a
                            width: 80%
                            height: 10%
                            border-radius: 15px
                            background-color: #3D3D3D
                            display: flex
                            align-items: center
                            justify-content: center
                            text-decoration: none
                            position: relative
                        .date
                            color: white
                            margin-left: 2%
                        span
                            color: #FA1452
                            font-family: GothamBold
                            font-size: 2vh
                            display: block
                        .post-data
                            background-color: #fff


            .right-content-wrapper
                width: 60%
                height: 100%
                position: relative
                z-index: 1
                .Comp1
                    width: 60%
                    height: 40%
                    background: url(../assets/Comp/Comp1.svg) center no-repeat
                    position: absolute
                    bottom: 14%
                    right: 10%
                    z-index: 1
                .Comp2
                    width: 60%
                    height: 40%
                    background: url(../assets/Comp/Comp2.svg) center no-repeat
                    position: absolute
                    left: -14%
                    bottom: 20%
                    z-index: 1
                .Comp3
                    width: 60%
                    height: 40%
                    background: url(../assets/Comp/Comp3.svg) center no-repeat
                    position: absolute
                    top: 11%
                    left: 17%
                    z-index: 1
                .Comp4
                    width: 100%
                    height: 40%
                    background: url(../assets/Comp/Comp4.svg) center no-repeat
                    position: absolute
                    top: 20%
                    left: 0%
                    z-index: 1
                .Comp5
                    width: 100%
                    position: absolute
                    bottom: 45%
                    left: 0
                    text-align: center
                    font-family: GothamLight
                    color: white
                    font-size: 3.1vh
                    font-weight: 100
                    z-index: 1
                .options_mobile
                    display: none
                
                a
                    font-family: GothamBold
                    font-size: 2.5vh
                    color: white
                    background: rgb(245, 0, 65)
                    border: none
                    padding: 1.5% 2% 1% 2%
                    border-radius: 22px
                    box-shadow: 0px 0px 23px #FA1452;
                    margin-top: 6%
                    outline: none
                    cursor: pointer
                    width: 20vw
                    height: 5vh
                    position: absolute
                    right: 0
                    top: 15%
                    z-index: 2
                    text-decoration: none
                    color: white
                    display: block
                    text-align: center
    @media screen and ( max-width: 480px )
        .front
            display: flex !important
            flex-direction: column !important
            .left-content-wrapper
                margin-top: 10vh !important
                width: 100% !important
                height: 85% !important
                .video-wrapper
                    display: none !important
                .autorized
                    display: block !important
                    color: white 
                    font-family: GothamMedium
                    position: relatived
                    width: 100%
                    height: 12Tcvw
                    .account_icon
                        display: none
                    .username
                        text-align: center
                .video-link
                    height: 80vh !important
                    ul
                        display: flex
                        flex-direction: column
                        justify-content: space-evenly
                        align-items: center
                        height: 100% !important
                        a
                            width: 80%
                            height: 10%
                            border-radius: 15px
                            background-color: #3D3D3D
                            display: flex
                            align-items: center
                            justify-content: center
                            text-decoration: none
                            pointer-events: none !important
                            span
                                color: #FA1452
                                font-family: GothamBold
                                font-size: 2vh
                                display: block
            .right-content-wrapper
                width: 100% !important
                height: 30vw !important
                .router
                    display: none !important
                .Comp1
                    display: none !important
                .Comp2
                    display: none !important
                .Comp3
                    display: none !important
                .Comp4
                    display: none !important
                .Comp5
                    display: none !important
                .Comp6
                    display: none !important
                a
                    display: none !important

    
</style>