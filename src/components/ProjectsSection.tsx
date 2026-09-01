import React, { useState, useMemo } from 'react';
import { Search, Filter, ArrowUpRight, CheckCircle2, Code2, Sparkles, ExternalLink, Terminal } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Full-stack', 'Education & Exam', 'Business Tools', 'Realtime & Systems'];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.techStack.some(t => t.toLowerCase().includes(q)) ||
        project.number.includes(q) ||
        project.status.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'Delivered':
        return 'border-emerald-500/40 bg-emerald-950/40 text-emerald-300';
      case 'In progress':
        return 'border-amber-500/40 bg-amber-950/40 text-amber-300';
      case 'National exam project':
        return 'border-blue-500/40 bg-blue-950/40 text-blue-300';
      case 'Prototype':
        return 'border-purple-500/40 bg-purple-950/40 text-purple-300';
      default:
        return 'border-neutral-700 bg-neutral-800 text-neutral-300';
    }
  };

  return (
    <section id="projects" className="border-b border-neutral-900 bg-neutral-950 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-neutral-800 pb-6 mb-10">
          <div className="flex items-baseline gap-3">
            <div className="h-8 w-1.5 rounded-full bg-emerald-400"></div>
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Projects
              </h2>
              <p className="font-mono text-xs text-neutral-400">
                Selected full-stack software, national exam deliverables, and technical prototypes
              </p>
            </div>
          </div>

          <div className="font-mono text-xs text-neutral-400">
            Showing <strong className="text-emerald-400 font-bold">{filteredProjects.length}</strong> of {PROJECTS.length} Systems
          </div>
        </div>

        {/* Controls: Search and Categories */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                id={`filter-category-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-lg px-3 py-1.5 font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-emerald-500 text-neutral-950 font-bold shadow-md shadow-emerald-950/40'
                    : 'border border-neutral-800 bg-neutral-900 text-neutral-300 hover:border-neutral-700 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search input */}
          <div className="relative min-w-[240px]">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-400" />
            <input
              type="text"
              id="projects-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech (e.g. JWT, Redis, lowdb)..."
              className="w-full rounded-lg border border-neutral-800 bg-neutral-900 py-2 pl-9 pr-3 font-mono text-xs text-white placeholder-neutral-500 focus:border-emerald-500 focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 font-mono text-[10px] text-neutral-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group relative flex flex-col justify-between rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm transition-all hover:border-neutral-700 hover:bg-neutral-900/90 hover:shadow-xl"
            >
              <div>
                {/* Card Header: Category, Role & Status */}
                <div className="flex items-center justify-between font-mono text-xs border-b border-neutral-800/80 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-emerald-400 text-[11px] uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-neutral-600">·</span>
                    <span className="text-[11px] text-neutral-400">
                      {project.role}
                    </span>
                  </div>

                  <span className={`rounded border px-2 py-0.5 text-[10px] font-semibold tracking-wide ${getStatusBadge(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-display text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>

                {/* Tagline */}
                <p className="mt-1 font-mono text-[11px] text-neutral-400">
                  {project.tagline}
                </p>

                {/* Main Description */}
                <p className="mt-3 text-sm text-neutral-300 leading-relaxed font-sans line-clamp-4">
                  {project.description}
                </p>
              </div>

              {/* Card Footer: Tech Stack Badges & Details Action */}
              <div className="mt-6 pt-4 border-t border-neutral-800/60">
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded bg-neutral-950 border border-neutral-800 px-2 py-0.5 font-mono text-[11px] font-medium text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Trigger */}
                <button
                  type="button"
                  id={`inspect-project-${project.number}`}
                  onClick={() => onSelectProject(project)}
                  className="flex w-full items-center justify-between rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 font-mono text-xs font-semibold text-neutral-300 group-hover:border-emerald-500/50 group-hover:text-emerald-400 group-hover:bg-neutral-900 transition-all"
                >
                  <span>Inspect Architecture & Specs</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Empty state if search finds nothing */}
        {filteredProjects.length === 0 && (
          <div className="rounded-xl border border-dashed border-neutral-800 p-12 text-center">
            <Code2 className="mx-auto h-8 w-8 text-neutral-600 mb-3" />
            <p className="font-mono text-sm text-neutral-400">
              No projects found matching "{searchQuery}" in category "{activeCategory}"
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 rounded-lg bg-neutral-800 px-4 py-2 font-mono text-xs font-semibold text-neutral-200 hover:bg-neutral-700"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
