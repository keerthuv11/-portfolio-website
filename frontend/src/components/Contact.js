import React, { useState } from "react";
import { sendMessage } from "../api";
import profile from "../data/profile";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await sendMessage(form);
      setStatus("sent");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="section__heading">
        <h2>Contact</h2>
      </div>
      <div className="contact__grid">
        <div className="contact__details">
          <p>
            Open to internships, collaborative projects, and opportunities to
            learn and build with others. Reach out any time.
          </p>
          <ul>
            <li>
              <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
            </li>
            <li>
              <a href={profile.contact.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={profile.contact.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows="4"
              required
              value={form.message}
              onChange={handleChange}
            />
          </label>
          <button className="btn btn--primary" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
          {status === "sent" && <p className="form__note">Message sent — thank you!</p>}
          {status === "error" && (
            <p className="form__note form__note--error">
              Couldn't reach the server. You can email me directly instead.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
