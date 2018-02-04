<template>
  <div class="friend">

    <div class="contents">
      <div class="qr-wrap">
        <p>あなたのQRコード</p>
        <canvas class="your-qrcode" id="your-qrcode"></canvas>
      </div>
      <div class="open-close">
        <span>登録申請がきています。</span>
        <button class="open">開く</button>
        <button class="close">閉じる</button>
      </div>
      <ul class="users">
        <li v-for="user in users" class="user">
          <div class="thumbnail-wrap">
            <img :src="user.thumbnail" alt="">
          </div>
          <div class="name">
            {{user.name}}
          </div>
          <div class="judgment">
            <button>〇</button>
            <button>✖︎</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import faker from 'faker'
  import QRCode from 'qrcode'
  var users = []
  for (var i = 0; i < 5; i++) {
    users.push({name: faker.name.findName(), thumbnail: faker.image.avatar()})
  }
  export default{
    data () {
      return {
        users: users
      }
    },
    mounted () {
      const canvas = document.getElementById('your-qrcode')
      QRCode.toCanvas(canvas, 'sample text', function (error) {
        if (error) console.error(error)
        console.log('success!')
      })
    }
  }
</script>

<style scoped>
  .friend {
    min-height: 100vh;
    width: 100%;
    background: #f8f8f8;
    color:#2c3e50;
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
  }

  .contents {
    text-align: center;
  }

  .qr-wrap {
    padding: 20px;
  }

  .qr-wrap p {
    padding: 10px;
  }

  .your-qrcode {
    margin: 0 auto;
    width: 50%;
  }

  .open-close {
    padding: 15px;
  }

  .open-close .open {
    background: rgba(0, 0, 0, 0);
    border: none;
  }

  .open-close .close {
    background: rgba(0, 0, 0, 0);
    border: none;
  }

  .user {
    display: flex;
  }

  .user .thumbnail-wrap {
    width: 54px;
    height: 54px;
  }

  .user .thumbnail-wrap img {
    width: 100%;
  }

  .user .name {
    font-size: 12px;
    padding: 18px;
  }

  .user .judgment {
    margin-left: auto;
  }

  .user button {
    width: 54px;
    height: 54px;
    background: rgba(0, 0, 0, 0);
    border: none;
  }
</style>