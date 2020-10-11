<!--<template>-->
<!--<v-card-->
<!--color="grey lighten-4"-->
<!--flat-->
<!--height="200px"-->
<!--tile-->
<!--&gt;-->
<!--<v-toolbar dense data-app>-->

<!--<v-menu-->
<!--offset-y-->
<!--bottom-->

<!--transition="scale-transition"-->
<!--&gt;-->
<!--<template v-slot:activator="{ on, attrs }">-->

<!--<v-app-bar-nav-icon-->
<!--v-bind="attrs"-->
<!--v-on="on">-->

<!--</v-app-bar-nav-icon>-->
<!--</template>-->

<!--<v-list>-->
<!--<v-list-item link>-->
<!--<v-list-item-title>Settings</v-list-item-title>-->
<!--</v-list-item>-->
<!--<v-list-item link>-->
<!--<v-list-item-title @click="exit">Exit</v-list-item-title>-->
<!--</v-list-item>-->
<!--</v-list>-->
<!--</v-menu>-->

<!--<v-toolbar-title> {{ credentials.login }}</v-toolbar-title>-->

<!--<v-spacer></v-spacer>-->

<!--<v-btn icon>-->
<!--<v-icon>mdi-magnify</v-icon>-->
<!--</v-btn>-->

<!--<v-btn icon>-->
<!--<v-icon>mdi-heart</v-icon>-->
<!--</v-btn>-->

<!--<v-btn icon>-->
<!--<v-icon>mdi-dots-vertical</v-icon>-->
<!--</v-btn>-->
<!--</v-toolbar>-->
<!--</v-card>-->
<!--</template>-->

<template>
  <!--<v-card height="450px">-->
  <v-navigation-drawer absolute permanent right width="350">
    <template v-slot:prepend>
      <v-list-item two-line>
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/men/81.jpg" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ credentials.login }}</v-list-item-title>
          <v-list-item-subtitle>{{ credentials.email }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="`/${item.path}`"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-arrow-up-bold-box-outline</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title @click="exit">Exit</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <!--</v-card>-->
</template>

<script>
import credentialService from "../_services/credential.service";

export default {
  name: "NavBar",
  data: () => {
    return {
      credentials: credentialService.getCredential(),
      items: [
        { path: "projects", title: "Projects", icon: "mdi-home-city" },
        { path: "notes", title: "Notes", icon: "mdi-domain" }
      ]
    };
  },
  methods: {
    exit() {
      credentialService.setCredentials();
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped lang="scss"></style>
