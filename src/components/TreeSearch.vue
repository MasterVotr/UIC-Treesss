<template>
  <div class="body">
    <div class="header">
      header
    </div>
    <div class="filters">
      <div class="filter">
        <button class="id_button" @click="display_dropdown_id">{{id_button_text}}
          <img class="icon" v-if="!idIsOpen" src="../assets/chevron-down-solid.svg">
          <img class="icon" v-if="idIsOpen" src="../assets/chevron-up-solid.svg">
        </button>
        <input class="dropdown" v-on:keyup.enter="onEnter_id" v-if="idIsOpen" v-model="tree_id" placeholder="Enter tree id"/>
      </div>
      <div class="filter">
        <button @click="display_dropdown_owner">{{owner_button_text}}
          <img class="icon" v-if="!ownerIsOpen" src="../assets/chevron-down-solid.svg">
          <img class="icon" v-if="ownerIsOpen" src="../assets/chevron-up-solid.svg">
        </button>
        <input class="dropdown" v-on:keyup.enter="onEnter_owner" v-if="ownerIsOpen" v-model="tree_owner" placeholder="Enter tree owner"/>
      </div>
      <div class="filter">
        <button @click="display_dropdown_type">{{ tree_type }}
          <img class="icon" v-if="!typeIsOpen" src="../assets/chevron-down-solid.svg">
          <img class="icon" v-if="typeIsOpen" src="../assets/chevron-up-solid.svg">
        </button>
        <div class="dropdown_type" v-if="typeIsOpen">
          <div class="row_type">
            <button @click="select_type('maple')">
              <img src="../assets/maple.jpg">
              maple
            </button>
            <button @click="select_type('oak')">
              <img src="../assets/oak.jpg">
              oak
            </button>
          </div>
          <div class="row_type">
            <button @click="select_type('ginko')">
              <img src="../assets/ginkgo.jpg">
              ginko
            </button>
            <button @click="select_type('mulberry')">
              <img src="../assets/mulberry.jpg">
              mulberry
            </button>
          </div>
          <div class="row_type">
            <button @click="select_type('olive')">
              <img src="../assets/olive.avif">
              olive
            </button>
            <button @click="select_type('pines')">
              <img src="../assets/pines.jpg">
              pines
            </button>
          </div>
          <div class="row_type">
            <button @click="select_type('willow')">
              <img src="../assets/willow.jpg">
              willow
            </button>
            <button @click="select_type('other')">
              <img src="../assets/logo.svg">
              other
            </button>
          </div>
          <button @click="select_type('type')">reset filter</button>
        </div>
      </div>
      <div class="filter">
        <button @click="display_dropdown_location">{{location_button_text}}
          <img class="icon" v-if="!locationIsOpen" src="../assets/chevron-down-solid.svg">
          <img class="icon" v-if="locationIsOpen" src="../assets/chevron-up-solid.svg">
        </button>
        <input class="dropdown" v-on:keyup.enter="onEnter_location" v-if="locationIsOpen" v-model="tree_location" placeholder="Enter tree location"/>
      </div>
      <div class="filter">
        <button @click="display_dropdown_age">{{ age_button_text }}
          <img class="icon" v-if="!ageIsOpen" src="../assets/chevron-down-solid.svg">
          <img class="icon" v-if="ageIsOpen" src="../assets/chevron-up-solid.svg">
        </button>
        <input class="dropdown" v-on:keyup.enter="onEnter_age" v-if="ageIsOpen" v-model="tree_age" placeholder="Enter tree age"/>
      </div>
      <div class="filter">
        <button @click="display_dropdown_motivation">{{motivation}}
          <img class="icon" v-if="!motivationIsOpen" src="../assets/chevron-down-solid.svg">
          <img class="icon" v-if="motivationIsOpen" src="../assets/chevron-up-solid.svg">
        </button>
        <div class="dropdown_motivation" v-if="motivationIsOpen">
          <button class="motivation_option" @click="select_motivation('motivation')">reset filter</button>
          <button class="motivation_option" @click="select_motivation('gift')">gift</button>
          <button class="motivation_option" @click="select_motivation('good will')">good will</button>
          <button class="motivation_option" @click="select_motivation('agriculture')">agriculture</button>
          <button class="motivation_option" @click="select_motivation('decoration')">decoration</button>
          <button class="motivation_option" @click="select_motivation('other')">other</button>
        </div>
      </div>
    </div>
    <div class="tree_cards">
      <TreeCardsGrid/>
    </div>
  </div>

</template>

<script>
import TreeCardsGrid from "@/components/TreeCardsGrid.vue";

export default {
  name: "TreeSearch",
  components: {TreeCardsGrid},
  data: function () {
    return{
      idIsOpen : false,
      ownerIsOpen : false,
      typeIsOpen : false,
      locationIsOpen : false,
      ageIsOpen : false,
      motivationIsOpen : false,
      motivation : 'motivation',
      tree_type : 'type',
      tree_id : '',
      tree_owner : '',
      tree_age : '',
      tree_location : ''
    }
  },
  computed: {
    id_button_text() {
      return this.tree_id.trim() !== '' ? this.tree_id : 'id';
    },
    owner_button_text() {
      return this.tree_owner.trim() !== '' ? this.tree_owner : 'owner';
    },
    location_button_text() {
      return this.tree_location.trim() !== '' ? this.tree_location : 'location';
    },
    age_button_text() {
      return this.tree_age.trim() !== '' ? this.tree_age : 'age';
    }
  },
  methods:{
    display_dropdown_id() {
      this.idIsOpen = !this.idIsOpen;
    },
    display_dropdown_owner() {
      this.ownerIsOpen = !this.ownerIsOpen;
    },
    display_dropdown_type() {
      this.typeIsOpen = !this.typeIsOpen;
    },
    display_dropdown_location() {
      this.locationIsOpen = !this.locationIsOpen;
    },
    display_dropdown_age() {
      this.ageIsOpen = !this.ageIsOpen;
    },
    display_dropdown_motivation() {
      this.motivationIsOpen = !this.motivationIsOpen;
    },
    select_motivation(name) {
      this.motivation = name;
      this.motivationIsOpen = !this.motivationIsOpen;
    },
    select_type(name) {
      this.tree_type = name;
      this.typeIsOpen = !this.typeIsOpen;
    },
    onEnter_id() {
      this.idIsOpen = !this.idIsOpen;
    },
    onEnter_owner() {
      this.ownerIsOpen = !this.ownerIsOpen;
    },
    onEnter_location() {
      this.locationIsOpen = !this.locationIsOpen;
    },
    onEnter_age() {
      this.ageIsOpen = !this.ageIsOpen;
    }
  }
}
</script>

<style scoped>
.body{
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: #2c3e50;
}
.header{
  height : 15vh;
  width: 100vw;
  background-color: #00bd7e;
}
.filters{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
  background-color: white;
}
.tree_cards{
  margin-top: 10px;
}

button:not(.dropdown_motivation button):not(.dropdown_type button) {
  width: 110px;
  height: 25px;
  border-radius: 10px;
  background-color: #f8f8f8;
  border: solid grey 1px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.filter {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.dropdown{
  background-color: #f8f8f8;
  position: absolute;
  margin-top: 50px;
  z-index: 1;
  width: 110px;
  border-radius: 8px;
  border: solid black 1px;
}

.dropdown_type {
  position: absolute;
  margin-top: 262px;
  z-index: 1;
  width: 200px;
  border-radius: 8px;
}

.dropdown_motivation {
  position: absolute;
  margin-top: 180px;
  z-index: 1;
  width: 110px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.motivation_option {
  border: solid black 1px;
  width: 110px;
  height: 25px;
}
.motivation_option:first-child {
  border-radius: 5px 5px 0px 0px;
}
.motivation_option:last-child {
  border-radius: 0px 0px 5px 5px;
}

.dropdown_type img {
  width: 30%;
}

.dropdown_type button {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  height: 50px;
  border-radius: 0px;
  border : solid black 1px;
  background-color: white;
}

.dropdown_type .row_type:first-child button:first-child{
  border-radius: 5px 0px 0px 0px;
}
.dropdown_type .row_type:first-child button:last-child {
  border-radius: 0px 5px 0px 0px;
}
.row_type {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.dropdown_type button:last-child:not(.row_type button){
  border-radius: 0px 0px 5px 5px;
  height: 30px;
}

button:hover {
  background-color: grey !important;
}



</style>