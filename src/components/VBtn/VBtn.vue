

<template>
	<button @click="onClick">
		<slot>
			{{ label }}
		</slot>
	</button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps<{
	onClick?: () => void;
	label?: string;
	enabled?: boolean;
	loading?: boolean | string;
}>();
</script>