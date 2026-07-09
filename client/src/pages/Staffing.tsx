import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

type StaffingCard = {
  title: string;
  text: string;
};

type StaffingService = {
  title: string;
  icon: React.ElementType;
};

type StaffingPageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  cards: StaffingCard[];
  employerTitle: string;
  employerText: string;
  seekerTitle: string;
  seekerText: string;
  services: StaffingService[];
};

function Staffing({ page }: { page: StaffingPageContent }) {
  return (
    <main>
      <section className="page-hero staffing-hero">
        <div>
          <p className="section-kicker">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
        </div>
      </section>

      <section className="page-card-section">
        <div className="page-card-grid four-column">
          {page.cards.map((card) => (
            <article key={card.title}>
              <span>Key Feature</span>
              <h2>{card.title}</h2>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split-info-section">
        <article>
          <p className="section-kicker">Employers</p>
          <h2>{page.employerTitle}</h2>
          <p>{page.employerText}</p>
        </article>

        <article>
          <p className="section-kicker">Job Seekers</p>
          <h2>{page.seekerTitle}</h2>
          <p>{page.seekerText}</p>
        </article>
      </section>

      <section className="core-services-section">
        <p className="section-kicker">Our Core Services</p>
        <h2>Where talent meets opportunity.</h2>

        <div className="core-services-grid">
          {page.services.map((service) => {
            const Icon = service.icon;

            return (
              <article key={service.title}>
                <Icon size={30} />
                <h3>{service.title}</h3>
              </article>
            );
          })}
        </div>

        <Link className="dark-button" to="/contact">
          Contact WHR
          <ChevronRight size={18} />
        </Link>
      </section>
    </main>
  );
}

export default Staffing;