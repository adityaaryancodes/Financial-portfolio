import React from 'react';

const SectionCard = ({ number, title, children }) => {
  return (
    <section className="section-card">
      <div className="section-header">
        {/* Render the Icon directly */}
        <div className="section-number">
          {number}
        </div>
        <h3 className="section-title">{title}</h3>
      </div>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};

export default SectionCard;