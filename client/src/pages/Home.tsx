import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import {
  keyFeatures,
  operationCards,
  partnerHighlights,
  peoTasks,
  serviceCards
} from "../data/siteContent";

function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.16
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <section className="hero-original">
        <div className="hero-sheen" />
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />

        <div className="hero-inner">
          <img className="hero-logo" src="/images/whrlogo.gif" alt="W.H.R. Associates" />

          <h1>Unlock Your Business Potential With Our PEO Solutions: Let’s Grow Together!</h1>

          <div className="hero-cta-row">
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

      <section className="gold-title-band">
        <h2>Human Resource, Human Solutions</h2>
      </section>

      <section className="peo-showcase section-white-marble scroll-reveal">
        <div className="peo-panel">
          <div className="peo-left">
            <p className="section-kicker">What is a PEO?</p>
            <h2>What is a PEO?</h2>

            <p className="peo-large-copy">
              A Professional Employer Organization (PEO) is a company that provides comprehensive
              HR solutions to businesses, managing tasks like:
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
              <p>At the same time, the PEO handles the administrative burdens.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="partner-section section-gold-marble scroll-reveal">
        <div className="partner-copy">
          <p className="section-kicker">Your Partner in Time-Saving, Game-Changing HR Solutions</p>
          <h2>Your partner in time-saving, game-changing HR solutions.</h2>
          <p>
            Transform the way you manage human resources with W.H.R. Associates PEO,
            the ultimate solution for streamlining your HR process and driving focus back
            to what matters most: your employees.
          </p>
          <p>
            Experience the power of our full-service HR solutions and unlock the potential
            of your business.
          </p>

          <div className="partner-photo-card">
            <img src="/images/safetyWarehouse.jpg" alt="Warehouse safety support" />
          </div>
        </div>

        <div className="partner-badges">
          {partnerHighlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <article key={item.title} style={{ animationDelay: `${index * 110}ms` }}>
                <span>
                  <Icon size={26} />
                </span>
                <p>{item.title}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="experience-section section-white-marble scroll-reveal">
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
            finesse, catering to the specific needs of your industry and your unique business stage.
          </p>

          <h3>Key Features</h3>

          <div className="square-grid">
            {keyFeatures.map((feature, index) => (
              <article key={feature.title} style={{ animationDelay: `${index * 100}ms` }}>
                <h4>{feature.title}</h4>
              </article>
            ))}
          </div>
        </div>

        <div className="experience-image-card">
          <div className="experience-image-frame">
            <img
              className="experience-building-image"
              src="/images/whrBuilding.png"
              alt="W.H.R. Associates building"
            />
          </div>
        </div>
      </section>

      <section className="operations-section section-abstract-gold scroll-reveal">
        <div className="operations-copy-block">
          <p className="section-kicker">Reclaim Your Time and Energize Your Business</p>
          <h2>Reclaim your time and energize your business.</h2>
          <p>
            Introducing W.H.R. Associates PEO, a comprehensive Professional Employer
            Organization meticulously crafted for business leaders who want to maximize
            their impact and minimize administrative burdens.
          </p>

          <Link className="mini-gold-button" to="/solutions">
            Learn More
          </Link>
        </div>

        <div className="operations-panel">
          <p className="section-kicker">Revolutionize Your Operations With Premier HR Management</p>
          <h2>Revolutionize your operations with premier HR management.</h2>
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
      </section>

      <section className="home-services-preview section-white-marble scroll-reveal">
        <p className="section-kicker">Services</p>
        <h2>Key Features of Services</h2>
        <p className="services-preview-copy">
          With W.H.R. Associates PEO, businesses can unlock the full potential of their
          workforce through technology-backed HR support and human expertise.
        </p>

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