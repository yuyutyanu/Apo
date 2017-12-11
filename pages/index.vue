<template>
  <div class="top">
    <transition name="fade">
      <div class="thumbnail-wrap" v-if="isVisibleUser" @click="isVisibleUser = !isVisibleUser">
        <img :src="imgURL" alt="" class="thumbnail">
      </div>
    </transition>
    <transition name="fade">
      <div class="thumbnail-wrap" v-if="isVisibleSNS" @click="isVisibleSNS = !isVisibleSNS">
        <img :src="imgURL" alt="" class="thumbnail">
      </div>
    </transition>
    <div class="users">
      <div class="user" v-for="user in users" @click="isVisibleUser = !isVisibleUser">
        <div class="name">{{user.name}}</div>
      </div>
    </div>
    <footer>
      <nuxt-link to="me">
        <button>Me</button>
      </nuxt-link>
      <button class="online-offline" @click="changeStatus" :style="{backgroundColor: statusColor}">Online/Offline</button>
      <button @click="isVisibleSNS = !isVisibleSNS">Sns</button>
    </footer>
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
          {name: '宝くじ　当て太郎'}
        ],
        isVisibleUser: false,
        isVisibleSNS: false,
        statusColor: '#2c3e50',
        online: false
      }
    },
    methods: {
      changeStatus () {
        if (!this.online) {
          this.statusColor = '#FD6964'
          this.online = true
          return
        }
        if (this.online) {
          this.statusColor = '#2c3e50'
          this.online = false
        }
      }
    }
  }
</script>

<style scoped>
  .top {
    height: 100vh;
  }

  .thumbnail-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.6);
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
    background:  #FD6964;
  }

  .user .name {
    font-size: 17px;
    font-weight: 800;
    color: #2c3e50;
    padding: 20px 20px 20px 40px;
  }

  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 25px;
    text-align: center;
  }

  footer button {
    background: #2c3e50;
    color: #f8f8f8;
    padding: 15px;
    border: none;
    margin-left: 40px;
    outline: none;
  }

  footer button:first-child {
    margin: 0;
  }
</style>
