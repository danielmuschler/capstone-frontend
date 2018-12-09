<template>
  <div class="portfolio-content">
    <div class="home">
      <div class="container">
        <h1>Pitch info</h1>
          <!-- <div v-for="pitch in pitches"> -->
            <div class="cbp-l-project-desc">
            <div class="cbp-l-project-desc-title">
                <span>{{ pitch.title }}</span>
            </div>
            <div class="cbp-l-project-desc-text">Synopsis: {{ pitch.synopsis }}</div>
            </div>
            <div class="cbp-l-project-details">
            <div class="cbp-l-project-details-title">
                <span>Genre: {{ pitch.genre }}</span>
            </div>
             <!-- List-->
            <ul class="cbp-l-project-details-list">
                <li><strong>Client:</strong>John Doe</li>
                <li><strong>Date</strong>22 December 2016</li>
                <li><strong>Categories</strong>Logo, Graphic</li>
            </ul>
             <!--/List-->

        </div>
            <p>Logline: {{ pitch.logline }}</p>
            <p>Producer Statement: {{ pitch.producer_statement }}</p>
            <p>Thematic Description: {{ pitch.thematic_description }}</p>
            <p>Visual Style: {{ pitch.visual_style_description }}</p>
            <p>Filmmaker Biography: {{ pitch.filmmaker_bio }}</p>


        <li class="cbp-l-project-related-item">
                    <a href="projects/project7.html" class="cbp-singlePage cbp-l-project-related-link " rel="nofollow" data-cbp-singlePage="projects">
                        <img src="contents/images/portfolios/200x200/2.jpg" alt="">
                        <div class="cbp-l-project-related-title">Locations:</div>
                    </a>
            <div v-for="location in pitch.locations">
              <p>Name: {{ location.name }}</p>
              <p>Description: {{ location.description }}</p>
            </div>
        </li>


        <li class="cbp-l-project-related-item">
                    <a href="Characters" class="cbp-singlePage cbp-l-project-related-link " rel="nofollow" data-cbp-singlePage="projects">
                        <img src="contents/images/portfolios/200x200/1.jpg" alt="">
                        <div class="cbp-l-project-related-title">Characters</div>
                    </a>
            <div v-for="character in pitch.characters">
              <p>Name: {{ character.first_name }} {{ character.last_name }}</p>
              <p>Description: {{ character.description }}</p>
            </div>
        </li>


          <li class="cbp-l-project-related-item">
                    <a href="projects/project8.html" class="cbp-singlePage cbp-l-project-related-link " rel="nofollow" data-cbp-singlePage="projects">
                        <img src="contents/images/portfolios/200x200/4.jpg" alt="">
                        <div class="cbp-l-project-related-title">Music</div>
                    </a>
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
          </li>
          <!-- </div> -->
        </div>
      </a>
      <div>
         <a href="/#/">Back to all pitches</a>
      </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
/* global setupPortfolio */
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

      axios.get("http://localhost:3000/api/pitches/" + this.$route.params.id)
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
  updated: function() {
    console.log("updated...");
    setupPortfolio();
  },
};

</script>
