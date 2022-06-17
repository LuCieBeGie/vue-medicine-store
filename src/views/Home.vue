<template>
  <div class="home">
    <img v-bind:src="img" class="img" />
    <div class="centered">
      <h1>Welcome to our online Medicine Store.
        Here you can find anything neccessary for you
      </h1>
    </div>
    <div>
      <ul class="list-group">
        <li class="list-group-item" v-show="fulldatetime"><strong></strong> {{ fulldatetime }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import img from '/public/img/3.jpg'

  export default {
    name: 'Home',
    data: function () {
      return {
        img: img,
        fulldatetime: '',
      }
    },
    methods: {
      printFullDate: function () {
        return new Date();
      }
    },
    mounted: function () {
      this.fulldatetime = this.printFullDate();
    },
  }
</script>

<style>
  .home {
    position: relative;
    text-align: center;
    color: black;
    font-family: 'Segoe UI', Tahoma, sans-serif;
  }

  .img {
    width: 100%;
    height: max-content;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    opacity: 70%;
  }

  .centered {
    position: absolute;
    top: 8px;
    right: 16px;
  }

  .list-group {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 800%);
  }
</style>