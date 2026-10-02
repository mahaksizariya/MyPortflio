import { createElement, useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Blend,
  Check,
  Code2,
  Instagram,
  Linkedin,
  Layers3,
  Mail,
  Menu,
  MoveUpRight,
  Palette,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import mahakPhoto from "./assets/mahak.jpg";
import lucentLogo from "./assets/lucentlogo.png";

const LINKEDIN_URL = "https://www.linkedin.com/in/mahak-sizariya-b55820229/";
const INSTAGRAM_URL = "https://www.instagram.com/lucent__studio1/?hl=en";
const CLIENT_WEBSITE_URL = "https://rkgdigitalstudio.vercel.app/";
const CONTACT_EMAIL = "lucentdigitalstudio@gmail.com";
const CONTACT_PHONE = "+919118415434";

const projects = [
  {
    number: "01",
    name: "RKG Digital",
    category: "My first client",
    type: "Freelance website project",
    style: "client",
    url: CLIENT_WEBSITE_URL,
  },
  {
    number: "02",
    name: "Petal Theory",
    category: "Florist & lifestyle",
    type: "E-commerce concept",
    style: "petal",
  },
  {
    number: "03",
    name: "Form & Field",
    category: "Architecture & interiors",
    type: "Studio website concept",
    style: "form",
  },
];

const services = [
  {
    icon: Palette,
    number: "01",
    title: "Visual identity",
    text: "A thoughtful visual direction that makes your brand feel like you, at first glance.",
  },
  {
    icon: Layers3,
    number: "02",
    title: "Website design",
    text: "Distinctive, easy-to-use website designs made to turn a first visit into a lasting impression.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Web development",
    text: "Responsive, polished websites that feel just as lovely on a phone as they do on a big screen.",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    ["Work", "#work"],
    ["Services", "#services"],
    ["About", "#about"],
  ];

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Lucent Digital Studio home">
        <img className="brand-logo" src={lucentLogo} alt="Lucent Digital Studio" />
      </a>

      <button
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        {isOpen ? <X size={21} /> : <Menu size={21} />}
      </button>

      <nav className={`main-nav${isOpen ? " is-open" : ""}`} aria-label="Main navigation">
        {links.map(([label, href]) => (
          <a href={href} key={label} onClick={() => setIsOpen(false)}>
            {label}
          </a>
        ))}
        <div className="nav-socials" aria-label="Social profiles">
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram size={16} />
          </a>
        </div>
        <a className="nav-cta" href="#contact" onClick={() => setIsOpen(false)}>
          Let&apos;s talk <ArrowUpRight size={15} />
        </a>
      </nav>
    </header>
  );
}

function ProjectPreview({ style }) {
  if (style === "client") {
    return (
      <div className="preview-canvas client-canvas">
        <div className="browser-bar">
          <span /><span /><span />
          <span className="browser-url">rkgdigitalstudio.vercel.app</span>
        </div>
        <div className="client-site">
          <div className="client-nav">
            <span>RKG <i>DIGITAL</i></span>
            <span>ABOUT&nbsp;&nbsp; SERVICES&nbsp;&nbsp; OUR WORK&nbsp;&nbsp; CONTACT</span>
            <span>↗</span>
          </div>
          <div className="client-hero">
            <span className="client-eyebrow"><span /> CREATIVE DIGITAL STUDIO</span>
            <p>CREATE.<br /><i>PROMOTE.</i><br />GROW.</p>
            <span className="client-intro">BUILDING BRANDS &amp; DIGITAL EXPERIENCES<br />MADE TO MOVE PEOPLE.</span>
            <div className="client-orb" />
            <div className="client-cta">LET&apos;S WORK TOGETHER ↗</div>
          </div>
        </div>
      </div>
    );
  }

  if (style === "sunday") {
    return (
      <div className="preview-canvas sunday-canvas">
        <div className="browser-bar">
          <span /><span /><span />
          <span className="browser-url">sundayritual.co</span>
        </div>
        <div className="sunday-site">
          <div className="preview-nav">
            <span>SUNDAY RITUAL</span>
            <span>MENU&nbsp;&nbsp; OUR STORY&nbsp;&nbsp; VISIT</span>
            <span>✳</span>
          </div>
          <div className="sunday-hero">
            <div className="sunday-stamp">YOUR NEW<br />HAPPY PLACE</div>
            <span className="sunday-eyebrow">SLOW MORNINGS, SERVED DAILY</span>
            <p>Make room<br />for <i>little</i><br />pleasures.</p>
            <span className="preview-button">FIND YOUR TABLE <ArrowUpRight size={12} /></span>
            <div className="coffee-cup" aria-hidden="true"><span>sr</span></div>
            <span className="sunday-note">GOOD COFFEE.<br />GOOD COMPANY.</span>
          </div>
        </div>
      </div>
    );
  }

  if (style === "petal") {
    return (
      <div className="preview-canvas petal-canvas">
        <div className="browser-bar">
          <span /><span /><span />
          <span className="browser-url">petaltheory.shop</span>
        </div>
        <div className="petal-site">
          <div className="petal-topline">COMPLIMENTARY DELIVERY ON ORDERS OVER ₹1,500</div>
          <div className="petal-nav"><span>PETAL<br />THEORY</span><span>FLOWERS&nbsp;&nbsp; JOURNAL&nbsp;&nbsp; ABOUT</span><span>BAG (0)</span></div>
          <div className="petal-hero">
            <div className="petal-flower" aria-hidden="true"><span>✳</span></div>
            <div className="petal-copy">
              <span>FOR THE BEAUTIFULLY ORDINARY</span>
              <p>Flowers for<br /><i>feeling.</i></p>
              <span className="petal-link">FIND YOUR BUNCH <ArrowRight size={12} /></span>
            </div>
            <span className="petal-side-note">GROWN WITH FEELING · ARRANGED WITH INTENTION</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="preview-canvas form-canvas">
      <div className="browser-bar">
        <span /><span /><span />
        <span className="browser-url">formandfield.in</span>
      </div>
      <div className="form-site">
        <div className="form-nav"><span>FORM & FIELD</span><span>WORK&nbsp;&nbsp; STUDIO&nbsp;&nbsp; NOTES</span><span>LET&apos;S TALK ↗</span></div>
        <div className="form-hero">
          <span className="form-eyebrow">INDEPENDENT SPACES, THOUGHTFULLY MADE</span>
          <p>Space to<br /><i>become.</i></p>
          <span className="form-number">ARCHITECTURE<br />&nbsp;INTERIORS<br />&nbsp;&nbsp;OBJECTS</span>
          <div className="arch-shape arch-one" />
          <div className="arch-shape arch-two" />
          <div className="form-caption">A STUDY IN LIGHT, MATERIAL<br />AND EVERYDAY LIVING.</div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <div className="availability">
          <span className="availability-dot" />
          INDEPENDENT DESIGNER &amp; DEVELOPER
        </div>
        <h1>
          I make the<br />
          internet feel<br />
          <span>a little more</span><br />
          <span className="hero-last-line">human.</span>
        </h1>
        <p className="hero-intro">
          Hey, I&apos;m <strong>Mahak Sizariya</strong> — founder of Lucent Digital Studio.
          I design and build thoughtful websites for people with a story to tell.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#work">
            Explore my work <ArrowDownRight size={17} />
          </a>
          <a className="text-link" href="#about">A little about me <ArrowDown size={15} /></a>
        </div>
      </div>

      <div className="hero-art" aria-label="Abstract illustration celebrating creative web design">
        <div className="art-sun" />
        <div className="art-card art-card-back">
          <span>IDEAS MADE VISIBLE</span>
          <div className="art-grid"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
        </div>
        <div className="art-orbit orbit-one" />
        <div className="art-orbit orbit-two" />
        <div className="art-flower"><span>✳</span></div>
        <div className="art-note"><Sparkles size={15} /> GOOD DESIGN<br />IS A FEELING.</div>
        <div className="art-card art-card-front">
          <div className="art-window"><i /><i /><i /></div>
          <span>YOUR NEXT<br /><em>great idea.</em></span>
          <div className="art-card-footer"><span>DESIGN · BUILD · BLOOM</span><ArrowUpRight size={14} /></div>
        </div>
        <div className="art-label">A LITTLE BIT OF LUCENT MAGIC</div>
        <div className="art-spark art-spark-one">✳</div>
        <div className="art-spark art-spark-two">✳</div>
      </div>

      <div className="hero-bottom">
        <span>DESIGN-LED. PEOPLE-FIRST. ALWAYS CURIOUS.</span>
        <a href="#work" aria-label="Scroll to selected work"><ArrowDown size={16} /></a>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="work-section" id="work">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <span className="eyebrow"><span>01</span> A FEW THINGS I&apos;VE DREAMED UP</span>
            <h2>Small ideas.<br /><i>Big feelings.</i></h2>
          </div>
          <p>Every good website starts with a feeling. Here are a few little worlds I&apos;ve designed from scratch.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.style}`} key={project.number}>
              {project.url ? (
                <a className="project-visual" href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name} live website`}>
                  <ProjectPreview style={project.style} />
                  <span className="concept-tag">LIVE CLIENT PROJECT ↗</span>
                </a>
              ) : (
                <div className="project-visual">
                  <ProjectPreview style={project.style} />
                  <span className="concept-tag">INDEPENDENT CONCEPT</span>
                </div>
              )}
              <div className="project-details">
                <span className="project-number">{project.number} / {project.category}</span>
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name} live website`}>
                    <ArrowUpRight className="project-arrow" size={19} />
                  </a>
                ) : <ArrowUpRight className="project-arrow" size={19} />}
                <h3>{project.name}</h3>
                <span className="project-type">{project.type}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="section-wrap">
        <div className="section-heading services-heading">
          <div>
            <span className="eyebrow"><span>02</span> HOW I CAN HELP</span>
            <h2>From “what if?”<br />to <i>“that&apos;s it.”</i></h2>
          </div>
          <p>One creative partner for the whole journey — from the first scribble to your new favourite corner of the internet.</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.number}>
              <span className="service-number">{service.number}</span>
              <span className="service-icon">
                {createElement(service.icon, { size: 22, strokeWidth: 1.6 })}
              </span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ArrowUpRight className="service-arrow" size={19} />
            </article>
          ))}
        </div>
        <div className="service-footnote"><Blend size={15} /> GOOD THINGS HAPPEN WHEN STRATEGY MEETS A LITTLE SPARK.</div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-decoration" aria-hidden="true"><span>✳</span></div>
      <div className="section-wrap about-grid">
        <div className="about-mark">
          <img
            className="about-photo"
            src={mahakPhoto}
            alt="Mahak Sizariya, founder of Lucent Digital Studio"
          />
          <span className="about-mark-caption">A MIND FOR DETAILS.<br />A HEART FOR THE BIG PICTURE.</span>
        </div>
        <div className="about-copy">
          <span className="eyebrow"><span>03</span> THE PERSON BEHIND THE PIXELS</span>
          <h2>Hi, I&apos;m Mahak.<br /><i>Lovely to meet you.</i></h2>
          <p>
            I&apos;m the founder of Lucent Digital Studio, where I help small businesses
            and big-hearted brands find their place online. I believe the best websites
            feel effortless — even when every detail is considered.
          </p>
          <p>
            My approach is collaborative, curious, and rooted in making things that
            feel like <em>you</em>. No copy-paste templates. No design for design&apos;s sake.
            Just good ideas, made real.
          </p>
          <div className="about-signoff"><span>With care,</span><strong>Mahak  Sizariya<Sparkles size={16} /></strong></div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-wrap contact-wrap">
        <span className="eyebrow"><span>04</span> YOUR TURN</span>
        <h2>Got a good feeling<br />about <i>this?</i></h2>
        <p>Tell me about the thing you can&apos;t stop thinking about. I&apos;d love to help bring it to life.</p>
        <div className="contact-actions">
          <a className="button button-light" href={`mailto:${CONTACT_EMAIL}?subject=Let%27s%20make%20something%20good`}>
            Email me <Mail size={16} />
          </a>
          <a className="contact-phone" href={`tel:${CONTACT_PHONE}`}>
            <Phone size={15} /> +91 91184 15434
          </a>
        </div>
        <a className="contact-linkedin" href={LINKEDIN_URL} target="_blank" rel="noreferrer">
          Or connect with me on LinkedIn <MoveUpRight size={15} />
        </a>
        <span className="contact-note"><Check size={14} /> OPEN FOR SELECT FREELANCE PROJECTS</span>
        <div className="contact-doodle" aria-hidden="true">✳</div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <a className="brand footer-brand" href="#home" aria-label="Lucent Digital Studio home">
        <img className="brand-logo" src={lucentLogo} alt="Lucent Digital Studio" />
      </a>
      <span className="footer-credit">INDEPENDENTLY MADE WITH <span>♥</span> BY MAHAK SIZARIYA</span>
      <a className="back-to-top" href="#home">BACK TO THE TOP <ArrowUpRight size={14} /></a>
      <div className="footer-socials" aria-label="Social profiles">
        <a className="footer-social-link" href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="Mahak on LinkedIn">
          <Linkedin size={16} />
        </a>
        <a className="footer-social-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Lucent Digital Studio on Instagram">
          <Instagram size={16} />
        </a>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
