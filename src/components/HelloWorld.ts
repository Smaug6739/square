import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  render() {
    return h('div', {
      innerHTML: 'Hello World !',
      style: 'color: red;',
    });
  },
});
