<template lang="">
  <div class="article">
    <h1 class="main-title">Page</h1>
    <h4>id</h4>
    <p>
      Page id.
    </p>
    <h4>position</h4>
    <p>
      Page position.
    </p>
    <h4>title</h4>
    <p>
      Page title.
    </p>
    <h4>content</h4>
    <p>
      Page content HTML safe.
    </p>
    <h4>template_name</h4>
    <p>
      Page template name.
    </p>
    <h4>meta_title</h4>
    <p>
      Page meta title.
    </p>
    <h4>meta_description</h4>
    <p>
      Page meta description.
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
