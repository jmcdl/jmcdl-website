const navbarTemplate = document.createElement("template");
navbarTemplate.innerHTML = `
<style>
  .navbar {
  background-color: var(--background-color);
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
    color: var(--primary-color);
    margin: 0 0.8rem;
    text-decoration: none;
    font-size: 16px;
    display: inline-block;
    position: relative;
  }

  .nav-button:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: var(--primary-color);
    transition: opacity 300ms, transform 300ms;
    opacity 1;
    transform: scale(0);
    transform-origin: center;
  }
  
  .nav-button:hover:after,
  .nav-button:focus:after {
    opacity: 1;
    transform: scale(1);
  }
</style>
<nav class="navbar">
  <div class="navbar-container">
  <div class="nav-buttons">
    <a href="/" class="nav-button">jmcdl</a>
    <button id="theme-toggle"></button>
    </div>
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
  constructor () {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(navbarTemplate.content.cloneNode(true));
  }

  connectedCallback () {
    this.shadowRoot.getElementById("theme-toggle")
      .addEventListener("click", this._onClick);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this._onClick);
  }

  _onClick () {
    const current = document.body.getAttribute("class");
    if (current === "dark") {
      document.body.setAttribute("class", "light");
    } else {
      document.body.setAttribute("class", "dark");
    }
  }
}

customElements.define("navbar-component", NavbarComponent);
