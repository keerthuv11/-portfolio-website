import React from "react";
import profile from "../data/profile";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section__heading">
        <h2>About</h2>
      </div>
      <div className="about__grid">
        <div className="about__bio">
          {profile.bio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <div className="about__facts">
          <div className="fact">
            <span className="fact__label">Institution</span>
            <span className="fact__value">{profile.education.institution}</span>
          </div>
          <div className="fact">
            <span className="fact__label">Degree</span>
            <span className="fact__value">{profile.education.degree}</span>
          </div>
          <div className="fact">
            <span className="fact__label">Year</span>
            <span className="fact__value">{profile.education.year}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
