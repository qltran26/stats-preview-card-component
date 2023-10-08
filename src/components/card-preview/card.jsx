import React from "react";
import "./styles/card.css";

function Card() {
  return (
    <main>
      <div className="card">
        <div className="card-image">
          <div className="image"></div>
        </div>
        <div className="card-desc">
          <h1>
            Get <span>insights</span> that help your business grow.
          </h1>
          <article>
            <p>
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
          </article>
          <div className="card-infos">
            <div className="info">
              <p className="info-number">10k+</p>
              <p className="info-desc">companies</p>
            </div>
            <div className="info">
              <p className="info-number">314</p>
              <p className="info-desc">templates</p>
            </div>
            <div className="info">
              <p className="info-number">12M+</p>
              <p className="info-desc">queries</p>
            </div>
          </div>
        </div>
      </div>

      <div class="attribution">
        <span>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          .{" "}
        </span>
        <span>
          Coded by <a href="#">qltran</a>.
        </span>
      </div>
    </main>
  );
}

export default Card;
