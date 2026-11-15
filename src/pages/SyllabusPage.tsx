import { Link } from 'react-router-dom';
import { CalendarDays, CheckCircle2, ShieldAlert } from 'lucide-react';
import {
  courseInfo,
  courseObjectives,
  courseOutcomes,
  fourteenWeekPlan,
  labRules,
  markDistribution,
} from '../content/referenceData';

export function SyllabusPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-10 space-y-10">
      <div className="space-y-2">
        <div className="text-xs font-semibold text-[#4F46E5] dark:text-indigo-400">
          COURSE OVERVIEW &amp; SYLLABUS
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
          CSE 2110 — Computer Fundamentals Sessional
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl">
          Complete syllabus, course outcomes, 14-week lab roadmap, lab rules, and mark split. Confirm official credit hours and exam policies with your course teacher’s handout.
        </p>
      </div>

      {/* Course Info Table */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
        <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60">
          <h2 className="font-display font-bold text-lg text-slate-900 dark:text-white">
            Course Information
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {courseInfo.map((row) => (
                <tr key={row.item}>
                  <th className="py-3.5 px-5 font-semibold text-slate-900 dark:text-slate-100 w-44 sm:w-56 bg-slate-50/40 dark:bg-slate-950/30">
                    {row.item}
                  </th>
                  <td className="py-3.5 px-5 text-slate-700 dark:text-slate-300">
                    {row.detail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Objectives & Outcomes */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-3">
          <h2 className="font-display font-bold text-lg text-slate-900 dark:text-white">
            Course Objective
          </h2>
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {courseObjectives}
          </p>
        </div>

        <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
          <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60">
            <h2 className="font-display font-bold text-lg text-slate-900 dark:text-white">
              Course Outcomes (CO1–CO4)
            </h2>
          </div>
          <div className="divide-y divide-slate-200 dark:divide-slate-800">
            {courseOutcomes.map((co) => (
              <div key={co.code} className="p-4 px-5 flex items-start gap-4 text-sm">
                <span className="font-mono font-bold text-[#4F46E5] dark:text-indigo-400 shrink-0">
                  {co.code}
                </span>
                <span className="text-slate-700 dark:text-slate-300">
                  {co.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14-Week Plan */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
        <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60 flex items-center gap-2">
          <CalendarDays className="w-5 h-5 text-[#4F46E5]" />
          <h2 className="font-display font-bold text-lg text-slate-900 dark:text-white">
            14-Week Lab Plan
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left tabular-nums">
            <thead className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-400">
              <tr>
                <th className="py-3 px-5">Week</th>
                <th className="py-3 px-5">Topic</th>
                <th className="py-3 px-5">Lessons</th>
                <th className="py-3 px-5">Lab / Exam</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {fourteenWeekPlan.map((row) => {
                const labNumMatch = /^Lab (\d+)$/i.exec(row.lab);
                const labLink = labNumMatch
                  ? `/labs/lab-${labNumMatch[1].padStart(2, '0')}`
                  : null;
                return (
                  <tr
                    key={row.week}
                    className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40"
                  >
                    <td className="py-3 px-5 font-mono font-semibold text-slate-900 dark:text-white">
                      Week {row.week}
                    </td>
                    <td className="py-3 px-5 text-slate-700 dark:text-slate-300">
                      {row.topic}
                    </td>
                    <td className="py-3 px-5 font-mono text-xs text-slate-600 dark:text-slate-400">
                      {row.lessons}
                    </td>
                    <td className="py-3 px-5 font-medium">
                      {labLink ? (
                        <Link
                          to={labLink}
                          className="text-[#4F46E5] dark:text-indigo-400 hover:underline"
                        >
                          {row.lab}
                        </Link>
                      ) : (
                        <span className="text-slate-700 dark:text-slate-300">
                          {row.lab}
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Lab Rules & Mark Distribution */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-amber-600" />
            <h2 className="font-display font-bold text-lg text-slate-900 dark:text-white">
              Lab Rules &amp; Submission Policy
            </h2>
          </div>
          <ul className="space-y-2.5 text-sm text-slate-700 dark:text-slate-300">
            {labRules.map((rule, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
          <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60">
            <h2 className="font-display font-bold text-lg text-slate-900 dark:text-white">
              Mark Distribution (100 Marks)
            </h2>
          </div>
          <table className="w-full text-sm tabular-nums">
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {markDistribution.map((item) => (
                <tr key={item.component}>
                  <td className="py-3 px-5 text-slate-700 dark:text-slate-300">
                    {item.component}
                  </td>
                  <td className="py-3 px-5 text-right font-mono font-semibold text-slate-900 dark:text-white">
                    {item.marks}
                  </td>
                </tr>
              ))}
              <tr className="bg-slate-50 dark:bg-slate-950 font-bold">
                <td className="py-3 px-5 text-slate-900 dark:text-white">Total</td>
                <td className="py-3 px-5 text-right font-mono text-[#4F46E5] dark:text-indigo-400">
                  100
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
