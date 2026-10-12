import SEO from "../../components/seo/Seo.jsx";
import { ArrowUpRight, ChevronRight } from "lucide-react";

function Home() {
  return (
    <>
      <SEO
        title="Legal Counsel"
        description="[INSERT VERIFIED HOMEPAGE META DESCRIPTION]"
        canonical="/"
      />


      <section className="hero" id="top">
        <img
          src="/legal-hero.png"
          alt="Sunlight across a modern boardroom"
          fill
          priority
          className="hero-image"
          sizes="100vw"
        />
        <div class="hero-overlay" />
        <div class="container hero-content">
          <p class="eyebrow light">INDEPENDENT COUNSEL / EST. 1998</p>
          <h1>
            Where insight
            <br />
            <em>becomes</em> influence.
          </h1>
          <p className="hero-copy">
            Strategic legal counsel for the decisions that shape businesses,
            institutions, and legacies.
          </p>
          <div className="hero-actions">
            <span className="button button-gold" href="#contact">
              Start a conversation <ArrowUpRight size={16} />
            </span>
            <h5 className="text-link light" href="#about">
              Discover our perspective <ChevronRight size={16} />
            </h5>
          </div>
        </div>
        <div className="hero-footer container">
          <span>SCROLL TO EXPLORE</span>
          <span className="line" />
          <span>01 / 04</span>
        </div>
      </section>
    </>
  );
}

export default Home;
