export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;

    const resp = await fetch(
      `https://vue-project-bb658-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(data)
      }
    );

    if (!resp.ok) {
      // error handling
    }

    context.commit(
      'registerCoach',
      { ...data, id: userId }
    );
  },
  async loadCoaches(context) {
    const resp = await fetch(
      `https://vue-project-bb658-default-rtdb.firebaseio.com/coaches.json`
    );

    const respData = await resp.json();

    if (!resp.ok) {
      throw new Error(respData.message || 'Failed to fetch Data!!.');
    }

    const coaches = [];

    for (const key in respData) {
      const data = respData[key];
      const coach = {
        id: key,
        firstName: data.firstName,
        lastName: data.lastName,
        description: data.description,
        hourlyRate: data.hourlyRate,
        areas: data.areas
      }

      coaches.push(coach);
    }


    context.commit('setCoaches', coaches);
  }
};
