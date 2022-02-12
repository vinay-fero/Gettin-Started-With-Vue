export default {
  increment(context) {
    console.log('context', context);
    setTimeout(() => context.commit('increment'), 2000);
  },
  increase(context, payload) {
    context.commit('increase', payload);
  }
}