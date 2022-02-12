import { createStore } from 'vuex';

import counterModule from '@/store/counter/index';
import mutations from '@/store/mutations';
import actions from '@/store/actions';
import getters from '@/store/getters';

export default createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      isLoggedIn: false
    };
  },
  mutations,
  actions,
  getters
});