import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import Create from "./views/Create.vue";
import Music from "./views/Music.vue";
import Characters from "./views/Characters.vue";
import Locations from "./views/Locations.vue";
import PitchesShow from "./views/PitchesShow.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    { path: "/create", name: "create", component: Create },
    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout },
    { path: "/music", name: "music", component: Music },
    { path: "/characters", name: "characters", component: Characters },
    { path: "/locations", name: "locations", component: Locations },
    { path: "/pitches/:id", name: "pitches-show", component: PitchesShow },

    {
      path: "/about",
      name: "about"
    }
  ]
});
