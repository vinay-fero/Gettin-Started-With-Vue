<template>
  <section>
    <BaseCard>
      <h2>{{fullName}}</h2>
      <h3>${{rate}}/hour</h3>
    </BaseCard>
  </section>
  <section>
    <BaseCard>
      <header>
        <h2>Interested? Reach out now!</h2>
        <BaseButton link :to='contactLink'>Contact</BaseButton>
      </header>
      <router-view></router-view>
    </BaseCard>
  </section>
  <section>
    <BaseCard>
      <BaseBadge v-for='area in areas' :key='area' :type='area' :title='area'/>
      <p>{{description}}</p>
    </BaseCard>
  </section>
</template>

<script>
export default {
  name: 'CoachDetail',
  props: ['id'],
  data() {
    return {
      selectedCoach: null
    };
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches']
      .find(item => item.id === this.id);
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      return this.selectedCoach.description;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    contactLink() {
      return this.$route.path + '/contact';
    },
  }
};
</script>

<style scoped>

</style>