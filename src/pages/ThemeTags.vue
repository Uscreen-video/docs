<template lang="">
  <div class="article">
    <h1 class="main-title">Theme Tags</h1>
    <p>
      Theme tags have many functions, including:
    </p>
    <ul>
      <li>Outputting template-specific HTML markup</li>
      <li>Telling the theme which layout and snippets to use</li>
      <li>Splitting a returned array into multiple pages.</li>
    </ul>
    <hr>
    <h2>comment</h2>
    <p>
      Allows you to leave un-rendered code inside a Liquid template.
      Any text within the opening and closing <code>comment</code> blocks will not be output,
      and any Liquid code within will not be executed.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud1>
    My name is Peter Parker{% comment %}Spider-Man{% endcomment %}.
      </code>
      <code class="html"  v-el:liqud2>
    My name is Peter Parker.
      </code>
    </pre>
    <hr>
    <h2>include</h2>
    <p>
      Inserts a snippet from the <code>snippets</code> folder of a theme.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud3>
    {% include 'my_snippet_file' %}
      </code>
    </pre>
    <p>
      Note that you don't need to write the first <code>_</code> simbol or the file's <code>.liquid</code> extension.
      <br>
      When you include a snippet, the code inside it will have access to the variables within its parent template.
    </p>
    <h3>Including multiple variables in a snippet</h3>
    <p>
      There are two ways to include multiple variables in a snippet.
      You can assign and include them on different lines, which creates them in the parent template:
    </p>
    <pre>
      <code class="liquid"  v-el:liqud4>
    {% assign my_variable = 'apples' %}
    {% assign my_second_variable = 'oranges' %}
    {% include 'snippet' %}
      </code>
    </pre>
    <p>
      Or you can create variables on the same line where you include the snippet:
    </p>
    <pre>
      <code class="liquid"  v-el:liqud5>
    {% include 'snippet', my_variable: 'apples', my_other_variable: 'oranges' %}
      </code>
    </pre>
    <h3>parameters for include</h3>
    <h4>with</h4>
    <p>
      The <code>with</code> parameter assigns a value to a variable inside a snippet that shares the same name as the snippet.
      <br>
      For example, if you have a snippet named <b>_color.liquid</b> which contains the following:
    </p>
    <pre>
      <code class="liquid"  v-el:lique6>
    color: {{{'"{{ color }}"'}}}
    shape: {{{'"{{ shape }}"'}}}
      </code>
    </pre>
    <p>
      Within <b>theme.liquid</b>, you can include the <b>_color.liquid</b> snippet as follows:
    </p>
    <pre>
      <code class="liquid"  v-el:lique7>
    {% assign shape = 'circle' %}
    {% include 'color' %}
    {% include 'color' with 'red' %}
    {% include 'color' with 'blue' %}
    {% assign shape = 'square' %}
    {% include 'color' with 'red' %}
      </code>
      <code class="html"  v-el:lique8>
    color: '' shape: 'circle'
    color: 'red' shape: 'circle'
    color: 'blue' shape: 'circle'
    color: 'red' shape: 'square'
      </code>
    </pre>
    <hr>
    <h2>paginate</h2>
    <p>
      Splitting products, blog articles, and search results across multiple pages
      is a necessary part of theme design as you are limited to 100 results
      per page in any for loop.
      <br><br>
      The paginate tag works with thefor tag to split content into many pages.
      It must wrap a for tag block that loops through an array, as shown in the example below:
    </p>
    <pre>
      <code class="liquid"  v-el:lique9>
    {% paginate catalog.programs by 5 %}
      {% for program in paginate.collection %}
        &lt;!--show program details here -->
      {% endfor %}
    {% endpaginate %}
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
