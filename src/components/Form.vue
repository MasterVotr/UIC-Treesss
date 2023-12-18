<template>
  <div class="wrapper">
    <Header/>
    <div class="body">
      <div class="header">
        <button @click="showOneTreeForm" class="lbutton">Add One Tree</button>
        <button @click="showSomeTreesForm" class="lbutton">Add Some Trees</button>
      </div>

      <!-- one tree -->
      <div class="container" v-if="showOneTree">
        <div class="form-container">
          <div class="form">
            <form v-if="displayOneTreeForm">

              <div class="input-row">
                <label>Name (Owner)</label>
                <input type="name" required v-model="name">
              </div>

              <div class="input-row">
                <label>Tree type</label>
                <select v-model="type">
                  <option value="Maple">Maple</option>
                  <option value="Oak">Oak</option>
                  <option value="Ginkgo">Ginkgo</option>
                  <option value="Mulberry">Mulberry</option>
                  <option value="Olive">Olive</option>
                  <option value="Pinese">Pines</option>
                  <option value="Willow">Willow</option>
                  <option value="Othere">Other</option>
                </select>
              </div>

              <div class="input-row">
                <label>Location</label>
                <select v-model="location">
                  <option value="Espoo">Espoo</option>
                  <option value="Helsinki">Helsinki</option>
                  <option value="Vantaa">Vantaa</option>
                  <option value="Othere">Other</option>
                </select>
              </div>

              <div class="input-row">
                <label>Age</label>
                <input type="Age" required v-model="Age">
              </div>

              <div class="input-row">
                <label>Motivation:</label>
                <select v-model="motivation">
                  <option value="Gifte">Gift</option>
                  <option value="GoodWill">GoodWill</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Decoration">Decoration</option>
                  <option value="Othere">Other</option>
                </select>
              </div>

              <div class="terms">
                <input type="checkbox" required v-model="terms">
                <label>  Accept Terms & Conditions</label>
              </div>
            </form>
          </div>

          <div class="submit">
            <button @click.prevent="submitOneTreeForm" class="lbutton">Add</button>
          </div>
        </div>

        <!-- Congratulatory message -->
        <div v-if="showCongrats" class="congrats">
          <p>Congratulations! Your form has been submitted.</p>
        </div>

        <!-- image part -->
        <div class="image-container" v-if="displayOneTreeForm">
          <div class="scrollable-images">

            <div class="image-wrapper">
              <a href="https://en.wikipedia.org/wiki/Maple">
                <img src="../assets/maple.jpg" alt="Image 1" class="scaled-image">
                <p class="image-name">Maple</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a href="https://en.wikipedia.org/wiki/Oak">
                <img src="../assets/oak.jpg" alt="Image 2" class="scaled-image">
                <p class="image-name">Oak</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a href="https://en.wikipedia.org/wiki/Ginkgo">
                <img src="../assets/ginkgo.jpg" alt="Image 2" class="scaled-image">
                <p class="image-name">Ginkgo</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a href="https://en.wikipedia.org/wiki/Mulberry">
                <img src="../assets/Mulberry.jpg" alt="Image 2" class="scaled-image">
                <p class="image-name">Mulberry</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a href="https://en.wikipedia.org/wiki/Olive">
                <img src="../assets/Olive.jpeg" alt="Image 2" class="scaled-image">
                <p class="image-name">Olive</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a href="https://en.wikipedia.org/wiki/Pine">
                <img src="../assets/pines.jpg" alt="Image 2" class="scaled-image">
                <p class="image-name">Pines</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a href="https://en.wikipedia.org/wiki/Willow">
                <img src="../assets/willow.jpg" alt="Image 2" class="scaled-image">
                <p class="image-name">Willow</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a href="https://en.wikipedia.org/wiki/palm">
                <img src="../assets/palm.jpg" alt="Image 2" class="scaled-image">
                <p class="image-name">Palm</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- some trees -->
      <div class="container" v-if="showSomeTrees">
        <div class="form-container">
          <div class="form">
            <form v-if="displaySomeTreesForm">

              <div class="input-row">
                <label>Please add by group</label>
                <input type="name" placeholder="Amount of group">
              </div>

              <div class="input-row">
                <label>Name (Owner)</label>
                <input type="name" required v-model="name">
              </div>

              <div class="input-row">
                <label>Tree type</label>
                <select v-model="type">
                  <option value="Maple">Maple</option>
                  <option value="Oak">Oak</option>
                  <option value="Ginkgo">Ginkgo</option>
                  <option value="Mulberry">Mulberry</option>
                  <option value="Olive">Olive</option>
                  <option value="Pinese">Pines</option>
                  <option value="Willow">Willow</option>
                  <option value="Othere">Other</option>
                </select>
              </div>

              <div class="input-row">
                <label>Location</label>
                <select v-model="location">
                  <option value="Espoo">Espoo</option>
                  <option value="Helsinki">Helsinki</option>
                  <option value="Vantaa">Vantaa</option>
                  <option value="Othere">Other</option>
                </select>
              </div>

              <div class="input-row">
                <label>Age</label>
                <input type="Age" required v-model="Age">
              </div>

              <div class="input-row">
                <label>Motivation:</label>
                <select v-model="motivation">
                  <option value="Gifte">Gift</option>
                  <option value="GoodWill">GoodWill</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Decoration">Decoration</option>
                  <option value="Othere">Other</option>
                </select>
              </div>

              <div class="terms">
                <input type="checkbox" required v-model="terms">
                <label>Accept Terms & Conditions</label>
              </div>
            </form>
          </div>

          <div class="submit">
            <button @click.prevent="submitSomeTreesForm" class="lbutton">Add</button>
          </div>
        </div>

        <div class="image-container" v-if="displaySomeTreesForm">
          <div class="scrollable-images">

            <div class="image-wrapper">
              <a href="https://en.wikipedia.org/wiki/Maple">
                <img src="../assets/maple.jpg" alt="Image 1" class="scaled-image">
                <p class="image-name">Maple</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a href="https://en.wikipedia.org/wiki/Oak">
                <img src="../assets/oak.jpg" alt="Image 2" class="scaled-image">
                <p class="image-name">Oak</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a href="https://en.wikipedia.org/wiki/Ginkgo">
                <img src="../assets/ginkgo.jpg" alt="Image 2" class="scaled-image">
                <p class="image-name">Ginkgo</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a href="https://en.wikipedia.org/wiki/Mulberry">
                <img src="../assets/Mulberry.jpg" alt="Image 2" class="scaled-image">
                <p class="image-name">Mulberry</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a href="https://en.wikipedia.org/wiki/Olive">
                <img src="../assets/Olive.jpeg" alt="Image 2" class="scaled-image">
                <p class="image-name">Olive</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a href="https://en.wikipedia.org/wiki/Pine">
                <img src="../assets/pines.jpg" alt="Image 2" class="scaled-image">
                <p class="image-name">Pines</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a href="https://en.wikipedia.org/wiki/Willow">
                <img src="../assets/willow.jpg" alt="Image 2" class="scaled-image">
                <p class="image-name">Willow</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a href="https://en.wikipedia.org/wiki/palm">
                <img src="../assets/palm.jpg" alt="Image 2" class="scaled-image">
                <p class="image-name">Palm</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>


</template>

<script>
import { saveAs } from 'file-saver';
import Header from "@/components/Header.vue";
export default {
  name: "Form",
  components: {Header},
  data() {
    return {
      showOneTree: true,
      showSomeTrees: false,
      displayOneTreeForm: true,
      displaySomeTreesForm: false,
      submittedData: [],
      showCongrats: false
    };
  },
  methods: {
    showOneTreeForm() {
      this.displayOneTreeForm = true;
      this.showSomeTrees = false;
      this.showOneTree = true;
      this.displaySomeTreesForm = true;
      btn.classList.toggle("clicked");
    },
    showSomeTreesForm() {
      this.showSomeTrees = true;
      this.showOneTree = false;
      this.displaySomeTreesForm = true;
      this.displayOneTreeForm = false;
      btn.classList.toggle("clicked");
    },
    submitOneTreeForm() {
      const formData = {
        name: this.name,
        type: this.type,
        location: this.location,
        age: this.age,
        motivation: this.motivation,
      };
      // Add the submitted data to the array
      this.submittedData.push(formData);
      // Save data to a JSON file
      const jsonContent = JSON.stringify(this.submittedData, null, 2);
      const blob = new Blob([jsonContent], { type: 'application/json' });
      const fileName = 'submittedData.json';
      // FileSaver.js library to save the file
      saveAs(blob, fileName);
      // Reset form fields (if needed)
      this.name = '';
      this.type = '';
      this.location = '';
      this.age = '';
      this.motivation = '';
      this.terms = false;
      // Hide the form (if needed)
      this.displayOneTreeForm = false;
      this.showCongrats = true;
      // Hide the congratulatory message after 3 seconds (adjust as needed)
      setTimeout(() => {
        this.showCongrats = false;
      }, 10000);
    }
  }
}
</script>

<style scoped>
.body {
  height: 100vh;
  width: 100vw;
}
.container {
  font-family: Arial, sans-serif;
  margin-top: 10px;
  margin-left: 10px;
  width: 1300px;
  display: flex;
  justify-content: space-between;
}
.header {
  width: 100%;
  display: flex;
  justify-content: space-around;
  left: 0;
  transform: translateX(0%);
}
.header button {
  margin-top: 10px;
}
.submit {
  width: 100%;
  display: flex;
  justify-content: space-evenly; /* Or your preferred spacing */
  transform: translateX(0%);
  margin-top: 10px;
  margin-left: 200px;
}
.lbutton {
  background: #8edd92;
  padding: 20px 80px;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.lbutton:hover {
  background-color: #67ac6b;
}
.lbutton.clicked {
  background-color: #68ac6c;
}
/* left form */
.form-container {
  /* justify-content: space-between;
  align-items: flex-start; */
  flex: 5;
}
.form {
  width: 70%;
  padding: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
}
.input-row {
  display: flex;
  align-items: center;
  width : 100%;
  margin-bottom: 20px; /* Adjust the margin between input rows */
}
.input-row label {
  flex: 0 0 100px; /* Adjust width of the label as needed */
  margin-right: 20px; /* Add margin between label and input */
}
.input-row input,
.input-row select {
  flex: 1;
  padding: 10px;
  width: 100%; /* Ensure all inputs have the same width */
  box-sizing: border-box; /* Include padding in the width */
}
/* right image */
.image-container {
  flex: 3;
  flex-direction: column; /* Arrange items in a column */
  align-items: flex-start;
}
.scrollable-images {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
}
/* Apply styles to the image wrapper */
.image-wrapper {
  /* position: relative; */
  /* width: 200px; */
  height: auto; /* Adjust height as needed */
  border: 1px solid #ccc; /* Optional border for visualization */
  overflow: hidden; /* Hide overflowing content */
}
.image-wrapper img {
  width: 100px;
  height: 100px;
  border-radius: 5px;
}
/* Style the image within the wrapper */
.scaled-image {
  width: 100%; /* Occupy 100% of the wrapper's width */
  height: auto; /* Maintain aspect ratio */
  display: block;
  object-fit: cover; /* Scale the image to cover its entire container */
}
/* Style the image name */
.image-name {
  text-align: center;
  margin: 5px 0;
}
</style>