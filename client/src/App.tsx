import { useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { contactInfo, navItems, pages, staffingPage } from "./data/siteContent";
import Home from "./pages/Home";
import ContentPage from "./pages/ContentPage";
import Staffing from "./pages/Staffing";
import Contact from "./pages/Contact";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" to="/" onClick={() => setMenuOpen(false)}>
          <img src="/images/whrlogo.gif" alt="W.H.R. Associates logo" />
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={42} /> : <Menu size={42} />}
        </button>

        <nav id="main-navigation" className={menuOpen ? "main-nav main-nav-open" : "main-nav"}>
          {navItems.map((item) => (
            <div className="nav-item" key={item.label}>
              <NavLink
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                {item.label}
                {item.children && <ChevronDown size={14} />}
              </NavLink>

              {item.children && (
                <div className="nav-dropdown">
                  {item.children.map((child) => (
                    <NavLink
                      key={child.label}
                      to={child.path}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) => (isActive ? "active-link" : "")}
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </header>

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
      </Routes>

      <footer className="site-footer">
        <div className="footer-link-stack footer-column">
          <h3>Home</h3>
          <Link to="/">Home</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/podcast">Podcast</Link>
          <Link to="/forms">Forms</Link>
          <Link to="/staffing-division">Staffing Division</Link>
          <Link to="/contact">Contact</Link>
          <a href="https://www.whrassociates.com/privacy-policy/" target="_blank" rel="noreferrer">
            Privacy Policy
          </a>
        </div>

        <div className="footer-link-stack footer-column">
          <h3>Services</h3>
          <Link to="/services/human-resources">Human Resources</Link>
          <Link to="/services/payroll-administration">Payroll Administration</Link>
          <Link to="/services/employee-benefits">Employee Benefits</Link>
          <Link to="/services/risk-mitigation">Risk Mitigation</Link>
          <Link to="/services/workers-compensation">Workers Compensation</Link>
        </div>

        <div className="footer-brand-center">
          <img className="footer-main-logo" src="/images/whrlogo.gif" alt="W.H.R. Associates logo" />

          <p>Human Resource, Human Solutions</p>

          <img
            className="footer-chamber-logo"
            src="/images/ChamberofCombFooter.png"
            alt="Chamber of Commerce"
          />
        </div>

        <div className="footer-link-stack footer-column">
          <h3>Resources</h3>
          <Link to="/resources">Brochures & Sell Sheets</Link>
          <Link to="/resources">FAQs</Link>
          <Link to="/resources">Video Library</Link>
          <Link to="/resources">Blog</Link>
          <Link to="/resources">Events & News</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>
            {contactInfo.addressLineOne}
            <br />
            {contactInfo.addressLineTwo}
          </p>

          <p>{contactInfo.phone}</p>

          {contactInfo.emails.map((email) => (
            <p key={email}>{email}</p>
          ))}

          <div className="footer-socials">
            <a
              href="https://www.facebook.com/people/WHR-Associates/100087834547877/"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              FB
            </a>
            <a
              href="https://www.instagram.com/whr_associates/"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              IG
            </a>
            <a
              href="https://www.linkedin.com/company/89790868/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              IN
            </a>
          </div>
        </div>

        <small>Copyright © 2026. All Rights Reserved.</small>
      </footer>
    </div>
  );
}

export default App;
