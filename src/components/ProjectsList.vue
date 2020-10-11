<template>
  <v-card class="mx-auto" max-width="500">
    <v-toolbar color="teal" dark>
      <v-toolbar-title>Projects</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list>
      <v-list-group
        v-for="(item, index) in projects"
        :key="index"
        :prepend-icon="item.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item link>
          <v-btn icon>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-list-item-content>
            Edit project
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-btn icon>
            <v-icon>mdi-cancel</v-icon>
          </v-btn>
          <v-list-item-content>
            Delete project
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: ["projects"],
  name: "ProjectsList"
};
</script>

<style scoped></style>
