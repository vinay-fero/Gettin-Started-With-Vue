import {createStore} from 'vuex';

import coachStore from '@/store/modules/coaches/index';
import requestStore from '@/store/modules/requests/index';

export default createStore({
  modules: {
    coaches: coachStore,
    request: requestStore
  },
  state() {
    return {
      userId: 'c3'
    }
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
});
