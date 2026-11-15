import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckSquare,
  Clock,
  FileCheck,
  Printer,
  Square,
} from 'lucide-react';
import { labSheets, standardLabRubric } from '../content/labsAndProjects';
import { allLessons, getModuleBySlug } from '../content/modules';
import { useCourse } from '../context/CourseContext';
import { NotFoundPage } from './NotFoundPage';

export function LabDetailPage() {
  const { labId } = useParams<{ labId: string }>();
  const lab = labSheets.find((l) => l.id === labId);
  const { completedLabTasks, toggleLabTask } = useCourse();

  if (!lab) return <NotFoundPage />;

  const mod = getModuleBySlug(lab.moduleSlug);
  const labIdx = labSheets.findIndex((l) => l.id === lab.id);
  const prevLab = labIdx > 0 ? labSheets[labIdx - 1] : null;
  const nextLab = labIdx < labSheets.length - 1 ? labSheets[labIdx + 1] : null;

  const doneCount = lab.tasks.filter(
    (_, idx) => completedLabTasks[`${lab.id}-${idx}`]
  ).length;

  return (
    <div className="max-w-[960px] mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-8">
      {/* Breadcrumb + Print Action */}
      <div className="flex flex-wrap items-center justify-between gap-3 no-print">
        <nav aria-label="Breadcrumb" className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
          <Link to="/" className="hover:text-[#4F46E5]">Home</Link>
          <span>/</span>
          <Link to="/labs" className="hover:text-[#4F46E5]">Labs</Link>
          <span>/</span>
          <span className="font-semibold text-slate-900 dark:text-white">
            Lab {lab.number}
          </span>
        </nav>

        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#4F46E5] hover:bg-[#4338CA] text-white transition-colors cursor-pointer"
        >
          <Printer className="w-4 h-4" />
          Download Lab Sheet (Print / PDF)
        </button>
      </div>

      {/* Lab Header Card */}
      <header className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 tabular-nums">
          <span className="font-bold text-[#4F46E5] dark:text-indigo-400">
            CSE 2110 · Lab {lab.number}
          </span>
          <span>·</span>
          <span>{lab.week}</span>
          <span>·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {lab.timeMinutes} min
          </span>
          {mod && (
            <>
              <span>·</span>
              <span>{mod.shortTitle}</span>
            </>
          )}
        </div>

        <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
          Lab {lab.number}: {lab.title}
        </h1>

        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          <strong className="font-semibold text-slate-900 dark:text-white">Objective: </strong>
          {lab.objective}
        </p>

        {/* Linked Lessons */}
        <div className="pt-2 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" />
            Lessons needed:
          </span>
          {lab.lessonsNeeded.map((lid) => {
            const found = allLessons.find((l) => l.id === lid);
            if (!found) return null;
            return (
              <Link
                key={lid}
                to={`/module/${found.moduleSlug}/${found.id}`}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-indigo-50 hover:text-[#4F46E5] dark:hover:bg-indigo-950 transition-colors"
              >
                Lesson {found.id}
              </Link>
            );
          })}
        </div>
      </header>

      {/* Interactive Task Checklist */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4 print-break-avoid">
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-display font-bold text-lg text-slate-900 dark:text-white">
            Lab Tasks Checklist
          </h2>
          <span className="text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400 tabular-nums">
            {doneCount}/{lab.tasks.length} completed
          </span>
        </div>

        <ul className="space-y-2.5">
          {lab.tasks.map((task, idx) => {
            const checked = Boolean(completedLabTasks[`${lab.id}-${idx}`]);
            return (
              <li key={idx}>
                <button
                  type="button"
                  onClick={() => toggleLabTask(lab.id, idx)}
                  className={`w-full flex items-start gap-3 p-3.5 rounded-xl border text-left transition-colors cursor-pointer ${
                    checked
                      ? 'bg-emerald-50/60 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900 text-slate-600 dark:text-slate-400'
                      : 'bg-slate-50/70 dark:bg-slate-950/50 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-[#4F46E5]'
                  }`}
                >
                  {checked ? (
                    <CheckSquare className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <Square className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  )}
                  <span className={`text-sm leading-relaxed ${checked ? 'line-through' : ''}`}>
                    {task}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Files to Submit & Marking Rubric */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 print-break-avoid">
        <section className="md:col-span-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-3">
          <div className="flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-[#4F46E5]" />
            <h2 className="font-display font-bold text-lg text-slate-900 dark:text-white">
              Files to Submit
            </h2>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {lab.submitFiles}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Save inside <code className="font-mono">D:\CSE2110_YourID\Labs</code> and follow the <code className="font-mono">StudentID_LabNN_Topic</code> naming rule.
          </p>
        </section>

        <section className="md:col-span-7 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
          <div className="px-5 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60">
            <h2 className="font-display font-bold text-base text-slate-900 dark:text-white">
              Standard Lab Marking Rubric (10 Marks)
            </h2>
          </div>
          <table className="w-full text-sm tabular-nums">
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {standardLabRubric.map((row) => (
                <tr key={row.criterion}>
                  <td className="py-2.5 px-5 text-slate-700 dark:text-slate-300">
                    {row.criterion}
                  </td>
                  <td className="py-2.5 px-5 text-right font-mono font-semibold text-slate-900 dark:text-white">
                    {row.marks}
                  </td>
                </tr>
              ))}
              <tr className="bg-slate-50 dark:bg-slate-950 font-bold">
                <td className="py-2.5 px-5 text-slate-900 dark:text-white">Total</td>
                <td className="py-2.5 px-5 text-right font-mono text-[#4F46E5] dark:text-indigo-400">
                  10
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      {/* Previous / Next Lab Navigation */}
      <nav
        aria-label="Lab Pagination"
        className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 no-print"
      >
        {prevLab ? (
          <Link
            to={`/labs/${prevLab.id}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-[#4F46E5]"
          >
            <ArrowLeft className="w-4 h-4" />
            Lab {prevLab.number}
          </Link>
        ) : (
          <div />
        )}
        {nextLab && (
          <Link
            to={`/labs/${nextLab.id}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-sm font-semibold text-white"
          >
            Lab {nextLab.number}: {nextLab.title}
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </nav>
    </div>
  );
}
