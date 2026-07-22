import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { contactInfo } from "../data/siteContent";
import { useScrollReveal } from "../hooks/useScrollReveal";

const initialFormState = { name: "", email: "", company: "", phone: "", interest: "PEO Services", message: "" };

function Contact() {
  useScrollReveal();
  const [status, setStatus] = useState("");
  const [statusKind, setStatusKind] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formState, setFormState] = useState(initialFormState);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Sending your message…");
    setStatusKind("sending");

    try {
      const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT || "/api/contact";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState)
      });
      const data = await response.json();

      if (!response.ok) {
        setStatus(data.message || "Please review the form and try again.");
        setStatusKind("error");
        return;
      }

      setStatus(data.message || "Thank you. Your message has been received.");
      setStatusKind("success");
      setFormState(initialFormState);
    } catch {
      setStatus("Your message could not be sent. Please call or email WHR instead.");
      setStatusKind("error");
    }
  }

  return (
    <main>
      <section className="inner-hero inner-hero-contact">
        <div className="inner-hero-copy">
          <p className="eyebrow">Contact W.H.R. Associates</p>
          <h1>Let’s make the next step clearer.</h1>
          <p>Start a conversation about PEO services, staffing, payroll, human resources, benefits, risk, or workers’ compensation.</p>
        </div>
        <div className="inner-hero-rule" aria-hidden="true"><span /></div>
      </section>

      <section className="contact-section scroll-reveal">
        <div className="contact-details">
          <p className="eyebrow">Ocala, Florida</p>
          <h2>Reach the WHR team directly.</h2>
          <p>Choose the contact method that works best, or use the form to share a little more about what your business needs.</p>
          <div className="contact-methods">
            <a href={`tel:${contactInfo.phone.replace(/[^\d+]/g, "")}`}><Phone size={20} aria-hidden="true" /><span><small>Phone</small>{contactInfo.phone}</span></a>
            {contactInfo.emails.map((email) => (
              <a href={`mailto:${email}`} key={email}><Mail size={20} aria-hidden="true" /><span><small>Email</small>{email}</span></a>
            ))}
            <div><MapPin size={20} aria-hidden="true" /><span><small>Office</small>{contactInfo.addressLineOne}<br />{contactInfo.addressLineTwo}</span></div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-heading full-width"><p className="eyebrow">Tell us what you need</p><h2>Request a consultation</h2></div>

          <label htmlFor="contact-name">Name <span aria-hidden="true">*</span>
            <input id="contact-name" name="name" autoComplete="name" value={formState.name} onChange={(event) => setFormState({ ...formState, name: event.target.value })} required minLength={2} />
          </label>
          <label htmlFor="contact-email">Email <span aria-hidden="true">*</span>
            <input id="contact-email" name="email" type="email" autoComplete="email" value={formState.email} onChange={(event) => setFormState({ ...formState, email: event.target.value })} required />
          </label>
          <label htmlFor="contact-company">Company
            <input id="contact-company" name="company" autoComplete="organization" value={formState.company} onChange={(event) => setFormState({ ...formState, company: event.target.value })} />
          </label>
          <label htmlFor="contact-phone">Phone
            <input id="contact-phone" name="phone" type="tel" autoComplete="tel" value={formState.phone} onChange={(event) => setFormState({ ...formState, phone: event.target.value })} />
          </label>
          <label className="full-width" htmlFor="contact-interest">Area of interest
            <select id="contact-interest" name="interest" value={formState.interest} onChange={(event) => setFormState({ ...formState, interest: event.target.value })}>
              <option>PEO Services</option><option>Human Resources</option><option>Payroll Administration</option><option>Employee Benefits</option><option>Risk Mitigation</option><option>Workers Compensation</option><option>Staffing Division</option><option>Forms</option>
            </select>
          </label>
          <label className="full-width" htmlFor="contact-message">How can WHR help? <span aria-hidden="true">*</span>
            <textarea id="contact-message" name="message" value={formState.message} onChange={(event) => setFormState({ ...formState, message: event.target.value })} required minLength={10} />
          </label>
          <button className="button button-primary full-width" type="submit" disabled={statusKind === "sending"}>
            {statusKind === "sending" ? "Sending…" : <>Send message <Send size={16} aria-hidden="true" /></>}
          </button>
          {status && <p className={`form-status form-status-${statusKind} full-width`} role="status" aria-live="polite">{status}</p>}
        </form>
      </section>
    </main>
  );
}

export default Contact;
