<template>
    <div class="wrapper">
        <svg @click="close()" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x close" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
        <label for="file">{{filename}}</label>
        <input style="display: none" name="file" id="file" type="file" @change="handleFileUpload()" ref="file">
        <progress max="100" :value.prop="uploadPercentage"></progress>
        <button @click="sendFile()">ЖІБЕРУ</button>
    </div>
</template>

<script>
import axios from 'axios'
import sweetalert2 from 'sweetalert2'
export default {
    name: 'modalFileLoad',
    data: () => ({
        file: null,
        filedata: null,
        filename: 'ВИДЕОНЫ ТАҢДАУ',
        uploadPercentage: 0
    }),
    props: {
        autorizedData: {
            type: Object,
            default: () => {}
        }
    },
    methods: {
        close () {
            this.$emit('close')
        },
        handleFileUpload () {
            if (this.$refs.file.files.length === 0) this.file = null
            else {
                this.file = this.$refs.file.files
                this.filename = this.file[0].name
            }
        },
        async sendFile (res, rej) {
            if (this.file) {
                const formData = new FormData()
                formData.append('file', this.file[0])
                formData.append('owner', this.autorizedData.lastName + ' ' + this.autorizedData.firstName)
                await axios.post('http://localhost:3000/upload',
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        },
                        onUploadProgress: function(progressEvent) {
                            this.uploadPercentage = parseInt(Math.round(( progressEvent.loaded / progressEvent.total) * 100))
                        }.bind(this)
                    }
                )
                .then(response => {
                    if (response.data !== null) {
                        this.filedata = response.data
                        sweetalert2.fire({
                            title: 'OK',
                            text: 'спасибо мы обязательно оценим ваше видео',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        })
                        .then(() => {
                            this.close()
                        })
                    }
                })
                .catch(() => {
                    sweetalert2.fire({
                        title: 'Ошибка',
                        text: 'произошла какая то ошибка либо вы уже загружали видео',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    })
                })
                this.filedata = null
                this.file = null
                this.filename = 'ВИДЕОНЫ ТАҢДАУ'
                this.uploadPercentage = 0
            }
        }
    }
}
</script>

<style lang="sass" scoped>
    .wrapper
        width: 70% !important
        height: 40% !important
        border-radius: 25px
        background-color: darken(#1D1D1D, 6.25%) !important
        display: flex
        flex-direction: column
        justify-content: space-evenly
        align-items: center
        position: fixed
        z-index: 1000
        left: 50%
        top: 50%
        transform: translate(-50%, -50%)
        font-size: 2.8vw
        text-align: center
        color: white
        padding: 4%
        font-family: sans-serif
        .close
            font-size: 5vh
            position: fixed
            z-index: 1001
            right: 0
            top: 0
        button
            width: 50%
            height: 20%
            font-size: 4vh
            display: flex
            justify-content: center
            align-items: center
            background-color: #3D3D3D
            color: #FA1452
            outline: none
            border: none
            cursor: pointer
        label
            font-size: 4vh
            width: 50%
            height: 25%
            display: flex
            justify-content: center
            align-items: center
            background-color: #FA1451
            color: black
            cursor: pointer

    @media screen and (max-width: 480px)
        .wrapper
            justify-content: space-evenly !important
            width: 90% !important
            height: 40% !important
            background-color: darken(#1D1D1D, 6.25%) !important
        button, label
            font-size: 5vw !important
</style>