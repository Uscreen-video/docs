<template lang="">
  <div class="article">
    <h1 class="main-title">Control flow tags</h1>
    <p>
      Control flow tags create conditions that decide whether blocks of Liquid code get executed.
    </p>
    <hr>
    <h2>if</h2>
    <p>
      Executes a block of code only if a certain condition is met (that is, if the result is <code>true</code>).
    </p>
    <pre>
      <code class="liquid"  v-el:liqud1>
    {% if program.title == 'Awesome movie' %}
      You are buying awesome movie!
    {% endif %}
      </code>
    </pre>
    <hr>
    <h2>unless</h2>
    <p>
      Like <code>if</code>, but executes a block of code only if a certain condition is <b>not</b> met
      (that is, if the result is <code>false</code>).
    </p>
    <pre>
      <code class="liquid"  v-el:liqud2>
    {% unless program.title == 'Awesome movie' %}
      You are not buying awesome movie!
    {% endunless %}
      </code>
    </pre>
    <hr>
    <h2>else / elsif</h2>
    <p>
      Adds more conditions to an <code>if</code> or <code>unless</code> block.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud3>
    {% if user.name == 'Tony Stark' %}
      Stark Industries
    {% elsif user.name == 'Peter Parker' %}
      Daily Bugle
    {% else %}
      School
    {% endif %}
      </code>
    </pre>
    <hr>
    <h2>case / when</h2>
    <p>
      Creates a switch statement to execute a particular block of code when a variable
      has a specified value. <code>case</code> initializes the switch statement,
      and <code>when</code> statements define the various conditions.
    </p>
    <p>
      You can optionally add an <code>else</code> statement at the end of the
      case to provide code to execute if none of the conditions are met.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud4>
    {% case user.name %}
      {% when 'Tony Stark' %}
        Stark Industries
      {% when 'Peter Parker' %}
        Daily Bugle
      {% else %}
        School
    {% endcase %}
      </code>
    </pre>
    <hr>
    <h2>Multiple conditions (and / or)</h2>
    <p>
      You can use the <code>and</code> and <code>or</code> operators to include more than one condition in
      a control flow tag. and and or can be chained together to create complex conditionals.
    </p>
    <p>
      If you use multiple <code>and</code> or <code>or</code> operators,
      note that <code>and</code> operators will be evaluated first, then <code>or</code> operators.
      You cannot use parentheses to simulate an order of operations and control
      the order of operator evaluation. Parentheses are invalid characters
      within Liquid tags and prevent your tags from working.
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
