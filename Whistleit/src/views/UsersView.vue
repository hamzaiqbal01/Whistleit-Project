<template>
  <!-- active button -->
  <ButtonComponent color="green" text="Add Task" class="mx-4 mt-4" />
  <!-- archive button -->
  <ButtonComponent color="primary" text="Archive Task" class="mx-4 mt-4" />
  <!-- v-row -->
  <v-row class="mt-10">
    <!-- search input -->
    <SearchInputComponent
      label="Search"
      prepend-icon="mdi-magnify"
      class="mt-4 mx-10"
    />
    <!-- add user button -->
    <!-- toggle the visibility of this "AddUserComponent" upon "Add User" button clicks -->
    <ButtonComponent
      color="green"
      text="Add User"
      prepend-icon="mdi-account"
      class="mx-4 mt-4"
      @click="showAddUser = !showAddUser"
    />
    <!-- export users button -->
    <ButtonComponent
      color="green"
      text="Export Users"
      prepend-icon="mdi-download"
      class="mr-14 mt-4"
    />
  </v-row>
  <!-- AddUserView component -->
  <!-- toggle the visibility of this AddUserComponent upon "Add User" button clicks -->
  <AddUserView
    v-if="showAddUser"
    :teams="teams"
    @add-users="addUsersToTable"
    class="mr-15 ml-15 mx-15"
  />
  <!-- table -->
  <TableComponent
    :headings="tableHeadings"
    :data="tableData"
    class="mr-15 ml-15 mx-auto"
  />
</template>

<script>
import ButtonComponent from "../components/commons/ButtonComponent";
import SearchInputComponent from "../components/commons/SearchInputComponent";
import TableComponent from "../components/commons/TableComponent";
import AddUserView from "./AddUserView.vue";
export default {
  name: "UsersView",
  components: {
    ButtonComponent,
    SearchInputComponent,
    TableComponent,
    AddUserView,
  },
  data() {
    return {
      // Define the headings and data for the table
      tableHeadings: [
        "User",
        "Role",
        "Designation",
        "Joined Date",
        "Last Activity",
        "Actions",
      ],
      tableData: [
        ["John Doe", "Admin", "Manager", "2023-01-15", "2023-09-20", "..."],
        ["Jane Smith", "User", "Engineer", "2023-02-20", "2023-09-18", "..."],
        // Add more data rows as needed
      ],
      // department teams
      teams: ["Front End", "Back End", "Dev Ops", "Data Science"],
      showAddUser: false, // Flag to control the visibility of AddUserView
    };
  },
  // methods
  methods: {
    // Handler for adding users to the table
    addUsersToTable(data) {
      // Update the tableData based on the selected team and users
      const { team, users } = data;
      users.forEach((user) => {
        // Add a new row with user, role, and team (designation)
        this.tableData.push([user, "User", team]);
      });
    },
  },
};
</script>
