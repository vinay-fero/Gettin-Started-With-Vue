import CoachesList from '@/pages/coaches/CoachesList';
import CoachDetail from '@/pages/coaches/CoachDetail';
import CoachRegistration from '@/pages/coaches/CoachRegistration';
import ContactCoach from '@/pages/requests/ContactCoach';

export default [
  {path: '/', redirect: '/coaches'},
  {path: '/coaches', component: CoachesList},
  {
    path: '/coaches/:id',
    component: CoachDetail,
    props: true,
    children: [
      {path: 'contact', component: ContactCoach}
    ]
  },
  {path: '/register', component: CoachRegistration},
]