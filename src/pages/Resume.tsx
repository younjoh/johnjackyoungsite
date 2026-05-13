import React from "react";

export default function Resume() {
  return (
    <>
      <div className="bg-dark text-white py-5 text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">Resume</h1>
          <p className="lead">My experience, education, and skills.</p>
        </div>
      </div>

      <div className="container py-5">
        <p className="text-muted">Resume content coming soon.</p>
      </div>

      <footer className="text-muted text-center py-4 border-top">
        <small>&copy; {new Date().getFullYear()} John David Young</small>
      </footer>
    </>
  );
}
