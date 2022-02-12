# Module Highlights
1. For routing, we need to install an additional package i.e. vue-router.
2. router-view.
3. router-link.
4. webBrowserHistory.
5. linkActiveClass - for custom active class.
6. linkExactActiveClass - for custom active class.
7. When setting **'props'** as **true** in routing, vue passes **dynamic parameter** in that component as props, though the props will have the same name as **dynamic parameter** passed.
8. We can redirect users to another path on certain paths, using **redirect** attribute in that path route.
9. **alias** is the alternative of **redirect**, with a difference .i.e. it just loads the component in the alias path, it does not redirect.
10. We can provide a component for all path that are not defined in our router by:
    * {path: '/:notFound(.*)', component: ''}
    * **notFound** can be replaced by any name, the important part is '.*', which is a regular expression for all character combination.
11. **<router-view></router-view>** is only responsible for root-router, not for children routes.
12. For handling children routes, parent component must've its own **router-view**.
13. Same as **slots**, new can also have **named router-view**.
14. Global Navigation Guard - beforeEach & afterEach.
15. Router Navigation Guard - beforeEnter.
16. beforeRouterEnter - component level.
17. beforeRouteUpdate - runs before reusing a component.
18. Precedence - Global > Router > Component.
19. beforeRouteLeave - runs before leaving the component, and can prevent the action.
20. we can pass extra data form routes, using meta attribute and can access anywhere where the route is available.