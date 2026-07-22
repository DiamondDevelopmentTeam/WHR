import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { imagePath } from "../utils/imagePath";

type PageCard = { title: string; text: string; path?: string };

type PageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  theme: string;
  cards: PageCard[];
  visualTitle: string;
  visualText: string;
  visualImage: string;
  visualAlt: string;
  closingTitle: string;
  closing: string;
};

function ContentPage({ page }: { page: PageContent }) {
  useScrollReveal();

  return (
    <main>
      <section className={`inner-hero inner-hero-${page.theme}`}>
        <div className="inner-hero-copy">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
          <Link className="button button-primary" to="/contact">
            Talk with WHR <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <div className="inner-hero-rule" aria-hidden="true"><span /></div>
      </section>

      <section className="capability-section scroll-reveal">
        <div className="capability-heading">
          <p className="eyebrow">What this support includes</p>
          <h2>Focused help for the details that keep a business moving.</h2>
        </div>
        <div className="capability-list">
          {page.cards.map((card, index) => {
            const content = (
              <>
                <span className="capability-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="capability-copy">
                  <strong>{card.title}</strong>
                  <span>{card.text}</span>
                </span>
                {card.path && <ArrowRight size={19} aria-hidden="true" />}
              </>
            );

            return card.path ? (
              <Link className="capability-item" to={card.path} key={card.title}>{content}</Link>
            ) : (
              <article className="capability-item" key={card.title}>{content}</article>
            );
          })}
        </div>
      </section>

      <section className="detail-feature scroll-reveal">
        <div className="detail-image">
          <img src={imagePath(page.visualImage)} alt={page.visualAlt} loading="lazy" width="1360" height="1020" />
        </div>
        <div className="detail-copy">
          <p className="eyebrow">The WHR advantage</p>
          <h2>{page.visualTitle}</h2>
          <p>{page.visualText}</p>
          <p className="detail-check"><Check size={18} aria-hidden="true" /> Clear guidance</p>
          <p className="detail-check"><Check size={18} aria-hidden="true" /> Coordinated support</p>
          <p className="detail-check"><Check size={18} aria-hidden="true" /> Practical next steps</p>
        </div>
      </section>

      <section className="page-cta scroll-reveal">
        <div>
          <p className="eyebrow">{page.eyebrow}</p>
          <h2>{page.closingTitle}</h2>
          <p>{page.closing}</p>
        </div>
        <Link className="button button-light" to="/contact">
          Request a consultation <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}

export default ContentPage;
