import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="bg-dark text-white py-5 text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">John (Jack) Young</h1>
          <p className="lead">Welcome to my portfolio.</p>
        </div>
      </div>

      <div className="container py-5">
        <p>
          Here you can find my <Link to="/resume">resume</Link>,{" "}
          <Link to="/achievements">achievements</Link>, and what I like to do in my{" "}
          <Link to="/free-time">free time</Link>.
        </p>

        <Link to="/free-time">
          <img
            src="pain.jpg"
            alt="Image"
            className="img-fluid rounded mt-3"
            style={{ maxHeight: 250 }}
          />
        </Link>
      </div>

      <footer className="text-muted text-center py-4 border-top">
        <small>&copy; {new Date().getFullYear()} John David Young</small>
      </footer>
    </>
  );
}
