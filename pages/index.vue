<template>
  <div class="top">
    <transition name="fade">
      <div class="sns-wrap container" v-if="isVisibleSNS" @click="isVisibleSNS = !isVisibleSNS">
      </div>
    </transition>
    <app-header></app-header>
    <div class="users">
      <p class="user-title">あなた</p>
      <div class="me">
        <app-user :user="me"></app-user>
      </div>
      <p class="user-title">友達</p>
      <div v-for="user in users" @click="isVisibleUser = !isVisibleUser">
          <app-user :user="user"></app-user>
      </div>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script>
  import faker from 'faker'
  import * as firebase from 'firebase'
  import AppUser from '~/components/user.vue'
  import HomeFooter from '~/components/home-footer.vue'
  import AppHeader from '~/components/header.vue'

  var users = []
  for (var i = 0; i < 20; i++) {
    users.push({name: faker.name.findName(), thumbnail: faker.image.avatar()})
  }
  export default{
    components: {
      AppUser,
      AppHeader,
      HomeFooter
    },
    created () {
      firebase.auth().getRedirectResult().then(function (result) {
        if (result.credential) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken
        }
        // The signed-in user info.
        var user = result.user
        console.log(token, user)
      }).catch(function (error) {
        console.log(error)
      })
    },
    data () {
      return {
        imgURL: 'https://avatars0.githubusercontent.com/u/17114906?s=460&v=4',
        users: users,
        me: {
          thumbnail: 'https://avatars0.githubusercontent.com/u/17114906?s=460&v=4',
          name: 'こじろう'
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

  .sns-wrap {
    position: fixed;
    width: 100%;
    height: 100vh;
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
    height: calc(100vh - 80px);
    margin: 0 auto;
    overflow: auto;
  }

  .user-title{
    background: #34495e;
    color: #fff;
    font-size: 12px;
    padding: 3px 0 3px 10px;
  }

</style>
