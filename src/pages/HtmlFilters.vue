<template lang="">
  <div class="article">
    <h1 class="main-title">HTML Filters</h1>
    <p>HTML filters wrap assets in HTML tags.
    <hr>
    <h2>get_access_link</h2>
    <p>
      This filter allows you to create a link to the right offer.
      As additional params, you can set HTML <code>class</code> attribute,
      button <code>title</code> and <code>show_price</code>
      in case if you have only one offer, by default <code>show_price</code> eq to <code>true</code>.
      Link showing only if a user doesn't have access to the current program.
      You can use it with a special offer.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud8>
    {{{'{{ offer | get_access_link, title: "Subscribe", class: "button-offer" }}'}}}
      </code>
    </pre>
    <p>
      Or you can send a collection
     of offers to get a choose offer page.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud9>
    {{{'{{ program.fixed_price_offers | get_access_link, title: "Buy", class: "button-offer" }}'}}}
      </code>
    </pre>
    <hr>
    <h2>image_tag</h2>
    <p>
      Generates an image tag.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud1>
    {{{'{{ program.horizontal_image.small }}'}}}
      </code>
    </pre>
    <p>
      Filter accepts parameters to output an alt tag, class names and styles.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud2>
    {{{'{{ program.horizontal_image.small | image_tag, style: "border: 1px;", class: "my-image", alt: "best image" }}'}}}
      </code>
      <code class="html"  v-el:liqud3>
    &lt;img style="border: 1px;" class="my-image" alt="best image" src="/assets/img.png">
      </code>
    </pre>
    <hr>
    <h2>javascript_tag</h2>
    <p>
      Generates a JavaScript script tag.
    </p>
    <p>
      For the inside theme assets you can just put a name of file.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud4>
    {{{'{{ "main.js" | javascript_tag }}'}}}
      </code>
    </pre>
    <p>
      For the outside theme assets you need to put a full name and left <code>//</code> to prevent cross-origin requests.
      Please make sure you put links to minified version.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud5>
    {{{'{{ "//cdn.js.net/1.5.9/slick.min.js" | javascript_tag }}'}}}
      </code>
    </pre>
    <hr>
    <h2>link_to</h2>
    <p>
      Generates an HTML link. The first parameter is the URL of the link,
      and the optional second parameter is the title of the link.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud10>
    {{{'{{ "Store" | link_to: "https://www.my-store.com","A link to Fancy Store" }}'}}}
      </code>
    </pre>
    <hr>
    <h2>stylesheet_tag</h2>
    <p>
      Generates a stylesheet tag.
    </p>
    <p>
      For the inside theme assets you can just put a name of file.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud6>
    {{{'{{ "main.css" | stylesheet_tag }}'}}}
      </code>
    </pre>
    <p>
      For the outside theme assets you need to put a full name and left <code>//</code> to prevent cross-origin requests.
    </p>
    <pre>
      <code class="liquid"  v-el:liqud7>
    {{{'{{ "//cdn.css.net/1.5.9/slick.css" | stylesheet_tag }}'}}}
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
