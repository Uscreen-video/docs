<template lang="">
  <div class="article">
    <h1 class="main-title">Navigation Link</h1>
    <h4>title</h4>
    <p>
      Link title.
    </p>
    <h4>url</h4>
    <p>
      Link url.
    </p>
    <h4>target</h4>
    <p>
      Link target. Use this as HTML <b>target</b> attribute.
    </p>
    <h4>signed_users_only</h4>
    <p>
      Show only for signed users.
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
