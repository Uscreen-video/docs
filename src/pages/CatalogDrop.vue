<template lang="">
  <div class="article">
    <h1 class="main-title">Catalog</h1>
    <p>Catalog object allow you to get lists of categories and programs.</p>
    <hr>
    <h4>categories</h4>
    <p>
      Return list of categories.
    </p>
    <h4>categories_count</h4>
    <p>
      Return count of all categories.
    </p>
    <h4>featured_categories</h4>
    <p>
      Return list of featured categories.
    </p>
    <h4>featured_categories_count</h4>
    <p>
      Return count of featured categories.
    </p>
    <h4>programs</h4>
    <p>
      Return paginated list of programs.
    </p>
    <h4>programs_count</h4>
    <p>
      Return count of all programs.
    </p>
  </div>
</template>

<script lang="">
import highlightCode from '../helpers/highlightCode';

export default {
  ready: function initHighlight() {
    highlightCode(this);
  },
};
</script>

<style lang="" scoped>
</style>
