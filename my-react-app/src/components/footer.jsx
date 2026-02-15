import React from 'react';
import { Globe, Phone, Mail, FileText } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-column">
          <h4>Contact</h4>
          <p className="footer-item"><Phone size={16}/> {profileData.contact?.phone || '+91-XXXXXXXXXX'}</p>
          <p className="footer-item"><Mail size={16}/> {profileData.contact?.email || 'info@studds.com'}</p>
          <p className="footer-item"><Globe size={16}/> <a href={profileData.contact?.website || '#'} target="_blank" rel="noreferrer">{profileData.contact?.website || 'studds.com'}</a></p>
        </div>

        <div className="footer-column">
          <h4>Investment</h4>
          <p className="footer-item"><strong>Promoter Holding:</strong> {profileData.investment.promoterHolding || '—'}</p>
          <p className="footer-item"><strong>Key Notes:</strong> {profileData.investment.promoterText || 'N/A'}</p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <p className="footer-item"><FileText size={16}/> <a href="#financials">Financials</a></p>
          <p className="footer-item"><FileText size={16}/> <a href="#leadership">Leadership</a></p>
        </div>
      </div>

      <div className="footer-bottom">© {new Date().getFullYear()} Studds Accessories Limited. All rights reserved.</div>
    </footer>
  );
}
