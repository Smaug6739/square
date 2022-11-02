<script lang="ts" setup src="./VBtn.ts"></script>

<template>
	<button>
		<i v-if="icon" :class="icon"></i>
		<slot>{{ value }}</slot>
	</button>
</template>


<style src="./VBtn.scss" lang=scss scoped>
// Path: src/components/VBtn/VBtn.scss
</style>