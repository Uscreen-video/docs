<template lang="">
  <div class="article">
    <h1 class="main-title">Search Item</h1>
    <p>Search item object.</p>
    <hr>
    <h4>title</h4>
    <p>
      Item title.
    </p>
    <h4>type</h4>
    <p>
      Item type: program, author, page, post.
    </p>
    <h4>url</h4>
    <p>
      Item url.
    </p>
    <h4>tags</h4>
    <p>
      Item tags.
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
