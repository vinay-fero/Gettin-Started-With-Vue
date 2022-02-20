export default {
  async addRequest(context, payload) {
    const coachId = payload.coachId;

    const newRequest = {
      newUser: payload.email,
      message: payload.message
    };

    const resp = await fetch(
      `https://vue-project-bb658-default-rtdb.firebaseio.com/requests/${coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest)
      }
    );

    if (!resp.ok) {
      throw new Error(resp.message || 'Failed to send request!!');
    }

    const respData = await resp.json();

    context.commit('addRequest', { ...newRequest, id: respData.name, coachId });
  },
  async fetchRequests(context) {
    const userId = context.rootGetters.userId;

    const resp = await fetch(`https://vue-project-bb658-default-rtdb.firebaseio.com/requests/${userId}.json`)

    const respData = await resp.json();

    if (!resp.ok) {
      throw new Error('Failed to fetch requests!')
    }

    const requests = [];
    for (const key in respData) {
      requests.push({
        id: key,
        coachId: userId,
        newUser: respData[key].newUser,
        message: respData[key].message,
      })
    }

    context.commit('setRequests', requests);
  }
};
