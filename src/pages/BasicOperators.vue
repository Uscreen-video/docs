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
        {% if user and user.name == 'Tony Stark' %}
          Welcome back IronMan!
        {% endif %}
      </code>
    </pre>
    <hr>
    <h2>contains</h2>
    <p>
      <code>contains</code> checks for the presence of a substring in a string.
    </p>
    <pre>
      <code class="liquid" v-el:contains>
        {% if user and user.name contains 'Parker' %}
          Hello Peter!
        {% endif %}
      </code>
    </pre>
    <p>
      With this you can also search inside array of strings.
      <br>
      <b>Warning!</b> You cannot use it to check for an object in an array of objects.
    </p>
    <pre>
      <code class="liquid" v-el:contains-array>
        {% program.tags contains 'movie' %}
          Watch your favorite movie!
        {% endif %}
      </code>
    </pre>
    <hr>
    <h2>Order of operations</h2>
    <p>In tags with more than one <code>and</code> or <code>or</code> operator, all <code>and</code> operators are evaluated first,
       and then <code>or</code> operators are evaluated. You cannot change the order of operations using parentheses.
       Parentheses are invalid characters in Liquid tags and will prevent your tags from working.</p>
    <pre>
      <code class="liquid" v-el:operations>
        {% if true or false and false %}
          This evaluates to true, since the 'and' condition is checked first.
        {% endif %}
      </code>
    </pre>
  </div>
</template>

<script lang="">
  import highlightCode from '../helpers/highlightCode';

  export default {
    ready: function initHighlight() {
      const codeEls = ['userCheck', 'complexCheck',
        'contains', 'operations',
        'containsArray'];
      highlightCode(this, codeEls);
    },
  };
</script>

<style lang="" scoped>
</style>
