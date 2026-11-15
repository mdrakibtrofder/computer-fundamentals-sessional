import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, CheckCircle2, Eye, FlaskConical, Search } from 'lucide-react';
import { labSheets } from '../content/labsAndProjects';
import { courseModules } from '../content/modules';
import { useCourse } from '../context/CourseContext';
import { ModuleSlug } from '../types/course';

export function LabsPage() {
  const [filter, setFilter] = useState<'all' | ModuleSlug>('all');
  const [query, setQuery] = useState('');
  const { completedLabTasks, isBookmarked, toggleBookmark } = useCourse();

  const filteredLabs = useMemo(() => {
    const q = query.trim().toLowerCase();
    return labSheets.filter((lab) => {
      if (filter !== 'all' && lab.moduleSlug !== filter) return false;
      if (
        q &&
        !lab.title.toLowerCase().includes(q) &&
        !lab.objective.toLowerCase().includes(q)
      ) {
        return false;
      }
      return true;
    });
  }, [filter, query]);

  const filterTabs: { id: 'all' | ModuleSlug; label: string; count: number }[] = [
    { id: 'all', label: 'All', count: labSheets.length },
    { id: 'basics', label: 'Computer Basics', count: labSheets.filter((l) => l.moduleSlug === 'basics').length },
    { id: 'word', label: 'MS Word', count: labSheets.filter((l) => l.moduleSlug === 'word').length },
    { id: 'powerpoint', label: 'PowerPoint', count: labSheets.filter((l) => l.moduleSlug === 'powerpoint').length },
    { id: 'excel', label: 'MS Excel', count: labSheets.filter((l) => l.moduleSlug === 'excel').length },
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Header matching Screenshot 3 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="text-xs font-semibold text-[#4F46E5] dark:text-indigo-400">
            PRACTICAL REPOSITORY
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Lab Sheets Library
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            12 guided 90-minute lab sheets with interactive checklists, rubrics, and A4 print support.
          </p>
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search labs or topics..."
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
          />
        </div>
      </div>

      {/* Filter Tabs matching Screenshot 3 */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400 mr-1">
          Modules:
        </span>
        {filterTabs.map((tab) => {
          const active = filter === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                active
                  ? 'bg-[#4F46E5] text-white'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-slate-300'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          );
        })}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLabs.map((lab) => {
          const mod = courseModules.find((m) => m.slug === lab.moduleSlug);
          const completedCount = lab.tasks.filter(
            (_, idx) => completedLabTasks[`${lab.id}-${idx}`]
          ).length;
          const bookmarkKey = `lab-${lab.id}`;
          const saved = isBookmarked(bookmarkKey);

          return (
            <div
              key={lab.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div
                  className={`bg-gradient-to-br ${
                    mod?.bannerGradient ?? 'from-[#4338CA] to-[#6D28D9]'
                  } p-5 text-white`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-white/20 text-xs font-semibold">
                      {lab.week}
                    </span>
                    <button
                      type="button"
                      onClick={() => toggleBookmark(bookmarkKey)}
                      aria-label={`Bookmark Lab ${lab.number}`}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                        saved
                          ? 'bg-white text-slate-900'
                          : 'bg-white/15 hover:bg-white/25 text-white'
                      }`}
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="mt-5 space-y-0.5">
                    <div className="text-[11px] font-medium opacity-80">
                      CSE 2110 · {mod?.shortTitle}
                    </div>
                    <h2 className="font-display font-bold text-lg">
                      Lab {lab.number}: {lab.title}
                    </h2>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {lab.objective}
                  </p>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400 tabular-nums">
                    <span className="inline-flex items-center gap-1">
                      <FlaskConical className="w-3.5 h-3.5" />
                      {lab.timeMinutes} min
                    </span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      {completedCount}/{lab.tasks.length} tasks
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                <Link
                  to={`/labs/${lab.id}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#4F46E5] hover:bg-[#4338CA] text-white transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  Open Lab Sheet
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
