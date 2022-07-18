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
  
  .toggle-button {
    color: var(--primary-color);
    display: flex;
    align-self: center;
    margin: 0;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
}
  
  .toggle-icon {
    color: var(--primary-color);
    height: 100%
  }
</style>
<nav class="navbar">
  <div class="navbar-container">
    <div class="nav-buttons">
      <a href="/" class="nav-button">jmcdl</a>
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
    <button class="toggle-button" id="theme-toggle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="2rem" height="2rem" preserveAspectRatio="xMidYMid meet" fill="var(--primary-color)">
        <path d="M18.1 5.1c0 .3-.1.6-.3.9l-1.4 1.4-.9-.8 2.2-2.2c.3.1.4.4.4.7zm-.5 5.3h3.2c0 .3-.1.6-.4.9s-.5.4-.8.4h-2v-1.3zm-6.2-5V2.2c.3 0 .6.1.9.4s.4.5.4.8v2h-1.3zm6.4 11.7c-.3 0-.6-.1-.8-.3l-1.4-1.4.8-.8 2.2 2.2c-.2.2-.5.3-.8.3zM6.2 4.9c.3 0 .6.1.8.3l1.4 1.4-.8.9-2.2-2.3c.2-.2.5-.3.8-.3zm5.2 11.7h1.2v3.2c-.3 0-.6-.1-.9-.4s-.4-.5-.4-.8l.1-2zm-7-6.2h2v1.2H3.2c0-.3.1-.6.4-.9s.5-.3.8-.3zM6.2 16l1.4-1.4.8.8-2.2 2.2c-.2-.2-.3-.5-.3-.8s.1-.6.3-.8z"/>
        <circle cx="12" cy="11" r="4"/>
      </svg>
    </button>
  </div>
</nav>
`;

class NavbarComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(navbarTemplate.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot
      .getElementById("theme-toggle")
      .addEventListener("click", this._onClick);
  }

  disconnectedCallback() {
    this.removeEventListener("click", this._onClick);
  }

  _onClick() {
    const current = document.body.getAttribute("class");
    if (current === "dark") {
      document.body.setAttribute("class", "light");
    } else {
      document.body.setAttribute("class", "dark");
    }
  }
}

customElements.define("navbar-component", NavbarComponent);
