<template>
  <div class="login">
    <div class="container">
      <form v-on:submit.prevent="submit();">
        <h1>Create a pitch</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group"><label>Title:</label> <input type="text" class="form-control" v-model="title" /></div>
        <div class="form-group">
          <label>Logline:</label> <input type="text" class="form-control" v-model="logline" />
        </div>
        <div class="form-group"><label>Genre:</label> <input type="text" class="form-control" v-model="genre" /></div>
        <div class="form-group">
          <label>Synopsis:</label> <input type="text" class="form-control" v-model="synopsis" />
        </div>
        <div class="form-group">
          <label>Producer Statement:</label> <input type="text" class="form-control" v-model="producer_statement" />
        </div>
        <div class="form-group">
          <label>Thematic Description:</label> <input type="text" class="form-control" v-model="thematic_description" />
        </div>
        <div class="form-group">
          <label>Visual Style:</label> <input type="text" class="form-control" v-model="visual_style_description" />
        </div>
        <div class="form-group">
          <label>Filmmaker Bio:</label> <input type="text" class="form-control" v-model="filmmaker_bio" />
        </div>
        <h3>Characters</h3>
        <div class="form-group">
          <label>First Name:</label> <input type="text" class="form-control" v-model="first_name" />
        </div>
        <div class="form-group">
          <label>Last Name:</label> <input type="text" class="form-control" v-model="last_name" />
        </div>
        <div class="form-group">
          <label>Description:</label> <input type="text" class="form-control" v-model="description" />
        </div>
        <h3>Locations</h3>
        <div class="form-group"><label>Name:</label> <input type="text" class="form-control" v-model="name" /></div>
        <div class="form-group">
          <label>Description:</label> <input type="text" class="form-control" v-model="description" />
        </div>
        <div class="form-group">
          <h3>Music</h3>
          <label>Song Name:</label> <input type="text" class="form-control" v-model="name" />
        </div>
        <label>Artist:</label> <input type="text" class="form-control" v-model="artist" /> <label>Description:</label>
        <input type="text" class="form-control" v-model="description" />
        <div class="form-group"></div>
        <input type="submit" class="btn btn-primary" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  template: "#login-page",
  data: function() {
    return {
      name: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        password: this.password
      };
      axios
        .post("http://localhost:3000/api/pitches", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>
