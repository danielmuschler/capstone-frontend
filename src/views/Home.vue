<template>
  <div class="portfolio-content portfolio-1">
    <!-- portfolio Grid -->
    <div id="js-grid-juicy-projects" class="cbp">
      <!-- portfolio loop -->
      <div v-if="imagesLoaded" v-for="pitch in pitches" class="cbp-item movie">
        <div class="cbp-item-wrap">
          <div class="cbp-caption">
            <div class="cbp-caption-defaultWrap"><img :src="pitch.locations[0].image" alt="img3" /></div>
                  <!-- <div class="cbp-caption-defaultWrap"><img src="contents/images/portfolios/600x600/1.jpg" /></div> -->
            <div class="cbp-caption-activeWrap">
              <div class="cbp-l-caption-alignCenter">
                <div class="cbp-l-caption-body">
                  <div class="btn">
                    <a :href="['/#/pitches/' + pitch.id]" class="btn" rel="nofollow">more info</a>
                    <!--
                      <a
                      href="https://www.youtube.com/watch?v=3wbvpOIIBQA"
                      class="cbp-lightbox btn btn-sm btn-right"
                      data-title="GoPro: HERO3+ Black Edition<br>by GoPro"
                      >view video</a
                    -->
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cbp-l-grid-projects-title uppercase text-center uppercase text-center">{{ pitch.title }}</div>
          <div class="cbp-l-grid-projects-desc uppercase text-center uppercase text-center">{{ pitch.genre }}</div>
        </div>
      </div>
      <!-- /portfolio 1 -->
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
      pitches: [],
      imagesLoaded: true
    };
  },

  created: function() {
    const self = this;
    const spotifyCode = new URLSearchParams(window.location.search).get("code");
    if (spotifyCode) {
      axios.get("http://localhost:3000/api/spotify/callback?code=" + spotifyCode).then(response => {
        var spotifyAccessToken = response.data.access_token;
        localStorage.setItem("spotifyAccessToken", spotifyAccessToken);
        window.history.replaceState({}, document.title, "/");
      });
    }
    axios
      .get("http://localhost:3000/api/pitches")
      .then(
        function(response) {
          console.log(response.data);
          this.pitches = response.data;

          this.pitches.forEach(function(pitch, index) {
            pitch.locations.forEach(location => {
              axios.get(`http://localhost:3000/api/flickr/search?search=${location.name}`).then(response => {
                console.log(response.data);
                location.image = response.data.image;
              });
            });
          });
        }.bind(this)
      )
      .catch(
        function(error) {
          this.$router.push("/login");
        }.bind(this)
      );
  },
  mounted: function() {
    console.log("mounted...");
    setupPortfolio();
  },
  updated: function() {
    console.log("updated...");
    $("#js-grid-juicy-projects").cubeportfolio("destroy");
    setupPortfolio();
  },
  methods: {
    authorizeSpotify: function() {
      axios.get("http://localhost:3000/api/spotify_authorize").then(response => {
        console.log(response);
      });
    }
  },
  computed: {}
};
</script>
