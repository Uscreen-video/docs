<template lang="">
  <div class="article">
    <h1 class="main-title">Settings</h1>
    <p>Specific object that allow you to get info from you theme <code>settings.yml</code> file.</p>
    <hr>
    <h4>data</h4>
    <p>
      Settings data hash.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud1>
    {{{'{{ settings.data["colors"]["main_color"] }}'}}}
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
