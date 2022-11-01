import { App } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCaretDown);

export default (app: App): void => {
  app.component('fa', FontAwesomeIcon);
};
