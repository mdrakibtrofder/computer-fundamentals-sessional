import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Shuffle } from 'lucide-react';
import { quizQuestions } from '../content/quizzes';
import { QuizEngine } from '../components/QuizEngine';
import { ModuleSlug } from '../types/course';

type QuizSetKey = 'final' | ModuleSlug;

function pickRandom30() {
  const copy = [...quizQuestions];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, 30);
}

export function QuizzesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialParam = searchParams.get('module') as QuizSetKey | null;
  const [selectedSet, setSelectedSet] = useState<QuizSetKey>(
    initialParam && ['basics', 'word', 'powerpoint', 'excel', 'final'].includes(initialParam)
      ? initialParam
      : 'basics'
  );
  const [finalSeed, setFinalSeed] = useState(0);

  const activeQuestions = useMemo(() => {
    if (selectedSet === 'final') {
      return pickRandom30();
    }
    return quizQuestions.filter((q) => q.moduleSlug === selectedSet);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSet, finalSeed]);

  const setConfigs: { id: QuizSetKey; label: string; title: string; minutes: number }[] = [
    { id: 'basics', label: 'Module 0 · Basics (8)', title: 'Module 0 — Computer Basics Quiz', minutes: 10 },
    { id: 'word', label: 'Module 1 · Word (8)', title: 'Module 1 — Microsoft Word Quiz', minutes: 10 },
    { id: 'powerpoint', label: 'Module 2 · PowerPoint (8)', title: 'Module 2 — Microsoft PowerPoint Quiz', minutes: 10 },
    { id: 'excel', label: 'Module 3 · Excel (8)', title: 'Module 3 — Microsoft Excel Quiz', minutes: 10 },
    { id: 'final', label: 'Final Practice (30)', title: 'CSE 2110 Final Practice Quiz (30 Random Questions)', minutes: 25 },
  ];

  const currentConfig = setConfigs.find((c) => c.id === selectedSet) ?? setConfigs[0];

  const handleSelectSet = (id: QuizSetKey) => {
    setSelectedSet(id);
    setSearchParams({ module: id });
  };

  return (
    <div className="max-w-[1000px] mx-auto px-4 sm:px-6 py-10 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="text-xs font-semibold text-[#4F46E5] dark:text-indigo-400">
            SELF-ASSESSMENT &amp; EXAM SIMULATOR
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Course Quizzes &amp; MCQs
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Choose a module or the 30-question Final Practice set, then switch between Quick Overview, Practice Mode, and timed Exam Mode.
          </p>
        </div>

        {selectedSet === 'final' && (
          <button
            type="button"
            onClick={() => setFinalSeed((s) => s + 1)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer shrink-0 self-start sm:self-auto"
          >
            <Shuffle className="w-3.5 h-3.5" />
            Draw New 30 Questions
          </button>
        )}
      </div>

      {/* Quiz Set Selector */}
      <div className="flex flex-wrap items-center gap-2">
        {setConfigs.map((cfg) => {
          const active = selectedSet === cfg.id;
          return (
            <button
              key={cfg.id}
              type="button"
              onClick={() => handleSelectSet(cfg.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                active
                  ? 'bg-[#4F46E5] text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
              }`}
            >
              {cfg.label}
            </button>
          );
        })}
      </div>

      {/* 3-Mode Quiz Engine */}
      <QuizEngine
        quizId={`quiz-${selectedSet}`}
        title={currentConfig.title}
        questions={activeQuestions}
        examMinutes={currentConfig.minutes}
      />
    </div>
  );
}
