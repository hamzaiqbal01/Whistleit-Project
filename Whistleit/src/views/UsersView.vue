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
    <!-- buttons for add users and export users  -->
    <!-- active button -->
    <ButtonComponent
      color="green"
      text="Add User"
      prepend-icon="mdi-account"
      class="mx-4 mt-4"
    />
    <!-- archive button -->
    <ButtonComponent
      color="green"
      text="Export Users"
      prepend-icon="mdi-download"
      class="mr-14 mt-4"
    />
  </v-row>
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
export default {
  name: "UsersView",
  components: {
    ButtonComponent,
    SearchInputComponent,
    TableComponent,
  },
  data() {
    return {
      // Define the headings and data for the table
      tableHeadings: ["User", "Role", "Designation", "Joined Date", "Last Activity", "Actions"],
      tableData: [
        ["John Doe", "Admin", "Manager", "2023-01-15", "2023-09-20", "..."],
        ["Jane Smith", "User", "Engineer", "2023-02-20", "2023-09-18", "..."],
        // Add more data rows as needed
      ],
    };
  },
};
</script>
