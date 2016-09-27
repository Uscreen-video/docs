import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';

import MainPage from './pages/MainPage';
import BasicOperators from './pages/BasicOperators';
import DataTypes from './pages/DataTypes';
import TrueAndFalse from './pages/TrueAndFalse';
import ControlFlow from './pages/ControlFlow';

Vue.use(VueRouter);

const router = new VueRouter({
  linkActiveClass: 'active',
});
router.map({
  '/': {
    component: MainPage,
  },
  '/operators': {
    component: BasicOperators,
  },
  '/data-types': {
    component: DataTypes,
  },
  '/true-and-false': {
    component: TrueAndFalse,
  },
  '/control-flow': {
    component: ControlFlow,
  },
});

router.start(App, 'App');
