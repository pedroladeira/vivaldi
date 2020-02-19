/** @jsx h */
import { Component, h, render } from '../lib/vivaldi.esm.js';

class Headline extends Component {
  render() {
    return h("div", null, h("h1", {
      className: "headline"
    }, "Hello this in an h1", h("br", null), "new line"), h("h2", null, "Second Headline"));
  }

}

class App extends Component {
  render() {
    return h("div", null, h(Headline, null), h("p", null, "Lorem ipsum"), h("ul", null, h("li", null, h("a", {
      href: ""
    }, "anchor")), h("li", null, "More")), h("ol", null, h("li", null, "item")), h("button", {
      ref: node => {
        node.addEventListener('click', console.log);
      }
    }, "Click Me!"));
  }

}

console.log(document.body);
console.log(render);
render(h(App, null), document.body);
