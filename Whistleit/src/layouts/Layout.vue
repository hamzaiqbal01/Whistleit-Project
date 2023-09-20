<template>
  <v-app>
    <v-navigation-drawer v-model="drawer">
      <!-- Inside side nav -->
      <v-list>
        <VListItem>
          <VListItemContent>
            <!-- Header -->
            <!-- Username -->
            <v-list-item-title>
              {{ userName }}
            </v-list-item-title>
            <!-- Company name -->
            <VListItemSubtitle>
              {{ companyName }}
            </VListItemSubtitle>
            <!-- Dropdown for Workspaces Names -->
            <v-select
              v-model="selectedWorkspace"
              :items="workspaceNames"
              label="Workspaces Names"
            ></v-select>
          </VListItemContent>
        </VListItem>
      </v-list>

      <!-- Divider -->
      <v-divider></v-divider>
      <!-- List items -->
      <v-list density="compact">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.link"
          link
          :value="item"
          color="primary"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list>

      <!-- Bottom buttons -->
      <v-divider></v-divider>
      <v-list>
        <!-- back to chat button -->
        <v-list-item link @click="backToChat">
          <template v-slot:prepend>
            <v-icon>mdi-arrow-left-circle</v-icon>
          </template>
          <v-list-item-title>Back to Chat</v-list-item-title>
        </v-list-item>
        <!-- logout button-->
        <v-list-item link @click="logout">
          <template v-slot:prepend>
            <v-icon>mdi-logout</v-icon>
          </template>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- app bar -->
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- bind this "Application" text with its title that is defind in tiems array -->
      <v-app-bar-title  >{{ selectedTitle }}</v-app-bar-title>
    </v-app-bar>
    <!-- Main content -->
    <v-main>
      <!-- Router view -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<!-- Setup script -->
<script setup>
import { ref } from "vue";
const drawer = ref(null);
</script>

<!-- Script -->
<script>
export default {
  name: "Layout",
  props: {
    title: String, // Prop to receive the dynamic title
  },
  components: {},

  data: () => (
    { drawer: null },
    {
      items: [
        { title: "Users", icon: "mdi-account", link: "/" },
        { title: "Teams", icon: "mdi-account-group", link: "/teams" },
        {
          title: "Department",
          icon: "mdi-office-building",
          link: "/department",
        },
        { title: "Channel", icon: "mdi-message", link: "/channel" },
        { title: "Attachments", icon: "mdi-attachment", link: "/attachments" },
        { title: "IP Settings", icon: "mdi-wifi", link: "/ipsettings" },
        { title: "Apps", icon: "mdi-apps", link: "/apps" },
        { title: "Payment", icon: "mdi-credit-card", link: "/payment" },
      ],
      userName: "USER NAME",
      companyName: "Company Name",
      workspaceNames: ["Workspace 1", "Workspace 2", "Workspace 3"],
      selectedWorkspace: null,
    }
  ),

  methods: {
    backToChat() {
      // Implement your logic for going back to chat
    },
    logout() {
      // Implement your logout logic
    },
  },
  computed: {
    // This computed property returns the title based on the current route
    selectedTitle() {
      const currentRoute = this.$route;
      const selectedItem = this.items.find((item) => item.link === currentRoute.path);
      return selectedItem ? selectedItem.title : "Application";
    },
  },
};
</script>
