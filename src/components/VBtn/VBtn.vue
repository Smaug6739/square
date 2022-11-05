
<template>
	<button @click="onClick" :class="color + ' ' + tr">
		<slot>
			{{ label }}
		</slot>
	</button>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue';

const props = defineProps<{
	onClick?: () => void;
	label?: string;
	enabled?: boolean;
	loading?: boolean | string;

	// Style
	primary?: boolean;
	secondary?: boolean;
	danger?: boolean;
	success?: boolean;
	warning?: boolean;

	transparent?: boolean;
}>();

const onClick = () => {
	if (props.onClick) props.onClick();
};

const color = computed(() => {
	if (props.primary) return 'primary';
	if (props.secondary) return 'secondary';
	if (props.danger) return 'danger';
	if (props.success) return 'success';
	if (props.warning) return 'warning';
	return '';
});

const tr = computed(() => {
	if (props.transparent) return 'transparent';
	return '';
});
</script>

<style scoped lang="scss" src="./VBtn.scss">

</style>


