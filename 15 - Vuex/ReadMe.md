#Vuex

1. For vuex, we need to install an additional package i.e. vuex.
2. Access the store using **$store**.
3. Vue provide mutations to update the store, so instead of using direct data manipulation it is recommended to use mutations.
4. To access a mutation:
   > this.$store.commit('mutationName');
5. Commit Alternative:
    > this.$store({type: 'mutationName', properties...});
   * We can add as many values as we want, and vue will remove **type** from it add bind all values in an object and pass this object as second argument. 
6. As we use **mutations** to update the store, similarly, we use **getters** to retrieve the value from the store.
    > this.$store.getters.functionName;
7. To update store asynchronously, instead of writing async code inside mutations, it is recommended to use **actions** for async code handling. To use:
   > this.$store.dispatch('actionName);
8. **mapGetters, mapActions**