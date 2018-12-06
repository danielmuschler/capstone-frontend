<template>
  <div class="locations">
    <h1>Locations</h1>
    <p>{{ info }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      info: {}
    };
  },
  created: function() {
    var spotifyAccessToken = localStorage.getItem("spotifyAccessToken");
    if (spotifyAccessToken) {
      axios
        .get("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: "Bearer " + spotifyAccessToken
          }
        })
        .then(response => {
          this.info = response.data;
          console.log(response);
        });
    }
  }
};
</script>
