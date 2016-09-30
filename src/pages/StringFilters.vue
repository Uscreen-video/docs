<template lang="">
  <div class="article">
    <h1 class="main-title">String Filters</h1>
    <p>
      String filters are used to manipulate outputs and variables of the string type.
    </p>
    <hr>
    <h2>append</h2>
    <p>
      Appends characters to a string.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud1>
    {{{'{{ "sales" | append: ".jpg" }}'}}}
      </code>
      <code class="html"  v-el:liqud2>
    sales.jpg
      </code>
    </pre>
    <hr>
    <h2>camelcase</h2>
    <p>
      Converts a string into CamelCase.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud3>
    {{{'{{ "coming-soon" | camelcase }}'}}}
      </code>
      <code class="html"  v-el:liqud4>
    ComingSoon
      </code>
    </pre>
    <hr>
    <h2>capitalize</h2>
    <p>
      Capitalizes the first word in a string
    </p>
    <hr>
    <h2>downcase</h2>
    <p>
      Converts a string into lowercase.
    </p>
    <hr>
    <h2>escape</h2>
    <p>
      Escapes a string.
    </p>
    <hr>
    <h2>handle/handleize</h2>
    <p>
      Formats a string into a handle.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud5>
    {{{'{{ "100% M & Ms!!!" | handleize }}'}}}
      </code>
      <code class="html"  v-el:liqud6>
    100-m-ms
      </code>
    </pre>
    <hr>
    <h2>newline_to_br</h2>
    <p>
      Inserts a &lt;br> linebreak HTML tag in front of each line break in a string.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud7>
    {% capture var %}
      One
      Two
      Three
    {% endcapture %}
    {{{'{{ var | newline_to_br }}'}}}
      </code>
    </pre>
    <hr>
    <h2>pluralize</h2>
    <p>
      Outputs the singular or plural version of a string based on the value of a number.
      The first parameter is the singular string and the second parameter is the plural string.
    </p>
    <hr>
    <h2>prepend</h2>
    <p>
      Prepends characters to a string.
    </p>
    <hr>
    <h2>remove</h2>
    <p>
      Removes all occurrences of a substring from a string.
    </p>
    <hr>
    <h2>remove_first</h2>
    <p>
      Removes only the first occurrence of a substring from a string.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud8>
    {{{'{{ "Hello, world. Goodbye, world." | remove_first: "world" }}'}}}
      </code>
    </pre>
    <hr>
    <h2>replace</h2>
    <p>
      Replaces all occurrences of a string with a substring.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud9>
    {{{'{{ program.title | replace: "Awesome", "Mega" }}'}}}
      </code>
    </pre>
    <hr>
    <h2>slice</h2>
    <p>
      The <code>slice</code> filter returns a substring, starting at the specified index.
      An optional second parameter can be passed to specify the length of the substring.
      If no second parameter is given, a substring of one character will be returned.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud10>
    {{{'{{ "hello" | slice: 0 }}'}}}
    {{{'{{ "hello" | slice: 1 }}'}}}
    {{{'{{ "hello" | slice: 1, 3 }}'}}}
      </code>
      <code class="html"  v-el:liqud11>
    h
    e
    ell
      </code>
    </pre>
    <hr>
    <h2>strip</h2>
    <p>
      Strips tabs, spaces, and newlines (all whitespace) from the left and right side of a string.
    </p>
    <hr>
    <h2>lstrip</h2>
    <p>
      Strips tabs, spaces, and newlines (all whitespace) from the <b>left</b> side of a string.
    </p>
    <hr>
    <h2>rstrip</h2>
    <p>
      Strips tabs, spaces, and newlines (all whitespace) from the <b>right</b> side of a string.
    </p>
    <hr>
    <h2>spoiler</h2>
    <p>
      Truncates a string down to the number of characters passed as the first
      parameter and strip HTML tags (only permitted are <b>br</b>, <b>b</b>).
      An escape by default is <code>...</code> is appended to the truncated
      string and is included in the character count, but you can setup a custom escape.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud12>
    {{{'{{ "The cat came back the very next day" | spoiler, 13, escape: ".-." }}'}}}
      </code>
    </pre>
    <hr>
    <h2>strip_html</h2>
    <p>
      Strips all HTML tags from a string.
    </p>
    <hr>
    <h2>strip_newlines</h2>
    <p>
      Removes any line breaks/newlines from a string.
    </p>
    <hr>
    <h2>upcase</h2>
    <p>
      Converts a string into uppercase.
    </p>
    <hr>
    <h2>url_encode</h2>
    <p>
      Converts any URL-unsafe characters in a string into percent-encoded characters.
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
