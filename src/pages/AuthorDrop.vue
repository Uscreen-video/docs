<template lang="">
  <div class="article">
    <h1 class="main-title">Author</h1>
    <h4>name</h4>
    <p>
      Return Author name.
    </p>
    <h4>description</h4>
    <p>
      Return description HTML safe.
    </p>
    <h4>slug</h4>
    <p>
      Return url slug.
    </p>
    <h4>image</h4>
    <p>
      Return Image Object.
    </p>
    <h4>url</h4>
    <p>
      Return link to Author page.
    </p>
    <h4>programs</h4>
    <p>
      Return paginated list of programs.
    </p>
    <h4>programs_count</h4>
    <p>
      Return author programs count.
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
