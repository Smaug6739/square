<script setup lang="ts">
import Components from './Components.vue'
</script>

<template>
  <main>
    <section id="light">
      <Components />

    </section>
    <section id="dark">
      <Components />
    </section>
  </main>

</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #f5f5f5;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: #212121;
  margin: 0;
}


section {
  min-height: 100vh;
}

#light {
  background-color: #f5f5f5;
  color: #212121;
}

#dark {
  background-color: #212121;
  color: #f5f5f5;
}
</style>

