<template lang="">
  <div class="article">
    <h1 class="main-title">Money Filters</h1>
    <p>Money filters format prices based on the Currency choosed in
      <a href="/admin/payments/edit">Payments Settings</a>.</p>
    <hr>
    <h2>money_with_currency</h2>
    <p>
      Formats the price based on the store HTML with currency setting.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud1>
    {{{'{{ 145 | money_with_currency }}'}}}
      </code>
      <code class="html"  v-el:liqud2>
    $1.45
      </code>
    </pre>
    <hr>
    <h2>money_without_currency</h2>
    <p>
      Formats the price based on the store HTML without currency setting.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud3>
    {{{'{{ 145 | money_without_currency }}'}}}
      </code>
      <code class="html"  v-el:liqud4>
    1.45
      </code>
    </pre>

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
