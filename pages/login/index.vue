<template>
  <div class="full-background">
    <div class="login-form-wrapper">
      <div class="login-form">
        <h1 class="login-form__title">Apo</h1>
        <div class="google-login" @click="gmailLogin">
          <img src="/images/google-plus.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as firebase from 'firebase'

  export default{
    created () {
      this.provider = new firebase.auth.GoogleAuthProvider()
    },
    data () {
      return {
        provider: ''
      }
    },
    methods: {
      gmailLogin () {
        firebase.auth().signInWithRedirect(this.provider)
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }

  .login-form-wrapper {
    width: 100%;
    height: 100vh;
    position: relative;
  }

  .login-form {
    width: 50%;
    margin: 0 auto;
    text-align: center;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%)
  }

  .login-form__title {
    font-size: 70px;
    margin-bottom: 100px;
    color: #2c3e50;
    position: relative;
  }

  .login-form__title:before {
    content: '';
    position: absolute;
    bottom: 0;
    min-width: 50px;
    max-width: 50px;
    left: 50%;
    transform: translate(-50%, 0);
    height: 5px;
    background: #2c3e50;
  }

  .google-login{
    width:50px;
    margin:0 auto;
  }
  .google-login img{
    width:100%;
  }
</style>