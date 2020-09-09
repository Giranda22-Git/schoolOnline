<template>
    <section class="wrapper" id="sec4">
        <div class="front">
            <div class="animate__animated" id="sec4-animate">
                <h1>
                    Курстың ерекшеліктері:
                </h1>
                <p>
                    Шабыт пен пайдалы тәжірибеге толы 5 лекция;
                    <br><br>
                    «Ұлы дала баласы» шоуына қатысуға жолдама;
                    <br><br>
                    үздік студенттер Төреғали Төреәлімен кездесу мүмкіндігіне ие болады;          
                    <br><br>
                    қосымша бонус: әр сабақ соңында тікелей эфирлер өтеді;
                    <br><br>
                    курс соңында сертификат табысталады.
                    <br><br>
                    Курстың құны: небәрі 14000 теңге (арнайы ұсыныс)
                    <br><br>
                    Курстың бағасы: небəрі 14000 теңге (арнайы ұсыныс)
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Section4'
}
</script>

<style lang="sass" scoped>
    @font-face
        font-family: SuitcaseTypeFoundryAtypRegularVariable
        src: url(../assets/AtypRegularVariable/SuitcaseTypeFoundryAtypRegularVariable.ttf)
    .wrapper
        width: 100vw
        height: 100vh
        background-color: #1D1D1D
        .front
            max-width: 1440px
            height: 100%
            margin: 0 auto
            display: flex
            flex-direction: column
            align-items: flex-start
            justify-content: center
            background: url(../assets/section4/firstElement.svg) no-repeat
            background-position-x: right
            background-position-y: 20%
            h1
                font-family: SuitcaseTypeFoundryAtypRegularVariable
                font-weight: 800
                font-size: 4vh
                color: #FA1451
                padding-left: 5vw
                padding-bottom: 5vh
            p
                font-family: SuitcaseTypeFoundryAtypRegularVariable
                font-weight: 400
                font-size: 1.9vh
                color: #FFF
                text-align: left
                padding-left: 5vw
</style>