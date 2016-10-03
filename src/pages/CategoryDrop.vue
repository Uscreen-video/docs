<template lang="">
  <div class="article">
    <h1 class="main-title">Category</h1>
    <p>Category object allow you to get lists of programs and information about category.</p>
    <hr>
    <h4>title</h4>
    <p>
      Category title.
    </p>
    <h4>description</h4>
    <p>
      Category description HTML safe.
    </p>
    <h4>position</h4>
    <p>
      Category position.
    </p>
    <h4>slug</h4>
    <p>
      Category url slug.
    </p>
    <h4>programs</h4>
    <p>
      Paginated list of programs.
    </p>
    <h4>programs_count</h4>
    <p>
      Category programs count.
    </p>
    <h4>meta_title</h4>
    <p>
      Meta data title.
    </p>
    <h4>meta_description</h4>
    <p>
      Meta data description.
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
