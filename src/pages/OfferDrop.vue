<template lang="">
  <div class="article">
    <h1 class="main-title">Player Filters</h1>
    <p>These filters allow you to show your player menu and embed them to site easily.</p>
    <hr>
    <h2>show_player</h2>
    <p>
      This filter allows you to easily load player in a page.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud1>
    {{{'{{ program | show_player }}'}}}
      </code>
    </pre>
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
