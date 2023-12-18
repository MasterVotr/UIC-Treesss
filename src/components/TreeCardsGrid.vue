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
        { id: 1, location: 'City A', owner: 'John Doe', treeType: 'ginko', age: '25', motivation: 'gift', description: 'A beautiful tree in the city center.' },
        { id: 2, location: 'Suburb B', owner: 'Jane Smith', treeType: 'oak', age: '40', motivation: 'agriculture', description: 'An old oak tree in the backyard.' },
        { id: 3, location: 'Town C', owner: 'Community Association', treeType: 'maple', age: '30', motivation: 'decoration', description: 'A row of maple trees along the street.' },
        { id: 4, location: 'Village D', owner: 'GreenThumb Company', treeType: 'palm', age: '15', motivation: 'good will', description: 'Exotic palm trees planted in the village park.' },
        { id: 5, location: 'City E', owner: 'Anonymous', treeType: 'willow', age: '18', motivation: 'other', description: 'A willow tree by the riverbank.' },
        { id: 6, location: 'Suburb F', owner: 'Tree Enthusiast', treeType: 'olive', age: '22', motivation: 'gift', description: 'A flourishing olive tree in the backyard.' },
        { id: 7, location: 'Town G', owner: 'Environmental Group', treeType: 'pines', age: '50', motivation: 'agriculture', description: 'A dense forest of pine trees.' },
        { id: 8, location: 'Village H', owner: 'Local School', treeType: 'mulberry', age: '12', motivation: 'decoration', description: 'Young mulberry trees in the school garden.' },
        { id: 9, location: 'City I', owner: 'Private Landowner', treeType: 'other', age: 'Unknown', motivation: 'other', description: 'An unidentified tree on private property.' },
        { id: 10, location: 'Suburb J', owner: 'Nature Reserve', treeType: 'ginko', age: '30', motivation: 'gift', description: 'Ginko trees in a suburban nature reserve.' },
        { id: 11, location: 'Town K', owner: 'Arborist Association', treeType: 'oak', age: '45', motivation: 'good will', description: 'Mature oak trees maintained by arborists.' },
        { id: 12, location: 'Village L', owner: 'Citizens Group', treeType: 'willow', age: '20', motivation: 'agriculture', description: 'Willow trees planted for soil erosion control.' },
        { id: 13, location: 'City M', owner: 'Green Initiative', treeType: 'palm', age: '17', motivation: 'decoration', description: 'Palms enhancing the cityscape.' },
        { id: 14, location: 'Suburb N', owner: 'Private Resident', treeType: 'maple', age: '35', motivation: 'gift', description: 'Maple trees in a suburban garden.' },
        { id: 15, location: 'Town O', owner: 'Botanical Garden', treeType: 'olive', age: '28', motivation: 'good will', description: 'Olive trees in a botanical garden.' },
        { id: 16, location: 'Village P', owner: 'Community Greening', treeType: 'pines', age: '40', motivation: 'agriculture', description: 'A community grove of pine trees.' },
        { id: 17, location: 'City Q', owner: 'Urban Planner', treeType: 'mulberry', age: '15', motivation: 'decoration', description: 'Mulberry trees lining urban streets.' },
        { id: 18, location: 'Suburb R', owner: 'Residential Community', treeType: 'other', age: 'Unknown', motivation: 'other', description: 'Various trees in a residential community.' },
        { id: 19, location: 'Suburb S', owner: 'Nature Lover', treeType: 'ginko', age: '35', motivation: 'gift', description: 'A majestic ginko tree in a suburban garden.' },
        { id: 20, location: 'City T', owner: 'Green Company', treeType: 'palm', age: '25', motivation: 'good will', description: 'Palms lining the streets of the city center.' }
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
    ...mapMutations(["updateDescription"]),
    sendToStore(item) {
      this.updateAge(item.age);
      this.updateId(item.id);
      this.updateType(item.treeType);
      this.updateOwner(item.owner);
      this.updateLocation(item.location);
      this.updateMotivation(item.motivation);
      this.updateDivState(true);
      this.updateDescription((item.description));
    }
  }
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* Adjust the number of columns as needed */
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
  width: 12rem;
  height: 21rem;
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
  margin-left: 10px;
  margin-top: 5px;
  height: 25px;
  width: 170px;
}

.seeMore_button:hover {
  background-color: #1E704B;
  cursor: pointer;
  color: white;
}

</style>