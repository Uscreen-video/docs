<template lang="">
  <div class="article">
    <h1 class="main-title">Variable tags</h1>
    <p>Variable Tags are used to create new Liquid variables.</p>
    <hr>
    <h2>assign</h2>
    <p>
      Creates a new variable.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud1>
    {% assign my_variable = false %}
    {% if my_variable != true %}
      This statement is valid.
    {% endif %}
      </code>
    </pre>
    <p>
      Use quotations ("") to save the variable as a string.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud2>
    {% assign foo = "bar" %}
    {{{'{{ foo }}'}}}
      </code>
    </pre>
    <hr>
    <h2>capture</h2>
    <p>
      Captures the string inside of the opening and closing tags and assigns
      it to a variable. Variables created through <code>{% capture %}</code> are strings.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud3>
    {% assign foo = "bar" %}
    {{{'{{ foo }}'}}}
      </code>
      <code class="html"  v-el:liqud4>
    I am being captured.
      </code>
    </pre>
    <hr>
    <h2>increment</h2>
    <p>
      Creates a new number variable, and increases its value by one every time it is called. The initial value is 0.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud5>
    {% increment variable %}
    {% increment variable %}
    {% increment variable %}
      </code>
      <code class="html"  v-el:liqud6>
    0
    1
    2
      </code>
    </pre>
    <p>
      Variables created through the <code>increment</code> tag are independent from variables
      created through <code>assign</code> or <code>capture</code>.
    </p>
    <p>
      In the example below, a variable named "var" is created through assign.
      The <code>increment</code> tag is then used several times on a variable with the same name.
      However, note that the increment tag does not affect the value of "var" that was created through assign.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud7>
    {% assign var = 10 %}
    {% increment var %}
    {% increment var %}
    {% increment var %}
    {{{'{{ var }}'}}}
      </code>
      <code class="html"  v-el:liqud8>
    0
    1
    2
    10
      </code>
    </pre>
    <hr>
    <h2>decrement</h2>
    <p>
      Creates a new number variable, and decreases its value by one every time it is called. The initial value is -1.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud9>
    {% decrement variable %}
    {% decrement variable %}
    {% decrement variable %}
      </code>
      <code class="html"  v-el:liqud10>
    -1
    -2
    -3
      </code>
    </pre>
    <p>
      Like <code>increment</code>, variables declared inside <code>decrement</code>
      are independent from variables created through <code>assign</code> or <code>capture</code>.
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
