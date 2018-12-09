<template>
  <div class="home">
    <div class="container">
      <h1>Pitches info</h1>
        <!-- <div v-for="pitch in pitches"> -->
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
          <!-- <button v-on:click="authorizeSpotify();">Connect to Spotify</button> -->
          <a
            href="https://accounts.spotify.com/authorize?client_id=9cc3a914338d4b089e1892d11d72f705&response_type=code&redirect_uri=http://localhost:8080"
            >Connect to Spotify</a
          >
          <div v-for="music in pitch.musics">
            <p>Name: {{ music.name }}</p>
            <p>Artist: {{ music.artist }}</p>
            <p>Description: {{ music.description }}</p>
          </div>
        <!-- </div> -->
      </div>
    </a>
       <a href="/#/">Back to all pitches</a>
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
      pitch: {}
    };
  },

  created: function() {
    const spotifyCode = new URLSearchParams(window.location.search).get("code");
    if (spotifyCode) {
      axios.get("http://localhost:3000/api/spotify/callback?code=" + spotifyCode).then(response => {
        var spotifyAccessToken = response.data.access_token;
        localStorage.setItem("spotifyAccessToken", spotifyAccessToken);
        window.history.replaceState({}, document.title, "/");
      });
    }
    axios
      .get("http://localhost:3000/api/pitches/" + this.$route.params.id)
      .then(
        function(response) {
          console.log(response.data);
          this.pitch = response.data;
        }.bind(this)
      )
      .catch(
        function(error) {
          // this.$router.push("/");
          console.log(error);
        }.bind(this)
      );
  },
};

</script>
