import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download, Mail, MapPin, Globe, ExternalLink, Phone, MessageCircle, Instagram } from 'lucide-react';
import { PERSONAL_INFO, ABOUT_DETAILS, PROJECTS, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
DJAMALI
IT & Software Development Instructor | Full-Stack MERN Developer
Email: ${PERSONAL_INFO.email}
WhatsApp: ${PERSONAL_INFO.whatsappDisplay} (+250793024213)
Instagram: @${PERSONAL_INFO.instagramHandle} (${PERSONAL_INFO.instagram})
Location: ${PERSONAL_INFO.location}
Status: ${PERSONAL_INFO.statusText}

PROFESSIONAL SUMMARY
${ABOUT_DETAILS.paragraph1}
${ABOUT_DETAILS.paragraph2}

EXPERIENCE & INSTRUCTION
• IT & Software Development Instructor — Kiyumba Technical Secondary School (Kiyumba TSS)
  - Delivering Rwanda TVET Board (RTB) RQF Level 3 & Level 5 Software Development curriculum.
  - Designing national practical examination matrices, grading rubrics, and laboratory coursework.
  - Supporting institutional IT networks, database schemas, and digital student systems.

KEY FULL-STACK PROJECTS
${PROJECTS.map(p => `• ${p.title} (${p.status}) - Role: ${p.role}\n  Stack: ${p.techStack.join(', ')}\n  ${p.description}`).join('\n\n')}

TECHNICAL PROFICIENCIES
${SKILL_CATEGORIES.map(s => `• ${s.category}: ${s.items.join(', ')}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-neutral-950/85 backdrop-blur-md overflow-y-auto">
      
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* CV Modal Container */}
      <div className="relative z-10 w-full max-w-3xl rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden my-8">
        
        {/* Modal Action Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-950 px-6 py-4">
          <div className="flex items-center gap-2 font-mono text-xs text-neutral-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            <span className="font-bold text-white">Curriculum Vitae</span>
            <span className="text-neutral-500">/</span>
            <span>Djamali</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              id="resume-copy-btn"
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-1.5 font-mono text-xs text-neutral-200 hover:bg-neutral-800"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-neutral-400" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              type="button"
              id="resume-print-btn"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3 py-1.5 font-mono text-xs font-bold text-neutral-950 hover:bg-emerald-400"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-800 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Content (Clean High-Contrast) */}
        <div className="p-8 sm:p-10 max-h-[80vh] overflow-y-auto bg-neutral-900 text-neutral-200 space-y-8 font-sans print:p-0 print:bg-white print:text-black">
          
          {/* CV Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-neutral-800 pb-6 print:border-black">
            <div>
              <h1 className="font-display text-3xl font-extrabold text-white print:text-black">
                Djamali
              </h1>
              <p className="font-mono text-emerald-400 text-sm font-semibold mt-1 print:text-neutral-800">
                IT & Software Development Instructor · Full-Stack MERN Engineer
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 font-mono text-xs text-neutral-400 print:text-neutral-600">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-emerald-400 print:text-black" /> Kigali, Rwanda
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="h-3.5 w-3.5 text-emerald-400 print:text-black" /> {PERSONAL_INFO.email}
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="h-3.5 w-3.5 text-emerald-400 print:text-black" /> WhatsApp: {PERSONAL_INFO.whatsappDisplay}
                </span>
                <span className="flex items-center gap-1">
                  <Globe className="h-3.5 w-3.5 text-emerald-400 print:text-black" /> Instagram: @{PERSONAL_INFO.instagramHandle}
                </span>
                <span>• Status: Open to work</span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col items-center justify-center h-20 w-20 sm:h-24 sm:w-24 rounded-xl border border-emerald-500/40 bg-gradient-to-br from-neutral-900 to-neutral-950 font-mono shadow-md print:border-neutral-400 print:bg-neutral-100">
              <span className="text-xl sm:text-2xl font-black text-emerald-400 print:text-black">DK</span>
              <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-semibold print:text-neutral-600 mt-0.5">Verified</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 print:text-black">
              Professional Summary
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed print:text-neutral-800">
              {ABOUT_DETAILS.paragraph1}
            </p>
            <p className="text-sm text-neutral-300 leading-relaxed mt-2 print:text-neutral-800">
              {ABOUT_DETAILS.paragraph2}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 print:text-black">
              Professional Experience
            </h2>
            <div className="space-y-4">
              <div className="rounded-lg border border-neutral-800/80 bg-neutral-950/40 p-4 print:border-neutral-300 print:bg-transparent">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-white text-sm print:text-black">
                      IT & Software Development Instructor
                    </h3>
                    <p className="font-mono text-xs text-neutral-400 print:text-neutral-700">
                      Kiyumba Technical Secondary School (Kiyumba TSS) · Rwanda TVET Board (RTB)
                    </p>
                  </div>
                  <span className="font-mono text-xs text-emerald-400 print:text-neutral-800">
                    Active Role
                  </span>
                </div>
                <ul className="mt-2 space-y-1 text-xs text-neutral-300 list-disc list-inside font-sans print:text-neutral-800">
                  <li>Taught RQF Level 3 & Level 5 Software Development competencies including algorithms, web engineering, and databases.</li>
                  <li>Authored national practical examination scenarios, grading criteria, and hands-on lab assessment matrices.</li>
                  <li>Maintained secondary school IT infrastructure, network nodes, and internal administrative tooling.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Deliverables & Projects */}
          <div>
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 print:text-black">
              Featured Software Deliverables
            </h2>
            <div className="space-y-3">
              {PROJECTS.map(p => (
                <div key={p.id} className="border-l-2 border-emerald-500 pl-3 py-1 print:border-black">
                  <div className="flex items-baseline justify-between">
                    <span className="font-bold text-sm text-white print:text-black">{p.title}</span>
                    <span className="font-mono text-[11px] text-neutral-400 print:text-neutral-600">{p.status}</span>
                  </div>
                  <p className="text-xs text-neutral-400 font-mono mt-0.5 print:text-neutral-700">
                    Stack: {p.techStack.join(' · ')}
                  </p>
                  <p className="text-xs text-neutral-300 mt-1 print:text-neutral-800">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Matrix */}
          <div>
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 print:text-black">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-2 gap-2 font-mono text-xs">
              {SKILL_CATEGORIES.map(s => (
                <div key={s.number} className="rounded border border-neutral-800 p-2.5 bg-neutral-950/40 print:border-neutral-300 print:bg-transparent">
                  <span className="text-emerald-400 font-bold block print:text-black">{s.category}:</span>
                  <span className="text-neutral-300 print:text-neutral-800">{s.items.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
