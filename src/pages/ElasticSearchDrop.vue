<template lang="">
  <div class="article">
    <h1 class="main-title">Elastic Search</h1>
    <p>Search object allow you to get lists of contents with links.</p>
    <hr>
    <h4>condition</h4>
    <p>
      Search condition.
    </p>
    <h4>performed</h4>
    <p>
      Search is performed <code>true/false</code>
    </p>
    <h4>results_count</h4>
    <p>
      Count of search results.
    </p>
    <h4>results</h4>
    <p>
      Search result list of Search Items.
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
