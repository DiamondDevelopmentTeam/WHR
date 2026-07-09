import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import {
  keyFeatures,
  operationCards,
  partnerHighlights,
  peoTasks,
  serviceCards
} from "../data/siteContent";
const imagePath = (fileName: string) => `${import.meta.env.BASE_URL}images/${fileName}`;

function Home() {
  useScrollReveal();

  return (
    <main>
      <section className="hero-original">
        <div className="hero-sheen" />

        <div className="hero-inner hero-left-layout">
          <img className="hero-logo hero-logo-left" src={imagePath("whrlogo.gif")} alt="W.H.R. Associates" />

          <p className="hero-kicker">Human Resource, Human Solutions</p>

          <h1>Unlock Your Business Potential With Our PEO Solutions: Let’s Grow Together!</h1>

          <p className="hero-subtitle">
            Full-service PEO support for human resources, payroll administration, benefits,
            risk mitigation, workers’ compensation, and staffing solutions.
          </p>

          <div className="hero-cta-row hero-cta-left">
            <Link className="hero-primary-link" to="/contact">
              Contact WHR
              <ChevronRight size={18} />
            </Link>

            <Link className="hero-secondary-link" to="/solutions">
              View Solutions
            </Link>
          </div>
        </div>
      </section>

      <section className="gold-title-band section-line">
        <h2>Human Resource, Human Solutions</h2>
      </section>

      <section className="peo-showcase section-white-marble section-line scroll-reveal">
        <div className="peo-panel">
          <div className="peo-left">
            <p className="section-kicker">What is a PEO?</p>
            <h2>What is a PEO?</h2>

            <p className="peo-large-copy">
              A Professional Employer Organization, or PEO, provides comprehensive HR solutions
              to businesses. WHR helps companies manage essential employer tasks while leaders
              focus on their core operations.
            </p>

            <div className="peo-icon-row">
              {peoTasks.map((task, index) => {
                const Icon = task.icon;

                return (
                  <article
                    key={task.title}
                    className="peo-icon-item"
                    style={{ animationDelay: `${index * 90}ms` }}
                  >
                    <Icon size={54} />
                    <h3>{task.title}</h3>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="peo-right">
            <div className="peo-right-overlay">
              <p>Allowing companies to focus on their core operations.</p>
              <p>At the same time, the PEO handles administrative burdens with structure and care.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="partner-section section-gold-marble section-line scroll-reveal">
        <div className="partner-copy">
          <p className="section-kicker">Your Partner in Time-Saving, Game-Changing HR Solutions</p>
          <h2>Your Partner in Time-Saving, Game-Changing HR Solutions.</h2>

          <p>
            Transform the way you manage human resources with W.H.R. Associates PEO,
            the ultimate solution for streamlining HR processes and driving focus back
            to what matters most: your employees.
          </p>

          <p>
            Experience the power of full-service HR support and unlock the potential
            of your business with a partner built around service, clarity, and growth.
          </p>

          <div className="partner-photo-card">
            <img src={imagePath("safetyWarehouse.jpg")} alt="Warehouse safety support" />
          </div>
        </div>

        <div className="partner-badges partner-floating-grid">
          {partnerHighlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`partner-badge partner-badge-${index + 1}`}
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <span>
                  <Icon size={30} />
                </span>
                <p>{item.title}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="experience-section section-white-marble section-line scroll-reveal">
        <div className="experience-copy">
          <p className="section-kicker">Revolutionize Your HR Experiences</p>
          <h2>Revolutionize Your HR Experiences</h2>

          <p>
            Navigating the complexities of human resources can be both time-consuming and
            overwhelming, but with W.H.R. Associates PEO, stepping into the future of HR
            optimization has never been easier.
          </p>

          <p>
            Embark on a hassle-free journey where bespoke HR solutions are delivered with
            finesse, catering to the specific needs of your industry and unique business stage.
          </p>

          <h3>Key Features</h3>

          <p className="feature-intro">
            Purpose-built support for employers who want cleaner systems, stronger guidance,
            and more time to focus on the business.
          </p>

          <div className="feature-luxury-grid">
            {keyFeatures.map((feature, index) => (
              <article key={feature.title} style={{ animationDelay: `${index * 100}ms` }}>
                <span className="feature-number">0{index + 1}</span>
                <h4>{feature.title}</h4>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="experience-image-card">
          <div className="experience-image-frame">
            <img
              className="experience-building-image"
              src={imagePath("whrBuilding.png")}
              alt="W.H.R. Associates building"
            />
          </div>
        </div>
      </section>

      <section className="operations-section section-abstract-gold section-line scroll-reveal">
        <div className="operations-shell">
          <div className="operations-copy-block">
            <p className="section-kicker">Reclaim Your Time and Energize Your Business</p>
            <h2>Reclaim Your Time and Energize Your Business.</h2>

            <p>
              Introducing W.H.R. Associates PEO, a comprehensive Professional Employer
              Organization meticulously crafted for business leaders who want to maximize
              their impact and minimize administrative burdens.
            </p>

            <p>
              WHR helps simplify the heavy lifting of HR, payroll, benefits, risk management,
              and workers’ compensation so your business can move with more confidence.
            </p>

            <Link className="mini-gold-button" to="/solutions">
              Learn More
            </Link>
          </div>

          <div className="operations-panel">
            <p className="section-kicker">Premier HR Management</p>
            <h2>Revolutionize Your Operations With Premier HR Management.</h2>

            <p>
              With W.H.R. Associates PEO, you can wave goodbye to the endless hours spent
              on human resources administration. Our support is a beacon of optimized efficiency,
              allowing you to:
            </p>

            <div className="operations-card-row">
              {operationCards.map((card, index) => (
                <article key={card.title} style={{ animationDelay: `${index * 120}ms` }}>
                  <h3>{card.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-services-preview section-white-marble section-line scroll-reveal">
        <div className="services-header-row">
          <div>
            <p className="section-kicker">Services</p>
            <h2>Key Features of Services</h2>
          </div>

          <p className="services-preview-copy">
            With W.H.R. Associates PEO, businesses can unlock the full potential of their
            workforce through technology-backed HR support and human expertise.
          </p>
        </div>

        <div className="service-preview-grid">
          {serviceCards.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link to={service.path} key={service.title} style={{ animationDelay: `${index * 90}ms` }}>
                <Icon size={30} />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span>
                  View Page <ChevronRight size={16} />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Home;
