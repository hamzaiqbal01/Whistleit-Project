<template>
  <v-table theme="dark">
    <thead>
      <tr>
        <th v-for="(heading, index) in headings" :key="index">{{ heading }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, rowIndex) in data" :key="rowIndex">
        <!-- Loop through the data fields based on the number of headings -->
        <td v-for="(field, colIndex) in item" :key="colIndex">{{ field }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  name: "TableComponent",
  props: {
    headings: Array, // Define an array of headings as a prop
    data: Array, // Define an array of data objects as a prop
  },
};
</script>
