import { useEffect, useState, type CSSProperties } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { contactInfo, navItems, pages, serviceCards, staffingPage } from "./data/siteContent";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import ContentPage from "./pages/ContentPage";
import Staffing from "./pages/Staffing";
import Contact from "./pages/Contact";
import { imagePath, imageUrl } from "./utils/imagePath";

type TextureVariables = CSSProperties & Record<`--texture-${string}`, string>;

const textureVariables: TextureVariables = {
  "--texture-white-marble": imageUrl("white-marble-texture.webp"),
  "--texture-soft-gold-marble": imageUrl("soft-gold-marble-texture.webp"),
  "--texture-gold-stone": imageUrl("gold-stone-texture.webp"),
  "--texture-gold-brush": imageUrl("gold-brush-texture.webp")
};

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const visibleNavItems = navItems.filter((item) =>
    ["Home", "Solutions", "Services", "Resources", "Staffing Division"].includes(item.label)
  );

  return (
    <header className={`site-header${compact ? " is-compact" : ""}`}>
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="W.H.R. Associates home">
          <img src={imagePath("whr-logo.png")} alt="W.H.R. Associates" width="1000" height="319" />
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav id="main-navigation" className={`main-nav${menuOpen ? " main-nav-open" : ""}`} aria-label="Main navigation">
          {visibleNavItems.map((item) => (
            <div className="nav-item" key={item.label}>
              <NavLink to={item.path} end={item.path === "/"}>
                {item.label}
                {item.children && <ChevronDown size={15} aria-hidden="true" />}
              </NavLink>

              {item.children && (
                <div className="nav-dropdown" aria-label={`${item.label} links`}>
                  {item.children.map((child) => (
                    <NavLink key={child.label} to={child.path}>
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link className="nav-contact" to="/contact">
            Request a consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  const [primaryEmail] = contactInfo.emails;

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <Link to="/" aria-label="W.H.R. Associates home">
            <img src={imagePath("whr-logo.png")} alt="W.H.R. Associates" width="1000" height="319" />
          </Link>
          <p>
            Practical PEO and workforce support for employers navigating HR, payroll,
            benefits, risk, and workers’ compensation.
          </p>
          <div className="footer-socials" aria-label="Social media">
            <a href="https://www.facebook.com/people/WHR-Associates/100087834547877/" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.instagram.com/whr_associates/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/company/89790868/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="footer-nav-group">
          <h2>Navigate</h2>
          <Link to="/solutions">Solutions</Link>
          <Link to="/staffing-division">Staffing division</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/podcast">Podcast</Link>
          <Link to="/forms">Forms</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-nav-group footer-services">
          <h2>Services</h2>
          {serviceCards.map((service) => (
            <Link to={service.path} key={service.path}>{service.title}</Link>
          ))}
        </div>

        <div className="footer-contact-block">
          <h2>Start a conversation</h2>
          <a href={`tel:${contactInfo.phone.replace(/[^\d+]/g, "")}`}>{contactInfo.phone}</a>
          <a href={`mailto:${primaryEmail}`}>{primaryEmail}</a>
          <address>
            {contactInfo.addressLineOne}<br />
            {contactInfo.addressLineTwo}
          </address>
          <img
            className="footer-certification"
            src={imagePath("ChamberofCombFooter.png")}
            alt="ChamberofCommerce.com A+ Rated Business, 2026–2027"
            width="300"
            height="300"
            loading="lazy"
          />
        </div>
      </div>

      <div className="footer-legal">
        <span>© {new Date().getFullYear()} W.H.R. Associates. All rights reserved.</span>
        <a href="https://www.whrassociates.com/privacy-policy/" target="_blank" rel="noreferrer">Privacy policy</a>
      </div>
    </footer>
  );
}

function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">404</p>
      <h1>This page could not be found.</h1>
      <p>The page may have moved. Return home or contact WHR for assistance.</p>
      <div className="button-row">
        <Link className="button button-primary" to="/">Return home</Link>
        <Link className="text-link" to="/contact">Contact WHR</Link>
      </div>
    </main>
  );
}

function App() {
  return (
    <div className="site-shell" style={textureVariables}>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <ScrollToTop />
      <Header />

      <div id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<ContentPage page={pages.solutions} />} />
          <Route path="/services" element={<ContentPage page={pages.services} />} />
          <Route path="/services/human-resources" element={<ContentPage page={pages.humanResources} />} />
          <Route path="/services/payroll-administration" element={<ContentPage page={pages.payroll} />} />
          <Route path="/services/employee-benefits" element={<ContentPage page={pages.employeeBenefits} />} />
          <Route path="/services/risk-mitigation" element={<ContentPage page={pages.riskMitigation} />} />
          <Route path="/services/workers-compensation" element={<ContentPage page={pages.workersCompensation} />} />
          <Route path="/resources" element={<ContentPage page={pages.resources} />} />
          <Route path="/podcast" element={<ContentPage page={pages.podcast} />} />
          <Route path="/staffing-division" element={<Staffing page={staffingPage} />} />
          <Route path="/forms" element={<ContentPage page={pages.forms} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
