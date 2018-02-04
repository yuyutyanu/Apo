<template>
  <header>
    <nuxt-link to="/">
      <span>ホーム</span>
    </nuxt-link>
    <nuxt-link to="/timeline" class="timeline">
      <span>タイムライン</span>
    </nuxt-link>
    <nuxt-link to="/request" class="friendRequest">
      <span>フレンドリクエスト</span>
    </nuxt-link>
  </header>
</template>

<style scoped>
  header {
    padding: 10px;
    width: 100%;
    background: #2c3e50;
  }
  a{
    text-decoration: none;
  }

  header span {
    font-size:12px;
    color:#fff;
  }
  header .timeline{
    margin-left: 10px;
  }
  header .friendRequest{
    margin-left: 10px;
  }

</style>