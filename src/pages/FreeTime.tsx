import React from "react";

export default function FreeTime() {
  return (
    <>
      <div className="bg-dark text-white py-5 text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">Free Time</h1>
          <p className="lead">When I'm not coding, I'm out exploring nature with a camera.</p>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="mb-4 text-center">Nature Photography</h2>
        <div className="row g-4">

          <div className="col-sm-6 col-lg-4">
            <div className="card border-0 shadow-sm">
              <img src="monkey.jpg" alt="Monkey in nature" className="gallery-img card-img-top" />
              <div className="card-body">
                <p className="card-text text-muted small">Add a caption here</p>
              </div>
            </div>
          </div>

          {/* Add more photos here — copy the block above and update src, alt, and caption */}

        </div>
      </div>

      <footer className="text-muted text-center py-4 border-top">
        <small>&copy; {new Date().getFullYear()} John David Young</small>
      </footer>
    </>
  );
}
