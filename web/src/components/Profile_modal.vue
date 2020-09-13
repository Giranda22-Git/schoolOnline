<template>
    <div class="wrapper">
        <div class="account-fixed"></div>
        <div class="information">
            <div class="name">Смагулов Кайрат</div>
            <div class="mail">kairat@gmail.com</div>
        </div>
        <a href="#">курс</a>
    </div>
</template>

<script>
export default {
    name: "Profile_modal"
}
</script>

<style lang="sass" scoped>
    .wrapper
        width: 70%
        height: 27vh
        border-radius: 50px
        border: 1px solid #FFFFFF
        background-color: #3d3d3d
        position: absolute
        z-index: 99
        transform: translateX(-5.5%) translateY(-5.5%)
        .account-fixed
            width: 13vw
            height: 13vw
            position: absolute
            left: 4vh
            top: 11vh
            border-radius: 50%
            border: 1px solid #FFF
            background: #3D3D3D url(../assets/user1.svg) center no-repeat
            background-size: 45%
        .information
            color: white
            font-family: GothamLight
            position: absolute
            top: 11.5vh
            left: 10.5vh
            .name
                font-size: 2vh
            .mail
                font-size: 1.5vh
        a
            color: white
            width: 70%
            font-family: RobotoLight
            position: absolute
            top: 18.5vh
            left: 15%
            text-decoration: none
            font-size: 4vh !important
            text-align: center
            border-bottom: 1px solid #FFFFFF
</style>