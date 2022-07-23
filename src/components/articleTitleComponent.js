const articleTitleTemplate = document.createElement("template");
articleTitleTemplate.innerHTML = `
 <style> 
   h1 {
   font-weight: inherit;
   }
   
  .title-container {
    padding-top: 32px;
    padding-bottom: 24px;
    /*border-bottom: 1px solid;*/
  }
  
  .title-text {
    color: white;
    font-size: var(--size-28px);
    font-weight: bold;
    margin-bottom: 12px;
    margin-top: 16px;
  }
  
  .date-text {
    font-size: var(--size-16px);
    font-weight: bold;
    background: linear-gradient(140deg, #D2A8FF 12.09%, #F778BA 42.58%, #FF7B72 84.96%);
   -webkit-background-clip:text;
   -webkit-text-fill-color:rgba(0,0,0,0);
  }
  
  .description-text {
    font-size: var(--size-18px);
    margin: 0;
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
/*.title-column:hover .title-text {*/
/*  color: grey;*/
/*}*/
  </style>
  <div class="title-container">
    <h1 id="title" class="title-text"></h1>
    <div id="date" class="date-text"></div>
<!--    <p id="description" class="description-text"></p>-->
  </div>
`;

class ArticleTitleComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(articleTitleTemplate.content.cloneNode(true));

    console.log("this.title", this.title);
    console.log("this.date", this.date);
    console.log("this.description", this.description);
    // const title = this.title;
    const dateElement = this.shadowRoot.getElementById("date");
    dateElement.textContent = this.date;
    const titleElement = this.shadowRoot.getElementById("title");
    titleElement.textContent = this.title;
    const descriptionElement = this.shadowRoot.getElementById("description");
    descriptionElement.textContent = this.description;
  }

  // gathering data from element attributes
  get date() {
    return this.getAttribute("date") ?? "";
  }

  get description() {
    return this.getAttribute("description") ?? "";
  }

  get title() {
    return this.getAttribute("title") ?? "";
  }
}

customElements.define("article-title", ArticleTitleComponent);
