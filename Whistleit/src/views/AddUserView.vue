<template>
  <div>
    <h1>Add User View</h1>
    <!-- Dropdown for selecting teams -->
    <v-select
      v-model="selectedTeam"
      :items="teams"
      label="Select Team"
      @input="associateTeam"
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
export default {
  name: "AddUserView",
  components: {
    ButtonComponent,
  },
  data() {
    return {
      selectedTeam: null,
      selectedUsers: [],
      teams: ["Front End", "Back End", "Dev Ops", "Data Science"],
      // users: ["User1", "User2", "User3", "User4"], // Dummy users
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
      // Emit an event with selectedTeam and selectedUsers
      this.$emit("add-users", {
        team: this.selectedTeam,
        users: this.selectedUsers,
      });
    },
  },
};
</script>
