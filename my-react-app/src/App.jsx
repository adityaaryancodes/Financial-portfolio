import React from 'react';
import './App.css';
import { profileData } from './data/profileData';
import { 
  Briefcase, GraduationCap, BarChart3, PieChart, 
  Settings, Globe, ShieldCheck, Factory, TrendingUp, Award 
} from 'lucide-react';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer';
import profileImg from './assets/Sidhartha-Bhushan-Khurana-MD-Studds-m.jpg';
import studdsLogo from './assets/studds logo.jpg';

// Helper component for bold text parsing
const TextWithBold = ({ text }) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return (
    <span>
      {parts.map((part, index) => 
        part.startsWith('**') && part.endsWith('**') ? (
          <span key={index} className="highlight-gold">{part.slice(2, -2)}</span>
        ) : (
          part
        )
      )}
    </span>
  );
};

function App() {
  return (
    <div className="app-container">
      
      {/* 1. HERO SECTION */}
      <header className="hero-section fade-in">
        <ThemeToggle />
        {/* Logo in the top-right of the hero */}
        <img src={studdsLogo} alt="Studds Logo" className="hero-logo" />
        <div className="hero-content">
          <h2 className="hero-name">{profileData.header.name}</h2>
          <div className="hero-role">{profileData.header.role}</div>
          <div className="hero-company">{profileData.header.company}</div>
          
          <div className="hero-badges">
            <div className="badge"><Award color="#d97706" size={20}/> 25+ Years Leadership</div>
            <div className="badge"><Globe color="#d97706" size={20}/> 70+ Export Countries</div>
            <div className="badge"><TrendingUp color="#d97706" size={20}/> World's Largest Manufacturer</div>
          </div>
        </div>
            <div className="hero-image-container animate-scale">
               {/* Use the local asset if present, otherwise prefer public jpg, then SVG fallback */}
               <picture>
                 {profileImg && <source srcSet={profileImg} type="image/jpeg" />}
                 <source srcSet="/siddharth.jpg" type="image/jpeg" />
                 <img src="/siddharth.svg" alt="Siddharth Bhushan Khurana" className="hero-img" />
               </picture>
            </div>
      </header>

      <main className="main-content fade-in">

        {/* SECTION 1: EXECUTIVE PROFILE */}
        <section>
          <div className="section-header">
            <div className="section-number">1</div>
            <h3 className="section-title">{profileData.sections[0].title}</h3>
          </div>
          <div style={{ maxWidth: '800px' }}>
            {profileData.sections[0].content.map((p, idx) => (
              <p key={idx} className="text-content"><TextWithBold text={p} /></p>
            ))}
          </div>
        </section>

        {/* SECTION 2: EDUCATION */}
        <section>
          <div className="section-header">
            <div className="section-number">2</div>
            <h3 className="section-title">{profileData.sections[1].title}</h3>
          </div>
          <div className="edu-grid">
            <div className="degree-box">
              <GraduationCap size={40} color="#d97706" style={{marginBottom:'10px'}}/>
              <h3>{profileData.sections[1].degree}</h3>
              <span className="degree-field">{profileData.sections[1].field}</span>
              <p>{profileData.sections[1].uni}</p>
            </div>
            <ul className="edu-list">
              {profileData.sections[1].points.map((pt, i) => (
                <li key={i}><Settings size={16} color="#d97706"/> {pt}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 3: AUTHORITY GRID */}
        <section>
          <div className="section-header">
            <div className="section-number">3</div>
            <h3 className="section-title">Authority as Managing Director</h3>
          </div>
          <div className="authority-grid">
            {profileData.authority.map((item, idx) => (
              <div key={idx} className="auth-card">
                <h4>
                  {idx === 0 && <Briefcase size={20} />}
                  {idx === 1 && <BarChart3 size={20} />}
                  {idx === 2 && <Factory size={20} />}
                  {idx === 3 && <ShieldCheck size={20} />}
                  {item.title}
                </h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: COMPANY PROFILE (STATS) */}
        <section>
          <div className="section-header">
            <div className="section-number">4</div>
            <h3 className="section-title">Company Profile & Financials</h3>
          </div>
          
          {/* Brand Cards */}
          <div className="authority-grid" style={{marginBottom: '30px'}}>
             {profileData.company.brands.map((brand, i) => (
               <div key={i} className="auth-card" style={{borderLeftColor: i===0?'#0f172a':'#d97706'}}>
                 <h4>{brand.name}</h4>
                 <p>{brand.desc}</p>
               </div>
             ))}
          </div>

          {/* Big Number Stats */}
          <div className="stats-row">
            {profileData.company.stats.map((stat, i) => (
              <div key={i} className="stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
                <span className="stat-sub">{stat.sub}</span>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="strat-grid">
             {profileData.company.features.map((feat, i) => (
               <div key={i} className="strat-card">
                  <h5 style={{display:'flex', gap:'5px', alignItems:'center'}}>
                    <Globe size={16} color="#d97706"/> {feat.title}
                  </h5>
                  <p>{feat.desc}</p>
               </div>
             ))}
          </div>
        </section>

        {/* SECTION 5: INVESTMENT */}
        <section>
          <div className="section-header">
            <div className="section-number">5</div>
            <h3 className="section-title">Investment Overview</h3>
          </div>
          <div className="inv-grid">
            <div className="promo-box">
              <span className="promo-percent">{profileData.investment.promoterHolding}</span>
              <p style={{fontSize: '0.9rem', opacity: 0.9}}>Promoter & Shareholding Position</p>
              <p style={{fontSize: '0.8rem', opacity: 0.7, marginTop:'10px'}}>{profileData.investment.promoterText}</p>
            </div>
            <div className="strat-grid">
              {profileData.investment.strategies.map((strat, i) => (
                <div key={i} className="strat-card">
                  <PieChart size={24} color="#d97706" style={{marginBottom:'10px'}}/>
                  <h5>{strat.title}</h5>
                  <p>{strat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}

export default App;