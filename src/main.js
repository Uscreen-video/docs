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
import ObjectsIntroduction from './pages/ObjectsIntroduction';
import CatalogDrop from './pages/CatalogDrop';
import CategoryDrop from './pages/CategoryDrop';
import ElasticSearchDrop from './pages/ElasticSearchDrop';
import ImageDrop from './pages/ImageDrop';
import NavigationDrop from './pages/NavigationDrop';
import NavigationLinkDrop from './pages/NavigationLinkDrop';
import OfferDrop from './pages/OfferDrop';
import PageDrop from './pages/PageDrop';
import ContentDrop from './pages/ContentDrop';
import RequestDrop from './pages/RequestDrop';
import SettingsDrop from './pages/SettingsDrop';
import StoreDrop from './pages/StoreDrop';
import UserDrop from './pages/UserDrop';
import SearchItemDrop from './pages/SearchItemDrop';

Vue.use(VueRouter);

const router = new VueRouter({
  linkActiveClass: 'active',
});

router.beforeEach((transition) => {
  window.scrollTo(0, 0);
  transition.next();
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
  '/objects-introduction': {
    component: ObjectsIntroduction,
  },
  '/catalog': {
    component: CatalogDrop,
  },
  '/category': {
    component: CategoryDrop,
  },
  '/search': {
    component: ElasticSearchDrop,
  },
  '/search-item': {
    component: SearchItemDrop,
  },
  '/image': {
    component: ImageDrop,
  },
  '/nav': {
    component: NavigationDrop,
  },
  '/nav-link': {
    component: NavigationLinkDrop,
  },
  '/offer': {
    component: OfferDrop,
  },
  '/page': {
    component: PageDrop,
  },
  '/program': {
    component: ContentDrop,
  },
  '/request': {
    component: RequestDrop,
  },
  '/settings': {
    component: SettingsDrop,
  },
  '/store': {
    component: StoreDrop,
  },
  '/user': {
    component: UserDrop,
  },
});

router.start(App, 'App');
