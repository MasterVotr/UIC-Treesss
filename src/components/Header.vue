<template>
  <div class="header">
    <div class="logo">
      <router-link to="/"><p><img src="../assets/logo_trees.jpg"></p></router-link>
    </div>
    <div class="tabs">
      <router-link to="/form"><button>Add trees(s)</button></router-link>
      <router-link to="/displayGraph"><button>Show statistics</button></router-link>
      <router-link to="/treeSearch"><button>Search a tree</button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.header{
  height : 100px;
  width: 100vw;
  background-color: #1E704B;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
img {
  width: 100%;
 }

.tabs {
  margin-right: 20px;
}
button {
  margin: 20px;
  color: #D0C7C4;
  background-color: #1E704B;
  border: none;
  font-size: medium;
}
button:hover{
  cursor: pointer;
  color: #B2A38C;
}
.logo img {
  width: 10%;
  border-radius: 50px;
}
.logo{
  margin-left: 20px;
}
</style>