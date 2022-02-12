import { createRouter, createWebHashHistory } from 'vue-router';

import CoachesList from '@/pages/coaches/CoachesList';
import CoachDetail from '@/pages/coaches/CoachDetail';
import CoachRegistration from '@/pages/coaches/CoachRegistration';

import ContactCoach from '@/pages/requests/ContactCoach';
import RequestsReceived from '@/pages/requests/RequestsReceived';

import NotFound from '@/pages/NotFound';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: '/', redirect: '/coaches'},
    {path: '/coaches', component: CoachesList},
    {
      path: '/coaches/:id', component: CoachDetail, children: [
        {path: 'contact', component: ContactCoach}
      ]
    },
    {path: '/register', component: CoachRegistration},
    {path: '/requests', component: RequestsReceived},
    {path: '/:notFound(.*)', component: NotFound},
  ]
});

