<template lang="">
  <div class="article">
    <h1 class="main-title">Start with Liquid</h1>
    <p>Liquid is an open-source template language. This language is a foundation of platform themes.</p>
    <p>Liquid allows you to manipulate with tags, objects, and filters to load dynamic content. They are used inside Liquid template files, which are a group of files that make up a theme.</p>
    <hr>
    <h2>Tags</h2>
    <p>
      Tags make up the programming logic that tells templates what to do.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud1>
    {% if store.name == 'My Store' %}
      Hello Master!
    {% endif %}
      </code>
    </pre>
    <hr>
    <h2>Objects</h2>
    <p>
      Objects contain attributes that are used to display dynamic content on a page.
    </p>
    <pre>
      <code class="liquid" v-el:liqud2>
    {{{'{{ program.title }}'}}} &lt;!-- Output: Awesome Program --&gt;
      </code>
    </pre>

    <hr>
    <h2>Filters</h2>
    <p>
      Filters are used to modify the output of strings, numbers, variables, and objects.
    </p>
    <pre>
      <code class="liquid" v-el:liqud3>
    {{{"{{ 'My' | append: ' Profile' }}"}}} &lt;!-- Output: My Profile --&gt;
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
