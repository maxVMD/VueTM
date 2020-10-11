<template>
  <div class="container" data-app>
    <!--<v-toolbar-title><h2>Projects</h2></v-toolbar-title>-->

    <v-row no-gutters justify="space-between">
      <v-col cols="12" sm="4">
        <ProjectsList :projects="projects"></ProjectsList>
      </v-col>

      <v-col cols="12" md="7">
        <v-card>
          <v-card class="pa-2" outlined tile>
            One of three columns
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ProjectsList from "../components/ProjectsList";

export default {
  name: "Projects",
  components: {
    ProjectsList
  },
  computed: {
    projects: () => [{ name: "P1" }, { name: "P2" }, { name: "P3" }]
  }
};
</script>

<style scoped lang="scss"></style>
