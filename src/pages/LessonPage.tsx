import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Bookmark,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Circle,
  Clock,
  ListChecks,
} from 'lucide-react';
import {
  allLessons,
  courseModules,
  getLessonById,
  getModuleBySlug,
} from '../content/modules';
import { useCourse } from '../context/CourseContext';
import {
  CalloutBox,
  FormulaBox,
  GlossaryText,
  RibbonMock,
  ShortcutKey,
  StepList,
  TryItBox,
} from '../components/LessonBlocks';
import { NotFoundPage } from './NotFoundPage';

export function LessonPage() {
  const { moduleId, lessonId } = useParams<{
    moduleId: string;
    lessonId: string;
  }>();
  const mod = getModuleBySlug(moduleId);
  const lesson = getLessonById(moduleId, lessonId);
  const {
    isLessonComplete,
    toggleLessonComplete,
    isBookmarked,
    toggleBookmark,
  } = useCourse();

  const [mobileTreeOpen, setMobileTreeOpen] = useState(false);

  if (!mod || !lesson) return <NotFoundPage />;

  const done = isLessonComplete(lesson.id);
  const bookmarkKey = `lesson-${lesson.id}`;
  const bookmarked = isBookmarked(bookmarkKey);

  // Compute global prev/next lessons across the whole course
  const currentIdx = allLessons.findIndex((l) => l.id === lesson.id);
  const prevLesson = currentIdx > 0 ? allLessons[currentIdx - 1] : null;
  const nextLesson =
    currentIdx >= 0 && currentIdx < allLessons.length - 1
      ? allLessons[currentIdx + 1]
      : null;

  const tocSections = [
    { id: 'outcomes', label: 'Learning outcomes', show: true },
    { id: 'concepts', label: 'Concept explanation', show: true },
    { id: 'steps', label: 'Step-by-step procedures', show: Boolean(lesson.steps?.length) },
    { id: 'formulas', label: 'Key formulas', show: Boolean(lesson.formulas?.length) },
    { id: 'shortcuts', label: 'Keyboard shortcuts', show: Boolean(lesson.shortcuts?.length) },
    { id: 'mistakes', label: 'Common mistakes & fixes', show: Boolean(lesson.commonMistakes?.length) },
    { id: 'try-it', label: 'Try it yourself', show: true },
    { id: 'check-yourself', label: 'Check yourself', show: true },
  ].filter((s) => s.show);

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {/* Top Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mb-6 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400"
      >
        <div className="flex flex-wrap items-center gap-2">
          <Link to="/" className="hover:text-[#4F46E5]">Home</Link>
          <span>/</span>
          <Link to={`/module/${mod.slug}`} className="hover:text-[#4F46E5]">
            {mod.code}: {mod.shortTitle}
          </Link>
          <span>/</span>
          <span className="font-semibold text-slate-900 dark:text-slate-100">
            Lesson {lesson.id}
          </span>
        </div>

        {/* Mobile Module Tree Toggle */}
        <button
          type="button"
          onClick={() => setMobileTreeOpen((v) => !v)}
          className="lg:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-medium text-slate-700 dark:text-slate-200 cursor-pointer"
        >
          Lesson Menu
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform ${mobileTreeOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile Collapsible Lesson Tree */}
      {mobileTreeOpen && (
        <div className="lg:hidden mb-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 space-y-3 max-h-80 overflow-y-auto">
          {courseModules.map((m) => (
            <div key={m.slug} className="space-y-1">
              <div className="text-xs font-bold text-slate-900 dark:text-white px-2 py-1">
                {m.code}: {m.shortTitle}
              </div>
              {m.lessons.map((l) => {
                const active = l.id === lesson.id;
                const lDone = isLessonComplete(l.id);
                return (
                  <Link
                    key={l.id}
                    to={`/module/${m.slug}/${l.id}`}
                    onClick={() => setMobileTreeOpen(false)}
                    className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs ${
                      active
                        ? 'bg-indigo-50 dark:bg-indigo-950/60 text-[#4F46E5] dark:text-indigo-300 font-semibold'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    {lDone ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    ) : (
                      <Circle className="w-3.5 h-3.5 opacity-40 shrink-0" />
                    )}
                    <span className="truncate">
                      {l.id} {l.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sidebar: Module & Lesson Tree */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2 space-y-4">
          {courseModules.map((m) => {
            const isCurrentMod = m.slug === mod.slug;
            return (
              <div
                key={m.slug}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-3.5 space-y-2"
              >
                <Link
                  to={`/module/${m.slug}`}
                  className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white hover:text-[#4F46E5] px-1.5"
                >
                  <span>
                    {m.code}: {m.shortTitle}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
                {isCurrentMod && (
                  <div className="space-y-0.5 pt-1 border-t border-slate-100 dark:border-slate-800">
                    {m.lessons.map((l) => {
                      const active = l.id === lesson.id;
                      const lDone = isLessonComplete(l.id);
                      return (
                        <Link
                          key={l.id}
                          to={`/module/${m.slug}/${l.id}`}
                          className={`flex items-start gap-2 px-2 py-2 rounded-lg text-xs transition-colors ${
                            active
                              ? 'bg-indigo-50 dark:bg-indigo-950/60 text-[#4F46E5] dark:text-indigo-300 font-semibold'
                              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/70'
                          }`}
                        >
                          {lDone ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          ) : (
                            <Circle className="w-3.5 h-3.5 opacity-40 shrink-0 mt-0.5" />
                          )}
                          <span className="leading-snug">
                            <span className="font-mono mr-1">{l.id}</span>
                            {l.title}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </aside>

        {/* Center: Full Lesson Body (9-part required order) */}
        <article className="lg:col-span-7 space-y-8 min-w-0">
          {/* 1. Title, module label, estimated time, difficulty */}
          <header className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 tabular-nums">
                <span
                  className="font-bold"
                  style={{ color: mod.accentHex }}
                >
                  {mod.code} · {mod.shortTitle}
                </span>
                <span>·</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {lesson.durationMinutes} min
                </span>
                <span>·</span>
                <span>{lesson.difficulty}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => toggleBookmark(bookmarkKey)}
                  aria-label="Bookmark lesson"
                  className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                    bookmarked
                      ? 'bg-indigo-50 dark:bg-indigo-950 border-indigo-300 dark:border-indigo-700 text-[#4F46E5] dark:text-indigo-300'
                      : 'border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <Bookmark className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => toggleLessonComplete(lesson.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    done
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                      : 'bg-[#4F46E5] text-white hover:bg-[#4338CA]'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  {done ? 'Completed' : 'Mark as complete'}
                </button>
              </div>
            </div>

            <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight text-balance">
              Lesson {lesson.id} — {lesson.title}
            </h1>
          </header>

          {/* 2. Learning outcomes */}
          <section
            id="outcomes"
            className="scroll-mt-24 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-3"
          >
            <h2 className="font-display font-bold text-lg text-slate-900 dark:text-white">
              Learning outcomes
            </h2>
            <ul className="space-y-2 text-sm sm:text-[15px] text-slate-700 dark:text-slate-300">
              {lesson.outcomes.map((out, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4F46E5] dark:text-indigo-400 shrink-0 mt-1" />
                  <span>{out}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 3. Concept explanation */}
          <section id="concepts" className="scroll-mt-24 space-y-5">
            <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white">
              Concept explanation
            </h2>
            <div className="space-y-4 text-sm sm:text-[15.5px] leading-[1.7] text-slate-700 dark:text-slate-300">
              {lesson.paragraphs.map((para, idx) => (
                <p key={idx}>
                  <GlossaryText text={para} />
                </p>
              ))}
            </div>

            {lesson.ribbonMock && <RibbonMock ribbon={lesson.ribbonMock} />}

            {lesson.tables?.map((tbl, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs"
              >
                {tbl.caption && (
                  <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {tbl.caption}
                  </div>
                )}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left tabular-nums">
                    <thead className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-400">
                      <tr>
                        {tbl.headers.map((h, hIdx) => (
                          <th key={hIdx} className="py-2.5 px-4 whitespace-nowrap">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                      {tbl.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className={`py-2.5 px-4 text-slate-700 dark:text-slate-300 ${
                                cIdx === 0 ? 'font-medium text-slate-900 dark:text-slate-100' : ''
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}

            {lesson.callouts?.map((c, idx) => (
              <CalloutBox key={idx} callout={c} />
            ))}
          </section>

          {/* 4. Step-by-step procedures */}
          {lesson.steps && lesson.steps.length > 0 && (
            <section id="steps" className="scroll-mt-24 space-y-4">
              <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                Step-by-step procedures
              </h2>
              <StepList steps={lesson.steps} />
            </section>
          )}

          {/* Formulas (when present) */}
          {lesson.formulas && lesson.formulas.length > 0 && (
            <section id="formulas" className="scroll-mt-24 space-y-3">
              <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                Key formulas
              </h2>
              <div className="space-y-3">
                {lesson.formulas.map((f, idx) => (
                  <FormulaBox key={idx} item={f} />
                ))}
              </div>
            </section>
          )}

          {/* 5. Keyboard shortcuts table */}
          {lesson.shortcuts && lesson.shortcuts.length > 0 && (
            <section id="shortcuts" className="scroll-mt-24 space-y-3">
              <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                Keyboard shortcuts for this lesson
              </h2>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-400">
                      <tr>
                        <th className="py-2.5 px-4">Action</th>
                        <th className="py-2.5 px-4">Shortcut</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                      {lesson.shortcuts.map((s, idx) => (
                        <tr key={idx}>
                          <td className="py-2.5 px-4 text-slate-700 dark:text-slate-300">
                            {s.action}
                          </td>
                          <td className="py-2.5 px-4">
                            <ShortcutKey keys={s.keys} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          )}

          {/* 6. Common mistakes & fixes */}
          {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
            <section
              id="mistakes"
              className="scroll-mt-24 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-3"
            >
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-600" />
                <h2 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                  Common mistakes &amp; fixes
                </h2>
              </div>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 list-disc pl-5">
                {lesson.commonMistakes.map((m, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {m}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 7. Try it yourself */}
          <section id="try-it" className="scroll-mt-24">
            <TryItBox text={lesson.tryIt} />
          </section>

          {/* 8. Check yourself link to module quiz */}
          <section
            id="check-yourself"
            className="scroll-mt-24 bg-indigo-50/70 dark:bg-indigo-950/30 rounded-2xl border border-indigo-200 dark:border-indigo-900 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="space-y-1">
              <div className="text-xs font-semibold text-[#4F46E5] dark:text-indigo-400">
                Check yourself
              </div>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                Ready to test what you learned in {mod.shortTitle}? Try the module quiz in Overview, Practice, or Exam mode.
              </p>
            </div>
            <Link
              to={`/quizzes?module=${mod.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-semibold transition-colors shrink-0 self-start sm:self-center whitespace-nowrap"
            >
              <ListChecks className="w-4 h-4" />
              Open {mod.shortTitle} Quiz
            </Link>
          </section>

          {/* 9. Previous / Next navigation */}
          <nav
            aria-label="Lesson Pagination"
            className="pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {prevLesson ? (
              <Link
                to={`/module/${prevLesson.moduleSlug}/${prevLesson.id}`}
                className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#4F46E5] transition-colors flex items-center gap-3"
              >
                <ArrowLeft className="w-4 h-4 text-slate-400 shrink-0" />
                <div className="min-w-0">
                  <div className="text-[11px] font-medium text-slate-400">
                    Previous lesson
                  </div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                    {prevLesson.id} {prevLesson.title}
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextLesson && (
              <Link
                to={`/module/${nextLesson.moduleSlug}/${nextLesson.id}`}
                className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#4F46E5] transition-colors flex items-center justify-between gap-3 text-right sm:col-start-2"
              >
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-medium text-slate-400">
                    Next lesson
                  </div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                    {nextLesson.id} {nextLesson.title}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
              </Link>
            )}
          </nav>
        </article>

        {/* Right Sidebar: "On this page" mini TOC */}
        <aside className="hidden lg:block lg:col-span-2 sticky top-20 space-y-3">
          <div className="text-xs font-bold text-slate-900 dark:text-white px-2">
            On this page
          </div>
          <ul className="space-y-1 text-xs border-l border-slate-200 dark:border-slate-800 pl-3">
            {tocSections.map((sec) => (
              <li key={sec.id}>
                <a
                  href={`#${sec.id}`}
                  className="block py-1 text-slate-500 dark:text-slate-400 hover:text-[#4F46E5] dark:hover:text-indigo-400 transition-colors"
                >
                  {sec.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
