<script>
import Header from "@/components/Header.vue";
import TreeCardsGrid from "@/components/TreeCardsGrid.vue";

export default {
  name: "Home",
  components: {Header},
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
  <div class="wrapper">
    <Header/>
    <img src="../assets/home_background.png">
    <main>
      <div id="top">
        <button id="top-button-down" @click="smoothScroll('middle')">Move down</button>
      </div>
      <div id="middle">
        <div class="arrow-up" id="middle-arrow-up" @click="smoothScroll('top')"></div>
        <div class="arrow-down" id="middle-arrow-down" @click="smoothScroll('bottom-arrow-up')"></div>
        <router-link to="/Form"><button class="button-routes" id="button-add">AddTrees</button></router-link>
        <router-link to="/Form"><button class="button-routes" id="button-cut">CutTrees</button></router-link>
        <router-link to="/treeSearch"><button class="button-routes" id="button-search">SearchTrees</button></router-link>
        <router-link to="/displayGraph"><button class="button-routes" id="button-stats" >ShowStatistics</button></router-link>
      </div>
      <div id="bottom">
        <div class="arrow-up" id="bottom-arrow-up" @click="smoothScroll('middle')"></div>
        <label id="label-luise">Louise Schnee</label>
        <label id="label-emilie">Emilie Tortel</label>
        <label id="label-yuan">Yuan Xiao</label>
        <label id="label-jakub">Jakub Votrubec</label>
      </div>
    </main>
  </div>
</template>

<style scoped>
    img {
      width: 100vw;
      z-index: -1;
    }
    main {
      position: fixed;
      z-index: 3;
    }

    body {
      /*background-image: url("../assets/home_background.png");*/
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
      height: 0px;
    }


    #middle {
      height: 800px;
    }


    #bottom {
      height: 1360px;
    }

    .arrow-up {
      width: 6vmin;
      height: 6vmin;
      box-sizing: border-box;
      margin-left: 650px;
      transform: rotate(-45deg);
    }
      
    .arrow-up:before {
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
      
    .arrow-up:after {
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
      
    .arrow-up:hover:after {
        transform: rotate(45deg);
        border-color: #f6e7cb;
        height: 120%;
        right: 4%;
    }

    .arrow-up:hover:before {
        border-color: #f6e7cb;
        transform: scale(.8);
    }

    .arrow-down {
      width: 6vmin;
      height: 6vmin;
      box-sizing: border-box;
      left: 50%;
      transform: rotate(135deg);
    }
      
    .arrow-up:before {
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
      
    .arrow-up:after {
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
      
    .arrow-up:hover:after {
      transform: rotate(45deg);
      border-color: #f6e7cb;
      height: 120%;
      right: 4%;
    }

    .arrow-up:hover:before {
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
      /*background: transparent;*/
      background-color: #1E704B;
      border: none !important;
      font-size:0;
      border: solid 1px;
      width: 250px;
      height: 80px;
      cursor: pointer;
    }

    #button-add {
      margin-left: 30px;
      transform: rotate(30deg);
    }

    #button-cut {
      transform: rotate(30deg);
    }

    #button-search {
      left: 5%;
      transform: rotate(-30deg);
    }

    #button-stats {
      width: 300px;
      height: 90px;
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