<template>
    <div class="about">
        <h1>This is an about page</h1>

        <p>count from store =: {{ countFromStore }}</p>
    </div>
</template>

<script>
  import store from "./../store";


  export default {
    name: "About",
    computed: {
      countFromStore: () => store.state.count
    }
  };


</script>
