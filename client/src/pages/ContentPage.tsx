import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

type PageCard = {
  title: string;
  text: string;
};

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
      <section className={`page-hero page-hero-${page.theme} section-line`}>
        <div>
          <div className="page-hero-brand">
            <img src="/images/whrlogo.gif" alt="W.H.R. Associates logo" />
            <span>Human Resource, Human Solutions</span>
          </div>

          <p className="section-kicker">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
        </div>
      </section>

      <section className="page-card-section section-white-marble section-line scroll-reveal">
        <div className="page-card-grid">
          {page.cards.map((card, index) => (
            <article key={card.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{card.title}</h2>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-detail-section section-gold-marble section-line scroll-reveal">
        <div className="page-detail-copy">
          <p className="section-kicker">WHR Advantage</p>
          <h2>{page.visualTitle}</h2>
          <p>{page.visualText}</p>
        </div>

        <div className="page-detail-image-card">
          <img src={page.visualImage} alt={page.visualAlt} />
        </div>
      </section>

      <section className="page-closing section-line scroll-reveal">
        <div>
          <p className="section-kicker">{page.eyebrow}</p>
          <h2>{page.closingTitle}</h2>
          <p>{page.closing}</p>
        </div>

        <Link className="dark-button" to="/contact">
          Contact WHR
          <ChevronRight size={18} />
        </Link>
      </section>
    </main>
  );
}

export default ContentPage;
