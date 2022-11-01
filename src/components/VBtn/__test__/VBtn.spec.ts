import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import VBtn from '../VBtn.vue';

describe('VBtn snapshot', () => {
  test('default', () => {
    const wrapper = mount(VBtn);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
