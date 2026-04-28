import React from "react";

export default function App() {
  return (
    <div className="container py-5">
      <header className="mb-4">
        <h1 className="display-5">John (Jack) Young</h1>
        <p className="lead">Welcome to my portfolio.</p>
      </header>

      <section className="mb-4">
        <p>
          Here you can find my <a href="#">resume</a>,{" "}
          <a href="#">achievements</a> and what I like to do in my{" "}
          <a href="#">free time</a>.
          Baba booey
        </p>
      </section>

      <section className="mb-4">
        <a href="#">
          <img
            src="/pain.jpg"
            alt="Image"
            height={250}
            width={400}
            className="img-fluid rounded"
          />
        </a>
      </section>

      <footer className="text-muted mt-5">
        <small>© {new Date().getFullYear()} John David Young</small>
      </footer>
    </div>
  );
}
