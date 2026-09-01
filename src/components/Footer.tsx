import React from 'react';
import { ArrowUp, Mail, MessageCircle, Instagram, Github, Linkedin, MapPin, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-900 bg-neutral-950 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-neutral-900 pb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-lg font-extrabold tracking-tight text-white">
                DJAMALI
              </span>
              <span className="text-neutral-500 font-mono text-xs">—</span>
              <span className="font-mono text-xs font-semibold text-emerald-400 tracking-wider">
                SOFTWARE DEVELOPMENT PORTFOLIO
              </span>
            </div>
            <p className="font-mono text-xs text-neutral-400 mt-1">
              IT & Software Development Instructor · Kiyumba TSS · RTB RQF L3 & 5
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/250793024213?text=Hi%20Djamali%2C%20I%20saw%20your%20software%20development%20portfolio"
              target="_blank"
              rel="noreferrer"
              id="footer-whatsapp-link"
              className="flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-950/30 px-3 py-1.5 font-mono text-xs text-emerald-300 hover:bg-emerald-900/40 hover:border-emerald-500/60 transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>WhatsApp: {PERSONAL_INFO.whatsappDisplay}</span>
            </a>

            <a
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noreferrer"
              id="footer-instagram-link"
              className="flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-1.5 font-mono text-xs text-pink-400 hover:border-pink-500/40 hover:bg-neutral-800 transition-colors"
            >
              <Instagram className="h-3.5 w-3.5" />
              <span>@{PERSONAL_INFO.instagramHandle}</span>
            </a>

            <button
              type="button"
              id="footer-scroll-top-btn"
              onClick={scrollToTop}
              className="flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-1.5 font-mono text-xs font-medium text-neutral-300 hover:border-neutral-700 hover:text-white transition-all"
            >
              <span>Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-emerald-400" />
            <span>Kigali, Rwanda</span>
            <span>·</span>
            <span>MERN Stack</span>
            <span>·</span>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-neutral-300 hover:text-emerald-400 transition-colors">
              {PERSONAL_INFO.email}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">GitHub</a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
            <a href={PERSONAL_INFO.instagram} target="_blank" rel="noreferrer" className="hover:text-pink-400 transition-colors">Instagram</a>
            <a href="https://wa.me/250793024213" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">WhatsApp (0793024213)</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
