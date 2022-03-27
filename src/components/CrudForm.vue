<script>
import axios from "axios";
export default {
  name: "CrudForm",
  props: {},
  data() {
    return {
      loading: false,
      roomcode: "",
      people: [],
    };
  },
  created() {
    this.getPeople();
  },
  methods: {
    validateForm(f) {},
    resetFields() {
      document.getElementById("edit-person").style.display = "none";
      document.getElementById("edit-id-field").value = "";
      document.getElementById("edit-name-field").value = "";
      document.getElementById("edit-age-field").value = "";
      document.getElementById("edit-email-field").value = "";
    },
    setEditFields(person) {
      document.getElementById("edit-person").style.display = "block";
      document.getElementById("edit-id-field").value = person.Id;
      document.getElementById("edit-name-field").value = person.Name;
      document.getElementById("edit-age-field").value = person.Age;
      document.getElementById("edit-email-field").value = person.Email;
    },
    updateUser() {
      var person = {
        Name: document.getElementById("edit-name-field").value,
        Age: parseInt(document.getElementById("edit-age-field").value),
        Email: document.getElementById("edit-email-field").value,
        Id: parseInt(document.getElementById("edit-id-field").value),
      };
      axios.put("http://localhost:8090/updatePerson", person).catch((error) => {
        console.log(error);
        document.getElementById("error-msg").style.display = "block";
      });
    },
    addUser() {
      var person = {
        Name: document.getElementById("nameField").value,
        Age: parseInt(document.getElementById("ageField").value),
        Email: document.getElementById("emailField").value,
      };
      console.log(person);
      axios
        .post("http://localhost:8090/addPeople", person)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          document.getElementById("error-msg").style.display = "block";
        });
    },
    delUser(pid) {
      console.log(pid);
      var person = {
        Id: pid,
      };
      axios
        .delete("http://localhost:8090/deletePerson", { data: person })
        .then((response) => {
          console.log(response);
          this.getPeople();
          this.resetFields();
        })
        .catch((error) => {
          console.log(error);
          document.getElementById("error-msg").style.display = "block";
        });
    },
    getPeople() {
      axios
        .get("http://localhost:8090/getPeople")
        .then((response) => {
          this.people = response.data;
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          document.getElementById("error-msg").style.display = "block";
        });
    },
  },
};
</script>

<template>
  <div>
    <div id="error-msg">
      <h3>We're sorry, something went wrong, please try again!</h3>
    </div>

    <form id="base-form" @submit="validateForm(addUser())">
      <label for="nameField">Name:</label>
      <input
        type="text"
        id="nameField"
        name="playername"
        maxlength="10"
      /><br />
      <label for="nameField">Age:</label>
      <input
        type="number"
        id="ageField"
        name="playerage"
        min="0"
        max="150"
      /><br />
      <label for="emailField">Email:</label>
      <input type="email" id="emailField" name="playeremail" /><br /><br />
      <input type="submit" value="Submit" />
    </form>
    <div class="table-div">
      <table class="player-table">
        <tr>
          <th></th>
          <th>Player Age</th>
          <th>Player Name</th>
          <th>Player Email</th>
          <th>Edit</th>
        </tr>
        <tr v-for="ps in people" :key="ps.Id">
          <td @click="delUser(ps.Id)">X</td>
          <td>{{ ps.Age }}</td>
          <td>{{ ps.Name }}</td>
          <td>{{ ps.Email }}</td>
          <td @click="setEditFields(ps)">-></td>
        </tr>
      </table>
    </div>
    <div id="edit-person">
      <form id="edit-form" @submit="validateForm(updateUser())">
        <input type="hidden" id="edit-id-field" />
        <label for="edit-name-field">Name:</label>
        <input
          type="text"
          id="edit-name-field"
          name="playername"
          maxlength="10"
        /><br />
        <label for="edit-age-field">Age:</label>
        <input
          type="number"
          id="edit-age-field"
          name="playerage"
          min="0"
          max="150"
        /><br />
        <label for="edit-email-field">Email:</label>
        <input
          type="email"
          id="edit-email-field"
          name="playeremail"
        /><br /><br />
        <input type="submit" value="Submit" />
      </form>
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

#edit-person {
  display: none;
  padding: 40px;
}

#error-msg {
  display: none;
  text-align: center;
  color: red;
}

.roomcode-div {
  display: flex;
  align-items: center;
  justify-content: center;
}

.table-div {
  display: flex;
  justify-content: space-evenly;
}

.player-table {
  width: 85%;
  text-align: center;
}
.player-table th {
  font-weight: bold;
  text-align: center;
}

.player-table td {
  padding: 0 15px;
}
</style>
