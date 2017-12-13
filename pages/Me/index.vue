<template>
  <div class="me">
    <header>
      <div class="thumbnail-wrapper">
        <img class="thumbnail" src="https://avatars0.githubusercontent.com/u/17114906?s=460&v=4" alt="">
      </div>
    </header>
    <div class="contents">
      <div>
        <input type="text" placeholder="みんなに見える名前"><span></span>
      </div>
      <div class="edit-password-form">
        <div>
          <input type="password" placeholder="現在のパスワード">
        </div>
        <div>
          <input type="password" placeholder="新しいパスワード">
        </div>
        <div>
          <input type="password" placeholder="新しいパスワード(確認)">
        </div>
      </div>
      <button class="edit-button">変更する</button>
    </div>
    <footer>

    </footer>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        isVisible: false
      }
    }
  }
</script>

<style scoped>
  .me {
    height: 100vh;
    position: relative;
  }

  header {
    padding:40px;
  }

  header .thumbnail-wrapper {
    width:100px;
    margin:0 auto;
    position: relative;
  }
  header .thumbnail-wrapper:before{
    content:"";
    background:url(/images/camera.svg);
    background-size:30px;
    width:30px;
    height:30px;
    bottom:0;
    right:0;
    position: absolute;
  }

  header .thumbnail-wrapper .thumbnail {
    border-radius:100%;
    width:100%;
  }

  .contents {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }

  .contents input {
    background:rgba(0,0,0,0);
    border:none;
    outline: none;
    width:100%;
    padding:20px;
    font-size:14px;
    color:#2c3e50;
    text-align: center;
  }
  .contents .edit-password-form{
    /*border-bottom:solid 2px #2c3e50;*/
  }

  .contents .edit-button {
    background: #2c3e50;
    border: solid 2px #fff;
    padding:15px;
    color: #f8f8f8;
    margin-top:20px;
  }
  footer{
    position: absolute;
    bottom:0;
    background: #2c3e50;
    padding:60px;
    width:100%;
  }
</style>