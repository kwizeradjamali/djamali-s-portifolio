import React, { useState } from 'react';
import { Layers, Check, Terminal, Cpu, Database, Radio, BarChart3, GraduationCap, ChevronRight } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { SkillCategory } from '../types';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(SKILL_CATEGORIES[0].category);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return <Layers className="h-4 w-4 text-emerald-400" />;
      case 'Backend':
        return <Cpu className="h-4 w-4 text-emerald-400" />;
      case 'Data':
        return <Database className="h-4 w-4 text-emerald-400" />;
      case 'Realtime':
        return <Radio className="h-4 w-4 text-emerald-400" />;
      case 'Reporting & Viz':
        return <BarChart3 className="h-4 w-4 text-emerald-400" />;
      case 'Teaching & Assessment':
        return <GraduationCap className="h-4 w-4 text-emerald-400" />;
      default:
        return <Terminal className="h-4 w-4 text-emerald-400" />;
    }
  };

  const currentCategoryObj = SKILL_CATEGORIES.find(c => c.category === selectedCategory) || SKILL_CATEGORIES[0];

  return (
    <section id="skills" className="border-b border-neutral-900 bg-neutral-950 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-baseline gap-3 border-b border-neutral-800 pb-6 mb-12">
          <div className="h-8 w-1.5 rounded-full bg-emerald-400"></div>
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Skills
            </h2>
            <p className="font-mono text-xs text-neutral-400">
              Technical proficiencies, frameworks, datastores, and assessment methodologies
            </p>
          </div>
        </div>

        {/* Structured Table Layout */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 overflow-hidden backdrop-blur-sm mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              
              {/* Table Header */}
              <thead className="border-b border-neutral-800 bg-neutral-950/80 text-[11px] uppercase tracking-wider text-neutral-400">
                <tr>
                  <th scope="col" className="px-6 py-4 font-bold text-white w-52 sm:w-64">CATEGORY</th>
                  <th scope="col" className="px-6 py-4 font-bold text-white">ITEMS</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-neutral-800/70">
                {SKILL_CATEGORIES.map((skill) => (
                  <tr
                    key={skill.category}
                    onClick={() => setSelectedCategory(skill.category)}
                    className={`cursor-pointer transition-colors ${
                      selectedCategory === skill.category
                        ? 'bg-neutral-800/80'
                        : 'hover:bg-neutral-900/80'
                    }`}
                  >
                    <td className="px-6 py-4 font-semibold text-white">
                      <div className="flex items-center gap-2.5">
                        {getCategoryIcon(skill.category)}
                        <span className={selectedCategory === skill.category ? 'text-emerald-400 font-bold' : ''}>{skill.category}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-neutral-300 font-sans sm:font-mono">
                      <div className="flex flex-wrap gap-1.5">
                        {skill.items.map((item, idx) => (
                          <span
                            key={idx}
                            className="inline-block rounded bg-neutral-950 border border-neutral-800 px-2 py-0.5 text-xs text-neutral-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        {/* Selected Skill Drilldown Card */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-700 bg-neutral-950">
                {getCategoryIcon(currentCategoryObj.category)}
              </div>
              <div>
                <span className="font-mono text-xs text-emerald-400 font-semibold">
                  {currentCategoryObj.proficiencyLevel}
                </span>
                <h3 className="font-display text-xl font-bold text-white">
                  {currentCategoryObj.category} Domain Mastery
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              {SKILL_CATEGORIES.map((s) => (
                <button
                  key={s.category}
                  type="button"
                  onClick={() => setSelectedCategory(s.category)}
                  className={`rounded-lg px-2.5 py-1 font-mono text-xs font-semibold transition-all ${
                    selectedCategory === s.category
                      ? 'bg-emerald-500 text-neutral-950 shadow-sm'
                      : 'border border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white'
                  }`}
                >
                  {s.category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-7 space-y-3">
              <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                {currentCategoryObj.description}
              </p>
              <div className="pt-2">
                <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 block mb-2">
                  Applied Production & Classroom Competencies
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentCategoryObj.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-md border border-neutral-800 bg-neutral-950 px-2.5 py-1 font-mono text-xs text-emerald-400"
                    >
                      ✓ {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-5 rounded-lg border border-neutral-800 bg-neutral-950/70 p-4 font-mono text-xs space-y-2">
              <div className="text-neutral-400 uppercase tracking-wider text-[10px]">
                Active Verification Standard
              </div>
              <div className="text-white font-medium">
                Tested across RTB National Examination scenarios and production MERN architectures.
              </div>
              <div className="text-emerald-400 text-[11px] pt-1">
                Zero legacy lock-in · Standard ECMAScript & Clean Architecture
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
