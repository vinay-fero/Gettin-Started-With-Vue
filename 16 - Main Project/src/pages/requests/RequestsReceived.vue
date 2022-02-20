<template>
  <BaseDialog :show='!!error' title='An error occurred' @close='handleError'>
    {{error}}
  </BaseDialog>
  <BaseCard>
    <header>
      <h2>Requests Received</h2>
      <BaseSpinner v-if='isLoading' />
      <ul v-else-if='hasRequests'>
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
import BaseSpinner from '@/components/ui/BaseSpinner';
import BaseDialog from '@/components/ui/BaseDialog';

export default {
  name: 'RequestsReceived',
  data() {
    return {
      isLoading: false,
      error: null,
    }
  },
  components: {
    BaseSpinner,
    RequestItem,
    BaseDialog
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['request/requests'];
    },
    hasRequests() {
      return this.$store.getters['request/hasRequests'];
    }
  },
  created() {
    this.loadRequests();
  },
  methods: {
    async loadRequests() {
      try {
        this.isLoading = true;
        await this.$store.dispatch('request/fetchRequests');
      } catch (e) {
        this.error = e;
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
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