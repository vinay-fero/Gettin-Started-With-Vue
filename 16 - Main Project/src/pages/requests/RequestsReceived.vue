<template>
  <BaseCard>
    <header>
      <h2>Requests Received</h2>
      <ul v-if='hasRequests'>
        <RequestItem
          v-for='request in receivedRequests'
          :key='request.id'
          :email='request.newUser'
          :message='request.message'
        />
      </ul>
      <h3 v-else>You haven't received any requests yet!</h3>
    </header>
  </BaseCard>
</template>

<script>
import RequestItem from '@/components/requests/RequestItem';

export default {
  name: 'RequestsReceived',
  components: {
    RequestItem
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['request/requests'];
    },
    hasRequests() {
      return this.$store.getters['request/hasRequests'];
    }
  }
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>