<script setup lang="ts">
import { VBtn } from "../../"
function handleClick() {
  console.log("Click")
}
</script>

<template>
  <main>
    <div>
      <h2>Buttons: Classic</h2>
      <VBtn :onClick="() => handleClick()" primary>Primary</VBtn>
      <VBtn :onClick="() => handleClick()" secondary>Secondary</VBtn>
      <VBtn :onClick="() => handleClick()" danger>Danger</VBtn>
      <VBtn :onClick="() => handleClick()" success>Success</VBtn>
      <VBtn :onClick="() => handleClick()" warning>Warning</VBtn>
    </div>
    <div>
      <h2>Buttons: Transparent</h2>
      <VBtn transparent primary>Primary</VBtn>
      <VBtn transparent secondary>Secondary</VBtn>
      <VBtn transparent danger>Danger</VBtn>
      <VBtn transparent success>Success</VBtn>
      <VBtn transparent warning>Warning</VBtn>
    </div>
    <div>
      <h2>Buttons: Disabled</h2>
      <VBtn disabled primary>Primary</VBtn>
      <VBtn disabled secondary>Secondary</VBtn>
      <VBtn disabled danger>Danger</VBtn>
      <VBtn disabled success>Success</VBtn>
      <VBtn disabled warning>Warning</VBtn>
    </div>
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

div {
  margin-top: 15px;
  padding: 10px;
}
</style>

