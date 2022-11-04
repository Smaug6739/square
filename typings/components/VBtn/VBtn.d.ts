declare const props: Readonly<{
    onClick?: () => void;
    value?: string;
    enabled?: boolean;
    loading?: boolean | string;
    icon?: string;
}>;
import type { DefineComponent } from 'vue';
export declare type component = DefineComponent<typeof props, {}, any>;
export {};
