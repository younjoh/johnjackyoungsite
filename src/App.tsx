import React from "react";

export default function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="index.html">Jack Young</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active" href="index.html">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="Resume.html">Resume</a></li>
              <li className="nav-item"><a className="nav-link" href="achievements.html">Achievements</a></li>
              <li className="nav-item"><a className="nav-link" href="free_time.html">Free Time</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="bg-dark text-white py-5 text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">John (Jack) Young</h1>
          <p className="lead">Welcome to my portfolio.</p>
        </div>
      </div>

      <div className="container py-5">
        <p>
          Here you can find my <a href="Resume.html">resume</a>,{" "}
          <a href="achievements.html">achievements</a>, and what I like to do in my{" "}
          <a href="free_time.html">free time</a>.
        </p>

        <a href="free_time.html">
          <img
            src="/pain.jpg"
            alt="Image"
            className="img-fluid rounded mt-3"
            style={{ maxHeight: 250 }}
          />
        </a>
      </div>

      <footer className="text-muted text-center py-4 border-top">
        <small>© {new Date().getFullYear()} John David Young</small>
      </footer>
    </>
  );
}
