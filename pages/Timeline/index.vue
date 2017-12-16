<template>
  <div class="timeline">
    <header>
      <nuxt-link to="/">
        <span>Home</span>
      </nuxt-link>
      <nuxt-link to="friend">
        <span>Friend</span>
      </nuxt-link>
    </header>
    <div class="contents">
      <ul>
        <li v-for="i in 5">
          しゃんてぃさんが〇月〇日〇時〇から〇月〇日〇時まで<strong>取り込み中</strong>に設定しました。
        </li>
        <li v-for="i in 5">
          ちゃぬさんが〇月〇日〇時〇から〇月〇日〇時まで<strong>時間空いてるよ</strong>に設定しました。
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .timeline {
    height: 100vh;
    width: 100%;
    background: #f8f8f8;
  }

  a {
    text-decoration: none;
    color: #f8f8f8;
  }
  ul{
    padding:0;
  }

  li {
    list-style: none;
    margin-bottom:10px;
    font-size:14px;
    color: #2c3e50;
  }

  header {
    padding: 10px;
    width: 100%;
    background: #2c3e50;
  }

  header span {
    margin-left: 10px;
  }
  .contents{
    padding:20px;
  }
</style>