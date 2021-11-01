import { NavBar } from "./nav-bar";

export function Home() {
  return (
    <>
      <NavBar />
      <div className="home-container">
        <div>
          <div className="title-container">
            <div className="title-column">
              <h1 className="title-text">James McDonell</h1>
            </div>
            <ul className="info-column"></ul>
          </div>
          <main className="main-content">
            <p>
              I am a software developer with experience building complex web
              applications.
            </p>
            <p>
              Currently, I am using
              <span className="strong-text">
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React
                </a>
              </span>
              and
              <span className="strong-text">
                <a
                  href="https://firebase.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Firebase
                </a>
              </span>
              to build
              <span className="strong-text">
                <a
                  href="https://www.intakt.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  inTakt
                </a>
              </span>
              <a aria-describedby="footnote" href="#intakt"></a>, a scheduling
              and project management application for the construction industry.
            </p>
            <p>
              Outside of work, I spend a lot of time studying things that
              interest me, especially finance, investing and economics.
            </p>
          </main>
        </div>
      </div>
    </>
  );
}
