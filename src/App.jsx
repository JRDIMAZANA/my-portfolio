import './style.css';
function App() {

  return (
    <section>
      <nav>
        <a href="#portfolio">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
      </nav>

      <section id="portfolio">
        <img src="" alt="pic" />
        <section>
          <h3>Hello!</h3>
          <h1>I'm John Ramwell M. Dimazana</h1>
          <p>A Backend Developer with a hobby of playing online games with my friends</p>
          <button>Learn More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
          </button>
        </section>
      </section>
    
      <section id="projects">
        <div class="title">
          <h1>Projects</h1>
        </div>
        <div class="context">
          <article>
            <h1> Budget Planner</h1>
            <p>The Budget Planner System was developed to help individuals manage their finances more effectively by providing a simple and user-friendly tool for tracking income, expenses, savings goals and bill reminder. </p>
          </article>
          <article>
            <h1> Autotrack</h1>
            <p>This study focused on the development of AUTOTRACK: Integrating Inventory and Sales Management in a Web-Based System for Junas Auto Supply, a digital platform designed to improve inventory control, sales processing, and business monitoring.</p>
          </article>
          <article>
            <h1> Music-Playlist</h1>
            <p>A playlist platform is a dynamic user interface with a robust backend capable of handling real-time audio playback, metadata management, and user data persistence. Minimal web app using native browser APIs or engineering a full-scale platform like Spotify, playlist web development is a fundamental exercise in modern software architecture.</p>
          </article>
        </div>
      </section>

      <footer id="about">
        <div className="footer-content">

          <div className="footer-brand">
            <h2>John Ramwell M. Dimazana</h2>
            <p>Backend Developer</p>
            <p className="footer-tagline">
              Let's build something together — feel free to reach out!
            </p>
          </div>

          <div className="footer-links">
            <h3>Connect With Me</h3>
            <div className="socials">

              <a
                className="social"
                href="https://www.facebook.com/johnramwell.dimazana/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
                </svg>
              </a>

              <a
                className="social"
                href="johnramwell19@gmail.com"
                aria-label="Email"
                title="Email me"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M1.5 5.25A2.25 2.25 0 0 1 3.75 3h16.5a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 20.25 21H3.75A2.25 2.25 0 0 1 1.5 18.75V5.25Zm2.4.75 8.1 6.3 8.1-6.3H3.9Zm16.6 1.63-7.7 5.99a1.5 1.5 0 0 1-1.8 0L3.5 7.63v11.12h17V7.63Z" />
                </svg>
              </a>

              <a
                className="social"
                href="https://github.com/JRDIMAZANA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .3.21.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-contact">
            <h3>Contact Me</h3>
            <p>
              <a href="">
                johnramwell19@gmail.com
              </a>
            </p>
            <p>
              <a href="">+63 976 129 7275</a>
            </p>
            <p className="footer-location">Philippines</p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} John Ramwell M. Dimazana. All rights reserved.</p>
        </div>
      </footer>
    </section >
  )
}

export default App
