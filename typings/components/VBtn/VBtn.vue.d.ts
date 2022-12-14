declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            enabled: boolean;
            loading: boolean;
            primary: boolean;
            secondary: boolean;
            danger: boolean;
            success: boolean;
            warning: boolean;
            info: boolean;
            transparent: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
            onClick?: () => void;
            label?: string;
            enabled?: boolean;
            loading?: boolean;
            primary?: boolean;
            secondary?: boolean;
            danger?: boolean;
            success?: boolean;
            warning?: boolean;
            info?: boolean;
            transparent?: boolean;
        }>, {
            enabled: boolean;
            loading: boolean;
            primary: boolean;
            secondary: boolean;
            danger: boolean;
            success: boolean;
            warning: boolean;
            info: boolean;
            transparent: boolean;
        }>>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "enabled" | "loading" | "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "transparent">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
            onClick?: () => void;
            label?: string;
            enabled?: boolean;
            loading?: boolean;
            primary?: boolean;
            secondary?: boolean;
            danger?: boolean;
            success?: boolean;
            warning?: boolean;
            info?: boolean;
            transparent?: boolean;
        }>, {
            enabled: boolean;
            loading: boolean;
            primary: boolean;
            secondary: boolean;
            danger: boolean;
            success: boolean;
            warning: boolean;
            info: boolean;
            transparent: boolean;
        }>>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            enabled: boolean;
            loading: boolean;
            primary: boolean;
            secondary: boolean;
            danger: boolean;
            success: boolean;
            warning: boolean;
            info: boolean;
            transparent: boolean;
        }> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
        onClick?: () => void;
        label?: string;
        enabled?: boolean;
        loading?: boolean;
        primary?: boolean;
        secondary?: boolean;
        danger?: boolean;
        success?: boolean;
        warning?: boolean;
        info?: boolean;
        transparent?: boolean;
    }>, {
        enabled: boolean;
        loading: boolean;
        primary: boolean;
        secondary: boolean;
        danger: boolean;
        success: boolean;
        warning: boolean;
        info: boolean;
        transparent: boolean;
    }>>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    onClick?: () => void;
    label?: string;
    enabled?: boolean;
    loading?: boolean;
    primary?: boolean;
    secondary?: boolean;
    danger?: boolean;
    success?: boolean;
    warning?: boolean;
    info?: boolean;
    transparent?: boolean;
}>, {
    enabled: boolean;
    loading: boolean;
    primary: boolean;
    secondary: boolean;
    danger: boolean;
    success: boolean;
    warning: boolean;
    info: boolean;
    transparent: boolean;
}>>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    enabled: boolean;
    loading: boolean;
    primary: boolean;
    secondary: boolean;
    danger: boolean;
    success: boolean;
    warning: boolean;
    info: boolean;
    transparent: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});
export default _default;
declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
declare type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};
