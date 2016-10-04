<template lang="">
  <div class="article">
    <h1 class="main-title">Slider</h1>
    <h4>slides</h4>
    <p>
      Slider list of slides.
    </p>
    <h4>settings</h4>
    <p>
      Hash with settings like <code>autoplay</code> and <code>show_buttons</code>
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
