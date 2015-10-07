/**
 * Create an ElementSeed class that extends HTMLElement
 * this will represent the WebComponent
 */
class ElementSeed extends HTMLElement {

  get name() {
    return this.getAttribute('name');
  }

  set name(val) {
    return this.setAttribute('name', JSON.stringify(val));
  }

  _render() {
    var root;
    if ('createShadowRoot' in HTMLElement.prototype) {
      root = this.shadowRoot;
      if (!root) root = this.createShadowRoot();
    } else {
      root = this;
    }
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