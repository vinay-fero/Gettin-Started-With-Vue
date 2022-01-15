<template>
  <BaseCard>
    <BaseButton
      @click='setSelectedTab("StoredResources")'
      :mode='storedResButtonMode'
    >
      Stored Resource
    </BaseButton>
    <BaseButton
      @click='setSelectedTab("AddResource")'
      :mode='addResButtonMode'
    >
      Add Resource
    </BaseButton>
  </BaseCard>
  <keep-alive>
    <component :is='selectedTab'></component>
  </keep-alive>
</template>

<script>
import StoredResources from '@/components/learning-resources/StoredResources';
import AddResource from '@/components/learning-resources/AddResource';

export default {
  name: 'TheResources',
  components: {
    StoredResources,
    AddResource
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === "StoredResources" ? null : "flat"
    },
    addResButtonMode() {
      return this.selectedTab === "AddResource" ? null : "flat"
    }
  },
  data() {
    return {
      selectedTab: 'StoredResources',
      storedResources: [
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
      ]
    }
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.deleteResource
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(resourceObj) {
      this.storedResources.unshift(resourceObj);
      this.selectedTab = "StoredResources";
    },
    deleteResource(id) {
      // this.storedResources = this.storedResources.filter(item => item.id !== id);
      // console.log('this.storedResources', this.storedResources);

      /*
        Upper method didn't work because all provide & inject attributes were referencing the old memory and if we
        change the memory location it will not reflect.
      */

      const resourceIndex = this.storedResources.findIndex(item => item.id === id);
      this.storedResources.splice(resourceIndex, 1);
    }
  }
};
</script>

<style scoped>

</style>