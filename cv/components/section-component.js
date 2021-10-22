customElements.define('section-component',
  class extends HTMLElement {
    constructor() {
      super();
      const template = document
        .getElementById('section-template')
        .content;
      const shadowRoot = this.attachShadow({mode: 'open'})
        .appendChild(template.cloneNode(true));
    }
  }
);
