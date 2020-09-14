<template>
    <div class="wrapper">
        <div class="front">
            <div class="search">
                <input type="text" class="searching" placeholder="поиск">
                <label for="id">id</label>
                <input type="radio" name="type" id="id" value="id">
                <label for="email">email</label>
                <input type="radio" name="type" id="email" value="email">
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
        res: null 
    }),
    methods: {
        async Valid() {
            await axios.get(`http://localhost:3000/users/email/${localStorage.getItem('autorize-email')}`)
            .then( response => {
                if(response.data == "") {
                    window.location.href = 'http://localhost:8080/'
                }
                else {
                    this.res = response.data
                }
            })
            .catch(function (error) {
                window.location.href = 'http://localhost:8080/'
            })
            if(this.res == null){
                window.location.href = 'http://localhost:8080/'
            } else {
                if(this.res.privilege != 'admin'){
                    window.location.href = 'http://localhost:8080/'
                }
            }
        }
    },
    mounted() {
        this.Valid()
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
    *
        outline: 1px solid red
    .wrapper
        width: 100vw
        height: 100vh
        background: #1D1D1D
        .front
            max-width: 1440px
            height: 100%
            margin: 0 auto
            display: flex
            justify-content: center
            align-items: center
            .search
                display: flex
                justify-content: space-evenly
                align-items: center
                width: 100%
                height: 3%
                color: white
                .searching
                    width: 50%
                    height: 100% !important

                    

</style>