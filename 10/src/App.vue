<template>
  <TheHeader title='RememberMe'/>
<!--  <StoredResources :resources='storedResources'/>-->
  <TheResources />
</template>

<script>
import TheHeader from '@/components/layouts/TheHeader';
// import StoredResources from '@/components/learning-resources/StoredResources';
import TheResources from '@/components/learning-resources/TheResources';

export default {
  name: 'App',
  components: {
    TheHeader,
    // StoredResources,
    TheResources
  },
  data() {
    return {
      /*storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google.....',
          link: 'https://google.com'
        }
      ]*/
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>