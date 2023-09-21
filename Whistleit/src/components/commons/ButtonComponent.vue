<template>
  <v-btn :color="color" text>{{ text }}</v-btn>
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
