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
      { text: 'Documentation', link: '/docs/' },
      { text: 'GitHub', link: '' },
    ],
    socialLinks: [
      { icon: 'discord', link: 'https://discord.com/users/611468402263064577' },
      { icon: 'github', link: 'https://github.com/Smaug6739/square' },
    ],
    sidebar: {
      '/docs/': [
        {
          text: 'Components',
          items: [{ text: 'Button', link: '/docs/components/button' }],
        },
      ],
    },
  },
});
