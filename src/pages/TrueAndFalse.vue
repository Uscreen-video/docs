<template lang="">
  <div class="article">
    <h1 class="main-title">Truthiness and falsiness in Liquid</h1>
    <p>
      When a non-boolean data type is used in a boolean context (such as a conditional tag), Liquid decides whether to evaluate it as true or false. Data types that return true by default are called truthy. Data types that return false by default are called falsy.
    </p>
    <hr>
    <h2>Truthy</h2>
    <p>
      All values in Liquid are truthy except <code>nil</code> and <code>false</code>.
    </p>
    <p>
      In the example below, the text "movie" is not a boolean, but it is truthy in a conditional:
    </p>
    <pre>
      <code class="liquid"  v-el:truthy-not-boolean>
        {% assign content = "movie" %}

        {% if content == true %}
          This text will always appear if "content" is defined.
        {% endif %}
      </code>
    </pre>
    <p>
      Empty strings are truthy. In example bellow text will always appear.
    </p>
    <pre>
      <code class="liquid"  v-el:truthy-empty-string>
        {% assign content = "" %}

        {% if content %}
          This text will always appear if "content" is defined.
        {% endif %}
      </code>
    </pre>
    <p>
      To avoid this, you can check to see if the string is <code>blank</code>, as follows:
    </p>
    <pre>
      <code class="liquid"  v-el:truthy-unless-empty>
        {% assign content = "" %}

        {% if content == blank %}
          This text will always appear if "content" is empty string or nil.
        {% endif %}
      </code>
    </pre>
    <hr>
    <h2>Falsy</h2>
    <p>
      The only values that are falsy in Liquid are <code>nil</code> and <code>false</code>.
    </p>
  </div>
</template>

<script lang="">
import highlightCode from '../helpers/highlightCode';

export default {
  ready: function initHighlight() {
    const codeEls = [
      'truthyNotBoolean', 'truthyEmptyString', 'truthyUnlessEmpty',
    ];
    highlightCode(this, codeEls);
  },
};
</script>

<style lang="" scoped>
</style>
