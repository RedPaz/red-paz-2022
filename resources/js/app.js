import './bootstrap';
import { createApp } from 'vue';
import router from './router.js';
import App from './layouts/App.vue';

// FontAwesome watch
import fontAwesome from './plugins/fontAwesome';

createApp(App)
  .use(router)
  .use(fontAwesome)
  .mount('#app');
