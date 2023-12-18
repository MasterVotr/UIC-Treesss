<script>
export default {
  name: "Home",
  methods: {
    smoothScroll(elem_id){
      document.getElementById(elem_id).scrollIntoView({
      behavior: 'smooth'
      });
    }
  }
}

</script>

<template>
  <main>
    <div id="top">
      <button id="top-button-down" @click="smoothScroll('middle')">Move down</button>
    </div>
    <div id="middle">
      <div class="arrow-up" id="middle-arrow-up" @click="smoothScroll('top')"></div>
      <div class="arrow-down" id="middle-arrow-down" @click="smoothScroll('bottom-arrow-up')"></div>
      <button class="button-routes" id="button-add" @click="window.location.href='/AddTrees';">AddTrees</button>
      <button class="button-routes" id="button-cut" @click="window.location.href='/CutTrees';">CutTrees</button>
      <button class="button-routes" id="button-search" @click="window.location.href='/SearchTrees';">SearchTrees</button>
      <button class="button-routes" id="button-stats" @click="window.location.href='/ShowStatistics';">ShowStatistics</button>
    </div>
    <div id="bottom">
      <div class="arrow-up" id="bottom-arrow-up" @click="smoothScroll('middle')"></div>
        <label id="label-luise">Louise Schnee</label>
        <label id="label-emilie">Emilie Tortel</label>
        <label id="label-yuan">Yuan Xiao</label>
        <label id="label-jakub">Jakub Votrubec</label>
    </div>
  </main>
</template>

<style scoped>
    body {
      background-image: url("../assets/home_background.png");
      background-color: grey;
      min-height: 4147px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    div {

      margin: 0 0 0 0;
      position: relative;
    }

    #top {
      height: 1400px;
    }

    #middle {
      height: 1382px;
    }

    #bottom {
      height: 1360px;
    }

    div.arrow-up {
      width: 6vmin;
      height: 6vmin;
      box-sizing: border-box;
      left: 50%;
      transform: rotate(-45deg);
    }
      
    div.arrow-up.before {
        content: '';
        width: 100%;
        height: 100%;
        border-width: .8vmin .8vmin 0 0;
        border-style: solid;
        border-color: #000000;
        transition: .2s ease;
        display: block;
        transform-origin: 100% 0;
    }
      
    div.arrow-up.after {
        content: '';
        float: left;
        position: relative;
        top: -100%;
        width: 100%;
        height: 100%;
        border-width: 0 .8vmin 0 0;
        border-style: solid;
        border-color: #000000;
        transform-origin: 100% 0;
        transition:.2s ease;
    }
      
    div.arrow-up.hover.after {
        transform: rotate(45deg);
        border-color: #f6e7cb;
        height: 120%;
        right: 4%;
    }

    div.arrow-up.hover.before {
        border-color: #f6e7cb;
        transform: scale(.8);
    }

    div.arrow-down {
      width: 6vmin;
      height: 6vmin;
      box-sizing: border-box;
      left: 50%;
      transform: rotate(135deg);
    }
      
    div.arrow-up.before {
      content: '';
      width: 100%;
      height: 100%;
      border-width: .8vmin .8vmin 0 0;
      border-style: solid;
      border-color: #000000;
      transition: .2s ease;
      display: block;
      transform-origin: 100% 0;
    }
      
    div.arrow-up.after {
      content: '';
      float: left;
      position: relative;
      top: -100%;
      width: 100%;
      height: 100%;
      border-width: 0 .8vmin 0 0;
      border-style: solid;
      border-color: #000000;
      transform-origin: 100% 0;
      transition:.2s ease;
    }
      
    div.arrow-u.hover.after {
      transform: rotate(45deg);
      border-color: #f6e7cb;
      height: 120%;
      right: 4%;
    }

    div.arrow-up.hover.before {
      border-color: #f6e7cb;
      transform: scale(.8);
    }

    #middle-arrow-up {
      position: absolute;
      top: 10%;
    }

    #middle-arrow-down {
      position: absolute;
      top: 60%;
    }

    #bottom-arrow-up {
      position: absolute;
      top: 35%;
    }

    button {
      background: transparent;
      border: none !important;
      font-size:0;
      border: solid 1px;
      position: absolute;
      width: 250px;
      height: 80px;
      cursor: pointer;
    }

    #button-add {
      left: 9%;
      top: 18%;
      transform: rotate(30deg);
    }

    #button-cut {
      left: 80%;
      top: 43%;
      transform: rotate(30deg);
    }

    #button-search {
      left: 5%;
      top: 30%;
      transform: rotate(-30deg);
    }

    #button-stats {
      width: 300px;
      height: 90px;
      left: 74%;
      top: 28%;
      transform: rotate(-30deg);
    }

    #top-button-down {
      width: 900px;
      height: 240px;
      left: 29%;
      top: 47%;
    }

    label {
      position: absolute;
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
      font-size: 30px;
    }

    #label-luise {
      left: 15%;
      top: 40%;
    }

    #label-emilie {
      left: 15%;
      top: 60%;
    }

    #label-yuan {
      left: 80%;
      top: 40%;
    }

    #label-jakub {
      left: 80%;
      top: 60%;
    }
</style>