const navbarTemplate = document.createElement("template");
navbarTemplate.innerHTML = `
<style>
  .navbar {
  color: #fff;
  background-color: #111;
  text-transform: uppercase;
  line-height: 3rem;
  font-size: 12px;
  letter-spacing: 0.1rem;
  height: 50px;
  }
  
  .navbar-container {
    width: 80%;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
  }
  
  .nav-buttons {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .nav-button {
    color: #9cb9dd;
    padding: 0 0.8rem;
    text-decoration: none;
    font-size: 16px;
  }
  .nav-button:hover {
    background-color: #9cb9dd;
    color: #111;
  }
</style>
<nav class="navbar">
  <div class="navbar-container">
    <a href="/" class="nav-button">home</a>
    <div class="nav-buttons">
      <a
        class="nav-button"
        href="/blog/index.html"
        target="_self"
        rel="noopener noreferrer"
      >
        Blog
      </a>
      <a
        class="nav-button"
        href="/resume/index.html"
        target="_self"
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </div>
  </div>
</nav>
`;

class NavbarComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(navbarTemplate.content.cloneNode(true));
  }
}

customElements.define("navbar-component", NavbarComponent);
