import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { imagePath } from "../utils/imagePath";

type StaffingPageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  cards: { title: string; text: string }[];
  employerTitle: string;
  employerText: string;
  seekerTitle: string;
  seekerText: string;
  services: { title: string; icon: React.ElementType }[];
};

function Staffing({ page }: { page: StaffingPageContent }) {
  useScrollReveal();

  return (
    <main>
      <section className="inner-hero inner-hero-staffing">
        <div className="inner-hero-copy">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
          <Link className="button button-primary" to="/contact">Discuss staffing needs <ArrowRight size={17} /></Link>
        </div>
        <div className="inner-hero-rule" aria-hidden="true"><span /></div>
      </section>

      <section className="detail-feature staffing-intro scroll-reveal">
        <div className="detail-image">
          <img src={imagePath("safetyWarehouse.jpg")} alt="Two professionals reviewing work in a warehouse" width="1917" height="1279" loading="lazy" />
        </div>
        <div className="detail-copy">
          <p className="eyebrow">Workforce support</p>
          <h2>Talent and employer needs, brought into alignment.</h2>
          <p>WHR’s staffing division connects recruitment, workforce administration, and practical employer support through a strategic partnership with BZ Resources.</p>
        </div>
      </section>

      <section className="audience-section scroll-reveal">
        <article><p className="eyebrow">Employers</p><h2>{page.employerTitle}</h2><p>{page.employerText}</p></article>
        <article><p className="eyebrow">Job seekers</p><h2>{page.seekerTitle}</h2><p>{page.seekerText}</p></article>
      </section>

      <section className="capability-section scroll-reveal">
        <div className="capability-heading">
          <p className="eyebrow">Staffing capabilities</p>
          <h2>Support for hiring, workforce coordination, and growth.</h2>
        </div>
        <div className="capability-list">
          {page.cards.map((card, index) => (
            <article className="capability-item" key={card.title}>
              <span className="capability-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="capability-copy"><strong>{card.title}</strong><span>{card.text}</span></span>
            </article>
          ))}
        </div>
      </section>

      <section className="staffing-services scroll-reveal">
        <div><p className="eyebrow">Connected services</p><h2>Where talent meets opportunity—and dependable administration.</h2></div>
        <ul>
          {page.services.map((service) => {
            const Icon = service.icon;
            return <li key={service.title}><Icon size={20} aria-hidden="true" />{service.title}</li>;
          })}
        </ul>
      </section>

      <section className="page-cta scroll-reveal">
        <div><p className="eyebrow">Staffing division</p><h2>Start with the workforce challenge in front of you.</h2><p>Talk with WHR about recruitment, staffing support, or connected employer services.</p></div>
        <Link className="button button-light" to="/contact">Contact WHR <ArrowRight size={17} /></Link>
      </section>
    </main>
  );
}

export default Staffing;
