<template>
  <button v-if='!isLoggedIn' @click='login'>Login</button>
  <button v-else @click='logout'>Logout</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'UserAuth',
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
  methods: {
    ...mapActions(['login', 'logout'])
  }
};
</script>

<style scoped>

</style>