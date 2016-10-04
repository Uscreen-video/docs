<template lang="">
  <div class="article">
    <h1 class="main-title">Slide</h1>
    <h4>title</h4>
    <p>
      Slide title.
    </p>
    <h4>description</h4>
    <p>
      Slide description HTML safe.
    </p>
    <h4>image</h4>
    <p>
      Slide image object.
    </p>
    <h4>video_url</h4>
    <p>
      Slide video url.
    </p>
    <h4>button_text</h4>
    <p>
      Slide button text.
    </p>
    <h4>url</h4>
    <p>
      Slide URL.
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
