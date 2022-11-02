import { defineProps, defineComponent } from 'vue';

defineProps<{
  onClick: () => void;
  value?: string;
  enabled?: boolean;
  loading?: boolean | string;
  icon: string;
}>();

