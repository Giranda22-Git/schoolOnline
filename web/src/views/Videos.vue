<template>
    <div class="wrapper">
        <div class="top-wrapper">
            <div class="player animate__animated animate__bounceInLeft"></div>
            <div class="name-wrapper animate__animated animate__bounceInRight">
                <div class="text">
                    <h3><span id="video_id">1</span>. Сөз қадірің өз қадірің! </h3>
                    <h3><span id="video_id">2</span>. Киелі сахна</h3>
                    <h3><span id="video_id">3</span>. Театр, кино!</h3>
                    <h3><span id="video_id">4</span>. Әннің де естісі бар есері бар </h3>
                    <h3><span id="video_id">5</span>. Табыс формуласы</h3>
                </div>
            </div>
        </div>
        <div class="bot-wrapper">
            <div class="bot-content" v-show="screen">
                <div class="line1">
                    <div class="video1 animate_animated" id="player">
                        <div id="video_num" class="vid_num">1</div>
                        <h3><span id="video_id">1</span>. Сөз қадірің өз қадірің! </h3>
                    </div>
                    <div class="video2 animate_animated" id="player">
                         <div id="video_num" class="vid_num">2</div>
                         <h3><span id="video_id">2</span>. Киелі сахна</h3>
                    </div>
                    <div class="video3" id="player">
                         <div id="video_num" class="vid_num">3</div>
                          <h3><span id="video_id">3</span>. Театр, кино!</h3>
                    </div>
                </div>
                <div class="line2">
                    <div class="video4" id="player">
                         <div id="video_num" class="vid_num">4</div>
                         <h3><span id="video_id">4</span>. Әннің де естісі бар есері бар </h3>
                    </div>
                    <div class="video5" id="player">
                         <div id="video_num" class="vid_num">5 </div>
                        <h3><span id="video_id">5</span>. Табыс формуласы</h3>
                    </div>
                </div>
            </div>


            <div class="bot-content" v-show="!screen">
                    <div class="mob_video1" @click="mobile_player(1)">
                        <h3><span id="video_id">1</span>. Сөз қадірің өз қадірің! </h3>
                        <img src="../assets/Player_ex.svg" class="vid1">
                    </div>
                    <div class="mob_video2" @click="mobile_player(2)">
                         <h3><span id="video_id">2</span>. Киелі сахна</h3>
                        <img src="../assets/Player_ex.svg" class="vid2">
                    </div>
                    <div class="mob_video3" @click="mobile_player(3)">
                          <h3><span id="video_id">3</span>. Театр, кино!</h3>
                        <img src="../assets/Player_ex.svg" class="vid3">
                    </div>
                    <div class="mob_video4" @click="mobile_player(4)">
                         <h3><span id="video_id">4</span>. Әннің де естісі бар есері бар </h3>
                        <img src="../assets/Player_ex.svg" class="vid4">
                    </div>
                    <div class="mob_video5" @click="mobile_player(5)">
                        <h3><span id="video_id">5</span>. Табыс формуласы</h3>
                        <img src="../assets/Player_ex.svg" class="vid5">
                    </div>
                
            </div>
        </div>
    </div>
</template>

<script>
const $ = require( "jquery" )
export default {
    name: "Videos",
    data: () => ({
        screen: true,
        open1: false,
        open2: false,
        open3: false,
        open4: false,
        open5: false
    }),
    mounted(){
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            this.screen = false
            console.log('123')
        }
        else{
            this.screen = true
        }
    },
    methods:{
        mobile_player(vid_num){
            if (vid_num = 1) {
                if (this.open1) {
                $('.mob_video1').css({'height': '10vh'})
                $('.vid1').css({'height': '0vh'})
                console.log(vid_num)
                this.open1 = false
                }else{
                $('.mob_video1').css({'height': '35vh'})
                $('.vid1').css({'height': '25vh'})
                this.open1 = true
                }   
            }
            if (vid_num = 2) {
                if (this.open2) {
                $('.mob_video2').css({'height': '10vh'})
                $('.vid2').css({'height': '0vh'})
                console.log(vid_num)
                this.open2 = false
                }else{
                $('.mob_video2').css({'height': '35vh'})
                $('.vid2').css({'height': '25vh'})
                this.open2 = true
                }   
            }
            if (vid_num = 3) {
                if (this.open3) {
                $('.mob_video3').css({'height': '10vh'})
                $('.vid3').css({'height': '0vh'})
                console.log(vid_num)
                this.open3 = false
                }else{
                $('.mob_video3').css({'height': '35vh'})
                $('.vid3').css({'height': '25vh'})
                this.open3 = true
                }   
            }
            if (vid_num = 4) {
                if (this.open4) {
                $('.mob_video4').css({'height': '10vh'})
                $('.vid4').css({'height': '0vh'})
                console.log(vid_num)
                this.open4 = false
                }else{
                $('.mob_video4').css({'height': '35vh'})
                $('.vid4').css({'height': '25vh'})
                this.open4 = true
                }   
            }
            if (vid_num = 5) {
                if (this.open5) {
                $('.mob_video5').css({'height': '10vh'})
                $('.vid5').css({'height': '0vh'})
                console.log(vid_num)
                this.open5 = false
                }else{
                $('.mob_video5').css({'height': '35vh'})
                $('.vid5').css({'height': '25vh'})
                this.open5 = true
                }   
            }
        }
    }
}
</script>

<style lang="sass" scoped>
    .wrapper
        width: 100vw
        height: 130vh
        img
            display: none
        .top-wrapper
            height: 60%
            background-color: black
            opacity: 0.87
            display: flex
            flex-direction: row
            .player
                height: 78%
                width: 73%
                background: url("../assets/Player_ex.svg") center no-repeat
                margin-left: 15vh
                margin-top: 12vh
            .name-wrapper
                margin-right: 5vw
                margin-top: 23vh
                height: 65%
                width: 15%
                font-family: GothamBold
                font-size: 1.4vh
                background-color: #3d3d3d
                color: #FA1452
                .text
                    padding-left: 0.5vw 
        .bot-wrapper
            height: 40%
            background-color: #3d3d3d
            display: flex
            flex-direction: column
            align-items: center
            .bot-content
                height: 100%
                width: 70%
                display: flex
                flex-direction: column
                .line1
                    padding-top: 3vh
                    display: flex
                    flex-direction: row
                    justify-content: space-around
                    height: 50%
                    .video1, .video2,.video3
                        height: 90%
                        width: 30%
                        background: url("../assets/Player_ex.svg") center no-repeat
                        background-size: 100%
                        h3
                            margin-top: 6vh
                            padding-left: 2vh
                            font-family: GothamBold
                            font-size: 1.6vh
                            color: #FA1452
                        .vid_num
                            margin-left: 1vh
                            font-family: GothamMedium
                            color: white
                            font-size: 9vh
                .line2
                    padding-top: 3vh
                    display: flex
                    flex-direction: row
                    height: 50%
                    width: 100%
                    justify-content: center
                    .video4,.video5
                        height: 90%
                        width: 30%
                        background: url("../assets/Player_ex.svg") center no-repeat
                        background-size: 100%
                        margin: 2.5vh
                        margin-top: 0 !important
                        h3
                            margin-top: 6vh
                            padding-left: 2vh
                            font-family: GothamBold
                            font-size: 1.6vh
                            color: #FA1452
                        .vid_num
                            margin-left: 2vh
                            font-family: GothamMedium
                            color: white
                            font-size: 9vh
    @media screen and ( max-width: 480px )
        .wrapper
            height: 180vh !important
            .top-wrapper
                display: none !important
            .bot-wrapper
                margin-top: 7vh !important
                height: 100% !important
                background-color: black !important
                .bot-content
                    width: 100% !important
                    .mob_video1
                        height: 10vh
                    .mob_video2
                        height: 10vh
                    .mob_video3
                        height: 10vh
                    .mob_video4
                        height: 10vh
                    .mob_video5
                        height: 10vh
                    .mob_video1, .mob_video2, .mob_video3, .mob_video4, .mob_video5
                        h3
                            background-color: #3d3d3d
                            color: #FA1452
                            padding: 2vh
                            font-size: 2.5vh
                            font-family: GothamLight
                            text-align: center
                        .vid1, .vid2, .vid3, .vid4, .vid5
                            display: block
                            transition: 1s
                            width: 100%
                            height: 0vh
                        
</style>