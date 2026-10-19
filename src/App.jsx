import React, { useState } from 'react';
import './App.css';
import tuluImg from './assets /profile.jpg';

const contactPhone = 'tel:+251977292982';
const contactEmail = 'mailto:yohanessetegn24@gmail.com?subject=Portfolio%20Contact%20%E2%80%93%20Collaboration%20Opportunity&body=Hello%20Yohanes%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch%20with%20you.';

export default function App() {
  const [activeNav, setActiveNav] = useState('Home');

  return (
    <div className="portfolio-container">
      {/* 🌟 1. NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">Y</a>
        <ul className="nav-links">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={activeNav === item ? 'active' : ''}
                onClick={() => setActiveNav(item)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn-talk">
          Let's Talk <span>✈</span>
        </a>
      </nav>

      {/* 🌟 2. HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-left">
          <div className="greeting-tag">
            <span className="accent-dash"></span> Hello, I’m
          </div>
          <h1 className="hero-name">
            Yo<span>hanes</span>
          </h1>
          <h2 className="hero-title">
            Software Developer & Computer Science Student
          </h2>
          <p className="hero-desc">
            I build thoughtful digital experiences and practical web applications.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn-teal">
              <span>👁</span> View My Work
            </a>
            <a href="#contact" className="btn-outline">
              <span>☎</span> Contact Me
            </a>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/yohanessetegn24-lgtm"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              title="GitHub"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              title="LinkedIn"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="profile-card-glow">
            {/* የራስዎ ፎቶ ካለዎት እዚህ ጋር src ላይ ይቀይሩት */}
            <img
              src={tuluImg}
              alt="Yohanes"
              className="profile-img"
            />
          </div>
        </div>
      </section>

      {/* 🌟 3. MY SKILLS SECTION */}
      <section className="section" id="skills">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">Technologies I work with</p>

        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-badge badge-csharp">C#</div>
            <div className="skill-name">C#</div>
          </div>
          <div className="skill-card">
            <div className="skill-badge badge-dotnet">.NET</div>
            <div className="skill-name">ASP.NET Core</div>
          </div>
          <div className="skill-card">
            <div className="skill-badge badge-react">⚛</div>
            <div className="skill-name">React</div>
          </div>
          <div className="skill-card">
            <div className="skill-badge badge-sql">🗄️</div>
            <div className="skill-name">SQL Server</div>
          </div>
          <div className="skill-card">
            <div className="skill-badge badge-js">JS</div>
            <div className="skill-name">JavaScript</div>
          </div>
        </div>
      </section>

      {/* 🌟 4. FEATURED PROJECTS SECTION */}
      <section className="section" id="projects">
        <div style={{ marginBottom: '8px' }}>
          <span className="accent-dash"></span>
        </div>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Some of the projects I've worked on</p>

        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-thumb">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80"
                alt="Campus Navigation System"
              />
            </div>
            <div className="project-info">
              <h3 className="project-title">Campus Navigation System</h3>
              <p className="project-desc">
                A real-time campus navigation web app with interactive maps, route planning, and building information.
              </p>
              <div className="project-tags">
                <span className="project-tag">React</span>
                <span className="project-tag">ASP.NET Core</span>
                <span className="project-tag">SQL Server</span>
              </div>
              <a href="https://github.com/yohanessetegn24-lgtm" className="project-link">
                View Project <span>→</span>
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-thumb">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80"
                alt="Ethiopian Jobs Platform"
              />
            </div>
            <div className="project-info">
              <h3 className="project-title">Ethiopian Jobs Platform</h3>
              <p className="project-desc">
                A web platform for citizens to find jobs, match skills and connect with opportunities across Ethiopia.
              </p>
              <div className="project-tags">
                <span className="project-tag">React</span>
                <span className="project-tag">ASP.NET Core</span>
                <span className="project-tag">SQL Server</span>
              </div>
              <a href="https://github.com/yohanessetegn24-lgtm" className="project-link">
                View Project <span>→</span>
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-thumb">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"
                alt="Public Service Portal"
              />
            </div>
            <div className="project-info">
              <h3 className="project-title">Public Service Portal</h3>
              <p className="project-desc">
                A platform for citizens to submit complaints, requests and feedback to local administration with real-time tracking.
              </p>
              <div className="project-tags">
                <span className="project-tag">React</span>
                <span className="project-tag">ASP.NET Core</span>
                <span className="project-tag">SQL Server</span>
              </div>
              <a href="https://github.com/yohanessetegn24-lgtm" className="project-link">
                View Project <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 🌟 5. ABOUT ME & QUOTE SECTION */}
      <section className="section" id="about">
        <div style={{ marginBottom: '8px' }}>
          <span className="accent-dash"></span>
        </div>
        <h2 className="section-title">About Me</h2>

        <div className="about-grid" style={{ marginTop: '24px' }}>
          <div>
            <p className="about-text">
              I'm <strong>Yohanes</strong>, a passionate software developer and computer science student at 
              Mekdela Amba University. I enjoy building web applications, solving real-world problems, and 
              continuously learning new technologies. My goal is to grow into a skilled developer and 
              contribute to impactful digital solutions, especially for my country and community.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🎓</span>
                <div>
                  <div className="highlight-label">Computer Science</div>
                  <div className="highlight-sub">Student</div>
                </div>
              </div>

              <div className="highlight-item">
                <span className="highlight-icon">&lt;/&gt;</span>
                <div>
                  <div className="highlight-label">Web Development</div>
                  <div className="highlight-sub">Enthusiast</div>
                </div>
              </div>

              <div className="highlight-item">
                <span className="highlight-icon">📍</span>
                <div>
                  <div className="highlight-label">Ethiopia</div>
                  <div className="highlight-sub">Addis Ababa</div>
                </div>
              </div>
            </div>
          </div>

          <div className="quote-box">
            <div className="quote-mark">“</div>
            <div className="quote-text">
              Better solutions for a brighter future.
            </div>
            <div className="quote-dash"></div>
          </div>
        </div>
      </section>

      {/* 🌟 6. GET IN TOUCH / FOOTER */}
      <footer className="footer-banner" id="contact">
        <div className="footer-left">
          <div className="plane-icon">✈</div>
          <div>
            <h3 className="footer-title">Get In Touch</h3>
            <p className="footer-sub">
              I'm always open to interesting opportunities, collaborations, and new ideas.
            </p>
          </div>
        </div>

        <div className="footer-right">
          <div className="email-box">
            <span className="email-icon">✉</span>
            <div>
              <div className="email-label">Email</div>
              <a
                href={contactEmail}
                className="email-val"
                aria-label="Email Yohanes about a collaboration opportunity"
              >
                yohanessetegn24@gmail.com
              </a>
            </div>
          </div>

          <div className="phone-box">
            <span className="phone-icon">☎</span>
            <div>
              <div className="phone-label">Phone</div>
              <a
                href={contactPhone}
                className="phone-val"
                aria-label="Call Yohanes at +251 977 292982"
              >
                0977 292982
              </a>
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/yohanessetegn24-lgtm"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

      <div className="copyright">
        © {new Date().getFullYear()} Yohanes. All rights reserved.
      </div>
    </div>
  );
}