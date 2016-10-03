<template lang="">
  <div class="article">
    <h1 class="main-title">Program</h1>
    <h4>id</h4>
    <p>
      Program id.
    </p>
    <h4>title</h4>
    <p>
      Program title.
    </p>
    <h4>description</h4>
    <p>
      Program description HTML safe.
    </p>
    <h4>slug</h4>
    <p>
      Program url slug.
    </p>
    <h4>position</h4>
    <p>
      Program position.
    </p>
    <h4>meta_title</h4>
    <p>
      Program meta title.
    </p>
    <h4>meta_description</h4>
    <p>
      Program meta description.
    </p>
    <h4>tags</h4>
    <p>
      Program tags.
    </p>
    <h4>horizontal_image</h4>
    <p>
      Program horizontal image Image Object.
    </p>
    <h4>vertical_image</h4>
    <p>
      Program vertical image Image Object.
    </p>
    <h4>link</h4>
    <p>
      Program link.
    </p>
    <h4>categories</h4>
    <p>
      Program categories list.
    </p>
    <h4>offers</h4>
    <p>
      Program all offers list.
    </p>
    <h4>recurring_offers</h4>
    <p>
      Program recurring offers list.
    </p>
    <h4>fixed_price_offers</h4>
    <p>
      Program fixed price offers list.
    </p>
    <h4>freebie_offers</h4>
    <p>
      Program freebie offers list.
    </p>
    <h4>rent_offers</h4>
    <p>
      Program rental offers list.
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
