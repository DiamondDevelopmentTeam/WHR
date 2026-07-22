import { Link } from "react-router-dom";
import { ArrowRight, Check, MoveRight } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { operationCards, peoTasks, serviceCards } from "../data/siteContent";
import { imagePath } from "../utils/imagePath";

const processSteps = [
  {
    number: "01",
    title: "Start with a conversation",
    text: "Tell WHR where employer administration is taking the most time or creating uncertainty."
  },
  {
    number: "02",
    title: "Clarify the right support",
    text: "Review the business needs across HR, payroll, benefits, risk, workers’ compensation, or staffing."
  },
  {
    number: "03",
    title: "Build a practical path forward",
    text: "Move ahead with an organized service approach shaped around the company’s operating needs."
  }
];

function Home() {
  useScrollReveal();

  return (
    <main>
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">Human resources. Human solutions.</p>
          <h1>Employer support that makes the complex feel manageable.</h1>
          <p className="hero-lede">
            W.H.R. Associates helps businesses handle essential HR responsibilities—from
            payroll and benefits to risk and workforce support—with practical guidance and personal service.
          </p>
          <div className="button-row">
            <Link className="button button-primary" to="/contact">
              Request a consultation <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link className="text-link" to="/services">
              Explore services <MoveRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="hero-visual" aria-label="W.H.R. Associates office in Ocala, Florida">
          <img
            src={imagePath("whr-building.webp")}
            alt="The W.H.R. Associates office building in Ocala, Florida"
            width="1360"
            height="1020"
            fetchPriority="high"
          />
          <div className="hero-caption">
            <span>Based in Ocala, Florida</span>
            <strong>Built around responsive, human support.</strong>
          </div>
        </div>
      </section>

      <section className="credibility-band scroll-reveal" aria-labelledby="credibility-title">
        <div>
          <p className="eyebrow">A steadier way to manage employer responsibilities</p>
          <h2 id="credibility-title">Your business needs an HR partner who sees the whole picture.</h2>
        </div>
        <div className="credibility-copy">
          <p>
            As a Professional Employer Organization, WHR brings essential employer services into one
            coordinated relationship. That means fewer disconnected processes and more time for leaders
            to focus on the business itself.
          </p>
          <Link className="text-link" to="/solutions">How PEO support helps <MoveRight size={18} /></Link>
        </div>
        <div className="credibility-mark">
          <img
            src={imagePath("ChamberofCombFooter.png")}
            alt="ChamberofCommerce.com A+ Rated Business, 2026–2027"
            width="300"
            height="300"
          />
          <p>Recognized as an A+ Rated Business by ChamberofCommerce.com.</p>
        </div>
      </section>

      <section className="services-editorial scroll-reveal" aria-labelledby="services-title">
        <div className="section-intro">
          <p className="eyebrow">Core services</p>
          <h2 id="services-title">One trusted relationship across the work that keeps your team running.</h2>
          <p>
            WHR combines responsive guidance with the structure businesses need to manage recurring
            employer responsibilities with greater clarity.
          </p>
        </div>

        <div className="service-list">
          {serviceCards.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link className="service-row" to={service.path} key={service.title}>
                <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="service-icon"><Icon size={23} aria-hidden="true" /></span>
                <span className="service-copy">
                  <strong>{service.title}</strong>
                  <span>{service.text}</span>
                </span>
                <ArrowRight className="service-arrow" size={20} aria-hidden="true" />
              </Link>
            );
          })}
        </div>
      </section>

      <section className="challenge-section scroll-reveal">
        <div className="challenge-image">
          <img
            src={imagePath("usingLaptop.jpg")}
            alt="A business professional coordinating work from a laptop"
            width="1920"
            height="1080"
            loading="lazy"
          />
        </div>
        <div className="challenge-content">
          <p className="eyebrow">What changes with the right partner</p>
          <h2>Less administrative drag. More room to lead.</h2>
          <p>
            WHR helps owners and managers bring order to time-consuming employer tasks while improving
            the day-to-day experience for the people who depend on those systems.
          </p>
          <div className="outcome-list">
            {operationCards.map((item) => (
              <article key={item.title}>
                <Check size={18} aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="company-section scroll-reveal">
        <div className="company-heading">
          <p className="eyebrow">The WHR approach</p>
          <h2>Professional structure, delivered personally.</h2>
        </div>
        <div className="company-copy">
          <p className="company-lede">
            W.H.R. Associates supports businesses with practical HR systems and hands-on guidance—so
            employer responsibilities feel more organized, more understandable, and less isolating.
          </p>
          <div className="company-principles">
            <p><span>01</span> Service shaped around real operating needs</p>
            <p><span>02</span> Clear guidance across connected HR responsibilities</p>
            <p><span>03</span> A human point of contact when questions arise</p>
          </div>
          <Link className="text-link" to="/solutions">Learn how WHR supports businesses <MoveRight size={18} /></Link>
        </div>
      </section>

      <section className="peo-strip scroll-reveal" aria-label="PEO service areas">
        <div>
          <p className="eyebrow">Coordinated PEO support</p>
          <h2>Connected expertise for everyday employer needs.</h2>
        </div>
        <ul>
          {peoTasks.map((task) => <li key={task.title}>{task.title}</li>)}
        </ul>
      </section>

      <section className="process-section scroll-reveal" aria-labelledby="process-title">
        <div className="section-intro">
          <p className="eyebrow">Getting started</p>
          <h2 id="process-title">A clear beginning. A practical next step.</h2>
          <p>Every relationship begins by understanding the business, the pressure points, and the support that would make the greatest difference.</p>
        </div>
        <div className="process-list">
          {processSteps.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="consultation-cta scroll-reveal">
        <div>
          <p className="eyebrow">Let’s talk about what your business needs</p>
          <h2>Bring your employer challenges into clearer focus.</h2>
        </div>
        <div>
          <p>Start a conversation about PEO services, staffing, payroll, benefits, risk, or workers’ compensation support.</p>
          <Link className="button button-light" to="/contact">Request a consultation <ArrowRight size={17} /></Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
