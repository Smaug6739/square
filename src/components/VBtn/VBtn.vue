
<template>
	<button @click="onClick" :class="{ ...color, ' transparent': isTransparent}" :disabled="!enabled">
		<slot>
			{{ label }}
		</slot>
	</button>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue';

const props = withDefaults(defineProps<{
	onClick?: () => void;
	label?: string;
	enabled?: boolean;
	loading?: boolean | string; //TODO: Implement loading

	// Style
	primary?: boolean;
	secondary?: boolean;
	danger?: boolean;
	success?: boolean;
	warning?: boolean;
	info?: boolean;

	transparent?: boolean;
}>(), {
	enabled: true,
	loading: false,

	primary: false,
	secondary: false,
	danger: false,
	success: false,
	warning: false,
	info: false,

	transparent: false,
});

const onClick = () => {
	if (props.onClick) props.onClick();
};

const color = computed(() => {
	if (props.primary) return { 'primary': true };
	if (props.secondary) return { 'secondary': true };
	if (props.danger) return { 'danger': true };
	if (props.success) return { 'success': true };
	if (props.warning) return { 'warning': true };
	if (props.info) return { 'info': true };
	return '';
});

const isTransparent = computed(() => {
	return props.transparent;
});
</script>

<style scoped lang="scss" src="./VBtn.scss">

</style>


