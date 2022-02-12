import { createRouter, createWebHashHistory } from 'vue-router';

import coachRoutes from '@/routes/coaches';
import requestRoutes from '@/routes/requests';
import NotFound from '@/pages/NotFound';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    ...coachRoutes,
    ...requestRoutes,
    {path: '/:notFound(.*)', component: NotFound},
  ]
});

