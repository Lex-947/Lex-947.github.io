import { useState } from 'react';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Braces, Check, Code2,
  Github, Layers3, Mail, Menu, Moon, Sun, X,
} from 'lucide-react';

type Project = {
  number: string;
  name: string;
  category: string;
  summary: string;
  contribution: string;
  stack: string[];
  theme: string;
  icon: 'bake' | 'gigsterr' | 'norse';
};

const projects: Project[] = [
  {
    number: '01',
    name: 'Bake Mate',
    category: 'Commercial product · Food tech',
    summary: 'A recipe companion built to help home bakers create, adapt and troubleshoot recipes.',
    contribution: 'Contributed to a production mobile application for a UK client, including Google Play and Apple App Store subscription integration, AI-powered recipe features, and reliable handling of recipe data.',
    stack: ['React', 'TypeScript', 'Capacitor', 'REST APIs', 'Subscriptions'],
    theme: 'peach',
    icon: 'bake',
    link: 'https://play.google.com/store/apps/details?id=com.cyberbyte.bakemate'
  },
  {
    number: '02',
    name: 'Gigsterr',
    category: 'Marketplace · User experience',
    summary: 'A service marketplace connecting people who need a service with the people who provide it.',
    contribution: 'Developed and published the user-facing cross-platform application, alongside a companion provider app for the other side of the marketplace.',
    stack: ['JavaScript', 'React', 'CSS', 'API integration'],
    theme: 'blue',
    icon: 'gigsterr',
    link: 'https://play.google.com/store/apps/details?id=com.cyberbyte.gigsterr'
  },
  {
    number: '03',
    name: 'Gigsterr Provider',
    category: 'Marketplace · Provider experience',
    summary: 'A companion application designed around the workflows of service providers.',
    contribution: 'Built and published the provider-facing cross-platform application, helping deliver a joined-up experience across both sides of the marketplace.',
    stack: ['JavaScript', 'React', 'CSS', 'API integration'],
    theme: 'lavender',
    icon: 'gigsterr',
    link: 'https://play.google.com/store/apps/details?id=com.cyberbyte.gigsterprovider'
  },
  {
    number: '04',
    name: 'Norse Wisdom',
    category: 'Independent project · Research & literature',
    summary: 'A focused digital collection of Norse literature, sagas and mythology.',
    contribution: 'Independently researched, designed, developed and published the application. This included checking poem usage for copyright concerns and testing features through to release and active further development and maintenance.',
    stack: ['React', 'TypeScript', 'Vite', 'Capacitor'],
    theme: 'green',
    icon: 'norse',
    link: 'https://play.google.com/store/apps/details?id=com.cyberbyte.norsewisdom'
  },
];

const skillGroups = [
  { label: 'Frontend', items: ['JavaScript', 'TypeScript', 'React', 'HTML5', 'CSS3', 'Responsive UI'] },
  { label: 'Backend & data', items: ['PHP', 'REST APIs', 'MySQL', 'SQL', 'Data validation'] },
  { label: 'Tools & delivery', items: ['Git', 'Vite', 'Capacitor', 'IIS', 'App Store releases', 'AI integrations'] },
];

function ProjectArtwork({ project }: { project: Project }) {
  if (project.icon === 'bake') {
    return (
      <div className={`project-art ${project.theme}`} aria-hidden="true">
        <div className="bake-window">
          <div className="mini-topline"><span /><span /><span /></div>
          <div className="bake-heading">a little more<br /><i>delicious.</i></div>
          <div className="cake-illustration"><span className="cake-top" /><span className="cake-body" /><span className="cake-plate" /><span className="berry berry-one" /><span className="berry berry-two" /></div>
          <div className="bake-bottom"><span>YOUR NEXT FAVOURITE</span><span className="mini-pill">Explore recipes ↗</span></div>
        </div>
        <span className="art-stamp">BAKE<br />SOMETHING<br />GOOD</span>
      </div>
    );
  }

  if (project.icon === 'gigsterr') {
    return (
      <div className={`project-art ${project.theme}`} aria-hidden="true">
        <div className="market-card market-card-back"><span className="market-dot" /><span className="fake-line long" /><span className="fake-line short" /></div>
        <div className="market-card market-card-front">
          <div className="market-nav"><span className="brand-dot">g.</span><span className="market-menu">•••</span></div>
          <div className="market-title">Good work.<br /><i>Good people.</i></div>
          <div className="market-search"><span>⌕</span> Find a service <ArrowUpRight size={13} /></div>
          <div className="market-tags"><span>Home</span><span>Creative</span><span>Repairs</span></div>
        </div>
        <div className="floating-badge"><Check size={13} /> <span>You're connected</span></div>
      </div>
    );
  }

  return (
    <div className={`project-art ${project.theme}`} aria-hidden="true">
      <div className="rune-orbit orbit-one" /><div className="rune-orbit orbit-two" />
      <div className="rune-core"><span>ᚱ</span><span>ᚢ</span><span>ᚾ</span></div>
      <div className="norse-caption"><span>OLD WORDS.</span><span>NEW PERSPECTIVE.</span></div>
      <span className="norse-side">ᚠ ᚢ ᚦ ᚨ ᚱ ᚲ</span>
    </div>
  );
}

function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`site-shell ${dark ? 'theme-dark' : 'theme-light'}`}>
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Lex home"><span className="wordmark-mark">L<span>.</span></span><span className="wordmark-label">LEX / DEVELOPER</span></a>
        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work <span>01</span></a>
          <a href="#about" onClick={closeMenu}>About <span>02</span></a>
          <a href="#skills" onClick={closeMenu}>Toolkit <span>03</span></a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={14} /></a>
        </nav>
        <div className="header-actions">
          <button className="icon-button theme-toggle" onClick={() => setDark(!dark)} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'} title={dark ? 'Switch to light theme' : 'Switch to dark theme'}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
          <button className="icon-button menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X size={19} /> : <Menu size={19} />}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> SOFTWARE DEVELOPER <span className="eyebrow-divider">/</span> SOUTH AFRICA</div>
            <h1>I make useful<br />things <span className="serif-word">work.</span><span className="hero-period">✳</span></h1>
            <p className="hero-lede">I'm Lex, a software developer who enjoys turning messy problems into thoughtful, practical web and mobile experiences.</p>
            <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={16} /></a><a className="text-link" href="#about">A little about me <ArrowRight size={15} /></a></div>
            <div className="hero-footnote"><span className="mono-label">CURRENTLY</span><span>Building, debugging, learning. Repeat.</span></div>
          </div>
          <div className="hero-visual" aria-label="Abstract illustration of software building blocks">
            <div className="visual-grid" />
            <div className="orbit orbit-large" /><div className="orbit orbit-small" />
            <div className="visual-core"><Braces size={54} strokeWidth={1.2} /><span>IDEAS<br />→ REALITY</span></div>
            <div className="float-chip chip-react"><span className="chip-symbol">⚛</span> React</div>
            <div className="float-chip chip-ts"><span>TS</span> TypeScript</div>
            <div className="float-chip chip-css"><span className="css-mark">✳</span> CSS</div>
            <div className="visual-coordinate coord-one">26° 12′ S</div><div className="visual-coordinate coord-two">BUILD / 001</div>
            <div className="visual-note">Curiosity is part<br />of the toolkit.</div>
          </div>
          <div className="hero-bottomline"><span>01 — INDEPENDENT THINKING</span><span>02 — PRACTICAL ENGINEERING</span><span>03 — CONTINUOUS IMPROVEMENT</span></div>
        </section>

        <section id="work" className="work-section section-wrap section-space">
          <div className="section-heading"><div><div className="eyebrow">SELECTED WORK <span className="eyebrow-divider">/</span> 2023—2026</div><h2>Some things I've <span className="serif-word">shipped.</span></h2></div><p>Real projects, real constraints, and plenty of learning along the way.</p></div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-row" key={project.name}>
                <div className="project-art-wrap"><ProjectArtwork project={project} /></div>
                <div className="project-details">
                  <div className="project-meta"><span>{project.number}</span><span>{project.category}</span></div>
                  <h3>{project.name}</h3>
                  <p className="project-summary">{project.summary}</p>
                  <div className="stack-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  <button className="project-expand" onClick={() => setExpandedProject(expandedProject === project.name ? null : project.name)} aria-expanded={expandedProject === project.name}>
                    {expandedProject === project.name ? 'Hide contribution' : 'What I contributed'} {expandedProject === project.name ? <X size={14} /> : <ArrowUpRight size={14} />}
                  </button>
                  {expandedProject === project.name && <p className="project-contribution">{project.contribution}</p>}
                </div>
              </article>
            ))}
          </div>
          <div className="work-note"><span className="note-icon"><Layers3 size={17} /></span><p><strong>Built for people, not just screenshots.</strong><br />My focus is on the details that make software dependable: clear interfaces, predictable data, and features that work beyond the happy path.</p></div>
        </section>

        <section id="about" className="about-section section-wrap section-space">
          <div className="about-left"><div className="eyebrow">A BIT ABOUT ME <span className="eyebrow-divider">/</span> 02</div><h2>Curious by nature.<br /><span className="serif-word">Developer</span> by trade.</h2><div className="about-stamp"><Code2 size={29} strokeWidth={1.3} /><span>THINK<br />MAKE<br />REFINE</span></div></div>
          <div className="about-copy"><p className="about-lede">I enjoy the full journey from “what if?” to “it works.”</p><p>My background spans frontend development, APIs, databases and cross-platform applications. I like understanding how the pieces fit together, then making the experience on the other side feel simple.</p><p>I've worked on commercial products and independent projects, collaborated around existing systems, and learned that a good fix is often equal parts careful investigation and asking the right question.</p><p>I'm at my best when I can take ownership, keep learning, and leave a system a little better than I found it.</p><a className="text-link" href="https://github.com/Lex-947" target="_blank" rel="noreferrer">Find me on GitHub <ArrowUpRight size={15} /></a></div>
        </section>

        <section id="skills" className="skills-section section-wrap section-space">
          <div className="section-heading"><div><div className="eyebrow">THE TOOLKIT <span className="eyebrow-divider">/</span> 03</div><h2>Tools for the <span className="serif-word">job.</span></h2></div><p>A practical stack, with room to keep expanding it.</p></div>
          <div className="skills-grid">{skillGroups.map((group, index) => <div className="skill-group" key={group.label}><div className="skill-index">0{index + 1} <span>{group.label}</span></div><div className="skill-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div>
          <div className="skills-foot"><span className="mono-label">MY APPROACH</span><span>Understand the problem → build the smallest useful solution → test the edges → improve.</span></div>
        </section>

        <section id="contact" className="contact-section section-wrap">
          <div className="contact-glow" />
          <div className="eyebrow"><span className="status-dot" /> OPEN TO THE NEXT GOOD CHALLENGE</div>
          <h2>Have a problem<br />worth <span className="serif-word">solving?</span></h2>
          <p>I'm interested in good teams, useful products, and work that makes me think.</p>
          <div className="contact-actions"><a className="button button-primary" href="mailto:YOUR_EMAIL@example.com">Get in touch <Mail size={16} /></a><a className="button button-secondary" href="https://github.com/Lex-947" target="_blank" rel="noreferrer"><Github size={16} /> GitHub profile <ArrowUpRight size={14} /></a></div>
          <div className="contact-bottom"><span>JOHANNESBURG, SOUTH AFRICA</span><span>MADE WITH REACT, TYPESCRIPT & CSS</span></div>
        </section>
      </main>

      <footer className="site-footer section-wrap"><a className="wordmark" href="#top"><span className="wordmark-mark">L<span>.</span></span><span className="wordmark-label">LEX / DEVELOPER</span></a><span>Thoughtful work. Useful software.</span><a href="#top">Back to top ↑</a><span className="footer-year">© {new Date().getFullYear()}</span></footer>
    </div>
  );
}

export default App;