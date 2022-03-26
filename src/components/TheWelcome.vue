<script>
import axios from "axios";
export default {
  name: "Welcome",
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
    //  toggleMenu() {
    //    var x = document.getElementById("myLinks");
    //    if (x.style.display === "block") {
    //      x.style.display = "none";
    //    } else {
    //      x.style.display = "block";
    //    }
    //  },
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
        });
    },
    //  submitEntry() {
    //    axios
    //      .get("http://localhost:8090/getCode")
    //      .then((response) => console.log(response));
    //    axios
    //      .get("http://localhost:8090/getData")
    //      .then((response) => console.log(response));
    //  },
  },
};
</script>

<template>
  <div>
    <div style="display: flex; align-items: center; justify-content: center">
      <h2>Room Code:</h2>
      <h2 id="roomCode">{{ roomcode }}</h2>
    </div>
    <form id="base-form">
      <label for="playername">Name:</label>
      <input
        type="text"
        id="playername"
        name="playername"
        maxlength="10"
      /><br /><br />
      <input type="submit" value="Submit" />
    </form>
    <div style="display: flex; justify-content: space-evenly">
    <table>
      <tr class="player-table">
        <th>Player ID</th>
        <th>Player Name</th>
      </tr>
    </table>
    </div>
  </div>
</template>

<style>
#base-form {
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.player-table th{
   font-weight: bold;
}
</style>
