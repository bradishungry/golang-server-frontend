<template>
  <nav class="navbar navbar-light">
    <div class="header-row">
      <div id="hamburger" @click="toggleMenu()">
        <a href="javascript:void(0);" class="icon">
          <fa :icon="faBars" />
          <i class="fa fa-bars"></i>
        </a>
      </div>
      <div class="container">
        <h1>Vue/Go Practice!</h1>
      </div>
    </div>
    <div id="header-links">
      <router-link to="/"><a>CRUD Form</a></router-link>
      <router-link to="/roomCode"><a>Get Room Code</a></router-link>
      <a href="https://github.com/bradishungry/golang-server-frontend/">
        Check out the code!
      </a>
    </div>
  </nav>
</template>
<style>
nav {
  color: white;
  background-color: blue;
}

#header-links {
  text-align: center;
}

.header-row {
  display: flex;
  justify-content: space-around;
}
.hamburger-menu {
  display: none;
}

.navbar #header-links {
  display: none;
}

.navbar a {
  color: white;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  display: block;
}

.navbar a.icon {
  display: block;
}

.navbar a:hover {
  background-color: #ddd;
  color: black;
}

.active {
  background-color: #04aa6d;
  color: white;
}
</style>
<script>
import Fa from "vue-fa";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "Header",
  props: {},
  components: {
    Fa,
  },

  setup() {
    return {
      faBars,
    };
  },
  methods: {
    toggleMenu() {
      var x = document.getElementById("header-links");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    },
  },
};
</script>
