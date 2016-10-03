<template lang="">
  <div class="container">
    <div class="sidebar">
      <h4>Introduction</h4>
      <ul class="menu">
        <li><a class='menu--link' v-link="{ path: '/', exact: true }">Start with Liquid</a></li>
        <li><a class='menu--link' v-link="{ path: '/operators' }">Operators</a></li>
        <li><a class='menu--link' v-link="{ path: '/data-types' }">Data types</a></li>
        <li><a class='menu--link' v-link="{ path: '/true-and-false' }">Truthy and falsy</a></li>
      </ul>
      <h4>Tags</h4>
      <ul class="menu">
        <li><a class='menu--link' v-link="{ path: '/control-flow' }">Control flow tags</a></li>
        <li><a class='menu--link' v-link="{ path: '/iteration-tags' }">Iteration tags</a></li>
        <li><a class='menu--link' v-link="{ path: '/theme-tags' }">Theme tags</a></li>
        <li><a class='menu--link' v-link="{ path: '/variable-tags' }">Variable tags</a></li>
      </ul>
      <h4>Filters</h4>
      <ul class="menu">
        <li><a class='menu--link' v-link="{ path: '/money-filters' }">Money filters</a></li>
        <li><a class='menu--link' v-link="{ path: '/array-filters' }">Array filters</a></li>
        <li><a class='menu--link' v-link="{ path: '/html-filters' }">HTML filters</a></li>
        <li><a class='menu--link' v-link="{ path: '/math-filters' }">Math filters</a></li>
        <li><a class='menu--link' v-link="{ path: '/string-filters' }">String filters</a></li>
        <li><a class='menu--link' v-link="{ path: '/player-filters' }">Player filters</a></li>
      </ul>
      <h4>Objects</h4>
      <ul class="menu">
        <li><a class='menu--link' v-link="{ path: '/objects-introduction' }">Introduction</a></li>
        <li><a class='menu--link' v-link="{ path: '/catalog' }">Catalog</a></li>
        <li><a class='menu--link' v-link="{ path: '/category' }">Category</a></li>
        <li><a class='menu--link' v-link="{ path: '/search' }">Elastic Search</a></li>
        <li><a class='menu--link' v-link="{ path: '/search-item', exact: true }">Search Item</a></li>
        <li><a class='menu--link' v-link="{ path: '/image' }">Image</a></li>
        <li><a class='menu--link' v-link="{ path: '/nav', exact: true }">Navigation</a></li>
        <li><a class='menu--link' v-link="{ path: '/nav-link' }">Navigation Link</a></li>
        <li><a class='menu--link' v-link="{ path: '/offer' }">Offer</a></li>
        <li><a class='menu--link' v-link="{ path: '/page' }">Page</a></li>
        <li><a class='menu--link' v-link="{ path: '/program' }">Program</a></li>
        <li><a class='menu--link' v-link="{ path: '/request' }">Request</a></li>
        <li><a class='menu--link' v-link="{ path: '/settings' }">Settings</a></li>
        <li><a class='menu--link' v-link="{ path: '/store' }">Store</a></li>
        <li><a class='menu--link' v-link="{ path: '/user' }">User</a></li>
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang=""></script>

<style lang="" scoped>
  .container {
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
  }
  .sidebar {
    /*background-color: #f4f8fb;*/
    background: linear-gradient(#f4f8fb, #dbedf8);
    border-right: 1px solid #dbedf8;
    margin: 0px;
    padding: 45px;
    width: 20%;
    min-height: 100vh;
    max-width: 200px;
  }

  .sidebar h4 {
    color: #8e8e8e;
    font-weight: 100;
    font-size: 12px;
    margin-top: 0px;
    text-transform: uppercase;
  }

  .content {
    width: 80%;
    padding: 45px;
    max-width: 900px;
  }

  .menu {
    list-style-type: none;
    list-style: none;
    padding: 0px;
  }

  .menu li {
    margin-bottom: 5px;
  }

  .menu li:last-child {
    margin-bottom: 35px;
  }

  .menu--link.active {
    color: #1582eb;
    font-weight: 600;
  }
</style>
