import actions from '@/store/counter/actions';
import mutations from '@/store/counter/mutations';
import getters from '@/store/counter/getters';

export default {
  namespaced: true,
  state() {
    return {
      counter: 0,
    }
  },
  mutations,
  actions,
  getters
};