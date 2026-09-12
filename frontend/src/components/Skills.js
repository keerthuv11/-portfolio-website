import React, { useEffect, useState } from "react";
import { getSkills } from "../api";
import { fallbackSkills } from "../data/fallbackData";

export default function Skills() {
  const [skills, setSkills] = useState(fallbackSkills);

  useEffect(() => {
    getSkills()
      .then((res) => {
        if (res.data && res.data.length) setSkills(res.data);
      })
      .catch(() => {
        // API not reachable yet — the fallback list above is already shown.
      });
  }, []);

  const grouped = skills.reduce((acc, skill) => {
    acc[skill.category] = acc[skill.category] || [];
    acc[skill.category].push(skill.name);
    return acc;
  }, {});

  return (
    <section className="section skills" id="skills">
      <div className="section__heading">
        <h2>Skills</h2>
      </div>
      <div className="skills__groups">
        {Object.entries(grouped).map(([category, names]) => (
          <div className="skills__group" key={category}>
            <h3>{category}</h3>
            <ul className="skills__tags">
              {names.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
