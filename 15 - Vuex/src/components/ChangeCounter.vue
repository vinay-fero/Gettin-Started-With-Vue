<template>
<!--  <button @click='increment'>Add 1</button>
  <button @click='increase({value: 5})'>Add 5</button>-->
  <button @click='inc'>Add 1</button>
  <button @click='add5({value: 5})'>Add 5</button>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'ChangeCounter',
  methods: {
    // ...mapActions(['increment', 'increase']),
    ...mapActions('numbers', {inc: 'increment', add5: 'increase'}),
    // addOne() {
    //   this.$store.dispatch('increment');
    // },
  }
};
</script>

<style scoped>

</style>