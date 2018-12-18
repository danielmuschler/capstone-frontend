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
            <p><strong>Low Estimate:</strong> ${{randomNumber * 5234}}</p>
            <p><strong>Middle Estimate:</strong> ${{randomNumber * 84578}}</p>
            <p><strong>High Estimate:</strong> ${{randomNumber * 1987659}}</p>
             <button v-on:click="createPDF();">Make PDF</button>
        </div>
            <p><strong>Logline:</strong> {{ pitch.logline }}</p>
            <p><strong>Thematic Description:</strong> {{ pitch.thematic_description }}</p>
            <p><strong>Visual Style:</strong> {{ pitch.visual_style_description }}</p>
            <p><strong>Filmmaker Biography:</strong> {{ pitch.filmmaker_bio }}</p>

        <div class="row">
        <li class="cbp-l-project-related-item">
                  <!--   <a href="projects/project7.html" class="cbp-singlePage cbp-l-project-related-link " rel="nofollow" data-cbp-singlePage="projects">
                        <img src="contents/images/portfolios/200x200/2.jpg" alt="">
                        <div class="cbp-l-project-related-title">Locations:</div>
                    </a> -->
                    <p><strong>Locations:</strong></p>
                      <!-- <button v-on:click="createPDF();">Add Location</button> -->
                     <!-- Button trigger modal -->
                     <button data-toggle="modal" data-target="#exampleModal">
                       Add Location
                     </button>
                      <br>
                     <!-- Modal -->
                     <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                       <div class="modal-dialog" role="document">
                         <div class="modal-content">
                           <div class="modal-header">
                             <h5 class="modal-title" id="exampleModalLabel">Add Location</h5>
                             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                               <span aria-hidden="true">&times;</span>
                             </button>
                           </div>
                           <div class="modal-body">
                             <div class="form-group">
                              <!-- <input type="hidden" v-model="pitch_id" v-bind:value="`${pitch.id}`" > -->
                               <label>Name:</label> <input type="text" class="form-control" v-model="location_name" />
                             </div>
                             <div class="form-group">
                               <label>Description:</label> <input type="text" class="form-control" v-model="location_description" />
                             </div>
                           </div>
                           <div class="modal-footer">
                             <button data-dismiss="modal">Close</button>
                             <button type="button" v-on:click="createLocation()" class="btn btn-secondary">Save changes</button>
                           </div>
                         </div>
                       </div>
                     </div>
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
                  <!--   <button v-on:click="createPDF();">Add Character</button> -->

                  <!-- Button trigger modal -->
                  <button data-toggle="modal" data-target="#Modal">
                    Add Character
                  </button>
                   <br>
                  <!-- Modal -->
                  <div class="modal fade" id="Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="modalLabel">Add Character</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <div class="form-group">
                           <!-- <input type="hidden" v-model="pitch_id" v-bind:value="`${pitch.id}`" > -->
                            <div class="form-group">
                                        <label>First Name:</label> <input type="text" class="form-control" v-model="character_first_name" />
                                      </div>
                                      <div class="form-group">
                                        <label>Last Name:</label> <input type="text" class="form-control" v-model="character_last_name" />
                                      </div>
                                      <div class="form-group">
                                        <label>Description:</label> <input type="text" class="form-control" v-model="character_description" />
                                      </div>
                                    </div>
                                  </div>
                        <div class="modal-footer">
                          <button data-dismiss="modal">Close</button>
                          <button type="button" v-on:click="createCharacter()" class="btn btn-secondary">Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div>

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
               <!-- <button v-on:click="createPDF();">Add Song</button> -->
            <div v-for="music in pitch.musics">
              <p>Name: {{ music.name }}</p>
              <p>Artist: {{ music.artist }}</p>
              <p>Description: {{ music.description }}</p>
            </div>
            <iframe v-bind:src="`https://open.spotify.com/embed/playlist/${pitch.spotify_id}`" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </li>
        </div>
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
/* global jsPDF */
var axios = require("axios");
var jsPDF = require("jspdf");

export default {
  data: function() {
    return {
      message: "",
      pitch: {},
      randomNumber: null,
      message: "PDF Renderer",
      student: {},
      firstName: ""
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
          // console.log(response.data);
          this.pitch = response.data;
          this.pitch.locations.forEach(location => {
            axios.get(`http://localhost:3000/api/flickr/search?search=${location.name}`).then(response => {
              // console.log(response.data);
              location.image = response.data.image;
            });

            this.pitch.characters.forEach(character => {
              axios
                .get(`http://localhost:3000/api/flickr/search?search=${character.first_name} ${character.last_name}`)
                .then(response => {
                  // console.log("character results", response.data);
                  character.image = response.data.image;
                });
            });
          });
        }.bind(this)
      )

      .catch(
        function(error) {
          // this.$router.push("/");
          // console.log(error);
        }.bind(this)
      );
  },
  methods: {
    randomNumberFunction: function() {
      this.randomNumber = Math.random() * 100;
      this.randomNumber = Math.round(this.randomNumber);
    },

    createLocation() {
      var params = {
        pitch_id: this.pitch.id,
        location_name: this.location_name,
        location_description: this.location_description
      };
      axios.post("http://localhost:3000/api/locations/", params);
      location.reload();
    },

    createCharacter() {
      var params = {
        pitch_id: this.pitch.id,
        character_first_name: this.character_first_name,
        character_last_name: this.character_last_name,
        character_description: this.character_description
      };
      console.log("chars", params);
      axios.post("http://localhost:3000/api/characters/", params);
      location.reload();
    },

    createPDF() {
      //Gets pitches info from back-end
      axios.get("http://localhost:3000/api/pitches").then(
        function(response) {
          // console.log(response.data);
          this.student = response.data;

          var doc = new jsPDF();

          // console.log("JSPDF STUFF", doc);

          // var image =
          //   "https://media.licdn.com/dms/image/C5603AQHYBsTqfW_6wg/profile-displayphoto-shrink_200_200/0?e=1549497600&v=beta&t=YDIdycW2pXneFpBZpjfS1pOiqVZT_lO3lbO55sEqP_E";

          // 210 width of document
          // With 20 unit margin 170

          // doc.addImage(image, "JPEG", 20, 10, 60, 60, "guy", "FAST", 0);
          doc.text("", 30, 10);
          //Header text
          //-------------------------------------
          doc.text(this.pitch.title, 20, 20);
          doc.text(this.pitch.genre, 140, 20);
          doc.text(this.pitch.logline, 20, 40);
          doc.text(this.pitch.thematic_description, 20, 60);
          doc.line(20, 75, 189, 75);
          //-------------------------------------

          // // //Producer Info
          // // //-------------------------------------
          // var producer_statement = this.pitch.producer_statement;
          // var splitProducer_statement = doc.splitTextToSize(producer_statement, 160);
          // doc.text = this.randomNumber * 5234;
          // doc.text = this.randomNumber * 84578;
          // doc.text = this.randomNumber * 1987659;
          // doc.setFontSize(10);
          // doc.text(splitProducer_statement, 90, 40);
          // // //-------------------------------------

          // Character and Location
          //-------------------------------------
          doc.setFontSize(12);
          doc.text("Characters", 10, 85);
          var line = 0;
          this.pitch.characters.forEach(character => {
            doc.text(character.first_name, 10, 95 + line * 2);
            doc.text(character.last_name, 10, 105 + line * 2);
            doc.text(character.description, 10, 115 + line * 2);
            line += 3;
            // });
            // var line = 0;
            doc.text("Locations", 140, 85);
            this.pitch.locations.forEach(location => {
              doc.text(location.name, 140, 95 + line * 2);
              doc.text(location.description, 140, 105 + line * 2);
              line += 3;

              //   //link to All Pitches Page
              doc.textWithLink("Click here for Full Pitch", 25, 200, { url: "http://localhost:8080/#/pitches/" });
            });
          });

          //-------------------------------------

          //Download PDF
          doc.save("letter.pdf");
        }.bind(this)
      );
    }
  },
  updated: function() {
    // console.log("updated...");
    setupPortfolio();
  }
};
</script>
