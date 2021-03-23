import Vue from 'vue';
import VueRouter from 'vue-router';

// import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Hello from './components/HelloWorld';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Login },
    { path: '/home', component: Hello },
    { path: '/register', component: Register }
 ]
});
