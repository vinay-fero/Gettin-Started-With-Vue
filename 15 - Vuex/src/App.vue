<template>
  <base-container title="Vuex" v-if='isLoggedIn'>
    <TheCounter />
    <FavouriteValue />
    <ChangeCounter />
    <button @click='addOne'>Add {{increaseBy}}</button>
  </base-container>
  <base-container title='Auth'>
    <UserAuth />
  </base-container>
</template>

<script>
import {mapGetters} from 'vuex';
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from '@/components/TheCounter';
import ChangeCounter from '@/components/ChangeCounter';
import FavouriteValue from '@/components/FavouriteValue';
import UserAuth from '@/components/UserAuth';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavouriteValue,
    UserAuth
  },
  data() {
    return {
      increaseBy: 10
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
  methods: {
    addOne() {
      // this.$store.commit('increase', this.increaseBy);
      this.$store.dispatch({type: 'numbers/increase',value: this.increaseBy})
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>