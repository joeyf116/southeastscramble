// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import "@styles/globals.css";
import Head from "next/head";

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Southeast Scramble</title>
        <link rel="icon" href="/images/smallSES.svg" />
        <meta
          property="og:image"
          content="https://southeastscramble.com/images/smallSES.svg"
        />
        <meta name="description" content="Sub Only Superfights"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossorigin="anonymous"
        ></script>
      </Head>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
        <a className="navbar-brand" href="/">
          <img
            src="/images/smallSES.svg"
            width="40"
            className="d-inline-block align-top"
            alt="SES Logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navbar-right" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/events">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/events">
                Ruleset & FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/apply">
                Apply to Compete
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default Application;
