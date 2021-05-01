<template>

  <div id="app">
    <div class="bg"></div>
    <div class="content">
      <div class="container">
        <router-view/>
      </div>
    </div>


  </div>
</template>


<style lang="scss">
  @import "~materialize-css/dist/css/materialize.min.css";

  .bg {
    position: absolute;
    z-index: 1;
    left: -10px;
    top: -10px;
    right: -10px;
    bottom: -10px;
    filter: blur(8px);
    background-image: url(assets/bg.jpeg);

  }

  .content {
    position: relative;
    z-index: 2;
    color: #fff;
  }

</style>
