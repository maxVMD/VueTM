<template>
  <div class="">
    <H2>This is contacts</H2>
    <div class="box">
      <p>{{ msg }}</p>

      {{ count }}
    </div>

    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="addC">addC</button>
    <br />

    <p v-for="(c, index) in arrayC" :key="index">{{ c }}</p>
  </div>
</template>

<script>
import store from "./../store";

export default {
  name: "Contacts",
  data: () => {
    return {
      msg: "Contacts box"
    };
  },
  computed: {
    count: () => store.state.count,
    arrayC: () => store.state.itemArr
  },
  methods: {
    increment() {
      store.commit("increment");
    },
    decrement() {
      store.commit("decrement");
    },
    addC: () => {
      store.commit("addTo", "ode");
    }
  }
};
</script>

<style scoped lang="scss">
h2 {
  color: aquamarine;
}

.box {
  p {
    font-size: 15px;
    color: cadetblue;
  }
}
</style>
