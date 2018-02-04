<template>
  <div class="user">
    <div class="thumbnail">
      <img :src="user.thumbnail" alt="">
    </div>
    <div class="name" :class="{online: isOnline}">{{user.name}}</div>
  </div>
</template>
<script>
  export default{
    props: ['user'],
    data () {
      return {
        isOnline: false
      }
    },
    created () {
      const on = Math.random() < 0.3
      if (on) {
        this.isOnline = true
      }
    }
  }
</script>
<style scoped>


  .user:nth-child(3n) {
    background: #336E7B;
  }

  .user:nth-child(3n) .name {
    color: #f8f8f8;
  }
  .user {
    display: flex;
    background: #f8f8f8;
  }

  .user .thumbnail {
    display: inline-block;
    height: 54px;
    min-width: 54px;
    max-width: 54px;
    border-radius: 3px;
    background-size: 100%;
  }

  .user .thumbnail img {
    width: 100%;
  }

  .user .name {
    display: inline-block;
    font-size: 12px;
    font-weight: 800;
    color: #2c3e50;
    padding: 18px;
    width: 100%;
  }


  .online {
    background: #336E7B;
    color: #f8f8f8 !important;
  }
</style>