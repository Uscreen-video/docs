<template lang="">
  <div class="article">
    <h1 class="main-title">Store</h1>
    <p>These filters allow you to show your player menu and embed them to site easily.</p>
    <hr>
    <h4>title</h4>
    <p>
      Store title.
    </p>
    <h4>currency</h4>
    <p>
      Store currency symbol.
    </p>
    <h4>logo</h4>
    <p>
      Store logo Image Object.
    </p>
    <h4>url</h4>
    <p>
      Store full url.
    </p>
    <h4>authors</h4>
    <p>
      Store all authors list.
    </p>
    <h4>pages</h4>
    <p>
      Store all pages list.
    </p>
    <h4>offers</h4>
    <p>
      Store all offers list.
    </p>
    <h4>recurring_offers</h4>
    <p>
      Store recurring offers list.
    </p>
    <h4>fixed_price_offers</h4>
    <p>
      Store fixed price offers list.
    </p>
    <h4>freebie_offers</h4>
    <p>
      Store freebie offers list.
    </p>
    <h4>rent_offers</h4>
    <p>
      Store rental offers list.
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
