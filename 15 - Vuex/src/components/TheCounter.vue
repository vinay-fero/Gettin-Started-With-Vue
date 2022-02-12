<template>
  <h3>{{finalCounter}}</h3>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'TheCounter',
  computed: {
    ...mapGetters('numbers', ['finalCounter']),
    // counter() {
    //   return this.$store.getters.finalCounter;
    // }
  },
};
</script>

<style scoped>

</style>