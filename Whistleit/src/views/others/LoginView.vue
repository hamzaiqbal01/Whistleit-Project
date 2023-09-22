<template>
  <v-container fluid>
    <h1 class="text-center">Login Form</h1>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <!-- form starts -->
        <v-form @submit.prevent="login" ref="form" lazy-validation>
          <!-- email -->
          <v-text-field
            v-model="email"
            label="Email"
            :rules="emailRules"
            required
          ></v-text-field>
          <!-- password -->
          <v-text-field
            v-model="password"
            label="Password"
            :rules="passwordRules"
            required
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
          <!-- submit button -->
          <v-btn type="submit" block class="mt-4">Submit</v-btn>
        </v-form>
        <!-- Error message for invalid credentials -->
        <v-alert v-if="loginError" type="error" class="mt-2">
          Invalid credentials. Please try again.
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<!-- script -->
<script>
import axios from "axios"; // Import Axios

export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "Valid email is required",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => (v && v.length >= 8) || "Password must be at least 8 characters",
      ],
      loginError: false, // Flag to show login error message
    };
  },
  // methods
  methods: {
    async login() {
      if (this.$refs.form.validate()) {
        const userLoggedInCredentials = {
          email: this.email,
          password: this.password,
        };

        try {
          const response = await axios.post("http://10.0.10.112:8000/login", userLoggedInCredentials);
          if (response && response.data.msg === "Successfull") {
            // Successful login, redirect to home page
            this.$router.push("/")
          } else {
            // Invalid credentials, show error message
            this.loginError = true;
          }
        } catch (error) {
          // Handle any API call errors here
          console.error("API error:", error);
          // Display a generic error message
          this.loginError = true;
        }
      }
    },
  },
};
</script>
