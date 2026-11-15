import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  FileSpreadsheet,
  FileText,
  FlaskConical,
  FolderDown,
  GraduationCap,
  HelpCircle,
  Keyboard,
  ListChecks,
  Presentation,
  Terminal,
} from 'lucide-react';
import { courseModules, allLessons } from '../content/modules';
import { labSheets } from '../content/labsAndProjects';
import { useCourse } from '../context/CourseContext';

type HeroPreviewTab = 'excel' | 'word' | 'powerpoint';

export function HomePage() {
  const { completedLessons, overallProgressPercent } = useCourse();
  const [previewTab, setPreviewTab] = useState<HeroPreviewTab>('excel');

  // Suggest first lab whose lessons aren't all complete, defaulting to Lab 1
  const featuredLab = labSheets[0];

  const portalCards = [
    {
      title: 'Course Syllabus & 14-Week Plan',
      meta: '14 Weeks · CO1–CO4',
      desc: 'Course objectives, outcomes, weekly schedule, lab rules, and mark distribution.',
      to: '/syllabus',
      icon: CalendarDays,
      iconBg: 'bg-[#4F46E5]',
      metaColor: 'text-[#4F46E5] dark:text-indigo-400',
    },
    {
      title: 'Lab Sheets Library (Lab 1–12)',
      meta: '12 Labs · Printable A4',
      desc: 'Step-by-step practical checklists, file naming rules, and 10-mark grading rubrics.',
      to: '/labs',
      icon: FlaskConical,
      iconBg: 'bg-emerald-600',
      metaColor: 'text-emerald-700 dark:text-emerald-400',
    },
    {
      title: 'MCQ Quizzes & Exam Mode',
      meta: '3 Modes · 32+ Questions',
      desc: 'Quick Overview with Show/Hide answers, Practice Mode with feedback, and timed Exam Mode.',
      to: '/quizzes',
      icon: ListChecks,
      iconBg: 'bg-violet-600',
      metaColor: 'text-violet-700 dark:text-violet-400',
    },
    {
      title: 'Shortcut Cheat Sheet & Flashcards',
      meta: '60+ Shortcuts · Interactive',
      desc: 'Searchable Windows, Word, PowerPoint, and Excel shortcuts with flip-card practice.',
      to: '/shortcuts',
      icon: Keyboard,
      iconBg: 'bg-amber-600',
      metaColor: 'text-amber-700 dark:text-amber-400',
    },
    {
      title: 'Practice Projects & Viva Guide',
      meta: '4 Projects · 12 Viva Q&As',
      desc: 'Job application pack, book presentation, result sheet, and Lab Mid/Final formats.',
      to: '/projects',
      icon: Award,
      iconBg: 'bg-sky-600',
      metaColor: 'text-sky-700 dark:text-sky-400',
    },
    {
      title: 'Glossary, Downloads & FAQ',
      meta: '24 Terms · Starter Files',
      desc: 'Searchable A–Z definitions, downloadable CSV/TXT practice files, and student help.',
      to: '/resources',
      icon: FolderDown,
      iconBg: 'bg-teal-600',
      metaColor: 'text-teal-700 dark:text-teal-400',
    },
  ];

  const getModuleIcon = (slug: string) => {
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
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-14">
      {/* Hero Card matching reference screenshot */}
      <section className="rounded-3xl bg-gradient-to-br from-[#F5F7FF] via-white to-[#EEF2FF] dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950/30 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-10 lg:p-12 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#4F46E5] dark:text-indigo-400">
              <span>CSE 2110</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span className="text-slate-600 dark:text-slate-400 font-medium">BAUST, Saidpur</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span className="text-slate-600 dark:text-slate-400 font-medium">Dept. of English</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span className="text-slate-600 dark:text-slate-400 font-medium">0.75 Credits</span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-slate-900 dark:text-white leading-[1.1] text-balance">
              Computer Fundamentals{' '}
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                Sessional
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
              Master <strong className="font-semibold text-slate-900 dark:text-white">Windows essentials, Microsoft Word, PowerPoint, and Excel</strong> from scratch. Designed specifically for Department of English undergraduates with clear steps, Bangla tips, interactive formulas, and 12 lab sheets.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                to="/modules"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-[#4F46E5] hover:bg-[#4338CA] text-white shadow-xs transition-colors whitespace-nowrap"
              >
                Start Learning
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/module/excel#playground"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700/70 transition-colors whitespace-nowrap"
              >
                <FileSpreadsheet className="w-4 h-4 text-[#217346]" />
                Open Excel Playground
              </Link>
            </div>

            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-start sm:items-center gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <GraduationCap className="w-4 h-4 text-[#4F46E5] dark:text-indigo-400 shrink-0 mt-0.5 sm:mt-0" />
              <span>
                Course content &amp; teaching design:{' '}
                <strong className="font-semibold text-slate-900 dark:text-slate-100">
                  Naimur Rahman
                </strong>
                , Lecturer, Dept. of CSE, BAUST · Website:{' '}
                <strong className="font-semibold text-slate-900 dark:text-slate-100">
                  Md. Rakib Trofder
                </strong>
              </span>
            </div>
          </div>

          {/* Right Hero Live Preview Widget (matching screenshot right-side card) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/90 dark:border-slate-800 shadow-[0_18px_40px_-15px_rgba(79,70,229,0.16)] p-5 space-y-4">
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Core Software Preview
                </span>
                <div className="inline-flex items-center gap-1 p-0.5 rounded-lg bg-slate-100 dark:bg-slate-800">
                  {(
                    [
                      { id: 'excel', label: 'Excel' },
                      { id: 'word', label: 'Word' },
                      { id: 'powerpoint', label: 'PPT' },
                    ] as const
                  ).map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setPreviewTab(t.id)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors cursor-pointer ${
                        previewTab === t.id
                          ? 'bg-white dark:bg-slate-900 text-[#4F46E5] dark:text-indigo-400 shadow-xs'
                          : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {previewTab === 'excel' && (
                <div className="space-y-3">
                  <div className="rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-3 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                      <span>Grade Sheet</span>
                      <span className="text-[#217346] dark:text-emerald-400 font-semibold">
                        =IF(E2&gt;=40,&quot;Pass&quot;,&quot;Fail&quot;)
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 text-center font-mono text-xs tabular-nums">
                      <div className="p-2 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                        <div className="text-[10px] text-slate-400">ID</div>
                        <div className="font-semibold text-slate-800 dark:text-slate-200">240101</div>
                      </div>
                      <div className="p-2 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                        <div className="text-[10px] text-slate-400">Total</div>
                        <div className="font-semibold text-slate-800 dark:text-slate-200">86</div>
                      </div>
                      <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800">
                        <div className="text-[10px] text-emerald-700 dark:text-emerald-400">Grade</div>
                        <div className="font-bold text-emerald-700 dark:text-emerald-300">A+ · Pass</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center font-mono text-[11px] text-[#4F46E5] dark:text-indigo-400">
                    ↓ UGC Grading Logic · VLOOKUP ↓
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center font-mono text-[11px] tabular-nums">
                    <div className="px-2 py-2 rounded-lg border border-emerald-400/70 bg-emerald-50/40 dark:bg-emerald-950/20 text-slate-700 dark:text-slate-200">
                      SUM(B2:D2)
                    </div>
                    <div className="px-2 py-2 rounded-lg border border-emerald-400/70 bg-emerald-50/40 dark:bg-emerald-950/20 text-slate-700 dark:text-slate-200">
                      COUNTIF
                    </div>
                    <div className="px-2 py-2 rounded-lg border border-emerald-400/70 bg-emerald-50/40 dark:bg-emerald-950/20 text-slate-700 dark:text-slate-200">
                      $H$1 (F4)
                    </div>
                  </div>
                </div>
              )}

              {previewTab === 'word' && (
                <div className="space-y-3">
                  <div className="rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-3.5 space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-[#2B579A] dark:text-sky-400 font-semibold">
                      <span>Automatic Table of Contents</span>
                      <span className="font-mono">Ctrl + Alt + 1</span>
                    </div>
                    <div className="space-y-1.5 text-xs font-mono text-slate-700 dark:text-slate-300">
                      <div className="flex justify-between">
                        <span>1. Introduction</span>
                        <span>....... 1</span>
                      </div>
                      <div className="flex justify-between pl-3 text-slate-500">
                        <span>1.1 Background</span>
                        <span>....... 2</span>
                      </div>
                      <div className="flex justify-between">
                        <span>2. Works Cited (MLA)</span>
                        <span>....... 4</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-center text-xs font-medium">
                    <div className="p-2 rounded-lg border border-sky-200 dark:border-sky-900 bg-sky-50/60 dark:bg-sky-950/30 text-sky-900 dark:text-sky-200">
                      Mail Merge Letters
                    </div>
                    <div className="p-2 rounded-lg border border-sky-200 dark:border-sky-900 bg-sky-50/60 dark:bg-sky-950/30 text-sky-900 dark:text-sky-200">
                      Borderless 1-Page CV
                    </div>
                  </div>
                </div>
              )}

              {previewTab === 'powerpoint' && (
                <div className="space-y-3">
                  <div className="rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-3.5 space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-[#D24726] dark:text-orange-400 font-semibold">
                      <span>6×6 Slide Design Rule</span>
                      <span className="font-mono">16:9 · F5</span>
                    </div>
                    <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300 list-disc pl-4">
                      <li>Max 6 bullets per slide</li>
                      <li>About 6 words per bullet</li>
                      <li>Titles 36–44 pt, body 24 pt+</li>
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-center text-xs font-medium">
                    <div className="p-2 rounded-lg border border-orange-200 dark:border-orange-900 bg-orange-50/60 dark:bg-orange-950/30 text-orange-900 dark:text-orange-200">
                      Slide Master Logo
                    </div>
                    <div className="p-2 rounded-lg border border-orange-200 dark:border-orange-900 bg-orange-50/60 dark:bg-orange-950/30 text-orange-900 dark:text-orange-200">
                      Morph Transitions
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Course Progress + 4 Core Modules */}
      <section className="space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
              Course Modules
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              34 structured lessons across 4 progressive modules.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-2.5 rounded-xl">
            <div className="text-xs text-slate-600 dark:text-slate-300 tabular-nums">
              Overall progress:{' '}
              <strong className="text-slate-900 dark:text-white">
                {completedLessons.length}/{allLessons.length}
              </strong>{' '}
              lessons ({overallProgressPercent}%)
            </div>
            <div className="w-24 h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-[#4F46E5] transition-all duration-300"
                style={{ width: `${overallProgressPercent}%` }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {courseModules.map((mod) => {
            const Icon = getModuleIcon(mod.slug);
            const doneCount = mod.lessons.filter((l) =>
              completedLessons.includes(l.id)
            ).length;
            const pct = Math.round((doneCount / mod.lessons.length) * 100);
            return (
              <Link
                key={mod.slug}
                to={`/module/${mod.slug}`}
                className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-5 shadow-xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between gap-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className="w-10 h-10 rounded-xl text-white flex items-center justify-center shrink-0"
                      style={{ backgroundColor: mod.accentHex }}
                    >
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400 tabular-nums">
                      {mod.lessons.length} lessons · {mod.estimatedWeeks}
                    </span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {mod.code}
                    </div>
                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white group-hover:text-[#4F46E5] dark:group-hover:text-indigo-400 transition-colors">
                      {mod.shortTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 line-clamp-3 leading-relaxed">
                      {mod.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                    <span>
                      {doneCount}/{mod.lessons.length} completed
                    </span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      {pct}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{
                        width: `${pct}%`,
                        backgroundColor: mod.accentHex,
                      }}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Course Teachers (matching reference screenshot) */}
      <section className="space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
              Course Teachers
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Department of Computer Science and Engineering · BAUST
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4F46E5] dark:text-indigo-400">
            <GraduationCap className="w-4 h-4 shrink-0" />
            <span>CSE 2110 · Dept. of English</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-5 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] dark:bg-indigo-950/70 text-[#4F46E5] dark:text-indigo-300 font-display font-bold text-base flex items-center justify-center shrink-0">
              NR
            </div>
            <div className="min-w-0 space-y-0.5">
              <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                Naimur Rahman
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Lecturer · Department of CSE, BAUST
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-5 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] dark:bg-indigo-950/70 text-[#4F46E5] dark:text-indigo-300 font-display font-bold text-base flex items-center justify-center shrink-0">
              RT
            </div>
            <div className="min-w-0 space-y-0.5">
              <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                Md. Rakib Trofder
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Lecturer · Department of CSE, BAUST
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore the Study Portal (matching Screenshot 1 2-column card grid) */}
      <section className="space-y-6">
        <div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
            Explore the Study Portal
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Everything you need for CSE 2110 — in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {portalCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.to}
                to={card.to}
                className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-6 shadow-xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all space-y-3.5"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-10 h-10 rounded-xl ${card.iconBg} text-white flex items-center justify-center shrink-0`}
                    >
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className={`text-xs font-semibold ${card.metaColor}`}>
                      {card.meta}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#4F46E5] group-hover:translate-x-0.5 transition-all" />
                </div>

                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Lab Spotlight & Quick Links */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="space-y-2">
            <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              Featured Practical · {featuredLab.week} · {featuredLab.timeMinutes} min
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
              Lab {featuredLab.number}: {featuredLab.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              {featuredLab.objective}
            </p>
          </div>
          <Link
            to={`/labs/${featuredLab.id}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shrink-0 self-start sm:self-center whitespace-nowrap"
          >
            Open Lab Sheet
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs flex flex-col justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <HelpCircle className="w-4 h-4 text-[#4F46E5]" />
              Exam Preparation
            </div>
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
              Lab Mid, Final &amp; Viva Guide
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Review the 100-mark breakdown, practical test formats, and 12 sample viva questions.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-xs font-semibold">
            <Link
              to="/assessment"
              className="text-[#4F46E5] dark:text-indigo-400 hover:underline inline-flex items-center gap-1"
            >
              Assessment Guide <ChevronRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/faq"
              className="text-slate-600 dark:text-slate-300 hover:underline inline-flex items-center gap-1"
            >
              Student FAQ <ChevronRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/credits"
              className="text-slate-600 dark:text-slate-300 hover:underline inline-flex items-center gap-1"
            >
              Credits <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
