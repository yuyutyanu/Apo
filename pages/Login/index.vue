<template>
  <div class="full-background">
    <div class="login-form-wrapper">
      <div class="login-form">
        <h1 class="login-form__title">Apo</h1>
        <input type="text" placeholder="id">
        <input type="password" placeholder="pass">
        <nuxt-link to="/">
          <button>LOGIN</button>
        </nuxt-link>
      </div>
    </div>
    <nuxt-link to="register">
      <span class="to-register">新規登録はこちら</span>
    </nuxt-link>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        message: ''
      }
    }
  }
</script>

<style scoped>
  a{
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

  .login-form input {
    width: 100%;
    padding: 5px 10px;
    font-size: 14px;
    margin-bottom: 20px;
    border-radius: 3px;
    border: none;
    outline: none;
    color: #2c3e50;
  }

  .login-form button {
    display: block;
    margin-left: auto;
    background: #2c3e50;
    color: #f8f8f8;
    padding: 10px;
    border-radius: 3px;
    border: none;
    outline: none;
  }

  .to-register {
    position: absolute;
    bottom: 20px;
    right: 20px;
    font-size: 14px;
    color:#2c3e50;
  }
</style>