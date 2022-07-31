const navbarTemplate = document.createElement("template");
navbarTemplate.innerHTML = `
<style>
  .navbar {
  background-color: #22272e;
  line-height: 3rem;
  font-size: 12px;
  font-weight: 200;
  letter-spacing: 0.1rem;
  height: 70px;
  }
  
  .navbar-container {
    width: 80%;
    height: 100%;
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
    margin: 0 0.8rem;
    text-decoration: none;
    font-size: 16px;
    display: inline-block;
    position: relative;
    align-self: center;
  }

  .nav-button:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: #9cb9dd;
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
    color: #9cb9dd;
    display: flex;
    align-self: center;
    margin: 0;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
}
</style>
<nav class="navbar">
  <div class="navbar-container">
    <div class="nav-buttons">
      <a href="https://www.jmcdl.com/" class="nav-button">jmcdl</a>
      <a
        class="nav-button"
        href="https://www.jmcdl.com/blog/index.html"
        target="_self"
        rel="noopener noreferrer"
      >
        blog
      </a>
      <a
        class="nav-button"
        href="https://www.jmcdl.com/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        resume
      </a>
    </div>
    <button class="toggle-button" id="theme-toggle"></button>
  </div>
</nav>
`;

const sunIconTemplate = document.createElement("template");
sunIconTemplate.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="2rem" height="2rem" preserveAspectRatio="xMidYMid meet" fill="#9cb9dd">
    <path d="M18.1 5.1c0 .3-.1.6-.3.9l-1.4 1.4-.9-.8 2.2-2.2c.3.1.4.4.4.7zm-.5 5.3h3.2c0 .3-.1.6-.4.9s-.5.4-.8.4h-2v-1.3zm-6.2-5V2.2c.3 0 .6.1.9.4s.4.5.4.8v2h-1.3zm6.4 11.7c-.3 0-.6-.1-.8-.3l-1.4-1.4.8-.8 2.2 2.2c-.2.2-.5.3-.8.3zM6.2 4.9c.3 0 .6.1.8.3l1.4 1.4-.8.9-2.2-2.3c.2-.2.5-.3.8-.3zm5.2 11.7h1.2v3.2c-.3 0-.6-.1-.9-.4s-.4-.5-.4-.8l.1-2zm-7-6.2h2v1.2H3.2c0-.3.1-.6.4-.9s.5-.3.8-.3zM6.2 16l1.4-1.4.8.8-2.2 2.2c-.2-.2-.3-.5-.3-.8s.1-.6.3-.8z"/>
    <circle cx="12" cy="11" r="4"/>
  </svg>`

const moonIconTemplate = document.createElement("template");
moonIconTemplate.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="2rem" height="2rem" preserveAspectRatio="xMidYMid meet" fill="#9cb9dd">-2
    <path d="M17.39 15.14A7.33 7.33 0 0 1 11.75 1.6c.23-.11.56-.23.79-.34a8.19 8.19 0 0 0-5.41.45 9 9 0 1 0 7 16.58 8.42 8.42 0 0 0 4.29-3.84 5.3 5.3 0 0 1-1.03.69z"/>
  </svg>`

class NavbarComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(navbarTemplate.content.cloneNode(true));
    const toggleButton = this.shadowRoot.getElementById("theme-toggle")
    const current = document.body.getAttribute("class");
    if (current === "dark") {
      toggleButton.appendChild(sunIconTemplate.content.cloneNode(true))
    } else {
      toggleButton.appendChild(moonIconTemplate.content.cloneNode(true))
    }
  }

  connectedCallback() {
    const toggleButton = this.shadowRoot.getElementById("theme-toggle")
    toggleButton.addEventListener("click", this.toggleColorMode);
  }

  disconnectedCallback() {
    this.removeEventListener("click", this.toggleColorMode);
  }

  toggleColorMode(event) {
    const current = document.body.getAttribute("class");
    if (current === "dark") {
      document.body.setAttribute("class", "light");
      event.currentTarget.removeChild(event.currentTarget.firstElementChild)
      event.currentTarget.appendChild(moonIconTemplate.content.cloneNode(true))
      window.localStorage.setItem("color-mode", "light")
    } else {
      document.body.setAttribute("class", "dark");
      event.currentTarget.removeChild(event.currentTarget.firstElementChild)
      event.currentTarget.appendChild(sunIconTemplate.content.cloneNode(true))
      window.localStorage.setItem("color-mode", "dark")
    }
  }
}

customElements.define("navbar-component", NavbarComponent);
