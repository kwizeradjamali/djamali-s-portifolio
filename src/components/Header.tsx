import React, { useState } from 'react';
import { Mail, Check, ExternalLink, FileText, ArrowUpRight, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  onOpenResume: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-800/80 bg-neutral-950/85 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand identity */}
        <a 
          href="#" 
          id="header-brand-link"
          className="group flex items-center gap-3 text-neutral-100 transition-colors"
        >
          <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald-500/40 bg-gradient-to-br from-neutral-900 to-neutral-950 font-mono text-xs font-black text-emerald-400 group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all shadow-sm shadow-black">
            <span>DK</span>
            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-neutral-950"></span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-base font-extrabold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                DJAMALI
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 rounded border border-emerald-500/30 bg-emerald-950/40 px-1.5 py-0.5 font-mono text-[10px] font-medium text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                {PERSONAL_INFO.statusText}
              </span>
            </div>
            <p className="hidden text-[11px] font-mono text-neutral-400 md:block">
              IT Instructor & Full-Stack MERN
            </p>
          </div>
        </a>

        {/* Section Navigation Links */}
        <nav className="hidden items-center gap-1 font-mono text-xs text-neutral-300 md:flex">
          <a
            href="#about"
            id="nav-link-about"
            className="rounded-md px-3 py-1.5 transition-colors hover:bg-neutral-900 hover:text-white"
          >
            About
          </a>
          <a
            href="#projects"
            id="nav-link-projects"
            className="rounded-md px-3 py-1.5 transition-colors hover:bg-neutral-900 hover:text-white"
          >
            Projects
          </a>
          <a
            href="#skills"
            id="nav-link-skills"
            className="rounded-md px-3 py-1.5 transition-colors hover:bg-neutral-900 hover:text-white"
          >
            Skills
          </a>
          <a
            href="#contact"
            id="nav-link-contact"
            className="rounded-md px-3 py-1.5 transition-colors hover:bg-neutral-900 hover:text-white"
          >
            Contact
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/250793024213?text=Hi%20Djamali%2C%20I%20saw%20your%20software%20development%20portfolio"
            target="_blank"
            rel="noreferrer"
            id="header-whatsapp-btn"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-950/30 px-2.5 py-1.5 font-mono text-xs font-medium text-emerald-400 hover:bg-emerald-900/40 hover:border-emerald-500/60 transition-colors"
            title="WhatsApp: 0793024213"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            <span>WhatsApp: {PERSONAL_INFO.whatsappDisplay}</span>
          </a>

          <button
            type="button"
            id="header-copy-email-btn"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900 px-2.5 py-1.5 font-mono text-xs font-medium text-neutral-200 hover:border-neutral-700 hover:bg-neutral-800 transition-colors"
            title="Copy email address"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-400 text-xs">Copied!</span>
              </>
            ) : (
              <>
                <Mail className="h-3.5 w-3.5 text-neutral-400" />
                <span className="hidden lg:inline">Copy Email</span>
              </>
            )}
          </button>

          <button
            type="button"
            id="header-resume-btn"
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/40 bg-emerald-950/40 px-3 py-1.5 font-mono text-xs font-semibold text-emerald-300 hover:bg-emerald-900/50 hover:border-emerald-400 transition-all"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>CV Profile</span>
          </button>
        </div>
      </div>
    </header>
  );
};
