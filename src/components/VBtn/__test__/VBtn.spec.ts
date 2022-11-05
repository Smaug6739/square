import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import VBtn from '../VBtn.vue';

describe('VBtn snapshot', () => {
  test('Default (without argument)', () => {
    const wrapper = mount(VBtn);
    expect(wrapper.html()).toMatchSnapshot();
  });
  test('Styles (primary, secondary, success, danger, warning, info)', () => {
    // Primary
    const wrapperPrimary = mount(VBtn, { props: { primary: true } });
    expect(wrapperPrimary.html()).toMatchSnapshot();

    // Secondary
    const wrapperSecondary = mount(VBtn, { props: { secondary: true } });
    expect(wrapperSecondary.html()).toMatchSnapshot();

    // Success
    const wrapperSuccess = mount(VBtn, { props: { success: true } });
    expect(wrapperSuccess.html()).toMatchSnapshot();

    // Danger
    const wrapperDanger = mount(VBtn, { props: { danger: true } });
    expect(wrapperDanger.html()).toMatchSnapshot();

    // Warning
    const wrapperWarning = mount(VBtn, { props: { warning: true } });
    expect(wrapperWarning.html()).toMatchSnapshot();

    // Info
    const wrapperInfo = mount(VBtn, { props: { info: true } });
    expect(wrapperInfo.html()).toMatchSnapshot();
  });
  test('Styles (transparent)', () => {
    // Primary
    const wrapperPrimary = mount(VBtn, { props: { transparent: true, primary: true } });
    expect(wrapperPrimary.html()).toMatchSnapshot();

    // Secondary
    const wrapperSecondary = mount(VBtn, { props: { transparent: true, secondary: true } });
    expect(wrapperSecondary.html()).toMatchSnapshot();

    // Success
    const wrapperSuccess = mount(VBtn, { props: { transparent: true, success: true } });
    expect(wrapperSuccess.html()).toMatchSnapshot();

    // Danger
    const wrapperDanger = mount(VBtn, { props: { transparent: true, danger: true } });
    expect(wrapperDanger.html()).toMatchSnapshot();

    // Warning
    const wrapperWarning = mount(VBtn, { props: { transparent: true, warning: true } });
    expect(wrapperWarning.html()).toMatchSnapshot();

    // Info
    const wrapperInfo = mount(VBtn, { props: { transparent: true, info: true } });
    expect(wrapperInfo.html()).toMatchSnapshot();
  });
});

describe('VBtn classes', () => {
  test('Styles', () => {
    // Primary
    const wrapperPrimary = mount(VBtn, { props: { primary: true } });
    expect(wrapperPrimary.classes()).toContain('primary');

    // Secondary
    const wrapperSecondary = mount(VBtn, { props: { secondary: true } });
    expect(wrapperSecondary.classes()).toContain('secondary');

    // Success
    const wrapperSuccess = mount(VBtn, { props: { success: true } });
    expect(wrapperSuccess.classes()).toContain('success');

    // Danger
    const wrapperDanger = mount(VBtn, { props: { danger: true } });
    expect(wrapperDanger.classes()).toContain('danger');

    // Warning
    const wrapperWarning = mount(VBtn, { props: { warning: true } });
    expect(wrapperWarning.classes()).toContain('warning');

    // Info
    const wrapperInfo = mount(VBtn, { props: { info: true } });
    expect(wrapperInfo.classes()).toContain('info');
  });

  test('Styles (transparent)', () => {
    // Primary & Transparent
    const wrapperPrimary = mount(VBtn, { props: { transparent: true, primary: true } });
    expect(wrapperPrimary.classes()).toContain('primary');
    expect(wrapperPrimary.classes()).toContain('transparent');

    // Secondary & Transparent
    const wrapperSecondary = mount(VBtn, { props: { transparent: true, secondary: true } });
    expect(wrapperSecondary.classes()).toContain('secondary');
    expect(wrapperSecondary.classes()).toContain('transparent');

    // Success & Transparent
    const wrapperSuccess = mount(VBtn, { props: { transparent: true, success: true } });
    expect(wrapperSuccess.classes()).toContain('success');
    expect(wrapperSuccess.classes()).toContain('transparent');

    // Danger & Transparent
    const wrapperDanger = mount(VBtn, { props: { transparent: true, danger: true } });
    expect(wrapperDanger.classes()).toContain('danger');
    expect(wrapperDanger.classes()).toContain('transparent');

    // Warning & Transparent
    const wrapperWarning = mount(VBtn, { props: { transparent: true, warning: true } });
    expect(wrapperWarning.classes()).toContain('warning');
    expect(wrapperWarning.classes()).toContain('transparent');

    // Info & Transparent
    const wrapperInfo = mount(VBtn, { props: { transparent: true, info: true } });
    expect(wrapperInfo.classes()).toContain('info');
    expect(wrapperInfo.classes()).toContain('transparent');
  });
});
