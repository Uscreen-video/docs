import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';

import MainPage from './pages/MainPage';
import BasicOperators from './pages/BasicOperators';
import DataTypes from './pages/DataTypes';
import TrueAndFalse from './pages/TrueAndFalse';
import ControlFlow from './pages/ControlFlow';
import IterationTags from './pages/IterationTags';
import ThemeTags from './pages/ThemeTags';
import VariableTags from './pages/VariableTags';
import MoneyFilters from './pages/MoneyFilters';
import ArrayFilters from './pages/ArrayFilters';
import HtmlFilters from './pages/HtmlFilters';
import MathFilters from './pages/MathFilters';
import StringFilters from './pages/StringFilters';
import PlayerFilters from './pages/PlayerFilters';

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
  '/iteration-tags': {
    component: IterationTags,
  },
  '/theme-tags': {
    component: ThemeTags,
  },
  '/variable-tags': {
    component: VariableTags,
  },
  '/money-filters': {
    component: MoneyFilters,
  },
  '/array-filters': {
    component: ArrayFilters,
  },
  '/html-filters': {
    component: HtmlFilters,
  },
  '/math-filters': {
    component: MathFilters,
  },
  '/string-filters': {
    component: StringFilters,
  },
  '/player-filters': {
    component: PlayerFilters,
  },
});

router.start(App, 'App');
