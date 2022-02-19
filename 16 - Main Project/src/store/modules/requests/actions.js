export default {
  addRequest(context, payload) {
    const newRequest = {
      id: new Date().toISOString(),
      coachId: payload.coachId,
      newUser: payload.email,
      message: payload.message
    };
    context.commit('addRequest', newRequest);
  }
};
