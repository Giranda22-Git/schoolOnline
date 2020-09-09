<template>
    <section class="wrapper" id="sec2">
        <div class="front">
            <div class="left-content-wrapper animate__animated" id="sec2-left-animate">

            </div>
            <div class="right-content-wrapper animate__animated" id="sec2-right-animate">

            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'section2'
}
</script>

<style lang="sass" scoped>
    .wrapper
        width: 100vw
        height: 100vh
        background: #1D1D1D;
        .front
            max-width: 1440px
            height: 100%
            margin: 0 auto
            display: flex
            .left-content-wrapper,
            .right-content-wrapper
                width: 50%
                height: 100%
            .right-content-wrapper
                background: url(../assets/section2/secondElement.svg) center no-repeat
            .left-content-wrapper
                background: url(../assets/section2/firstElement.svg) no-repeat
                background-position-x: 70%
                background-position-y: 15%
</style>