/**
 * Create an ElementSeed class that extends HTMLElement
 * this will represent the WebComponent
 */

// This is a quick shim to allow Safari to properly
// extend the HTMLElement (by default babel assumes
// HTMLElement to be an `function` whereas in safari
// it's a `object`)
if (typeof HTMLElement !== 'function') {
  var _HTMLElement = function(){};
  _HTMLElement.prototype = HTMLElement.prototype;
  HTMLElement = _HTMLElement;
}

class ElementSeed extends HTMLElement {

  get name() {
    return this.getAttribute('name');
  }

  set name(val) {
    return this.setAttribute('name', val);
  }

  _render() {
    let root = this.shadowRoot;
    if (!root) root = this.createShadowRoot();
    root.innerHTML = `
      <style>
        :host {
          display: block;
        }
      </style>
      <h1>Hello ${this.name}</h1>
    `;
  }

  // Use createdCallback instead of constructor to init an element.
  createdCallback() {
    this._render();
  }
  attributeChangedCallback() {
    this._render();
  }

  // You can also define the other lifecycle methods.
  // attachedCallback() {}
  // detachedCallback() {}
}

document.registerElement('element-seed', ElementSeed);