<script setup lang="ts">
import { VBtn } from "../../"
function handleClick() {
	console.log("Click");
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
			<VBtn :onClick="() => handleClick()" info>Info</VBtn>
		</div>
		<div>
			<h2>Buttons: Transparent</h2>
			<VBtn transparent primary>Primary</VBtn>
			<VBtn transparent secondary>Secondary</VBtn>
			<VBtn transparent danger>Danger</VBtn>
			<VBtn transparent success>Success</VBtn>
			<VBtn transparent warning>Warning</VBtn>
			<VBtn transparent info>Info</VBtn>
		</div>
		<div>
			<h2>Buttons: Disabled</h2>
			<VBtn :onClick="() => handleClick()" disabled primary>Primary</VBtn>
			<VBtn :onClick="() => handleClick()" disabled secondary>Secondary</VBtn>
			<VBtn :onClick="() => handleClick()" disabled danger>Danger</VBtn>
			<VBtn :onClick="() => handleClick()" disabled success>Success</VBtn>
			<VBtn :onClick="() => handleClick()" disabled warning>Warning</VBtn>
			<VBtn :onClick="() => handleClick()" disabled info>Info</VBtn>
		</div>
	</main>
</template>

<style scoped>
div {
	margin-top: 15px;
	padding: 10px;
}
</style>

