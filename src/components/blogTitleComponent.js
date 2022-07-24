const blogTitleTemplate = document.createElement("template");
blogTitleTemplate.innerHTML = `
 <style> 
   h1 {
   font-weight: inherit;
   }
   
  .title-container {
    padding-top: 32px;
    padding-bottom: 24px;
  }
  
  .title-text {
    color: var(--blog-title-color);
    font-size: var(--size-28px);
    font-weight: bold;
    margin-bottom: 12px;
    margin-top: 16px;
  }
  
  .date-text {
    font-size: var(--size-16px);
    font-weight: bold;
    background: var(--date-text-gradient);
    color: transparent;
    -webkit-background-clip: text;
  }
  
  @media (min-width: 640px) {
    .title-container {
      padding-top: 32px;
      padding-bottom: 24px;
    }
    .title-text {
    font-size: var(--size-40px);
    }
  }
  </style>
  <div class="title-container">
    <h1 id="title" class="title-text"></h1>
    <div id="date" class="date-text"></div>
  </div>
`;

class BlogTitleComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(blogTitleTemplate.content.cloneNode(true));

    const dateElement = this.shadowRoot.getElementById("date");
    if (dateElement) {
      dateElement.textContent = this.date;
    }
    const titleElement = this.shadowRoot.getElementById("title");
    if (titleElement) {
      titleElement.textContent = this.title;
    }
  }

  // gathering data from element attributes
  get date() {
    return this.getAttribute("date") ?? "";
  }

  get title() {
    return this.getAttribute("title") ?? "";
  }
}

customElements.define("blog-title", BlogTitleComponent);
