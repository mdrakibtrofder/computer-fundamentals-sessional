import { useState } from 'react';
import { ChevronDown, ClipboardCheck, HelpCircle } from 'lucide-react';
import { markDistribution, vivaQuestions } from '../content/referenceData';
import { standardLabRubric } from '../content/labsAndProjects';

export function AssessmentPage() {
  const [openViva, setOpenViva] = useState<number | null>(1);

  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-10 space-y-10">
      <div className="space-y-2">
        <div className="text-xs font-semibold text-[#4F46E5] dark:text-indigo-400">
          EXAM FORMAT &amp; RUBRICS
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
          Assessment &amp; Exam Guide
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl">
          Suggested mark breakdown, Lab Mid and Lab Final practical formats, and 12 sample oral viva questions. Confirm exact mark splits with your official BAUST course outline.
        </p>
      </div>

      {/* Marks Split & Standard Lab Rubric */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
          <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60">
            <h2 className="font-display font-bold text-lg text-slate-900 dark:text-white">
              Suggested Marks Split (100 Marks)
            </h2>
          </div>
          <table className="w-full text-sm tabular-nums">
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {markDistribution.map((row) => (
                <tr key={row.component}>
                  <td className="py-3 px-5 text-slate-700 dark:text-slate-300">
                    {row.component}
                  </td>
                  <td className="py-3 px-5 text-right font-mono font-semibold text-slate-900 dark:text-white">
                    {row.marks}
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

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
          <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60">
            <h2 className="font-display font-bold text-lg text-slate-900 dark:text-white">
              Weekly Lab Grading Rubric (10 Marks)
            </h2>
          </div>
          <table className="w-full text-sm tabular-nums">
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {standardLabRubric.map((row) => (
                <tr key={row.criterion}>
                  <td className="py-3 px-5 text-slate-700 dark:text-slate-300">
                    {row.criterion}
                  </td>
                  <td className="py-3 px-5 text-right font-mono font-semibold text-slate-900 dark:text-white">
                    {row.marks}
                  </td>
                </tr>
              ))}
              <tr className="bg-slate-50 dark:bg-slate-950 font-bold">
                <td className="py-3 px-5 text-slate-900 dark:text-white">Total per lab</td>
                <td className="py-3 px-5 text-right font-mono text-emerald-700 dark:text-emerald-400">
                  10
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Lab Mid & Lab Final Formats */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#D24726]">
            <ClipboardCheck className="w-4 h-4" />
            30 Minutes Practical · 20 Marks
          </div>
          <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white">
            Lab Mid Format
          </h2>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Students receive a printed or projected single slide or one-page document and recreate it from scratch in 30 minutes (for example, the &ldquo;Basic Organization of a Computer System&rdquo; slide).
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Marked on: text formatting, shapes and arrows, table, bullet list, footer with Name/ID/Section, file saved cleanly as{' '}
            <code className="font-mono text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
              StudentID_LabMid.pptx
            </code>
            , and overall neatness.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#4F46E5] dark:text-indigo-400">
            <ClipboardCheck className="w-4 h-4" />
            60–90 Minutes Practical · 30 Marks
          </div>
          <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white">
            Lab Final Format
          </h2>
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li>
              <strong className="font-semibold text-slate-900 dark:text-white">Part A — Word (10 marks):</strong>{' '}
              Format a given raw text into an academic report with Heading styles, automatic TOC, table, header/footer, and page numbers.
            </li>
            <li>
              <strong className="font-semibold text-slate-900 dark:text-white">Part B — PowerPoint (8 marks):</strong>{' '}
              Create 5 structured slides from given content with a consistent theme, chart, and purposeful animation.
            </li>
            <li>
              <strong className="font-semibold text-slate-900 dark:text-white">Part C — Excel (12 marks):</strong>{' '}
              Build a class result sheet using SUM, AVERAGE, nested IF grading, COUNTIF, and a summary chart.
            </li>
          </ul>
        </div>
      </section>

      {/* Sample Viva Questions */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-[#4F46E5]" />
          <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
            Sample Viva Questions (12)
          </h2>
        </div>

        <div className="space-y-3">
          {vivaQuestions.map((vq) => {
            const isOpen = openViva === vq.id;
            return (
              <div
                key={vq.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenViva(isOpen ? null : vq.id)}
                  className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
                >
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-semibold text-[#4F46E5] dark:text-indigo-400">
                      Question {vq.id} · {vq.topic}
                    </span>
                    <div className="font-display font-semibold text-sm sm:text-base text-slate-900 dark:text-white">
                      {vq.question}
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 pt-1 border-t border-slate-100 dark:border-slate-800 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {vq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
