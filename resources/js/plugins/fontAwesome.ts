import { App } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCaretDown);
library.add(faSearch);

export default (app: App): void => {
  app.component('fa', FontAwesomeIcon);
};
