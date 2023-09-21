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
  name: "ChannelView",
  components: {
    ButtonComponent,
    SearchInputComponent,
    TableComponent,
  },
  data() {
    return {
      // Define the headings and data for the table
      tableHeadings: ["Channel Name", "Type", "Team", "Actions"],
      tableData: [
        ["Front End", "20", "1-Sep-2023", "..."],
        ["Back End", "20", "1-Sep-2023", "..."],
        // Add more data rows as needed
      ],
    };
  },
};
</script>
