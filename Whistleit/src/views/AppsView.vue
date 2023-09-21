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
    <!-- button for add department  -->
    <!-- active button -->
    <ButtonComponent
      color="green"
      text="Add Department"
      prepend-icon="mdi-account"
      class="mr-14 mt-4"
    />
  </v-row>
  <!-- table -->
  <TableComponent :headings="tableHeadings" :data="tableData" class="mr-15 ml-15 mx-15" />
</template>

<script>
import ButtonComponent from "../components/commons/ButtonComponent";
import SearchInputComponent from "../components/commons/SearchInputComponent";
import TableComponent from "../components/commons/TableComponent";
export default {
  name: "AppsView",
  components: {
    ButtonComponent,
    SearchInputComponent,
    TableComponent,
  },
  data() {
    return {
      // Define the headings and data for the table
      tableHeadings: [
        "App Name",
        "Description",
        "Secret Key",
        "Incoming Webhook URL",
        "Outgoing Webhook URL",
        "Channels",
        "Created At",
        "Action",
      ],
      tableData: [
        [
          "Whistle It",
          "Organizational Chat App",
          "jwt",
          "www.whistleit.io",
          "www.whistleit.outgoing",

          "lorem ipsum",

          "1-Sep-2023",
          "...",
        ],
        [
          "Shufty",
          "CRM",
          "jwt",
          "www.shufty.io",
          "www.shufty.outgoing",

          "lorem ipsum",

          "1-Sep-2023",
          "...",
        ],
        // Add more data rows as needed
      ],
    };
  },
};
</script>
