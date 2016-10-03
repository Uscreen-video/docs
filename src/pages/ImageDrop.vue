<template lang="">
  <div class="article">
    <h1 class="main-title">Image</h1>
    <h4>small</h4>
    <p>
      Small format image.
    </p>
    <h4>big</h4>
    <p>
      Big format image.
    </p>
    <h4>original</h4>
    <p>
      Original format image.
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
