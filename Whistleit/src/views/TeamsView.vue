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
    <!-- button for add teams  -->
    <!-- active button -->
    <ButtonComponent
      color="green"
      text="Add Teams"
      prepend-icon="mdi-account"
      class="mr-14 mt-4"
    />
  </v-row>
  <!-- table -->
  <TableComponent
    :headings="tableHeadings"
    :data="teamsTableData"
    class="mr-15 ml-15 mx-auto"
  />
</template>

<script>
import ButtonComponent from "../components/commons/ButtonComponent";
import SearchInputComponent from "../components/commons/SearchInputComponent";
import TableComponent from "../components/commons/TableComponent";
import TeamsApis from "../apiIntegrations/adminPanelApis/teamsApis";
export default {
  name: "TeamsView",
  components: {
    ButtonComponent,
    SearchInputComponent,
    TableComponent,
  },
  data() {
    return {
      // Define the headings and data for the table
      tableHeadings: ["Team Name", "Total Members", "Created Date", "Actions"],
      teamsTableData: [],
      teamNames: [], // pass the team names to UsersView.vue and AddUsersView.vue
    };
  },
  // create a life cycle method
  async created() {
    // Fetch team data from the API
    this.teamsTableData = await TeamsApis.getAllTeams();
    // Map the fetched data to match the table structure
    this.teamsTableData = this.teamsTableData.map((team) => [
      team.name, // Team Name from the API
      "Total Members", // Hardcoded string
      "Created At", // Hardcoded string
      "...", // Hardcoded string
    ]);
    // Extract and store team names separately
    this.teamNames = this.teamsTableData.map((teamData) => teamData[0]);
    // Emit an event with the updated team names
    this.$emit("team-names-updated", this.teamNames);
    const apiTeamNamesArray =[]
    const apiTeamNames = this.teamNames
    for (let i in apiTeamNames) {
      apiTeamNamesArray.push(apiTeamNames[i]);
    }
    console.log(apiTeamNamesArray)
  },
};
</script>
