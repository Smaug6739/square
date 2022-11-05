<script setup lang="ts">
import { VBtn } from "../../"
</script>

<template>
  <main>
    <div>
      <VBtn primary>Primary</VBtn>
      <VBtn secondary>Secondary</VBtn>
      <VBtn danger>Danger</VBtn>
      <VBtn success>Success</VBtn>
      <VBtn warning>Warning</VBtn>
    </div>
    <div>
      <VBtn transparent primary>Primary</VBtn>
      <VBtn transparent secondary>Secondary</VBtn>
      <VBtn transparent danger>Danger</VBtn>
      <VBtn transparent success>Success</VBtn>
      <VBtn transparent warning>Warning</VBtn>
    </div>
  </main>
</template>

<style>
div {
  margin-top: 15px;
}
</style>

