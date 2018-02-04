<template>
  <div class="timeline">
    <app-header>

    </app-header>
    <div class="contents">
      <div class="search">
        <input type="text" class="search-user" placeholder="ユーザ検索">or
        <button class="search-me">Me</button>
      </div>
      <ul>
        <li v-for="i in 7">
          <strong>しゃんてぃ</strong>さんが<strong>〇月〇日〇時</strong>から<strong>〇月〇日〇時</strong>まで<strong style="color:#e74c3c">取り込み中</strong>の予約をしました。
        </li>
        <li v-for="i in 7">
          <strong>ちゃぬ</strong>さんが<strong>〇月〇日〇時〇</strong>から<strong>〇月〇日〇時</strong>まで<strong style="color:#16a085">時間空いてるよ</strong>の予約をしました。
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import AppHeader from '~/components/header.vue'
  export default{
    components: {
      AppHeader
    }
  }
</script>

<style scoped>
  .timeline {
    min-height: 100vh;
    width: 100%;
    background: #f8f8f8;
  }

  a {
    text-decoration: none;
    color: #f8f8f8;
  }

  ul {
    padding: 0;
  }

  li {
    list-style: none;
    margin-bottom: 10px;
    font-size: 12px;
    color: #2c3e50;
    border-bottom: solid 1px #2c3e50;
    padding:5px 0px
  }
  li:last-child{
    margin:0;
  }

  .contents {
    padding: 20px;
  }
  .search{
    margin-bottom: 17px;
  }

  .search-user {
    font-size: 12px;
    padding: 5px;
    border: none;
    border-radius: 3px;
    margin-right: 10px;
  }

  .search-me {
    border: none;
    border-radius: 3px;
    background: #ddd;
    width: 40px;
    height: 23px;
    margin-left: 10px;
    color: #2c3e50;
    outline: none;
    box-shadow: 0 0 4px rgba(0, 0, 0, .4);
  }
</style>