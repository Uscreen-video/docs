<template lang="">
  <div class="article">
    <h1 class="main-title">Navigation</h1>
    <p>These object represent your navigation settings.</p>
    <hr>
    <h4>left</h4>
    <p>
      Left side navigation.
    </p>
    <h4>right</h4>
    <p>
      Right side navigation.
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
