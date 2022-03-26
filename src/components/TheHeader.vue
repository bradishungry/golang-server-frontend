<template>
  <nav class="navbar navbar-light">
    <div id="myLinks">
      <a>News</a>
      <a>Contact</a>
      <a>About</a>
    </div>
    <div class="rowone">
      <div id="hamburger">
        <a href="javascript:void(0);" class="icon">
          <fa :icon="faBars" />
          <i class="fa fa-bars"></i>
        </a>
      </div>
      <div class="container">
        <h1>Vue Practice!</h1>
      </div>
    </div>
  </nav>
</template>
<style>
nav {
  color: white;
  background-color: blue;
}
.rowone {
  display: flex;
  justify-content: space-around;
}
.hamburger-menu {
  display: none;
}

/* Hide the links inside the navigation menu (except for logo/home) */
.navbar #myLinks {
  display: none;
}

/* Style navigation menu links */
.navbar a {
  color: white;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  display: block;
}

/* Style the hamburger menu */
.navbar a.icon {
  display: block;
}

/* Add a grey background color on mouse-over */
.navbar a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the active link (or home/logo) */
.active {
  background-color: #04aa6d;
  color: white;
}
</style>
<script>
import axios from "axios";
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
      var x = document.getElementById("myLinks");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    },
    submitEntry() {
      axios
        .get("http://localhost:8090/getCode")
        .then((response) => console.log(response));
      axios
        .get("http://localhost:8090/getData")
        .then((response) => console.log(response));
    },
  },
};
</script> 
