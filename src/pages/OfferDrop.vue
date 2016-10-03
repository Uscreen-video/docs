<template lang="">
  <div class="article">
    <h1 class="main-title">Offer</h1>
    <p>These filters allow you to show your player menu and embed them to site easily.</p>
    <hr>
    <h4>id</h4>
    <p>
      Offer id.
    </p>
    <h4>title</h4>
    <p>
      Offer title.
    </p>
    <h4>specification_type</h4>
    <p>
      Offer type: <b>recurring, fixed_price, freebie, rent</b>
    </p>
    <h4>price</h4>
    <p>
      Price in cents if present.
    </p>
    <h4>duration</h4>
    <p>
      Duration if presenet.
    </p>
    <h4>programs</h4>
    <p>
      Offer programs.
    </p>
    <h4>programs_count</h4>
    <p>
      Offer programs count.
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
