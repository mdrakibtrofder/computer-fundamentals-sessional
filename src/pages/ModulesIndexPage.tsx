import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Bookmark,
  BookOpen,
  FileSpreadsheet,
  FileText,
  ListChecks,
  Presentation,
  Terminal,
} from 'lucide-react';
import { courseModules } from '../content/modules';
import { useCourse } from '../context/CourseContext';

export function ModulesIndexPage() {
  const { completedLessons, isBookmarked, toggleBookmark } = useCourse();

  const getIcon = (slug: string) => {
    switch (slug) {
      case 'basics':
        return Terminal;
      case 'word':
        return FileText;
      case 'powerpoint':
        return Presentation;
      default:
        return FileSpreadsheet;
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 space-y-8">
      <div className="space-y-2">
        <div className="text-xs font-semibold text-[#4F46E5] dark:text-indigo-400">
          COURSE REPOSITORY
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
          Learning Modules Library
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
          4 comprehensive modules covering 34 hands-on lessons across Computer Basics, Microsoft Word, Microsoft PowerPoint, and Microsoft Excel.
        </p>
      </div>

      {/* Repository cards matching Screenshot 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courseModules.map((mod) => {
          const Icon = getIcon(mod.slug);
          const doneCount = mod.lessons.filter((l) =>
            completedLessons.includes(l.id)
          ).length;
          const totalMinutes = mod.lessons.reduce(
            (acc, l) => acc + l.durationMinutes,
            0
          );
          const bookmarkKey = `module-${mod.slug}`;
          const saved = isBookmarked(bookmarkKey);

          return (
            <div
              key={mod.slug}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rich Colored Top Banner */}
                <div
                  className={`bg-gradient-to-br ${mod.bannerGradient} p-6 text-white relative`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="px-2.5 py-1 rounded-md bg-white/20 text-xs font-semibold backdrop-blur-xs">
                      {mod.estimatedWeeks}
                    </span>
                    <button
                      type="button"
                      onClick={() => toggleBookmark(bookmarkKey)}
                      aria-label={`Bookmark ${mod.title}`}
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                        saved
                          ? 'bg-white text-slate-900'
                          : 'bg-white/15 hover:bg-white/25 text-white'
                      }`}
                    >
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="mt-6 space-y-1">
                    <div className="text-xs font-medium opacity-80">
                      CSE 2110 · {mod.code}
                    </div>
                    <h2 className="font-display font-bold text-xl sm:text-2xl flex items-center gap-2.5">
                      <Icon className="w-5 h-5 opacity-90 shrink-0" />
                      {mod.title}
                    </h2>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {mod.goal}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400 tabular-nums">
                    <span className="inline-flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      {mod.lessons.length} lessons
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>~{Math.round(totalMinutes / 60)} hrs study</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-700 dark:text-emerald-400 font-semibold">
                      {doneCount}/{mod.lessons.length} completed
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2.5">
                <Link
                  to={`/module/${mod.slug}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-[#4F46E5] hover:bg-[#4338CA] text-white transition-colors"
                >
                  Open Module
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to={`/quizzes?module=${mod.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <ListChecks className="w-4 h-4" />
                  Quiz
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
