<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to='/teams/t2/'>Go to team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem
  },
  inject: ['teams', 'users'],
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  methods: {
    loadTeamMembers(route) {
      const teamId = route.params.teamId;
      const team = this.teams.find(item => item.id === teamId);
      if (team) {
        this.teamName = team.name;
        this.members = this.users.filter(
          user => team.members.findIndex(userId => userId === user.id) > -1);
      }
    }
  },
  created() {
    this.loadTeamMembers(this.$route);
  },
  watch: {
    $route(newRoute) {
      this.loadTeamMembers(newRoute);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>