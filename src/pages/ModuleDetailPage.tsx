import { Link, useParams } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FlaskConical,
  ListChecks,
} from 'lucide-react';
import { getModuleBySlug } from '../content/modules';
import { labSheets } from '../content/labsAndProjects';
import { useCourse } from '../context/CourseContext';
import { ExcelPlayground } from '../components/ExcelPlayground';
import { NotFoundPage } from './NotFoundPage';

export function ModuleDetailPage() {
  const { moduleId } = useParams<{ moduleId: string }>();
  const mod = getModuleBySlug(moduleId);
  const { completedLessons } = useCourse();

  if (!mod) return <NotFoundPage />;

  const doneCount = mod.lessons.filter((l) =>
    completedLessons.includes(l.id)
  ).length;
  const pct = Math.round((doneCount / mod.lessons.length) * 100);
  const linkedLabs = labSheets.filter((lab) => mod.linkedLabs.includes(lab.id));

  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-10 space-y-10">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
        <Link to="/" className="hover:text-[#4F46E5]">Home</Link>
        <span>/</span>
        <Link to="/modules" className="hover:text-[#4F46E5]">Modules</Link>
        <span>/</span>
        <span className="font-semibold text-slate-800 dark:text-slate-200">{mod.code}</span>
      </nav>

      {/* Module Banner */}
      <div className={`rounded-3xl bg-gradient-to-br ${mod.bannerGradient} p-6 sm:p-8 text-white shadow-sm space-y-4`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="px-3 py-1 rounded-lg bg-white/20 text-xs font-semibold">
            {mod.code} · {mod.estimatedWeeks}
          </span>
          <span className="text-xs font-mono tabular-nums opacity-90">
            {doneCount}/{mod.lessons.length} lessons complete ({pct}%)
          </span>
        </div>

        <h1 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight">
          {mod.title}
        </h1>
        <p className="text-sm sm:text-base opacity-90 max-w-3xl leading-relaxed">
          {mod.goal}
        </p>

        <div className="pt-2 flex flex-wrap gap-3">
          <Link
            to={`/module/${mod.slug}/${mod.lessons[0].id}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 transition-colors"
          >
            Start Lesson {mod.lessons[0].id}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to={`/quizzes?module=${mod.slug}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-sm transition-colors"
          >
            <ListChecks className="w-4 h-4" />
            Module Quiz
          </Link>
        </div>
      </div>

      {/* Lesson List */}
      <section className="space-y-4">
        <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
          Lessons in {mod.shortTitle}
        </h2>
        <div className="space-y-3">
          {mod.lessons.map((lesson) => {
            const done = completedLessons.includes(lesson.id);
            return (
              <Link
                key={lesson.id}
                to={`/module/${mod.slug}/${lesson.id}`}
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#4F46E5] dark:hover:border-indigo-500 shadow-xs transition-all"
              >
                <div className="flex items-start sm:items-center gap-3.5 min-w-0">
                  <span
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono text-xs font-bold shrink-0 ${
                      done
                        ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {done ? <CheckCircle2 className="w-5 h-5" /> : lesson.id}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display font-semibold text-base text-slate-900 dark:text-white group-hover:text-[#4F46E5] dark:group-hover:text-indigo-400 transition-colors">
                      Lesson {lesson.id}: {lesson.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-0.5 tabular-nums">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {lesson.durationMinutes} min
                      </span>
                      <span>·</span>
                      <span>{lesson.difficulty}</span>
                      <span>·</span>
                      <span>{lesson.outcomes.length} outcomes</span>
                    </div>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#4F46E5] dark:text-indigo-400 shrink-0 self-end sm:self-center">
                  Open Lesson
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Excel Interactive Playground on Module 3 */}
      {mod.slug === 'excel' && (
        <section id="playground" className="space-y-4 scroll-mt-20">
          <div>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
              Practice Live in the Browser
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
              Experiment with student marks and live formulas without installing anything.
            </p>
          </div>
          <ExcelPlayground />
        </section>
      )}

      {/* Linked Labs & Quiz */}
      <section className="space-y-4">
        <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white">
          Linked Lab Sheets
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {linkedLabs.map((lab) => (
            <Link
              key={lab.id}
              to={`/labs/${lab.id}`}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-colors flex items-start justify-between gap-3"
            >
              <div className="space-y-1">
                <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                  <FlaskConical className="w-3.5 h-3.5" />
                  Lab {lab.number} · {lab.week}
                </div>
                <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                  {lab.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                  {lab.objective}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
