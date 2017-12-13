<template>
  <div class="top">
    <transition name="fade">
      <div class="thumbnail-wrap" v-if="isVisibleUser" @click="isVisibleUser = !isVisibleUser">
        <img :src="imgURL" alt="" class="thumbnail">
      </div>
    </transition>
    <transition name="fade">
      <div class="sns-wrap" v-if="isVisibleSNS" @click="isVisibleSNS = !isVisibleSNS">
      </div>
    </transition>
    <div class="users">
      <div class="user" v-for="user in users" @click="isVisibleUser = !isVisibleUser">
        <div class="name">{{user.name}}</div>
      </div>
    </div>
    <div class="btns">
      <nuxt-link to="me">
        <div class="me">
          <img src="/images/gang.svg" alt="">
        </div>
      </nuxt-link>
      <div class="online-offline">
        <input type="checkbox" id="state" class="state-button">
        <label for="state" :style="{backgroundColor: statusColor}" @click="changeStatus"></label>
      </div>
      <div class="sns" @click="isVisibleSNS = !isVisibleSNS">
        <img src="/images/sns.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        imgURL: 'https://avatars0.githubusercontent.com/u/17114906?s=460&v=4',
        users: [
          {name: '田中　太郎'},
          {name: '大阪　太郎'},
          {name: '北海道　太郎'},
          {name: '東京　太郎'},
          {name: '子　太郎'},
          {name: '中　太郎'},
          {name: 'たたた　太郎'},
          {name: 'それはもう　太郎'},
          {name: '宝くじ　当て太郎'},
          {name: '田中　太郎'},
          {name: '大阪　太郎'},
          {name: '北海道　太郎'},
          {name: '東京　太郎'},
          {name: '子　太郎'},
          {name: '中　太郎'},
          {name: 'たたた　太郎'},
          {name: 'それはもう　太郎'},
          {name: '宝くじ　当て太郎'}
        ],
        isVisibleUser: false,
        isVisibleSNS: false,
        statusColor: '#ddd',
        online: false
      }
    },
    methods: {
      changeStatus () {
        if (!this.online) {
          this.statusColor = '#336E7B'
          this.online = true
          return
        }
        if (this.online) {
          this.statusColor = '#ddd'
          this.online = false
        }
      }
    }
  }
</script>

<style scoped>
  a{
    text-decoration: none;
  }

  .top {
    height: 100vh;
  }

  .thumbnail-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.6);
    z-index: 1;
  }
  .sns-wrap{
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.6);
    z-index: 1;
  }

  .thumbnail-wrap .thumbnail {
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0
  }

  header {
    width: 100%;
    padding: 15px;
  }

  .users {
    width: 100%;
    height: 80vh;
    margin: 0 auto;
    overflow: auto;
  }

  .user {
    display: flex;
    background: #f8f8f8;
    border-bottom:solid 2px #fff;
  }

  .user:nth-child(3n) {
    background:  #336E7B;
  }

  .user .name {
    font-size: 12px;
    font-weight: 800;
    color: #2c3e50;
    padding: 18px 18px 18px 30px;
    width:100%;
  }

  .me{
    position: absolute;
    bottom:30px;
    width:40px;
    left:15%;
    transform:translate(-50%,0);
    border-bottom:solid 2px;
    color:#2c3e50;
  }
  .me img{
    width:100%;
  }
  .sns{
    position: absolute;
    bottom:30px;
    left:85%;
    transform:translate(-50%,0);
    width:40px;
    border-bottom:solid 2px;
    color:#2c3e50;
  }
  .sns img{
    width:100%;
  }
  .online-offline{
    position: absolute;
    bottom:15px;
    left:50%;
    transform:translate(-50%,0);
  }
  .online-offline .state-button{
    display: none;
  }
  .online-offline label{
    position: relative;
    display: inline-block;
    top:-10px;
    height:50px;
    width:50px;
    border:none;
    border-radius:2px;
    box-shadow: 0 0 4px rgba(0,0,0,0.4);
    transition: background-color ease 0.3s;
  }
  .online-offline #state:checked + label{
    background:#2c3e50;
  }
</style>
