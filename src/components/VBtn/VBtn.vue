<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
	onClick?: () => void;
	value?: string;
	enabled?: boolean;
	loading?: boolean | string;
	icon?: string;
}>();

</script>

<template>
	<button @click="onClick">
		<slot />
	</button>
</template>