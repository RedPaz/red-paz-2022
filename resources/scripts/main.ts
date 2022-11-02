import 'nprogress/nprogress.css';

import { createApp } from 'vue';
import router from '@/router';
import App from '@/App.vue';

// FontAwesome watch
import fontAwesome from './plugins/fontAwesome';
// Notifications
import Notifications from '@kyvg/vue3-notification';

createApp(App)
  .use(router)
  .use(fontAwesome)
  .use(Notifications)
  .mount('#app');
