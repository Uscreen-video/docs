import hljs from 'highlight.js';
import each from 'lodash/each.js';

export default function highlightCode(self) {
  each(self.$els, (el) => {
    hljs.highlightBlock(el);
  });
}
