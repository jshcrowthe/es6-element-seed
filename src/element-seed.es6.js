class ElementSeed extends HTMLElement {

  get value() {
    return this.getAttribute('value');
  }

  set value(val) {
    return this.setAttribute('value', JSON.stringify(val));
  }

  // Use createdCallback instead of constructor to init an element.
  createdCallback() {
    // This element uses Shadow DOM.
    this.createShadowRoot().innerHTML = `
      <style>
        :host {
          display: block;
        }
      </style>
      <div id="quotes"><div>
    `;
  }

  // You can also define the other lifecycle methods.
  // attachedCallback() {}
  // detachedCallback() {}
  // attributeChangedCallback() {}
}

document.registerElement('element-seed', ElementSeed);