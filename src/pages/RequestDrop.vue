<template lang="">
  <div class="article">
    <h1 class="main-title">Request</h1>
    <p>This is specific object, that allow you to get URL params and request referer.</p>
    <hr>
    <h4>referer</h4>
    <p>
      Request referer url
    </p>
    <h4>params</h4>
    <p>
      List of url params.
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
