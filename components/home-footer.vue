<template>
  <footer>
    <div class="btns">
      <div class="reserve" @click="isVisibleSNS = !isVisibleSNS">
        <img src="/images/clock.svg" alt="">
      </div>
      <div class="state" :style="style" @click="changeStyle">
      </div>
      <div class="sns" @click="isVisibleSNS = !isVisibleSNS">
        <img src="/images/sns.svg" alt="">
      </div>
    </div>
  </footer>
</template>

<script>
  export default{
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
    },
    data () {
      return {
        isVisibleUser: false,
        isVisibleSNS: false,
        style: {
          backgroundColor: '#ddd'
        },
        online: false
      }
    }
  }
</script>

<style scoped>
  footer {
    position: fixed;
    bottom:0;
    width:100%;
    padding:10px;
  }

  .btns {
    width: 100%;
    text-align: center;
    display: flex;
    -webkit-justify-content: space-around; /* Safari */
    justify-content:         space-around;
    -webkit-align-items: center; /* Safari */
    align-items:         center;
  }

  .reserve {
    width: 40px;
    height:40px;
    padding: 5px;
    box-sizing: border-box;
    color: #2c3e50;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
    border: none;
    border-radius: 2px;
    background: #ddd;
  }

  .reserve img {
    width: 100%;
  }

  .state  {
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
    width: 40px;
    height:40px;
    padding: 5px;
    box-sizing: border-box;
    color: #2c3e50;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
    border: none;
    border-radius: 2px;
    background: #ddd;
  }

  .sns img {
    width: 100%;
  }
</style>