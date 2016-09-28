<template lang="">
  <div class="article">
    <h1 class="main-title">Array Filters</h1>
    <p>
      Array filters change the output of arrays.
    </p>
    <hr>
    <h2>join</h2>
    <p>
      Joins the elements of an array with the character passed as the parameter. The result is a single string.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud1>
    {{{"{{ program.tags | join: ', ' }}"}}}
      </code>
      <code class="html"  v-el:liqud2>
    movie, action, new
      </code>
    </pre>
    <hr>
    <h2>first</h2>
    <p>
      Returns the first element of an array.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud3>
    &lt;!-- program.tags = "movie", "action", "new" -->
    {{{"{{ program.tags | first }}"}}}
      </code>
      <code class="html"  v-el:liqud4>
    movie
      </code>
    </pre>
    You can use <code>first</code> with dot notation when you need to use the filter inside a tag.
    <pre>
      <code class="liquid"  v-el:liqud5>
    {% if program.tags.first == "movie" %}
      This is great movie!
    {% endif %}
      </code>
    </pre>
    <hr>
    <h2>last</h2>
    <p>
      Returns the last element of an array.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud6>
    &lt;!-- program.tags = "movie", "action", "new" -->
    {{{"{{ program.tags | last }}"}}}
    &lt;!-- or use dot notation -->
    {{{"{{ program.tags.last }}"}}}
      </code>
    </pre>
    <hr>
    <h2>concat</h2>
    <p>
      Concatenates (combines) an array with another array.
      The resulting array contains all the elements of the original arrays.
      concat will not remove duplicate entries from the concatenated array
      unless you also use the <code>uniq</code> filter.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud7>
    {% assign fruits = "apples, oranges, peaches, tomatoes" | split: ", " %}
    {% assign vegetables = "broccoli, carrots, lettuce, tomatoes" | split: ", " %}

    {% assign plants = fruits | concat: vegetables %}

    {{{'{{ plants | join: ", " }}'}}}
      </code>
      <code class="html"  v-el:liqud8>
    apples, oranges, peaches, tomatoes, broccoli, carrots, lettuce, tomatoes
      </code>
    </pre>
    You can string together multiple concat filters to combine more than two arrays:
    <pre>
      <code class="liquid"  v-el:liqud9>
    {% assign things = fruits | concat: vegetables | concat: animals %}
      </code>
    </pre>
    <hr>
    <h2>index</h2>
    <p>
      Returns the item at the specified index location in an array.
      Note that array numbering starts from zero,
      so the first item in an array is referenced with <code>[0]</code>.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud10>
    &lt;!-- program.tags = "movie", "action", "new" -->
    {{{'{{ program.tags[1] }}'}}}
    &lt;!-- return "action" in output -->
      </code>
    </pre>
    <hr>
    <h2>map</h2>
    <p>
      Accepts an array element's attribute as a parameter and creates a string out of each array element's value.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud11>
    {% assign collection_titles = catalog.programs | map: 'title' %}
    &lt;!-- collection_titles return array with all titles from the collection -->
      </code>
    </pre>
    <hr>
    <h2>reverse</h2>
    <p>
      Reverses the order of the items in an array.
    </p>
    <hr>
    <h2>size</h2>
    <p>
      Returns the size of a string (the number of characters) or an array (the number of elements).
    </p>
    <hr>
    <h2>sort</h2>
    <p>
      Sorts the elements of an array by a given attribute of an element in the array.
      The order of the sorted array is case-sensitive.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud12>
    {% assign programs = catalog.programs | sort: 'title' %}
    {% for program in programs %}
      &lt;h4>{{ program.title }}&lt;/h4>
    {% endfor %}
      </code>
    </pre>
    <hr>
    <h2>sort_programs</h2>
    <p>
      Sorts the elements of programs collection
      (<code>catalog</code> or <code>category</code> objects) by a given attribute
      of an element in the array and direction ('asc' or 'desc').
      <br><br>This sorting work over <code>pagination</code>,
      which means you sort all your programs.
      <br>If you need to sort only programs inside current array, just use method <code>sort</code>
      <br><br>
      You can sort by several fields: "created_at", "position", "title".
    </p>
    <pre>
      <code class="liquid"  v-el:liqud13>
    {% assign programs = catalog | sort_programs, option: 'title', direction: 'asc' %}
    {% for program in programs %}
      &lt;h4>{{ program.title }}&lt;/h4>
    {% endfor %}
      </code>
    </pre>
    <hr>
    <h2>uniq</h2>
    <p>
      Removes any duplicate instances of elements in an array.
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
