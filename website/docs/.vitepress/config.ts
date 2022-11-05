import { defineConfig } from 'vitepress';
import './style/vars.css';

export default defineConfig({
  title: 'Square',
  description: 'A Vue.js 3 UI library',

  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'GitHub', link: '' },
    ],
  },
});
