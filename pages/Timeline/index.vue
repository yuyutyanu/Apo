<template>
  <div class="timeline">
    <header>
      <nuxt-link to="/">
        <span>Home</span>
      </nuxt-link>
      <nuxt-link to="/FriendRequest">
        <span>Friend-Request</span>
      </nuxt-link>
    </header>
    <div class="contents">
      <input type="text" class="search" placeholder="ユーザ検索">or
      <button class="me">Me</button>
      <ul>
        <li v-for="i in 5">
          しゃんてぃさんが<strong>〇月〇日〇時</strong>から<strong>〇月〇日〇時</strong>まで<strong style="color:#e74c3c">取り込み中</strong>の予約をしました。
        </li>
        <li v-for="i in 5">
          ちゃぬさんが<strong>〇月〇日〇時〇</strong>から<strong>〇月〇日〇時</strong>まで<strong style="color:#16a085">時間空いてるよ</strong>の予約をしました。
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
  .search{
    font-size:12px;
    padding:5px;
    border:none;
    border-radius:3px;
    margin-bottom:10px;
    margin-right:10px;
  }
  .me{
    border:none;
    border-radius:3px;
    background:#ddd;
    width:40px;
    height: 23px;
    margin-left:10px;
    color:#2c3e50;
    outline: none;
    box-shadow: 0 0 4px rgba(0,0,0,.4);
  }
</style>