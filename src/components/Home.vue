<template>
  <div class="wrapper">
    <Header/>
    <div class="body">
      home page
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import TreeCardsGrid from "@/components/TreeCardsGrid.vue";

export default {
  name: "Home",
  components: {Header},

}
</script>

<style scoped>
.body{
  height: 100vh;
  width: 100vw;
}
</style>