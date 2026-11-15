import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, FolderKanban } from 'lucide-react';
import { practiceProjects } from '../content/labsAndProjects';

export function ProjectsPage() {
  const accentColors: Record<string, string> = {
    word: '#2B579A',
    powerpoint: '#D24726',
    excel: '#217346',
    integrated: '#4F46E5',
  };

  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-10 space-y-8">
      <div className="space-y-2">
        <div className="text-xs font-semibold text-[#4F46E5] dark:text-indigo-400">
          PORTFOLIO &amp; CAPSTONE
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
          Practice Projects
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
          Three focused mini projects—one per Office tool—plus the Final Integrated Department Literary Festival pack combining Word, PowerPoint, and Excel.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {practiceProjects.map((proj) => {
          const accent = accentColors[proj.moduleSlug] ?? '#4F46E5';
          const isIntegrated = proj.moduleSlug === 'integrated';
          return (
            <div
              key={proj.id}
              className={`bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs flex flex-col justify-between gap-5 ${
                isIntegrated ? 'md:col-span-2 bg-gradient-to-br from-white to-indigo-50/40 dark:from-slate-900 dark:to-indigo-950/20' : ''
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span
                    className="inline-flex items-center gap-2 text-xs font-bold"
                    style={{ color: accent }}
                  >
                    <FolderKanban className="w-4 h-4" />
                    {isIntegrated ? 'Capstone Project' : `Mini Project ${proj.number}`} · {proj.toolLabel}
                  </span>
                </div>

                <div>
                  <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                    {proj.title}
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Required deliverables
                  </div>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    {proj.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                {proj.moduleSlug !== 'integrated' ? (
                  <Link
                    to={`/module/${proj.moduleSlug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4F46E5] dark:text-indigo-400 hover:underline"
                  >
                    Review {proj.toolLabel} Lessons
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <Link
                    to="/resources"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4F46E5] dark:text-indigo-400 hover:underline"
                  >
                    Download Starter Practice Files
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
