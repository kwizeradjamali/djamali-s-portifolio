import React, { useState } from 'react';
import { BookOpen, GraduationCap, CheckCircle2, Award, ChevronRight, Binary, Database, LayoutTemplate, ShieldCheck } from 'lucide-react';
import { ABOUT_DETAILS, CURRICULUM_MODULES, PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [activeCurriculumTab, setActiveCurriculumTab] = useState<number>(0);

  return (
    <section id="about" className="border-b border-neutral-900 bg-neutral-950 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-baseline gap-3 border-b border-neutral-800 pb-6 mb-12">
          <div className="h-8 w-1.5 rounded-full bg-emerald-400"></div>
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              About
            </h2>
            <p className="font-mono text-xs text-neutral-400">
              Background, instruction philosophy & technical scope
            </p>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-6 text-neutral-300 leading-relaxed text-base sm:text-lg">
              <p className="border-l-2 border-emerald-500 pl-4 text-white font-medium">
                {ABOUT_DETAILS.paragraph1}
              </p>
              <p className="text-neutral-400">
                {ABOUT_DETAILS.paragraph2}
              </p>
            </div>

            {/* Teaching philosophy quote box */}
            <div className="rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-5 font-mono text-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-11 w-11 shrink-0 flex items-center justify-center rounded-full border-2 border-emerald-500/40 bg-emerald-950/50 text-emerald-400 shadow-sm">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-xs">
                    <GraduationCap className="h-4 w-4" />
                    <span>Djamali · Pedagogy & Practical Craft</span>
                  </div>
                  <div className="text-[11px] text-neutral-400 font-mono">
                    IT & Software Instructor, Kiyumba TSS
                  </div>
                </div>
              </div>
              <p className="text-neutral-300 font-sans text-sm leading-relaxed">
                "Technical education in software is most effective when students work with real database schemas, authentic business rules, and time-tested architecture patterns rather than abstract toy examples."
              </p>
            </div>
          </div>

          {/* Right Column: Spec Cards (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-400 border-b border-neutral-800 pb-3 mb-5">
                Technical & Teaching Specifications
              </h3>

              <div className="divide-y divide-neutral-800/80 font-mono text-xs">
                {ABOUT_DETAILS.specs.map((spec, index) => (
                  <div key={index} className="py-3.5 first:pt-0 last:pb-0">
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">
                      {spec.label}
                    </span>
                    <span className="text-sm font-semibold text-neutral-100 block">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* RTB Curriculum & Teaching Competency Explorer */}
        <div className="mt-16 rounded-xl border border-neutral-800 bg-neutral-900/30 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-6 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
                <BookOpen className="h-3.5 w-3.5" />
                <span>Rwanda TVET Board Curriculum Matrix</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mt-1">
                RTB RQF Level 3 & Level 5 Competencies
              </h3>
            </div>

            {/* Level selector tabs */}
            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              {CURRICULUM_MODULES.map((module, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveCurriculumTab(idx)}
                  className={`rounded-lg px-3 py-1.5 font-medium transition-all ${
                    activeCurriculumTab === idx
                      ? 'bg-emerald-500 text-neutral-950 font-bold'
                      : 'border border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-700'
                  }`}
                >
                  {module.level}
                </button>
              ))}
            </div>
          </div>

          {/* Active Tab Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-7 space-y-4">
              <div>
                <span className="inline-block font-mono text-xs font-semibold text-emerald-400">
                  {CURRICULUM_MODULES[activeCurriculumTab].level}
                </span>
                <h4 className="text-lg font-bold text-white mt-0.5">
                  {CURRICULUM_MODULES[activeCurriculumTab].title}
                </h4>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed font-sans">
                  {CURRICULUM_MODULES[activeCurriculumTab].description}
                </p>
              </div>

              <div className="pt-2">
                <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 block mb-2">
                  Target Learning Outcomes
                </span>
                <div className="rounded-lg border border-neutral-800 bg-neutral-950/70 p-3.5 text-xs text-neutral-300 font-mono">
                  ✓ {CURRICULUM_MODULES[activeCurriculumTab].outcome}
                </div>
              </div>
            </div>

            <div className="md:col-span-5 rounded-lg border border-neutral-800/80 bg-neutral-950/50 p-4">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 block mb-3">
                Core Module Syllabus Topics
              </span>
              <ul className="space-y-2 font-mono text-xs">
                {CURRICULUM_MODULES[activeCurriculumTab].topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-2 text-neutral-300">
                    <ChevronRight className="h-3.5 w-3.5 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
