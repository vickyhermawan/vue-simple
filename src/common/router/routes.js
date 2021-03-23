import Vue from 'vue';
import VueRouter from 'vue-router';

import LoginComponent from '../../components/Login';
import RegisterComponent from '../../components/Register';
import HelloComponent from '../../components/HelloWorld';

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: LoginComponent },
    { path: '/home', component: HelloComponent },
    { path: '/register', component: RegisterComponent },
    { path: '/login', component: LoginComponent },
  ]
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    next('/');
  } else {
    next();
  }
});