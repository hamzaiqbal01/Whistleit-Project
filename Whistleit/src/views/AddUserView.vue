<template>
  <div class="add-user-view"> <!-- Add a CSS class for styling -->
    <h1>Add User View</h1>
    <!-- Dropdown for selecting teams -->
    <v-select
      v-model="selectedTeam"
      :items="teams"
      label="Select Team"
    ></v-select>
    <!-- Dropdown for selecting users -->
    <v-select
      v-model="selectedUsers"
      :items="userEmails"
      label="Select Users"
      multiple
    ></v-select>
    <!-- use reusable button component -->
    <ButtonComponent
      @click="addUsersToTable"
      color="green"
      text="Add User"
      class="mx-4 mt-4"
    />
  </div>
</template>

<script>
import ButtonComponent from "../components/commons/ButtonComponent";
import UserApis from "../apiIntegrations/adminPanelApis/usersApis";
import apiTeamNamesArray from "../views/TeamsView.vue"
export default {
  name: "AddUserView",
  components: {
    ButtonComponent,
  },
  data() {
    return {
      selectedTeam: null,
      selectedUsers: [],
      teams: ["Front End", "Back End", "Dev Ops", "Data Science"], // also bring team names here from api too
      users: [],
      userEmails: [], // Store user emails for the dropdown

    };
  },
  // create a life cycle method
  async created() {
    this.users = await UserApis.getAllUsers();
    // Extract user emails and populate the userEmails array
    this.userEmails = this.users.map((user) => user.email);

  },
  methods: {
    addUsersToTable() {
      console.log(apiTeamNamesArray)
      // Emit an event with selectedTeam and selectedUsers
      this.$emit("add-users", {
        team: this.selectedTeam,
        users: this.selectedUsers,
      });

      // Clear the selected values in the dropdown menus
      this.selectedTeam = null;
      this.selectedUsers = [];
    },
  },
};
</script>

<style scoped>
.add-user-view {
  background-color: lightgray; /* Change the background color as desired */
  width: 50%; /* Set the width to 50% of the parent's width */
  margin: 5% 25% 5% 25% !important; /* Center horizontally */
}
</style>
