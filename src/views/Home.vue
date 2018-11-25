<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="pitch in pitches"></div>
<!--     <h2>{{pitches.title}}</h2>
    <h2>{{pitches.locations}}</h2> -->
  </div>
</template>

<style></style>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      pitches: [],
    };
  },

  created: function() {
    axios.get("http://localhost:3000/api/pitches").then(function(response) {
      console.log(response.data);
      this.pitches = response.data;
    }.bind(this)
    );
  },
  methods: {},
  computed: {}
};
</script>
