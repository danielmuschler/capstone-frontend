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

        <div>
          <h3>Characters</h3>
          <div class="form-group">
            <label>First Name:</label> <input type="text" class="form-control" v-model="first_name" />
          </div>
          <div class="form-group">
            <label>Last Name:</label> <input type="text" class="form-control" v-model="last_name" />
          </div>
          <div class="form-group">
            <label>Description:</label> <input type="text" class="form-control" v-model="character_description" />
          </div>
        </div>

        <div>
          <h3>Locations</h3>
          <div class="form-group">
            <label>Name:</label> <input type="text" class="form-control" v-model="location_name" />
          </div>
          <div class="form-group">
            <label>Description:</label> <input type="text" class="form-control" v-model="location_description" />
          </div>
        </div>

        <div>
          <h3>Music</h3>
          <div class="form-group">
            <label>Song Name:</label> <input type="text" class="form-control" v-model="song_name" />
          </div>
          <label>Artist:</label> <input type="text" class="form-control" v-model="artist" />
          <label>Description:</label> <input type="text" class="form-control" v-model="song_description" />
          <div class="form-group"></div>
        </div>

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
      title: "",
      logline: "",
      genre: "",
      synopsis: "",
      producer_statement: "",
      thematic_description: "",
      visual_style_description: "",
      filmmaker_bio: "",
      first_name: "",
      last_name: "",
      character_description: "",
      location_name: "",
      location_description: "",
      song_name: "",
      artist: "",
      song_description: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        title: this.title,
        logline: this.logline,
        genre: this.genre,
        synopsis: this.synopsis,
        producer_statement: this.producer_statement,
        thematic_description: this.thematic_description,
        visual_style_description: this.visual_style_description,
        filmmaker_bio: this.filmmaker_bio,
        location_name: this.location_name,
        location_description: this.location_description,
        first_name: this.first_name,
        last_name: this.last_name,
        character_description: this.character_description,
        song_name: this.song_name,
        artist: this.artist,
        song_description: this.song_description
      };
      axios
        .post("http://localhost:3000/api/pitches", params)
        .then(response => {
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
