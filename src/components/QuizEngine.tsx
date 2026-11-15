import { useEffect, useState } from 'react';
import {
  CheckCircle2,
  Clock,
  Eye,
  EyeOff,
  FileCheck2,
  ListChecks,
  Play,
  RotateCcw,
  Timer,
  XCircle,
} from 'lucide-react';
import { QuizQuestion } from '../types/course';
import { useCourse } from '../context/CourseContext';

type QuizMode = 'overview' | 'practice' | 'exam';

interface QuizEngineProps {
  quizId: string;
  title: string;
  questions: QuizQuestion[];
  examMinutes?: number;
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

export function QuizEngine({
  quizId,
  title,
  questions,
  examMinutes = 15,
}: QuizEngineProps) {
  const { recordQuizScore, quizScores } = useCourse();
  const [mode, setMode] = useState<QuizMode>('overview');

  // Mode 1: Quick Overview state (Default: answers visible)
  const [showAllAnswers, setShowAllAnswers] = useState(true);
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});

  // Mode 2: Practice Mode state
  const [practiceSelections, setPracticeSelections] = useState<Record<string, number>>({});

  // Mode 3: Exam Mode state
  const [examStarted, setExamStarted] = useState(false);
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [examSelections, setExamSelections] = useState<Record<string, number>>({});
  const [secondsLeft, setSecondsLeft] = useState(examMinutes * 60);

  // Reset local mode states if quizId or questions change
  useEffect(() => {
    setShowAllAnswers(true);
    setRevealedIds({});
    setPracticeSelections({});
    setExamStarted(false);
    setExamSubmitted(false);
    setExamSelections({});
    setSecondsLeft(examMinutes * 60);
  }, [quizId, examMinutes, questions.length]);

  // Exam timer tick
  useEffect(() => {
    if (mode !== 'exam' || !examStarted || examSubmitted) return;
    const interval = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(interval);
          setExamSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => window.clearInterval(interval);
  }, [mode, examStarted, examSubmitted]);

  // Record score when exam completes
  useEffect(() => {
    if (examSubmitted && questions.length > 0) {
      const score = questions.reduce(
        (acc, q) => (examSelections[q.id] === q.correctIndex ? acc + 1 : acc),
        0
      );
      recordQuizScore(quizId, score, questions.length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [examSubmitted]);

  // Practice score computation
  const practiceAnsweredCount = Object.keys(practiceSelections).length;
  const practiceCorrectCount = questions.reduce(
    (acc, q) => (practiceSelections[q.id] === q.correctIndex ? acc + 1 : acc),
    0
  );

  // Exam score computation
  const examAnsweredCount = Object.keys(examSelections).length;
  const examScore = questions.reduce(
    (acc, q) => (examSelections[q.id] === q.correctIndex ? acc + 1 : acc),
    0
  );

  const formatTimer = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const rem = sec % 60;
    return `${String(mins).padStart(2, '0')}:${String(rem).padStart(2, '0')}`;
  };

  const savedRecord = quizScores[quizId];

  return (
    <div className="space-y-6">
      {/* Top Mode Bar + Header */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 tabular-nums mt-0.5">
              {questions.length} multiple-choice questions
              {savedRecord && (
                <>
                  {' · '}
                  Best exam score:{' '}
                  <span className="font-semibold text-[#4F46E5] dark:text-indigo-400">
                    {savedRecord.best}/{savedRecord.total}
                  </span>
                </>
              )}
            </p>
          </div>

          {/* 3-Mode Segmented Control */}
          <div
            role="tablist"
            aria-label="Quiz Study Modes"
            className="inline-flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 self-start sm:self-auto overflow-x-auto max-w-full"
          >
            <button
              role="tab"
              type="button"
              aria-selected={mode === 'overview'}
              onClick={() => setMode('overview')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                mode === 'overview'
                  ? 'bg-white dark:bg-slate-900 text-[#4F46E5] dark:text-indigo-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <ListChecks className="w-3.5 h-3.5" />
              Quick Overview
            </button>
            <button
              role="tab"
              type="button"
              aria-selected={mode === 'practice'}
              onClick={() => setMode('practice')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                mode === 'practice'
                  ? 'bg-white dark:bg-slate-900 text-[#4F46E5] dark:text-indigo-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Play className="w-3.5 h-3.5" />
              Practice Mode
            </button>
            <button
              role="tab"
              type="button"
              aria-selected={mode === 'exam'}
              onClick={() => setMode('exam')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                mode === 'exam'
                  ? 'bg-white dark:bg-slate-900 text-[#4F46E5] dark:text-indigo-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Timer className="w-3.5 h-3.5" />
              Exam Mode
            </button>
          </div>
        </div>

        {/* Mode-specific sub-toolbar */}
        {mode === 'overview' && (
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              All questions and verified answers on one scrollable sheet for rapid revision.
            </p>
            <button
              type="button"
              onClick={() => {
                setShowAllAnswers((prev) => !prev);
                setRevealedIds({});
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#4F46E5] hover:bg-[#4338CA] text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              {showAllAnswers ? (
                <>
                  <EyeOff className="w-3.5 h-3.5" />
                  Hide Answers
                </>
              ) : (
                <>
                  <Eye className="w-3.5 h-3.5" />
                  Show Answers
                </>
              )}
            </button>
          </div>
        )}

        {mode === 'practice' && (
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 tabular-nums">
              Answered: <span className="font-semibold text-slate-900 dark:text-white">{practiceAnsweredCount}/{questions.length}</span>
              {' · '}
              Correct: <span className="font-semibold text-emerald-700 dark:text-emerald-400">{practiceCorrectCount}</span>
            </div>
            <button
              type="button"
              onClick={() => setPracticeSelections({})}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Practice
            </button>
          </div>
        )}

        {mode === 'exam' && (
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1.5 font-mono font-semibold text-slate-800 dark:text-slate-100 tabular-nums">
                <Clock className="w-4 h-4 text-[#4F46E5]" />
                {formatTimer(secondsLeft)}
              </span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-600 dark:text-slate-400 tabular-nums">
                Answered {examAnsweredCount} of {questions.length}
              </span>
            </div>
            {examStarted && !examSubmitted && (
              <button
                type="button"
                onClick={() => setExamSubmitted(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-[#4F46E5] hover:bg-[#4338CA] text-white transition-colors cursor-pointer"
              >
                <FileCheck2 className="w-3.5 h-3.5" />
                Submit Exam
              </button>
            )}
          </div>
        )}
      </div>

      {/* MODE 1: QUICK OVERVIEW MODE */}
      {mode === 'overview' && (
        <div className="space-y-4">
          {questions.map((q, index) => {
            const isAnswerVisible = showAllAnswers || Boolean(revealedIds[q.id]);
            return (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs space-y-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400 tabular-nums">
                      Question {index + 1} · {q.moduleName}
                    </span>
                    <h3 className="font-display font-semibold text-base text-slate-900 dark:text-white">
                      {q.question}
                    </h3>
                  </div>
                  {!showAllAnswers && (
                    <button
                      type="button"
                      onClick={() =>
                        setRevealedIds((prev) => ({ ...prev, [q.id]: !prev[q.id] }))
                      }
                      className="px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 shrink-0 cursor-pointer"
                    >
                      {isAnswerVisible ? 'Hide Answer' : 'Reveal Answer'}
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {q.options.map((opt, optIdx) => {
                    const isCorrect = optIdx === q.correctIndex;
                    const highlightCorrect = isAnswerVisible && isCorrect;
                    return (
                      <div
                        key={optIdx}
                        className={`flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl border text-sm transition-colors ${
                          highlightCorrect
                            ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200 font-semibold'
                            : 'bg-slate-50/70 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <span>
                          <span className="font-mono text-xs mr-2 opacity-70">
                            {OPTION_LETTERS[optIdx]}.
                          </span>
                          {opt}
                        </span>
                        {highlightCorrect && (
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400 shrink-0">
                            <CheckCircle2 className="w-4 h-4" />
                            Correct
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {isAnswerVisible && (
                  <div className="p-3.5 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-900 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <span className="font-semibold text-[#4F46E5] dark:text-indigo-300">
                      Explanation:{' '}
                    </span>
                    {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* MODE 2: PRACTICE MODE */}
      {mode === 'practice' && (
        <div className="space-y-4">
          {questions.map((q, index) => {
            const selected = practiceSelections[q.id];
            const hasAnswered = selected !== undefined;
            const isUserRight = selected === q.correctIndex;

            return (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs space-y-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400 tabular-nums">
                      Question {index + 1} · {q.moduleName}
                    </span>
                    <h3 className="font-display font-semibold text-base text-slate-900 dark:text-white">
                      {q.question}
                    </h3>
                  </div>
                  {hasAnswered && (
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-semibold shrink-0 ${
                        isUserRight
                          ? 'text-emerald-700 dark:text-emerald-400'
                          : 'text-rose-700 dark:text-rose-400'
                      }`}
                    >
                      {isUserRight ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          Correct
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4" />
                          Incorrect
                        </>
                      )}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = selected === optIdx;
                    const isCorrect = optIdx === q.correctIndex;
                    let btnStyle =
                      'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:border-[#4F46E5]';
                    if (hasAnswered) {
                      if (isCorrect) {
                        btnStyle =
                          'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-400 dark:border-emerald-700 text-emerald-950 dark:text-emerald-200 font-semibold';
                      } else if (isSelected && !isCorrect) {
                        btnStyle =
                          'bg-rose-50 dark:bg-rose-950/40 border-rose-400 dark:border-rose-700 text-rose-950 dark:text-rose-200 font-semibold';
                      } else {
                        btnStyle =
                          'bg-slate-50/50 dark:bg-slate-950/50 border-slate-200/70 dark:border-slate-800 text-slate-400 dark:text-slate-500';
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        type="button"
                        disabled={hasAnswered}
                        onClick={() =>
                          setPracticeSelections((prev) => ({
                            ...prev,
                            [q.id]: optIdx,
                          }))
                        }
                        className={`flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl border text-left text-sm transition-colors ${
                          hasAnswered ? 'cursor-default' : 'cursor-pointer'
                        } ${btnStyle}`}
                      >
                        <span>
                          <span className="font-mono text-xs mr-2 opacity-75">
                            {OPTION_LETTERS[optIdx]}.
                          </span>
                          {opt}
                        </span>
                        {hasAnswered && isCorrect && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        )}
                        {hasAnswered && isSelected && !isCorrect && (
                          <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {hasAnswered && (
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <span className="font-semibold text-slate-900 dark:text-white">
                      Explanation:{' '}
                    </span>
                    {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* MODE 3: EXAM MODE */}
      {mode === 'exam' && (
        <div className="space-y-5">
          {!examStarted && !examSubmitted && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950 text-[#4F46E5] dark:text-indigo-400 flex items-center justify-center mx-auto">
                <Timer className="w-6 h-6" />
              </div>
              <div className="space-y-1.5 max-w-md mx-auto">
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                  Simulated Exam Environment
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  You have <span className="font-semibold text-slate-900 dark:text-white">{examMinutes} minutes</span> to answer{' '}
                  <span className="font-semibold text-slate-900 dark:text-white">{questions.length} questions</span>. Answers stay hidden until you submit or time expires.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setExamSelections({});
                  setSecondsLeft(examMinutes * 60);
                  setExamSubmitted(false);
                  setExamStarted(true);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#4F46E5] hover:bg-[#4338CA] text-white transition-colors cursor-pointer"
              >
                <Play className="w-4 h-4" />
                Start Timed Exam
              </button>
            </div>
          )}

          {examStarted && !examSubmitted && (
            <>
              <div className="space-y-4">
                {questions.map((q, index) => {
                  const selected = examSelections[q.id];
                  return (
                    <div
                      key={q.id}
                      className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs space-y-3.5"
                    >
                      <div className="space-y-1">
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400 tabular-nums">
                          Question {index + 1} of {questions.length}
                        </span>
                        <h3 className="font-display font-semibold text-base text-slate-900 dark:text-white">
                          {q.question}
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = selected === optIdx;
                          return (
                            <button
                              key={optIdx}
                              type="button"
                              onClick={() =>
                                setExamSelections((prev) => ({
                                  ...prev,
                                  [q.id]: optIdx,
                                }))
                              }
                              className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl border text-left text-sm transition-colors cursor-pointer ${
                                isSelected
                                  ? 'bg-indigo-50 dark:bg-indigo-950/60 border-[#4F46E5] text-[#4F46E5] dark:text-indigo-300 font-semibold'
                                  : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
                              }`}
                            >
                              <span className="font-mono text-xs opacity-75">
                                {OPTION_LETTERS[optIdx]}.
                              </span>
                              <span>{opt}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setExamSubmitted(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-[#4F46E5] hover:bg-[#4338CA] text-white shadow-xs transition-colors cursor-pointer"
                >
                  <FileCheck2 className="w-4 h-4" />
                  Submit Exam ({examAnsweredCount}/{questions.length} answered)
                </button>
              </div>
            </>
          )}

          {examSubmitted && (
            <div className="space-y-5">
              {/* Scorecard Banner */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-[#4F46E5] dark:text-indigo-400">
                    Exam Scorecard
                  </span>
                  <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white tabular-nums">
                    Score: {examScore} / {questions.length} (
                    {Math.round((examScore / Math.max(1, questions.length)) * 100)}%)
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {examScore / Math.max(1, questions.length) >= 0.8
                      ? 'Excellent mastery! You are well prepared for the lab quiz and viva.'
                      : examScore / Math.max(1, questions.length) >= 0.5
                      ? 'Solid effort. Review the missed explanations below to sharpen weak spots.'
                      : 'Keep practising—review the module lessons and try Quick Overview mode before retaking.'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setExamSelections({});
                    setSecondsLeft(examMinutes * 60);
                    setExamSubmitted(false);
                    setExamStarted(true);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#4F46E5] hover:bg-[#4338CA] text-white transition-colors shrink-0 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Retake Exam
                </button>
              </div>

              {/* Detailed Review List */}
              <div className="space-y-3.5">
                {questions.map((q, index) => {
                  const chosen = examSelections[q.id];
                  const isCorrect = chosen === q.correctIndex;
                  return (
                    <div
                      key={q.id}
                      className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 space-y-3"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="font-display font-semibold text-sm sm:text-base text-slate-900 dark:text-white">
                          {index + 1}. {q.question}
                        </h4>
                        <span
                          className={`inline-flex items-center gap-1 text-xs font-semibold shrink-0 ${
                            isCorrect
                              ? 'text-emerald-700 dark:text-emerald-400'
                              : 'text-rose-700 dark:text-rose-400'
                          }`}
                        >
                          {isCorrect ? (
                            <>
                              <CheckCircle2 className="w-4 h-4" />
                              Correct
                            </>
                          ) : (
                            <>
                              <XCircle className="w-4 h-4" />
                              {chosen === undefined ? 'Unanswered' : 'Incorrect'}
                            </>
                          )}
                        </span>
                      </div>

                      <div className="text-xs sm:text-sm space-y-1 text-slate-600 dark:text-slate-300">
                        {chosen !== undefined && !isCorrect && (
                          <p className="text-rose-700 dark:text-rose-400">
                            Your answer: {OPTION_LETTERS[chosen]}. {q.options[chosen]}
                          </p>
                        )}
                        <p className="text-emerald-700 dark:text-emerald-400 font-medium">
                          Correct answer: {OPTION_LETTERS[q.correctIndex]}. {q.options[q.correctIndex]}
                        </p>
                        <p className="pt-1 text-slate-600 dark:text-slate-400">
                          {q.explanation}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
