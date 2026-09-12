import React from "react";
import profile from "../data/profile";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__text">
        <p className="hero__kicker">Portfolio</p>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__title">{profile.title}</p>
        <p className="hero__lede">
          Building things across the stack — from Java console programs to
          full web applications with a database behind them.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#projects">
            See my work
          </a>
          <a className="btn btn--ghost" href="#contact">
            Get in touch
          </a>
        </div>
      </div>

      <div className="hero__diagram" aria-hidden="true">
        <svg viewBox="0 0 360 300" xmlns="http://www.w3.org/2000/svg">
          <line x1="70" y1="70" x2="180" y2="150" className="diagram__line" />
          <line x1="180" y1="150" x2="290" y2="70" className="diagram__line" />
          <line x1="180" y1="150" x2="180" y2="250" className="diagram__line" />

          <g className="diagram__node">
            <circle cx="70" cy="70" r="34" />
            <text x="70" y="66">
              UI
            </text>
            <text x="70" y="82" className="diagram__sub">
              React
            </text>
          </g>

          <g className="diagram__node diagram__node--accent">
            <circle cx="180" cy="150" r="40" />
            <text x="180" y="146">
              API
            </text>
            <text x="180" y="163" className="diagram__sub">
              Express
            </text>
          </g>

          <g className="diagram__node">
            <circle cx="290" cy="70" r="34" />
            <text x="290" y="66">
              Data
            </text>
            <text x="290" y="82" className="diagram__sub">
              MongoDB
            </text>
          </g>

          <g className="diagram__node">
            <circle cx="180" cy="250" r="30" />
            <text x="180" y="246">
              Host
            </text>
            <text x="180" y="262" className="diagram__sub">
              Cloud
            </text>
          </g>
        </svg>
      </div>
    </section>
  );
}
