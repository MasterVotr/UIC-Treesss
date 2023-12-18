<template>
  <div class="background">
    <div class="id_header">
      #tree id : {{id}}
      <button @click="closeDiv"><img src="../assets/times-solid(1).svg">
      </button>
    </div>
    <hr>
    <div class="card_upperbody">
      <div class="info">
        <p><img src="../assets/location-dot-solid.svg"> Location : {{ location }}</p>
        <p><img src="../assets/user-solid(1).svg"> Owner : {{ owner }}</p>
        <p><img src="../assets/circle-question-solid.svg"> Motivation : {{ motivation }}</p>
        <p><img src="../assets/hourglass-solid(1).svg"> Age : {{ age }}</p>
      </div>
      <div class="image">
        <img src="../assets/tree_types/maple.jpg">
      </div>
    </div>
    <div class="card_lowerbody">
      {{ description }}
    </div>

  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "TreeInfo",
  data: function() {
    return {
      owner: '',
      location: '',
      age: '',
      id: '',
      motivation: '',
      type: '',
      description: '',
    }
  },
  methods: {
    ...mapGetters(["getOwner"]),
    ...mapGetters(["getType"]),
    ...mapGetters(["getAge"]),
    ...mapGetters(["getId"]),
    ...mapGetters(["getLocation"]),
    ...mapGetters(["getMotivation"]),
    ...mapMutations(["updateDivState"]),
    ...mapGetters(["getDescription"]),
    closeDiv() {
      this.updateDivState(false);
    }
  },
  mounted : function() {
    this.owner = this.getOwner();
    this.location = this.getLocation();
    this.age = this.getAge();
    this.id = this.getId();
    this.motivation = this.getMotivation();
    this.type = this.getType();
    this.description = this.getDescription();
  }
}
</script>

<style scoped>
.background {
  background-color: white;
  border: solid #1E704B 2px;
  width: 50%;
  height: 90%;
  margin-left: 330px;
  border-radius: 20px;
}

.id_header {
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-weight: bolder;
  font-size: larger;
  margin-left: 10px;
}

.card_upperbody {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 200px;
  margin-left: 60px;
}

.card_lowerbody {
  background-color: #D0C7C4;
  border-radius: 10px;
  width: 90%;
  height: 30%;
  margin-left: 30px;
}

p {
  margin-top: 10px;
}

.image {
  width: 50%;
}

.image img {
  width: 50%;
  margin-left: 50px;
  border-radius: 10px;
}
button{
  background-color: white;
  border: solid #1E704B 1px;
  border-radius: 10px;
  margin-left: 5px;
  margin-top: 5px;
  height: 25px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-top: 0px;
}
button:hover {
  cursor: pointer;
  background-color: #1E704B;
}
</style>