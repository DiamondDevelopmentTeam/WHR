import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

type PageCard = {
  title: string;
  text: string;
};

type PageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  cards: PageCard[];
  closingTitle: string;
  closing: string;
};

function ContentPage({ page }: { page: PageContent }) {
  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="section-kicker">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
        </div>
      </section>

      <section className="page-card-section">
        <div className="page-card-grid">
          {page.cards.map((card) => (
            <article key={card.title}>
              <span>Learn More</span>
              <h2>{card.title}</h2>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-closing">
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