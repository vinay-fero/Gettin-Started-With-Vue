<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click='loadExperiences'>Load Submitted Experiences</base-button>
      </div>
      <p v-if='isLoading'>Loading data...</p>
      <p v-else-if='!isLoading && error'>{{error}}</p>
      <ul v-else-if='!isLoading && results && results.length > 0'>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: ''
    }
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      fetch('https://vue-project-bb658-default-rtdb.firebaseio.com/surveys.json')
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then(data => {
        const results = [];
        for (const id in data) {
          results.push({id, ...data[id]});
        }

        this.results = results;
        this.isLoading = false;
      })
      .catch(() => {
        this.isLoading = false;
        this.error = 'Failed to fetch data';
      });
    }
  },
  mounted() {
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>