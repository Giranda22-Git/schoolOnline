<template>
    <div class="wrapper">
        <div id="video">

        </div>
    </div>
</template>

<script>
import axios from 'axios'
const $ = require( "jquery" )
export default {
    name: "Videos",
    data: () => ({
        videoData: null
    }),
    mounted() {
        let vm = this
        axios.get('http://localhost:3000/Videos/' + this.$route.params.id)
        .then( response => {this.videoData = response.data})
        .catch(function (error) {
            console.log(error);
        })
        .then(inCache => {
            var el = document.createElement("iframe");
            el.id = "iframe";
            el.style.width = "100%";
            el.style.height = "100%";
            el.setAttribute("frameborder", 0)
            el.setAttribute("allowfullscreen", 1)
            el.src = this.videoData.src;
            document.querySelector('#video').appendChild(el);
        })

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
    },
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
    }
}
</script>

<style lang="sass" scoped>
    .wrapper
        width: 100vw
        height: 98.8vh
        #video
            width: 100%
            height: 100%
            padding-top: 50px
</style>