<template>
  <div class="home">
    <a href="/#/create" class="btn btn-primary">Create a New Pitch</a>
    <!-- <button>Create a New Pitch</button> -->
    <div v-for="pitch in pitches">
      <h2>{{ pitch.title }}</h2>
      <p>Logline: {{ pitch.logline }}</p>
      <p>Genre: {{ pitch.genre }}</p>
      <p>Synopsis: {{ pitch.synopsis }}</p>
      <p>Producer Statement: {{ pitch.producer_statement }}</p>
      <p>Thematic Description: {{ pitch.thematic_description }}</p>
      <p>Visual Style: {{ pitch.visual_style_description }}</p>
      <p>Filmmaker Biography: {{ pitch.filmmaker_bio }}</p>

      <h2>Locations:</h2>
      <div v-for="location in pitch.locations">
        <p>Name: {{ location.name }}</p>
        <p>Description: {{ location.description }}</p>
      </div>

      <h2>Characters:</h2>
      <div v-for="character in pitch.characters">
        <p>Name: {{ character.first_name }} {{ character.last_name }}</p>
        <p>Description: {{ character.description }}</p>
      </div>

      <h2>Music:</h2>
      <div v-for="music in pitch.musics">
        <p>Name: {{ music.name }}</p>
        <p>Artist: {{ music.artist }}</p>
        <p>Description: {{ music.description }}</p>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      message: "",
      pitches: []
    };
  },

  created: function() {
    axios
      .get("http://localhost:3000/api/pitches")
      .then(
        function(response) {
          console.log(response.data);
          this.pitches = response.data;
        }.bind(this)
      )
      .catch(
        function(error) {
          this.$router.push("/login");
        }.bind(this)
      );
  },
  methods: {},
  computed: {}
};
</script>
