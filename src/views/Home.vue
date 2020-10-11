<template>
  <v-app>
    <div class="home">
      <NavBar />
      <div class="container-box">
        <div class="present-box" v-if="$route.path === '/'">
          <v-btn
            color="warning"
            elevation="21"
            x-large
            raised
            width="250px"
            to="/notes"
            >Notes
          </v-btn>
          <v-divider vertical></v-divider>
          <v-btn
            color="secondary"
            raised
            elevation="21"
            to="/projects"
            width="250px"
            x-large
          >
            Projects
          </v-btn>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </v-app>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar";

export default {
  name: "Home",
  components: {
    NavBar
  }
};
</script>

<style scoped lang="scss">
.home {
  height: 100vh;
  background: url("https://cdn.vuetifyjs.com/images/parallax/material.jpg");
}

.container-box {
  display: flex;
  justify-content: center;
  margin-right: 350px;
  padding: 20px;
  overflow-y: auto;
  height: calc(100vh - 60px);
}

.present-box {
  width: 100%;
  align-items: center;
  justify-content: space-around;
  display: flex;
}
</style>
