import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Check, Copy, Send, ArrowUpRight, MessageSquare, Sparkles, MessageCircle, Instagram, PhoneCall, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);
  const [inquiryType, setInquiryType] = useState<'contract' | 'education' | 'help' | 'general'>('contract');
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('Full-Stack Development Project');
  const [message, setMessage] = useState('Hi Djamali,\n\nWe have a full-stack MERN software development project and would like to discuss specifications, deliverables, and timelines with you.');
  const [messageCopied, setMessageCopied] = useState(false);
  const [isSentFeedback, setIsSentFeedback] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyWhatsApp = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.whatsappDisplay);
    setCopiedWhatsApp(true);
    setTimeout(() => setCopiedWhatsApp(false), 2500);
  };

  const handleInquiryPreset = (type: 'contract' | 'education' | 'help' | 'general') => {
    setInquiryType(type);
    if (type === 'contract') {
      setSubject('Full-Stack MERN Project Discussion');
      setMessage('Hi Djamali,\n\nWe have a full-stack MERN software development project and would like to discuss specifications, deliverables, and timelines with you.');
    } else if (type === 'education') {
      setSubject('RTB RQF L3-5 Curriculum & Exam Assessment Inquiry');
      setMessage('Hi Djamali,\n\nWe are looking for expertise in RTB RQF Level 3-5 Software Development curriculum authoring, exam rubric design, or technical training.');
    } else if (type === 'help') {
      setSubject('Technical Guidance & Development Help');
      setMessage('Hi Djamali,\n\nI need technical assistance or guidance regarding full-stack software development / IT systems.');
    } else {
      setSubject('Professional Connection & Collaboration');
      setMessage('Hi Djamali,\n\nI came across your software development portfolio and would like to connect.');
    }
  };

  const getMailtoUrl = () => {
    const emailSubject = encodeURIComponent(
      subject ? `[${subject}] from ${name || 'Prospective Partner'}` : `[Portfolio Inquiry] from ${name || 'Visitor'}`
    );
    const body = encodeURIComponent(
      `${message || 'Hi Djamali,'}\n\n━━━━━━━━━━━━━━━━━━━━━━\nFrom: ${name || 'N/A'}\nSender Email: ${senderEmail || 'N/A'}\nSent via Djamali Portfolio Website`
    );
    return `mailto:${PERSONAL_INFO.email}?subject=${emailSubject}&body=${body}`;
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hi Djamali, my name is ${name || 'Visitor'}.\n${message}`
    );
    return `https://wa.me/250793024213?text=${text}`;
  };

  const handleCopyFormattedInquiry = () => {
    const fullText = `To: ${PERSONAL_INFO.email}\nSubject: ${subject} (from ${name || 'Partner'})\n\n${message}\n\nSender: ${name || 'N/A'}\nEmail: ${senderEmail || 'N/A'}`;
    navigator.clipboard.writeText(fullText);
    setMessageCopied(true);
    setTimeout(() => setMessageCopied(false), 2500);
  };

  const handleSendTrigger = () => {
    setIsSentFeedback(true);
    setTimeout(() => setIsSentFeedback(false), 4000);
  };

  return (
    <section id="contact" className="border-b border-neutral-900 bg-neutral-950 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-baseline gap-3 border-b border-neutral-800 pb-6 mb-12">
          <div className="h-8 w-1.5 rounded-full bg-emerald-400"></div>
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Contact & Inquiries
            </h2>
            <p className="font-mono text-xs text-neutral-400">
              Direct channels for software engineering, technical curriculum, and real-time assistance
            </p>
          </div>
        </div>

        {/* Introductory statement */}
        <div className="mb-12 max-w-3xl">
          <p className="font-display text-xl sm:text-2xl font-semibold text-white leading-snug">
            Open to full-stack development work, IT consulting, and technical education opportunities.
          </p>
          <p className="mt-2 font-mono text-sm text-emerald-400">
            Reach out directly via email, WhatsApp for immediate help, or social links below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WHATSAPP CARD (Highlighted for Quick Help) */}
            <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/20 p-5 backdrop-blur-sm relative overflow-hidden group">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-emerald-400 mb-1">
                <span className="flex items-center gap-1.5 font-bold">
                  <MessageCircle className="h-3.5 w-3.5" />
                  WHATSAPP (DIRECT HELP)
                </span>
                <span className="rounded bg-emerald-950/80 border border-emerald-500/40 px-1.5 py-0.5 text-[9px] text-emerald-300">
                  Fastest Response
                </span>
              </div>
              
              <div className="flex items-center justify-between gap-3 mt-2">
                <div>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer"
                    id="contact-whatsapp-link"
                    className="font-mono text-base font-bold text-white hover:text-emerald-400 transition-colors flex items-center gap-2"
                  >
                    <span>{PERSONAL_INFO.whatsappDisplay}</span>
                    <ArrowUpRight className="h-4 w-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <p className="text-[11px] font-mono text-neutral-400 mt-0.5">
                    Click to chat on WhatsApp · +250 793 024 213
                  </p>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    id="contact-copy-whatsapp-btn"
                    onClick={handleCopyWhatsApp}
                    className="rounded-lg border border-neutral-700 bg-neutral-900 p-2 text-neutral-300 hover:border-emerald-500 hover:text-emerald-400 transition-all"
                    title="Copy WhatsApp number"
                  >
                    {copiedWhatsApp ? (
                      <Check className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer"
                    id="contact-open-whatsapp-btn"
                    className="rounded-lg bg-emerald-500 p-2 text-neutral-950 hover:bg-emerald-400 transition-all"
                    title="Open in WhatsApp"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* EMAIL CARD */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-5 backdrop-blur-sm">
              <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">
                PRIMARY EMAIL
              </span>
              <div className="flex items-center justify-between gap-3 mt-1">
                <div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    id="contact-email-link"
                    className="font-mono text-sm font-semibold text-white hover:text-emerald-400 transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <p className="text-[11px] font-mono text-neutral-400 mt-0.5">
                    Send messages, contracts, or curriculum briefs
                  </p>
                </div>
                <button
                  type="button"
                  id="contact-copy-email-btn"
                  onClick={handleCopyEmail}
                  className="shrink-0 rounded-lg border border-neutral-700 bg-neutral-950 p-2 text-neutral-300 hover:border-emerald-500 hover:text-emerald-400 transition-all"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* INSTAGRAM CARD */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-5 backdrop-blur-sm group">
              <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">
                INSTAGRAM
              </span>
              <div className="flex items-center justify-between gap-3 mt-1">
                <a
                  href={PERSONAL_INFO.instagram}
                  target="_blank"
                  rel="noreferrer"
                  id="contact-instagram-link"
                  className="flex items-center gap-2.5 font-mono text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-neutral-950 border border-neutral-800 text-pink-400 group-hover:border-pink-500/50">
                    <Instagram className="h-4 w-4" />
                  </div>
                  <div>
                    <span>@{PERSONAL_INFO.instagramHandle}</span>
                    <span className="block text-[11px] text-neutral-400 font-normal">instagram.com/{PERSONAL_INFO.instagramHandle}</span>
                  </div>
                </a>
                <ArrowUpRight className="h-4 w-4 text-neutral-500 group-hover:text-pink-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </div>

            {/* GITHUB CARD */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-5 backdrop-blur-sm group">
              <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">
                GITHUB REPOSITORIES
              </span>
              <div className="flex items-center justify-between gap-3 mt-1">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  id="contact-github-link"
                  className="flex items-center gap-2 font-mono text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                >
                  <Github className="h-4 w-4 text-neutral-400" />
                  <span>github.com/kwizeradjamali</span>
                </a>
                <ArrowUpRight className="h-4 w-4 text-neutral-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </div>

            {/* LINKEDIN CARD */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-5 backdrop-blur-sm group">
              <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">
                LINKEDIN NETWORK
              </span>
              <div className="flex items-center justify-between gap-3 mt-1">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  id="contact-linkedin-link"
                  className="flex items-center gap-2 font-mono text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                >
                  <Linkedin className="h-4 w-4 text-neutral-400" />
                  <span>linkedin.com/in/djamali-kwizera</span>
                </a>
                <ArrowUpRight className="h-4 w-4 text-neutral-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </div>

            {/* LOCATION CARD */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-5 backdrop-blur-sm">
              <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">
                LOCATION & TIMEZONE
              </span>
              <div className="flex items-center gap-2 font-mono text-sm font-semibold text-white mt-1">
                <MapPin className="h-4 w-4 text-emerald-400" />
                <span>{PERSONAL_INFO.location}</span>
                <span className="text-xs text-neutral-400 font-normal">· Central Africa Time (CAT, UTC+2)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Send Me a Message to My Email Section (7 cols) */}
          <div className="lg:col-span-7 rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-emerald-400">
                <Mail className="h-4 w-4" />
                <span>Send Me a Message to My Email</span>
              </div>
              <span className="font-mono text-[11px] text-neutral-400 hidden sm:inline">
                Target: {PERSONAL_INFO.email}
              </span>
            </div>

            {/* Preset Inquiry Selectors */}
            <div className="mb-5 space-y-2">
              <label className="font-mono text-xs text-neutral-400 block">
                Quick Subject Presets:
              </label>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                <button
                  type="button"
                  onClick={() => handleInquiryPreset('contract')}
                  className={`rounded-lg px-3 py-1.5 font-medium transition-all ${
                    inquiryType === 'contract'
                      ? 'bg-emerald-500 text-neutral-950 font-bold'
                      : 'border border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white'
                  }`}
                >
                  Full-Stack Development
                </button>
                <button
                  type="button"
                  onClick={() => handleInquiryPreset('education')}
                  className={`rounded-lg px-3 py-1.5 font-medium transition-all ${
                    inquiryType === 'education'
                      ? 'bg-emerald-500 text-neutral-950 font-bold'
                      : 'border border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white'
                  }`}
                >
                  Technical Education / RTB L3-5
                </button>
                <button
                  type="button"
                  onClick={() => handleInquiryPreset('help')}
                  className={`rounded-lg px-3 py-1.5 font-medium transition-all ${
                    inquiryType === 'help'
                      ? 'bg-emerald-500 text-neutral-950 font-bold'
                      : 'border border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white'
                  }`}
                >
                  Technical Help & Guidance
                </button>
                <button
                  type="button"
                  onClick={() => handleInquiryPreset('general')}
                  className={`rounded-lg px-3 py-1.5 font-medium transition-all ${
                    inquiryType === 'general'
                      ? 'bg-emerald-500 text-neutral-950 font-bold'
                      : 'border border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white'
                  }`}
                >
                  General Connection
                </button>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                <div>
                  <label className="block text-neutral-400 mb-1.5">Your Name *</label>
                  <input
                    type="text"
                    id="contact-sender-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Jean Damascene"
                    className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3.5 py-2 text-white placeholder-neutral-600 focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 mb-1.5">Your Email Address *</label>
                  <input
                    type="email"
                    id="contact-sender-email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="youremail@example.com"
                    className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3.5 py-2 text-white placeholder-neutral-600 focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-neutral-400 mb-1.5">
                  Subject Line
                </label>
                <input
                  type="text"
                  id="contact-subject-input"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Project specifications, assistance, or partnership inquiry..."
                  className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3.5 py-2 font-mono text-xs text-white placeholder-neutral-600 focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-neutral-400 mb-1.5">
                  Message Content *
                </label>
                <textarea
                  id="contact-message-textarea"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message here..."
                  className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3.5 py-2.5 font-mono text-xs text-white placeholder-neutral-600 focus:border-emerald-500 focus:outline-none leading-relaxed"
                />
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={getMailtoUrl()}
                  id="contact-send-email-btn"
                  onClick={handleSendTrigger}
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-neutral-950 hover:bg-emerald-400 transition-all shadow-md shadow-emerald-950/30"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Send to My Email</span>
                </a>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  id="contact-send-whatsapp-btn"
                  className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-950/40 px-4 py-2.5 font-mono text-xs font-semibold text-emerald-300 hover:bg-emerald-900/50 hover:border-emerald-400 transition-all"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>Send via WhatsApp</span>
                </a>

                <button
                  type="button"
                  id="contact-copy-formatted-btn"
                  onClick={handleCopyFormattedInquiry}
                  className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-2.5 font-mono text-xs font-medium text-neutral-300 hover:border-neutral-700 hover:text-white transition-colors"
                >
                  {messageCopied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-neutral-400" />
                      <span>Copy Text</span>
                    </>
                  )}
                </button>
              </div>

              {isSentFeedback && (
                <div className="mt-3 rounded-lg border border-emerald-500/30 bg-emerald-950/40 p-3 font-mono text-xs text-emerald-300 flex items-center gap-2 animate-in fade-in duration-200">
                  <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Your email client is opening with the message addressed to {PERSONAL_INFO.email}!</span>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
