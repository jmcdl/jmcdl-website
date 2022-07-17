const largeTitleTemplate = document.createElement("template");
largeTitleTemplate.innerHTML = `
 <style> 
.title-container {
  padding-top: 100px;
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
}

@media (min-width: 640px) {
  .title-container {
    flex-direction: row;
    width: 100%;
    margin-bottom: 48px;
    padding-top: 200px;
  }
}

.title-column {
  flex: 1;
  justify-content: flex-end;
  max-width: 50%;
}

.title-column:hover .title-text {
  color: grey;
}

.title-text {
  font-size: 45px;
  font-weight: 900;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 0;
  text-transform: uppercase;
  display: flex;
  flex-wrap: wrap;
  text-shadow: -4px -4px 0 #9cb9dd;
  color: #111;
  transition: all 0.8s 0s ease-in-out;
}
@media (min-width: 768px) {
  .title-text {
    font-size: 58px;
  }
}
@media (min-width: 1024px) {
  .title-text {
    font-size: 75px;
  }
}

  </style>
  <div class="title-container">
    <div class="title-column">
      <h1 class="title-text"><slot></slot></h1>
    </div>
  </div>
`;

class LargeTitleComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(largeTitleTemplate.content.cloneNode(true));
  }
}

customElements.define("large-title", LargeTitleComponent);
