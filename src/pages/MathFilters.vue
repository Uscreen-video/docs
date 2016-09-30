<template lang="">
  <div class="article">
    <h1 class="main-title">Money Filters</h1>
    <p>
      Math filters allow you to apply mathematical tasks.
    </p>
    <p>
      Math filters can be linked and, as with any other filters,
      are applied in order of left to right.
    </p>
    <hr>
    <h2>abs</h2>
    <p>
      Returns the absolute value of a number.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud1>
    {{{'{{ -17 | abs }}'}}}
      </code>
      <code class="html"  v-el:liqud2>
    17
      </code>
    </pre>
    <p>
      <code>abs</code> will also work on a string if the string only contains a number.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud3>
    {{{'{{ "-19.86" | abs }}'}}}
      </code>
      <code class="html"  v-el:liqud4>
    19.86
      </code>
    </pre>
    <hr>
    <h2>ceil</h2>
    <p>
      Rounds an output up to the nearest integer.
    </p>
    <hr>
    <h2>divided_by</h2>
    <p>
      Divides an output by a number. The output is rounded down to the nearest integer.
    </p>
    <hr>
    <h2>floor</h2>
    <p>
      Rounds an output down to the nearest integer.
    </p>
    <hr>
    <h2>minus</h2>
    <p>
      Subtracts a number from an output.
    </p>
    <hr>
    <h2>plus</h2>
    <p>
      Adds a number to an output.
    </p>
    <hr>
    <h2>round</h2>
    <p>
      Rounds the output to the nearest integer or specified number of decimals.
    </p>
    <hr>
    <h2>times</h2>
    <p>
      Multiplies an output by a number.
    </p>
    <hr>
    <h2>modulo</h2>
    <p>
      Divides an output by a number and returns the remainder.
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
