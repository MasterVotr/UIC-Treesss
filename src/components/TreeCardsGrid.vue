<template>
  <div class="grid-container">
    <div v-for="item in items" :key="item.id" class="grid-item">
      <div class="card">
        <img class="card-img-top" src="../assets/tree_types/maple.jpg" alt="Card image  - map tree">
        <div class="card-body">
          <h5 class="card-title">#tree id : {{item.id}}</h5>
          <hr>
          <p class="card-text">Location : {{item.location}}</p>
          <p class="card-text">Age : {{item.age}}</p>
          <p class="card-text">Owner : {{item.owner}}</p>
          <p class="card-text">Motivation : {{item.motivation}}</p>
          <button class="seeMore_button" @click="sendToStore(item)">See more</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "TreeCardsGrid",
  data() {
    return {
      items: [
        { id: 1, location: 'Finland', owner: 'unknown', treeType: 'ginko', age: '100', motivation : 'aaa', description : '', src: 'ginko.jpg'},
        { id: 2, location: 'Canada', owner: 'associationA', treeType: 'maple', age: '85', motivation : 'aaa', description : '', src: 'maple.jpg'},
        { id: 3, location: 'France', owner: 'unknown', treeType: 'mulberry', age: '10', motivation : 'aaa', description : '', src: 'mulberry.jpg'},
        { id: 4, location: 'Finland', owner: 'companyB', treeType: 'oak', age: '70', motivation : 'aaa', description : '', src: 'oak.jpg'},
        { id: 5, location: 'Italy', owner: 'companyB', treeType: 'olive', age: '97', motivation : 'aaa', description : '', src: 'olive.jpg'},
        { id: 6, location: 'USA', owner: 'associationA', treeType: 'palm', age: '35', motivation : 'aaa', description : '', src: 'palm.jpeg'},
        { id: 7, location: 'USA', owner: 'associationA', treeType: 'pines', age: '35', motivation : 'aaa', description : '', src: 'pines.jpg'},
        { id: 8, location: 'Finland', owner: 'unknown', treeType: 'ginko', age: '100', motivation : 'aaa', description : '', src: 'ginko.jpg'},
        { id: 9, location: 'Canada', owner: 'associationA', treeType: 'maple', age: '85', motivation : 'aaa', description : '', src: 'maple.jpg'},
        { id: 10, location: 'France', owner: 'unknown', treeType: 'mulberry', age: '10', motivation : 'aaa', description : '', src: 'mulberry.jpg'},
        { id: 11, location: 'Finland', owner: 'companyB', treeType: 'oak', age: '70', motivation : 'aaa', description : '', src: 'oak.jpg'},
        { id: 12, location: 'Italy', owner: 'companyB', treeType: 'olive', age: '97', motivation : 'aaa', description : '', src: 'olive.jpg'},
        { id: 13, location: 'USA', owner: 'associationA', treeType: 'palm', age: '35', motivation : 'aaa', description : '', src: 'palm.jpeg'},
        { id: 14, location: 'USA', owner: 'associationA', treeType: 'pines', age: '35', motivation : 'aaa', description : '', src: 'pines.jpg'},
        { id: 1, location: 'Finland', owner: 'unknown', treeType: 'ginko', age: '100', motivation : 'aaa', description : '', src: 'ginko.jpg'},
        { id: 2, location: 'Canada', owner: 'associationA', treeType: 'maple', age: '85', motivation : 'aaa', description : '', src: 'maple.jpg'},
        { id: 3, location: 'France', owner: 'unknown', treeType: 'mulberry', age: '10', motivation : 'aaa', description : '', src: 'mulberry.jpg'},
        { id: 4, location: 'Finland', owner: 'companyB', treeType: 'oak', age: '70', motivation : 'aaa', description : '', src: 'oak.jpg'},
        { id: 5, location: 'Italy', owner: 'companyB', treeType: 'olive', age: '97', motivation : 'aaa', description : '', src: 'olive.jpg'},
        { id: 6, location: 'USA', owner: 'associationA', treeType: 'palm', age: '35', motivation : 'aaa', description : '', src: 'palm.jpeg'},
        { id: 7, location: 'USA', owner: 'associationA', treeType: 'pines', age: '35', motivation : 'aaa', description : '', src: 'pines.jpg'},
        { id: 8, location: 'Finland', owner: 'unknown', treeType: 'ginko', age: '100', motivation : 'aaa', description : '', src: 'ginko.jpg'},
        { id: 9, location: 'Canada', owner: 'associationA', treeType: 'maple', age: '85', motivation : 'aaa', description : '', src: 'maple.jpg'},
        { id: 10, location: 'France', owner: 'unknown', treeType: 'mulberry', age: '10', motivation : 'aaa', description : '', src: 'mulberry.jpg'},
        { id: 11, location: 'Finland', owner: 'companyB', treeType: 'oak', age: '70', motivation : 'aaa', description : '', src: 'oak.jpg'},
        { id: 12, location: 'Italy', owner: 'companyB', treeType: 'olive', age: '97', motivation : 'aaa', description : '', src: 'olive.jpg'},
        { id: 13, location: 'USA', owner: 'associationA', treeType: 'palm', age: '35', motivation : 'aaa', description : '', src: 'palm.jpeg'},
        { id: 14, location: 'USA', owner: 'associationA', treeType: 'pines', age: '35', motivation : 'aaa', description : '', src: 'pines.jpg'},
        // Add more items as needed
      ]
    };
  },
  methods: {
    ...mapMutations(["updateId"]),
    ...mapMutations(["updateAge"]),
    ...mapMutations(["updateType"]),
    ...mapMutations(["updateOwner"]),
    ...mapMutations(["updateLocation"]),
    ...mapMutations(["updateMotivation"]),
    ...mapMutations(["updateDivState"]),
    sendToStore(item) {
      this.updateAge(item.age);
      this.updateId(item.id);
      this.updateType(item.type);
      this.updateOwner(item.owner);
      this.updateLocation(item.location);
      this.updateMotivation(item.motivation);
      this.updateDivState(true);
    }
  }
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(7, 1fr); /* Adjust the number of columns as needed */
  gap: 10px; /* Adjust the gap between items */
  margin-left: 2%;
  height: 100%;
}
/*
.grid-item {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  background-color: white;
  height: 60px;
}
*/

.card{
  width: 10rem;
  height: 19rem;
  background-color: #D0C7C4;
  border-radius: 10px;
  font-size: smaller;
  color: #040503;
}

.card-img-top {
  width: 100%;
  border-radius: 10px 10px 0px 0px;
}

.card-title {
  font-size: larger;
  font-weight: bold;
  margin-left: 3px;
}

.card-text {
  margin-left: 3px;
}

.seeMore_button{
  background-color: white;
  border: solid #1E704B 1px;
  border-radius: 10px;
  margin-left: 5px;
  margin-top: 5px;
  height: 25px;
  width: 150px;
}

.seeMore_button:hover {
  background-color: #1E704B;
  cursor: pointer;
  color: white;
}

</style>