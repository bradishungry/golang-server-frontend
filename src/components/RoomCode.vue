<script>
import axios from "axios";
export default {
  name: "RoomCode",
  props: {},
  data() {
    return {
      loading: false,
      roomcode: "",
    };
  },
  created() {
    this.getRoomCode();
  },
  methods: {
    getRoomCode() {
      this.loading = true;
      axios
        .get("http://localhost:8090/getCode")
        .then((response) => {
          console.log(response);
          this.loading = false;
          this.roomcode = response.data;
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
          document.getElementById("error-msg").style.display = "block";
        });
    },
  },
};
</script>

<template>
  <div class="roomcode-div">
      <h2>Room Code:</h2>
      <h2 id="roomCode">{{ roomcode }}</h2>
    </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}


@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
