import React, { useState, useEffect } from 'react';
import { ArrowDown, Code2, MapPin, Sparkles, Layers, BookOpen, Send, Check, Copy } from 'lucide-react';
import { PERSONAL_INFO, ABOUT_DETAILS } from '../data/portfolioData';

interface HeroProps {
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects }) => {
  const [kigaliTime, setKigaliTime] = useState<string>('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Kigali',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      const formatter = new Intl.DateTimeFormat([], options);
      setKigaliTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero-section" className="relative border-b border-neutral-900 bg-gradient-to-b from-neutral-950 via-neutral-900/30 to-neutral-950 py-16 sm:py-24 lg:py-28">
      {/* Decorative subtle background grid */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10 items-center">
          
          {/* Main Hero Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Top Eyebrow / Breadcrumb */}
            <div className="mb-6 flex flex-wrap items-center gap-2 font-mono text-xs text-neutral-400">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-900/90 px-3 py-1 text-neutral-300 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                Kiyumba TSS · Rwanda TVET Board (RTB)
              </span>
              <span className="text-neutral-600">/</span>
              <span className="text-emerald-400 font-medium">Software Development Portfolio</span>
            </div>

            {/* Display Name & Role */}
            <div className="flex items-center gap-4">
              <h1 className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                Djamali
              </h1>
            </div>

            {/* Hero Tagline */}
            <p className="mt-4 font-display text-2xl font-bold tracking-tight text-neutral-100 sm:text-3xl lg:text-4xl text-emerald-400">
              {ABOUT_DETAILS.heroTagline}
            </p>

            {/* Subtitle Bio */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg sm:leading-relaxed">
              {ABOUT_DETAILS.heroBio}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                id="hero-explore-projects-btn"
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider text-neutral-950 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-950/40"
              >
                <span>View Projects</span>
                <ArrowDown className="h-4 w-4" />
              </button>

              <a
                href="https://wa.me/250793024213?text=Hi%20Djamali%2C%20I%20saw%20your%20software%20development%20portfolio"
                target="_blank"
                rel="noreferrer"
                id="hero-whatsapp-cta"
                className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-950/40 px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-emerald-300 hover:bg-emerald-900/50 hover:border-emerald-400 transition-all"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>WhatsApp: {PERSONAL_INFO.whatsappDisplay}</span>
              </a>

              <a
                href="#contact"
                id="hero-contact-cta"
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-neutral-200 hover:border-neutral-700 hover:bg-neutral-800 hover:text-white transition-all"
              >
                <span>Send Message</span>
                <Send className="h-3.5 w-3.5 text-neutral-400" />
              </a>

              <button
                type="button"
                id="hero-copy-email"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-800/80 bg-neutral-950/60 px-4 py-3 font-mono text-xs text-neutral-300 hover:border-neutral-700 hover:text-white transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-neutral-400" />
                    <span>kwizeradjamali101@gmail.com</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick stats ribbon */}
            <div className="mt-10 grid grid-cols-3 gap-3 font-mono text-center max-w-xl">
              <div className="rounded-lg border border-neutral-800/80 bg-neutral-900/50 p-3.5 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white font-display">6</div>
                <div className="text-[10px] uppercase tracking-wider text-neutral-400 mt-0.5">Projects</div>
              </div>
              <div className="rounded-lg border border-neutral-800/80 bg-neutral-900/50 p-3.5 backdrop-blur-sm">
                <div className="text-2xl font-bold text-emerald-400 font-display">L3–L5</div>
                <div className="text-[10px] uppercase tracking-wider text-neutral-400 mt-0.5">RTB Framework</div>
              </div>
              <div className="rounded-lg border border-neutral-800/80 bg-neutral-900/50 p-3.5 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white font-display">MERN</div>
                <div className="text-[10px] uppercase tracking-wider text-neutral-400 mt-0.5">Full-Stack</div>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Developer Terminal & System Architecture Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="group relative rounded-2xl border border-neutral-800 bg-neutral-900/80 p-5 backdrop-blur-md shadow-2xl transition-all hover:border-emerald-500/40">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between border-b border-neutral-800/90 pb-3.5 mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80 border border-rose-600"></span>
                  <span className="h-3 w-3 rounded-full bg-amber-500/80 border border-amber-600"></span>
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80 border border-emerald-600"></span>
                  <span className="ml-2 font-mono text-[11px] text-neutral-400">djamali@kiyumba-tss: ~</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-950 px-2.5 py-0.5 font-mono text-[10px] text-neutral-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Kigali {kigaliTime || 'CAT (UTC+2)'}</span>
                  </div>
                </div>
              </div>

              {/* Developer Monogram & Quick Details */}
              <div className="flex items-center gap-4 rounded-xl border border-neutral-800/80 bg-neutral-950/60 p-4 mb-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-emerald-500/40 bg-gradient-to-br from-emerald-950/60 to-neutral-950 font-mono text-xl font-black text-emerald-400 shadow-md shadow-emerald-950/30">
                  DK
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-lg font-bold text-white">Djamali Kwizera</h3>
                    <span className="rounded border border-emerald-500/40 bg-emerald-950/80 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-300">
                      {PERSONAL_INFO.statusText}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-emerald-400 mt-0.5">
                    {PERSONAL_INFO.roleTitle}
                  </p>
                  <p className="font-mono text-[11px] text-neutral-400 mt-0.5 flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-emerald-400" />
                    {PERSONAL_INFO.institution} · {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>

              {/* Code / Configuration Preview */}
              <div className="rounded-xl border border-neutral-800/80 bg-neutral-950/90 p-4 font-mono text-xs leading-relaxed overflow-hidden">
                <div className="text-neutral-500 mb-2">// Developer Configuration</div>
                <div className="space-y-1.5">
                  <div>
                    <span className="text-emerald-400">const</span>{' '}
                    <span className="text-amber-300">instructor</span> = {'{'}
                  </div>
                  <div className="pl-4">
                    <span className="text-neutral-400">name:</span>{' '}
                    <span className="text-emerald-300">'Djamali'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-neutral-400">specialization:</span>{' '}
                    <span className="text-emerald-300">'Full-Stack MERN'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-neutral-400">curriculum:</span>{' '}
                    <span className="text-emerald-300">'RTB RQF Level 3 & Level 5'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-neutral-400">coreStack:</span>{' '}
                    <span className="text-amber-200">['MongoDB', 'Express', 'React', 'Node.js']</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-neutral-400">examMatrices:</span>{' '}
                    <span className="text-amber-200">['Database Schemas', 'API Testing', 'UI Systems']</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-neutral-400">contact:</span>{' '}
                    <span className="text-emerald-300">'{PERSONAL_INFO.whatsappDisplay}'</span>
                  </div>
                  <div>{'}'};</div>
                </div>
              </div>

              {/* Bottom Quick Badges */}
              <div className="mt-4 grid grid-cols-2 gap-2 font-mono text-[11px]">
                <div className="flex items-center gap-2 rounded-lg border border-neutral-800/80 bg-neutral-950/50 p-2.5 text-neutral-300">
                  <Code2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>MERN Engineering</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-neutral-800/80 bg-neutral-950/50 p-2.5 text-neutral-300">
                  <BookOpen className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>RTB L3–L5 Matrix</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
