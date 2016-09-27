<template lang="">
  <div class="article">
    <h1 class="main-title">Iteration tags</h1>
    <p>
      Iteration tags repeatedly run blocks of code.
    </p>
    <hr>
    <h2>for</h2>
    <p>
      Repeatedly executes a block of code.
      <br>
      <code>for</code> loops can output a maximum of 100 results per page.
      In cases where there are more than 100 results,
      use the paginate tag to split them across multiple pages.
    </p>
    <pre>
      <code class="liquid" v-el:liqud1>
    {% for program in catalog.programs %}
      {{{'{{ program.title }}'}}}
    {% endfor %}
      </code>
    </pre>
    <h4>else</h4>
    <p>
      Specifies a fallback case for a <code>for</code> loop which will run
      if the loop has zero length (for example, you loop over catalog and you doesn't have any programs):
    </p>
    <pre>
      <code class="liquid" v-el:liqud2>
    {% for program in catalog.programs %}
      {{{'{{ product.title }}'}}}
    {% else %}
      The catalog is empty.
    {% endfor %}
      </code>
    </pre>
    <h4>break</h4>
    <p>
      Causes the loop to stop iterating when it encounters the <code>break</code> tag.
    </p>
    <pre>
      <code class="liquid" v-el:liqud3>
    {% for i in (1..5) %}
      {% if i == 4 %}
        {% break %}
      {% else %}
        {{{'{{ i }}'}}}
      {% endif %}
    {% endfor %}
      </code>
      <codee class="liquid" v-el:liqud4>
    1 2 3
      </code>
    </pre>
    <h4>continue</h4>
    <p>
      Causes the loop to skip the current iteration when it encounters the <code>continue</code> tag.
    </p>
    <pre>
      <code class="liquid" v-el:liqud5>
    {% for i in (1..5) %}
      {% if i == 4 %}
        {% continue %}
      {% else %}
        {{{'{{ i }}'}}}
      {% endif %}
    {% endfor %}
      </code>
      <codee class="liquid" v-el:liqud6>
    1 2 3  5
      </code>
    </pre>
    <h3>Parameters for</h3>
    <h4>limit</h4>
    <p>
      Exits the for loop at a specific index.
    </p>
    <pre>
      <code class="liquid" v-el:liqud7>
    &lt;!-- if array = [1,2,3,4,5,6] --&gt;
    {% for item in array limit:2 %}
      {{{'{{ item }}'}}}
    {% endfor %}
      </code>
      <codee class="liquid" v-el:liqudt8>
    1 2
      </code>
    </pre>
    <h4>offset</h4>
    <p>
      Starts the for loop at a specific index.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud9>
    &lt;!-- if array = [1,2,3,4,5,6] --&gt;
    {% for item in array offset:2 %}
      {{{'{{ item }}'}}}
    {% endfor %}
      </code>
      <codee class="liquid" v-el:liqud10>
    3 4 5 6
      </code>
    </pre>
    <h4>range</h4>
    <p>
      Defines a range of numbers to loop through. The range can be defined by both literal and variable numbers.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud11>
    {% assign num = 4 %}
    {% for i in (1..num) %}
      {{{'{{ i }}'}}}
    {% endfor %}

    {% for i in (3..5) %}
      {{{'{{ i }}'}}}
    {% endfor %}
      </code>
      <codee class="liquid" v-el:liqud12>
    1 2 3 4
    3 4 5
      </code>
    </pre>
    <h4>reversed</h4>
    <p>
      Reverses the order of the for loop.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud13>
    &lt;!-- if array = [1,2,3,4,5,6] -->
    {% for item in array reversed %}
      {{{'{{ item }}'}}}
    {% endfor %}
      </code>
      <code class="liquid"  v-el:liqud14>
    6 5 4 3 2 1
      </code>
    </pre>
    <hr>
    <h2>cycle</h2>
    <p>
      Loops through a group of strings and outputs them in the order that they
      were passed as parameters. Each time <code>cycle</code> is called,
      the next string that was passed as a parameter is output.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud15>
    {% cycle 'one', 'two', 'three' %}
    {% cycle 'one', 'two', 'three' %}
    {% cycle 'one', 'two', 'three' %}
    {% cycle 'one', 'two', 'three' %}
      </code>
      <code class="liquid"  v-el:liqud16>
    one
    two
    three
    one
      </code>
    </pre>
    <p>Uses for cycle include:</p>
    <ul>
      <li>applying odd/even classes to rows in a table</li>
      <li>applying a unique class to the last product thumbnail in a row</li>
    </ul>
    <h3>Parameters cycle</h3>
    <p>
      <code>cycle</code> accepts a parameter called <b>cycle group</b> in cases
      where you need multiple cycle blocks in one template. If no name is supplied
      for the cycle group, then it is assumed that multiple calls with the same
      parameters are one group.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud17>
    {% cycle 'group1': 'one', 'two', 'three' %}
    {% cycle 'group2': '1', '2', '3' %}
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
