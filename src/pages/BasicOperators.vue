<template lang="">
  <div class="article">
    <h1 class="main-title">Logical and comparison operators</h1>
    <p>Liquid has access to many logical and comparison operators. You can use operators to create logic with <a  v-link="{ path: '/control-flow' }">control flow</a> tags.</p>
    <hr>
    <h2>Basic operators</h2>
    <table>
      <thead>
        <tr>
          <th>Operator</th>
          <th>
          Function</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>==</code></td>
          <td>equals</td>
        </tr>
        <tr>
          <td><code>!=</code></td>
          <td>does not equal</td>
        </tr>
        <tr>
          <td><code>></code></td>
          <td>greater than</td>
        </tr>
        <tr>
          <td><code><</code></td>
          <td>less than</td>
        </tr>
        <tr>
          <td><code>>=</code></td>
          <td>greater than or equal to</td>
        </tr>
        <tr>
          <td><code><=</code></td>
          <td>less than or equal to</td>
        </tr>
        <tr>
          <td><code>or</code></td>
          <td>condition A or condition B</td>
        </tr>
        <tr>
          <td><code>and</code></td>
          <td>condition A and condition B</td>
        </tr>
      </tbody>
    </table>
    <p>
      For example:
    </p>
    <pre>
      <code class="liquid" v-el:user-check>
        {% if user %}
          Welcome back!
        {% endif %}
      </code>
    </pre>
    <p>
      You can do multiple comparisons in a tag using the and and or operators:
    </p>
    <pre>
      <code class="liquid" v-el:complex-check>
        {% if user and request %}
          Welcome back!
        {% endif %}
      </code>
    </pre>
    <hr>
    <h2>Objects</h2>
    <p>
      Objects contain attributes that are used to display dynamic content on a page.
    </p>
    <pre v-el:objects>
      <code class="liquid">
        {{{'{{ program.title }}'}}} &lt;!-- Output: Awesome Program --&gt;
      </code>
    </pre>
    <hr>
    <h2>Filters</h2>
    <p>
      Filters are used to modify the output of strings, numbers, variables, and objects.
    </p>
    <pre>
      <code class="liquid" v-el:filters>
        {{{"{{ 'My' | append: ' Profile' }}"}}} &lt;!-- Output: My Profile --&gt;
      </code>
    </pre>
    <hr>
  </div>
</template>

<script lang="">
  import highlightCode from '../helpers/highlightCode';

  export default {
    ready: function initHighlight() {
      const codeEls = ['userCheck', 'complexCheck'];
      highlightCode(this, codeEls);
    },
  };
</script>

<style lang="" scoped>
</style>
