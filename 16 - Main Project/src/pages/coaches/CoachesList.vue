<template>
  <BaseDialog :show='!!error' title='An error occurred' @close='handleError'>
    {{error}}
  </BaseDialog>
  <section>
    <CoachFilter @change-filter='setFilters' />
  </section>
  <section>
    <BaseCard>
      <div class='controls'>
        <BaseButton mode='outline' @click='loadCoaches'>Refresh</BaseButton>
        <BaseButton link to='/register' v-if='!isCoach && !isLoading'>Register as Coach</BaseButton>
      </div>
      <BaseSpinner v-if='isLoading' />
      <ul v-else-if='hasCoaches'>
        <CoachItem
          v-for='coach in filteredCoaches'
          :key='coach.id'
          :id='coach.id'
          :first-name='coach.firstName'
          :last-name='coach.lastName'
          :rate='coach.hourlyRate'
          :areas='coach.areas'
        />
      </ul>
      <h3 v-else>No Coaches Found</h3>
    </BaseCard>
  </section>
</template>

<script>
import CoachItem from '@/components/coaches/CoachItem';
import CoachFilter from '@/components/coaches/CoachFilter';
import BaseSpinner from '@/components/ui/BaseSpinner';
import BaseDialog from '@/components/ui/BaseDialog';

export default {
  name: 'CoachesList',
  components: {
    BaseDialog,
    BaseSpinner,
    CoachItem,
    CoachFilter
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      }
    }
  },
  created() {
    this.loadCoaches();
  },
  computed: {
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];
      return coaches.filter(coach => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend'))
          return true;

        if (this.activeFilters.backend && coach.areas.includes('backend'))
          return true;

        if (this.activeFilters.career && coach.areas.includes('career'))
          return true;

        return false;
      });
    },
    hasCoaches() {
      return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
    }
  },
  methods: {
    handleError() {
      this.error = null;
    },
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadCoaches() {
      this.isLoading = true;

      try {
        await this.$store.dispatch('coaches/loadCoaches');
      } catch (e) {
        this.error = e;
      }

      this.isLoading = false;
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>