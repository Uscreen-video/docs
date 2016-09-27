<template lang="">
  <div class="article">
    <h1 class="main-title">Data Types</h1>
    <p>
      Liquid objects can be one of five types. You can initialize Liquid variables using assign or capture tags.
    </p>
    <hr>
    <h2>String</h2>
    <p>
      Strings are declared by wrapping a variable's value in single or double quotes.
    </p>
    <pre>
      <code class="liquid" v-el:string>
        {% assign my_string = "Hello World!" %}
      </code>
    </pre>
    <hr>
    <h2>Number</h2>
    <p>
      Numbers include floats and integers.
    </p>
    <pre>
      <code class="liquid" v-el:number>
        {% assign my_int = 25 %}
        {% assign my_float = 39.756 %}
      </code>
    </pre>
    <hr>
    <h2>Boolean</h2>
    <p>
      Booleans are either <code>true</code> or <code>false</code>. No quotations are necessary when declaring a boolean.
    </p>
    <pre>
      <code class="liquid" v-el:boolean>
        {% assign foo = true %}
        {% assign bar = false %}
      </code>
    </pre>
    <hr>
    <h2>Nil</h2>
    <p>
      Nil is a special empty value that is returned when Liquid code has no results. It is not a string with the characters "nil".
      <br>
      Nil is treated as <code>false</code> in the conditions of if blocks and other Liquid tags that check the truthfulness of a statement.
      <br>
      In the following example, if a user does not exist (that is, user returns nil), Liquid will not print the user name:
    </p>
    <pre>
      <code class="liquid" v-el:nil-if>
        {% if user %}
          {{{'{{ user.name }}'}}}
        {% endif %}
      </code>
    </pre>
    <p>
      Tags or outputs that return <code>nil</code> will not print anything to the page.
    </p>
    <pre>
      <code class="liquid" v-el:nil-text>
        {% assign title = nil %}
        Some Title: {{{'{{ title }}'}}}
      </code>
      <code class="liquid" v-el:nil-output>
        Some Title:
      </code>
    </pre>
    <hr>
    <h2>Array</h2>
    <p>
      Arrays hold lists of variables of any type.
    </p>
    <p>
      To access all of the items in an array, you can loop through each item in the array using a for or tablerow tag.
    </p>
    <pre>
      <code class="liquid" v-el:array-for>
        {% for tag in program.tags %}
          {{{'{{ tag }}'}}}
        {% endfor %}
      </code>
      <code class="liquid" v-el:array-output>
        movies drama
      </code>
    </pre>
    <p>
      You can use square bracket <code>[ ]</code> notation to access a specific item in an array. Array indexing starts at zero.
    </p>
    <pre>
      <code class="liquid" v-el:array-pick>
        &lt;!-- if program.tags = "movies", "drama" --&gt;
        {{{'{{ program.tags[0] }}'}}}
        {{{'{{ program.tags[1] }}'}}}
      </code>
      <code class="liquid" v-el:array-pick-output>
        movies
        drama
      </code>
    </pre>
    <p>
      You cannot initialize arrays using only Liquid.
      <br>
      You can, however, use the split filter to break a single string into an array of substrings.
    </p>
  </div>
</template>

<script lang="">
import highlightCode from '../helpers/highlightCode';

export default {
  ready: function initHighlight() {
    const codeEls = ['string', 'number',
      'boolean', 'nilText', 'nilOutput', 'arrayFor', 'arrayOutput',
      'arrayPick', 'arrayPickOutput',
      'nilIf'];
    highlightCode(this, codeEls);
  },
};
</script>

<style lang="" scoped>
</style>
