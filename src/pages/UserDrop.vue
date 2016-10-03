<template lang="">
  <div class="article">
    <h1 class="main-title">User</h1>
    <hr>
    <h4>id</h4>
    <p>
      User id.
    </p>
    <h4>name</h4>
    <p>
      User name.
    </p>
    <h4>email</h4>
    <p>
      User email.
    </p>
    <h4>bio</h4>
    <p>
      User bio.
    </p>
    <h4>avatar</h4>
    <p>
      User avatar.
    </p>
    <h4>programs</h4>
    <p>
      List of programs available to user.
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
