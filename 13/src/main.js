import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from '@/components/teams/TeamsList';
import UsersList from '@/components/users/UsersList';
import TeamMembers from '@/components/teams/TeamMembers';
import NotFound from '@/components/nav/NotFound';
import TeamsFooter from '@/components/teams/TeamsFooter';
import UsersFooter from '@/components/users/UsersFooter';

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-exact-link-active',
  scrollBehavior(to, from, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return {left: 0, right: 0};
  },
  routes: [
    {path: '/', redirect: '/teams'},
    {
      name: 'teams',
      path: '/teams',
      components: {
        default: TeamsList,
        footer: TeamsFooter
      },
      children: [
        {name: 'teamView', path: ':teamId', component: TeamMembers, props: true} // /teams/t1
      ]
    },
    // {path: '/teams', component: TeamsList, alias: '/'},
    {
      path: '/users',
      components: {default: UsersList, footer: UsersFooter},
      beforeEnter(to, from, next) {
        console.log('users', to, from,);
        next();
      }
    },
    // {path: '/teams/:teamId', component: TeamMembers, props: true},
    {path: '/:notFound(.*)', component: NotFound}
  ]
});


router.beforeEach((to, from, next) => {
  /* NAVIGATION GUARDS
  * to - where the user going
  * from - from where the user is coming
  * next - callBack, that decides weather the user should proceed or cancel the navigations
  * next() - accepts all paths forms such as 'normalPath' or {} path
  * */
  // next({name: 'something'});
  console.log('beforeEach', to, from);
  next();
})

router.afterEach((to, from) => {
  // used to send analytics, after every user actions
  console.log('afterEach', to, from);
})


const app = createApp(App)
app.use(router);
app.mount('#app');
