<template>
  <v-btn color="primary" text>{{ text }}</v-btn>
</template>

<script>
export default {
  name: "ButtonComponent",
  props:{
    text: String,
    color: String,
  }
};
</script>
