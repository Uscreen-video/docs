import hljs from 'highlight.js';
import each from 'lodash/each.js';

export default function highlightCode(self, blockNames = []) {
  each(blockNames, (block) => {
    hljs.highlightBlock(self.$els[block]);
  });
}
