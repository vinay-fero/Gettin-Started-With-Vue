<template>
  <ul>
    <LearningResource
      v-for='resource in resources' :key='resource.id'
      :title='resource.title' :description='resource.description'
      :link='resource.link' :id='resource.id'
    />
  </ul>
</template>

<script>
import LearningResource from '@/components/learning-resources/LearningResource';

export default {
  name: 'StoredResources',
  components : {
    LearningResource
  },
  // props: ['resources']
  inject: ['resources']
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>