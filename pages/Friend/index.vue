<template>
  <div class="friend">
    <header>
      <nuxt-link to="/">
      <span>
        Home
      </span>
      </nuxt-link>
      <nuxt-link to="timeline">
        <span>Timeline</span>
      </nuxt-link>
    </header>

  </div>
</template>

<style scoped>
  .friend{
    height:100vh;
    width:100%;
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

  a {
    text-decoration: none;
    color: #f8f8f8;
  }
</style>