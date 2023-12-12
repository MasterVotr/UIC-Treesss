<template>
  <div class="grid-container">
    <div v-for="item in items" :key="item.id" class="grid-item">
      <div class="card">
        <img class="card-img-top" src="../assets/tree.png" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{ item.id }}</h5>
          <p class="card-text">{{item.location}}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TreeCardsGrid",
  data() {
    return {
      items: [
        { id: 1, location: 'Finland', owner: 'unknown', treeType: 'ginko', age: '100', motivation : 'aaa', description : ''},
        { id: 2, location: 'Canada', owner: 'associationA', treeType: 'cycade', age: '85', motivation : 'aaa', description : ''},
        { id: 3, location: 'France', owner: 'unknown', treeType: 'dico', age: '10', motivation : 'aaa', description : ''},
        { id: 4, location: 'Finland', owner: 'companyB', treeType: 'ginko', age: '70', motivation : 'aaa', description : ''},
        { id: 5, location: 'Italy', owner: 'companyB', treeType: 'dico', age: '97', motivation : 'aaa', description : ''},
        { id: 6, location: 'USA', owner: 'associationA', treeType: 'cycade', age: '35', motivation : 'aaa', description : ''},
        { id: 7, location: 'USA', owner: 'associationA', treeType: 'cycade', age: '35', motivation : 'aaa', description : ''},

        // Add more items as needed
      ],
    };
  },
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* Adjust the number of columns as needed */
  gap: 10px; /* Adjust the gap between items */
  margin-left: 2%;
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
  background-color: white;
}

.card-img-top {
  width: 100%;
}
</style>