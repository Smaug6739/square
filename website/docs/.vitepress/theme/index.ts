import DefaultTheme from 'vitepress/theme';
import '../style/vars.css';

import { VBtn } from '../../../../';
import '../../../../dist/style.css';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.component('VBtn', VBtn);
  },
};
