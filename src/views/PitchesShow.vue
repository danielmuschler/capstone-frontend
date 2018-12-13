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
            <div class="cbp-l-project-desc-text"><strong>Synopsis:</strong> {{ pitch.synopsis }}</div>
            </div>
            <div class="cbp-l-project-details">
            <div class="cbp-l-project-details-title">
                <span>Genre: {{ pitch.genre }}</span>
            </div>
            <p><strong>Producer Statement:</strong> {{ pitch.producer_statement }}</p>
            <p><strong>Market Potential:</strong> According to past films made in this genre and budget, here are three potential domestic results for total box office revenue:</p>
            <p><strong>Low:</strong> ${{randomNumber}}</p>
            <p><strong>Middle:</strong> ${{randomNumber}}</p>
            <p><strong>High:</strong> ${{randomNumber}}</p>
        </div>
            <p><strong>Logline:</strong> {{ pitch.logline }}</p>
            <p><strong>Thematic Description:</strong> {{ pitch.thematic_description }}</p>
            <p><strong>Visual Style:</strong> {{ pitch.visual_style_description }}</p>
            <p><strong>Filmmaker Biography:</strong> {{ pitch.filmmaker_bio }}</p>


        <li class="cbp-l-project-related-item">
                  <!--   <a href="projects/project7.html" class="cbp-singlePage cbp-l-project-related-link " rel="nofollow" data-cbp-singlePage="projects">
                        <img src="contents/images/portfolios/200x200/2.jpg" alt="">
                        <div class="cbp-l-project-related-title">Locations:</div>
                    </a> -->
                    <p><strong>Locations:</strong></p>
            <div v-for="location in pitch.locations">
              <p>Name: {{ location.name }}</p>
              <p>Description: {{ location.description }}</p>
              <img v-bind:src="location.image" class="img-fluid" alt="">
            </div>
        </li>


        <li class="cbp-l-project-related-item">
                   <!--  <a href="Characters" class="cbp-singlePage cbp-l-project-related-link " rel="nofollow" data-cbp-singlePage="projects">
                        <img src="contents/images/portfolios/200x200/1.jpg" alt="">
                        <div class="cbp-l-project-related-title">Characters</div>
                    </a> -->
                    <p><strong>Characters:</strong></p>
            <div v-for="character in pitch.characters">
              <p>Name: {{ character.first_name }} {{ character.last_name }}</p>
              <p>Description: {{ character.description }}</p>
              <img v-bind:src="character.image" class="img-fluid" alt="">
            </div>
        </li>


          <li class="cbp-l-project-related-item">
                  <!--   <a href="projects/project8.html" class="cbp-singlePage cbp-l-project-related-link " rel="nofollow" data-cbp-singlePage="projects">
                        <img src="contents/images/portfolios/200x200/4.jpg" alt="">
                        <div class="cbp-l-project-related-title">Music</div>
                    </a> -->
            <!-- <button v-on:click="authorizeSpotify();">Connect to Spotify</button> -->
            <!-- <a
              href="https://accounts.spotify.com/authorize?client_id=9cc3a914338d4b089e1892d11d72f705&response_type=code&redirect_uri=http://localhost:8080"
              >Connect to Spotify</a> -->
              <p><strong>Music:</strong></p>
            <div v-for="music in pitch.musics">
              <p>Name: {{ music.name }}</p>
              <p>Artist: {{ music.artist }}</p>
              <p>Description: {{ music.description }}</p>
            </div>
            <iframe v-bind:src="`https://open.spotify.com/embed/playlist/${pitch.spotify_id}`" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </li>
          <!-- </div> -->
        </div>
      </a>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
/* global setupPortfolio */
var axios = require("axios");

export default {
  data: function() {
    return {
      message: "",
      pitch: {},
      randomNumber: null
    };
  },

  created: function() {
    this.randomNumberFunction();
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
          this.pitch.locations.forEach(location => {
            axios.get(`http://localhost:3000/api/flickr/search?search=${location.name}`).then(response => {
              console.log(response.data);
              location.image = response.data.image;
            });

            this.pitch.characters.forEach(character => {
              axios
                .get(`http://localhost:3000/api/flickr/search?search=${character.first_name} ${character.last_name}`)
                .then(response => {
                  console.log("character results", response.data);
                  character.image = response.data.image;
                });
            });
          });
        }.bind(this)
      )
      // .then(
      //  function(response) {
      //    console.log(response.data);
      //    this.pitch = response.data;
      //    this.pitch.visual_style_description.forEach(visual_style_description => {
      //        axios.get(`http://localhost:3000/api/flickr/search?search=${visual_style_description.name}`).then(response => {
      //          console.log(response.data);
      //          visual_style_description.image = response.data.image;
      //        })
      //    })
      //   }.bind(this)
      // )

      .catch(
        function(error) {
          // this.$router.push("/");
          console.log(error);
        }.bind(this)
      );
  },
  methods: {
    randomNumberFunction: function() {
      this.randomNumber = Math.random() * 100; // multiply to generate
      Math.round(this.randomNumber);
    }
  },

  updated: function() {
    console.log("updated...");
    setupPortfolio();
  }
};
</script>
