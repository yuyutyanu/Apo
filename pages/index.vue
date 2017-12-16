<template>
  <div class="top">
    <header>
      <nuxt-link to="/Timeline">
        <span>Timeline</span>
      </nuxt-link>
      <nuxt-link to="/FriendRequest">
        <span>Friend-Request</span>
      </nuxt-link>
    </header>
    <transition name="fade">
      <div class="sns-wrap" v-if="isVisibleSNS" @click="isVisibleSNS = !isVisibleSNS">
      </div>
    </transition>
    <div class="users">
      <div class="user" v-for="user in users" @click="isVisibleUser = !isVisibleUser">
        <div class="thumbnail">
          <img :src="user.thumbnail" alt="">
        </div>
        <div class="name">{{user.name}}</div>
      </div>
    </div>
    <footer>
      <div class="btns">
        <div class="reserve" @click="isVisibleSNS = !isVisibleSNS">
          <img src="/images/clock.svg" alt="">
        </div>
        <div class="online-offline">
          <input type="checkbox" id="state" class="state-button">
          <label for="state" :style="style" @click="changeStyle"></label>
        </div>
        <div class="sns" @click="isVisibleSNS = !isVisibleSNS">
          <img src="/images/sns.svg" alt="">
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import faker from 'faker'
  var users = []
  for (var i = 0; i < 20; i++) {
    users.push({name: faker.name.findName(), thumbnail: faker.image.avatar()})
  }
  console.log(users)
  export default{
    data () {
      return {
        imgURL: 'https://avatars0.githubusercontent.com/u/17114906?s=460&v=4',
        users: users,
        isVisibleUser: false,
        isVisibleSNS: false,
        style: {
          backgroundColor: '#ddd'
        },
        online: false
      }
    },
    methods: {
      changeStyle () {
        if (!this.online) {
          this.style.backgroundColor = '#336E7B'
          this.online = true
          return
        }
        if (this.online) {
          this.style.backgroundColor = '#ddd'
          this.online = false
        }
      }
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #f8f8f8;
  }

  .top {
    min-height: 100vh;
    background: #f8f8f8;
  }

  header {
    padding: 10px;
    width: 100%;
    background: #2c3e50;
  }

  header span {
    margin-left: 10px;
  }

  .sns-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.6);
    z-index: 1;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0
  }

  .users {
    width: 100%;
    height: 75vh;
    margin: 0 auto;
    overflow: auto;
  }

  .user {
    display: flex;
    background: #f8f8f8;
  }
  .user:nth-child(3n){
    background: #336E7B;
  }
  .user:nth-child(3n) .name {
    color: #f8f8f8;
  }
  .user .thumbnail{
    display: inline-block;
    height:54px;
    min-width:54px;
    max-width:54px;
    border-radius:3px;
    background-size:100%;
  }
  .user .thumbnail img{
    width:100%;
  }

  .user .name {
    display: inline-block;
    font-size: 12px;
    font-weight: 800;
    color: #2c3e50;
    padding: 18px;
    width: 100%;
  }
  footer{
    padding:15px;
  }
  .btns {
    width: 100%;
    text-align: center;
  }

  .reserve {
    margin-left: 10px;
    margin-top: 8px;
    width: 40px;
    vertical-align: top;
    padding: 5px;
    box-sizing: border-box;
    color: #2c3e50;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
    border: none;
    border-radius: 2px;
    background: #ddd;
    display: inline-block;
  }

  .reserve img {
    width: 100%;
    vertical-align: middle;
  }

  .online-offline {
    margin-left: 10px;
    display: inline-block;
  }

  .online-offline .state-button {
    display: none;
  }

  .online-offline label {
    position: relative;
    display: inline-block;
    height: 60px;
    width: 60px;
    border: none;
    border-radius: 2px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
    transition: background-color ease 0.3s;
  }

  .online-offline #state:checked + label {
    background: #2c3e50;
  }

  .sns {
    margin-left: 10px;
    margin-top: 8px;
    width: 40px;
    vertical-align: top;
    padding: 5px;
    box-sizing: border-box;
    color: #2c3e50;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
    border: none;
    border-radius: 2px;
    background: #ddd;
    display: inline-block;
  }

  .sns img {
    width: 100%;
    vertical-align: middle;
  }
</style>
