import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { contactInfo } from "../data/siteContent";

function Contact() {
  const [status, setStatus] = useState("");

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    interest: "PEO Services",
    message: ""
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formState)
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus(data.message || "Please check the form and try again.");
        return;
      }

      setStatus(data.message || "Thank you. Your message has been received.");

      setFormState({
        name: "",
        email: "",
        company: "",
        phone: "",
        interest: "PEO Services",
        message: ""
      });
    } catch {
      setStatus("Unable to send right now. Please try again.");
    }
  }

  return (
    <main>
      <section className="contact-page">
        <div className="contact-copy">
          <p className="section-kicker">Contact</p>
          <h1>Contact W.H.R. Associates</h1>
          <p>
            Send a message about PEO services, staffing, payroll, human resources,
            employee benefits, risk mitigation, or workers’ compensation.
          </p>

          <div className="contact-info-card">
            <p>
              <MapPin size={18} />
              {contactInfo.addressLineOne}, {contactInfo.addressLineTwo}
            </p>

            <p>
              <Phone size={18} />
              {contactInfo.phone}
            </p>

            {contactInfo.emails.map((email) => (
              <p key={email}>
                <Mail size={18} />
                {email}
              </p>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              value={formState.name}
              onChange={(event) => setFormState({ ...formState, name: event.target.value })}
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              value={formState.email}
              onChange={(event) => setFormState({ ...formState, email: event.target.value })}
              required
            />
          </label>

          <label>
            Company
            <input
              value={formState.company}
              onChange={(event) => setFormState({ ...formState, company: event.target.value })}
            />
          </label>

          <label>
            Phone
            <input
              value={formState.phone}
              onChange={(event) => setFormState({ ...formState, phone: event.target.value })}
            />
          </label>

          <label>
            Interest
            <select
              value={formState.interest}
              onChange={(event) => setFormState({ ...formState, interest: event.target.value })}
            >
              <option>PEO Services</option>
              <option>Human Resources</option>
              <option>Payroll Administration</option>
              <option>Employee Benefits</option>
              <option>Risk Mitigation</option>
              <option>Workers Compensation</option>
              <option>Staffing Division</option>
              <option>Forms</option>
            </select>
          </label>

          <label className="full-width">
            Message
            <textarea
              value={formState.message}
              onChange={(event) => setFormState({ ...formState, message: event.target.value })}
              required
            />
          </label>

          <button className="dark-button full-width" type="submit">
            Send Message
          </button>

          {status && <p className="form-status full-width">{status}</p>}
        </form>
      </section>
    </main>
  );
}

export default Contact;