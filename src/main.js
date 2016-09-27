import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import MainPage from './pages/MainPage';
import BasicOperators from './pages/BasicOperators';

Vue.use(VueRouter);

const router = new VueRouter({
  linkActiveClass: 'active',
});
router.map({
  '/': {
    component: MainPage,
  },
  '/basic-operators': {
    component: BasicOperators,
  },
});

router.start(App, 'App');
