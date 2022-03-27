<script setup>
import { RouterLink, RouterView } from "vue-router";
import CrudForm from "@/components/CrudForm.vue";
import RwvHeader from "@/components/TheHeader.vue";
</script>

   
<template>
  <div id="app">
    <RwvHeader />
    <router-view></router-view>
  </div>
</template>

<style>
@import "@/assets/base.css";

#app {
  font-weight: normal;
}


.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}


</style>
