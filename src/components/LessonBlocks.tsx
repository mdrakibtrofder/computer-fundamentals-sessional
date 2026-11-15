import React, { useState } from 'react';
import {
  AlertTriangle,
  Check,
  Copy,
  Info,
  Languages,
  Lightbulb,
  PlayCircle,
  Sparkles,
} from 'lucide-react';
import {
  LessonCallout,
  LessonFormula,
  LessonStep,
  RibbonHighlight,
} from '../types/course';
import { glossaryTerms } from '../content/referenceData';

export function ShortcutKey({ keys }: { keys: string }) {
  // Split compound descriptions carefully while preserving symbols like "Ctrl + S"
  const parts = keys.split(/(\s\+\s|\/)/g);
  return (
    <span className="inline-flex flex-wrap items-center gap-1 font-mono text-xs">
      {parts.map((part, idx) => {
        const trimmed = part.trim();
        if (!trimmed) return null;
        if (trimmed === '+' || trimmed === '/') {
          return (
            <span key={idx} className="text-slate-400 dark:text-slate-500 px-0.5 font-sans">
              {trimmed}
            </span>
          );
        }
        return (
          <kbd
            key={idx}
            className="px-2 py-0.5 text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300/90 dark:border-slate-700 rounded-md shadow-[0_1px_0_rgba(15,23,42,0.08)]"
          >
            {trimmed}
          </kbd>
        );
      })}
    </span>
  );
}

export function GlossaryText({ text }: { text: string }) {
  const [activeTerm, setActiveTerm] = useState<string | null>(null);

  // Match whole words/phrases from our glossary (longest first)
  const sortedTerms = [...glossaryTerms].sort((a, b) => b.term.length - a.term.length);
  const pattern = new RegExp(
    `\\b(${sortedTerms.map((t) => t.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`,
    'i'
  );

  // Split once cleanly without over-complicating paragraphs: highlight first match per term occurrence
  const tokens: React.ReactNode[] = [];
  let remaining = text;
  let safety = 0;

  while (remaining.length > 0 && safety < 25) {
    safety += 1;
    const match = pattern.exec(remaining);
    if (!match || match.index === undefined) {
      tokens.push(remaining);
      break;
    }
    if (match.index > 0) {
      tokens.push(remaining.slice(0, match.index));
    }
    const matchedWord = match[0];
    const entry = sortedTerms.find(
      (t) => t.term.toLowerCase() === matchedWord.toLowerCase()
    );
    if (entry) {
      const key = `${entry.term}-${safety}`;
      const isOpen = activeTerm === key;
      tokens.push(
        <span key={key} className="relative inline-block">
          <button
            type="button"
            onClick={() => setActiveTerm(isOpen ? null : key)}
            onMouseEnter={() => setActiveTerm(key)}
            onMouseLeave={() => setActiveTerm(null)}
            className="underline decoration-dotted decoration-indigo-400 dark:decoration-indigo-500 underline-offset-4 text-slate-900 dark:text-slate-100 font-medium hover:text-[#4F46E5] dark:hover:text-indigo-400 cursor-help focus-visible:outline-2 focus-visible:outline-[#4F46E5] rounded-xs"
          >
            {matchedWord}
          </button>
          {isOpen && (
            <span
              role="tooltip"
              className="absolute left-0 bottom-full mb-2 z-30 w-64 p-3 text-xs leading-relaxed text-left bg-slate-900 dark:bg-slate-800 text-white rounded-xl shadow-lg border border-slate-700 pointer-events-none"
            >
              <span className="block font-semibold text-indigo-300 mb-0.5">
                {entry.term}
              </span>
              {entry.meaning}
            </span>
          )}
        </span>
      );
    } else {
      tokens.push(matchedWord);
    }
    remaining = remaining.slice(match.index + matchedWord.length);
  }

  return <>{tokens}</>;
}

export function StepList({ steps }: { steps: LessonStep[] }) {
  return (
    <ol className="space-y-3">
      {steps.map((step, index) => (
        <li
          key={index}
          className="flex items-start gap-3.5 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800"
        >
          <span className="w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-[#4F46E5] dark:text-indigo-300 font-display font-bold text-xs flex items-center justify-center shrink-0 tabular-nums mt-0.5">
            {index + 1}
          </span>
          <div className="space-y-2 min-w-0 flex-1">
            <p className="text-sm sm:text-[15px] leading-relaxed text-slate-700 dark:text-slate-200">
              {step.text}
            </p>
            {step.ribbonPath && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-[11px] text-slate-700 dark:text-slate-300">
                {step.ribbonPath}
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function CalloutBox({ callout }: { callout: LessonCallout }) {
  const styles: Record<
    LessonCallout['type'],
    { bg: string; border: string; iconColor: string; labelColor: string; Icon: React.ElementType; defaultTitle: string }
  > = {
    tip: {
      bg: 'bg-emerald-50/70 dark:bg-emerald-950/30',
      border: 'border-emerald-200 dark:border-emerald-900',
      iconColor: 'text-emerald-700 dark:text-emerald-400',
      labelColor: 'text-emerald-900 dark:text-emerald-200',
      Icon: Lightbulb,
      defaultTitle: 'Tip',
    },
    note: {
      bg: 'bg-sky-50/70 dark:bg-sky-950/30',
      border: 'border-sky-200 dark:border-sky-900',
      iconColor: 'text-sky-700 dark:text-sky-400',
      labelColor: 'text-sky-900 dark:text-sky-200',
      Icon: Info,
      defaultTitle: 'Note',
    },
    warning: {
      bg: 'bg-amber-50/80 dark:bg-amber-950/30',
      border: 'border-amber-200 dark:border-amber-900',
      iconColor: 'text-amber-700 dark:text-amber-400',
      labelColor: 'text-amber-900 dark:text-amber-200',
      Icon: AlertTriangle,
      defaultTitle: 'Warning',
    },
    bangla: {
      bg: 'bg-violet-50/80 dark:bg-violet-950/30',
      border: 'border-violet-200 dark:border-violet-900',
      iconColor: 'text-violet-700 dark:text-violet-400',
      labelColor: 'text-violet-950 dark:text-violet-200',
      Icon: Languages,
      defaultTitle: 'বাংলা টিপস',
    },
    'free-alt': {
      bg: 'bg-slate-100/80 dark:bg-slate-900',
      border: 'border-slate-200 dark:border-slate-800',
      iconColor: 'text-slate-700 dark:text-slate-300',
      labelColor: 'text-slate-900 dark:text-slate-100',
      Icon: Sparkles,
      defaultTitle: 'Free Alternative',
    },
  };

  const cfg = styles[callout.type];
  const Icon = cfg.Icon;

  return (
    <div className={`p-4 rounded-xl border ${cfg.bg} ${cfg.border}`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 mt-0.5 shrink-0 ${cfg.iconColor}`} />
        <div className="space-y-1 min-w-0">
          <div className={`text-sm font-semibold ${cfg.labelColor}`}>
            {callout.title ?? cfg.defaultTitle}
          </div>
          <p
            className={`text-sm leading-relaxed text-slate-700 dark:text-slate-300 ${
              callout.type === 'bangla' ? 'font-bengali' : ''
            }`}
          >
            {callout.text}
          </p>
        </div>
      </div>
    </div>
  );
}

export function TryItBox({ text }: { text: string }) {
  return (
    <div className="p-5 rounded-xl border border-orange-200 dark:border-orange-900/70 bg-orange-50/70 dark:bg-orange-950/25">
      <div className="flex items-start gap-3">
        <PlayCircle className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5 shrink-0" />
        <div className="space-y-1">
          <h3 className="text-sm font-bold text-orange-950 dark:text-orange-200">
            Try it yourself
          </h3>
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export function RibbonMock({ ribbon }: { ribbon: RibbonHighlight }) {
  const headerColors: Record<RibbonHighlight['app'], string> = {
    Word: 'bg-[#2B579A]',
    PowerPoint: 'bg-[#D24726]',
    Excel: 'bg-[#217346]',
    Office: 'bg-[#1E3A8A]',
  };

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900 shadow-xs">
      <div className={`${headerColors[ribbon.app]} text-white px-3.5 py-2 flex items-center justify-between text-xs`}>
        <span className="font-semibold">Microsoft {ribbon.app} — Ribbon Guide</span>
        <span className="opacity-85">Active tab: {ribbon.activeTab}</span>
      </div>
      <div className="px-3 pt-2 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center gap-1 overflow-x-auto">
        {ribbon.tabs.map((tab) => {
          const isActive = tab === ribbon.activeTab;
          return (
            <span
              key={tab}
              className={`px-2.5 py-1.5 text-xs whitespace-nowrap rounded-t-md ${
                isActive
                  ? 'bg-white dark:bg-slate-900 font-semibold text-slate-900 dark:text-white border-t border-x border-slate-200 dark:border-slate-800'
                  : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              {tab}
            </span>
          );
        })}
      </div>
      <div className="p-3 flex flex-wrap gap-3 bg-white dark:bg-slate-900">
        {ribbon.groups.map((grp) => {
          const isHighlighted = ribbon.highlightedGroup
            .toLowerCase()
            .includes(grp.name.toLowerCase());
          return (
            <div
              key={grp.name}
              className={`px-3 py-2 rounded-lg border text-xs ${
                isHighlighted
                  ? 'bg-indigo-50/70 dark:bg-indigo-950/40 border-indigo-300 dark:border-indigo-700'
                  : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700'
              }`}
            >
              <div className="flex flex-wrap gap-1.5 mb-1.5">
                {grp.items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="text-[10px] font-medium text-slate-500 dark:text-slate-400 text-center">
                {grp.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function FormulaBox({ item }: { item: LessonFormula }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    try {
      navigator.clipboard?.writeText(item.formula);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Fallback ignored if clipboard blocked
    }
  };

  return (
    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
      <div className="flex items-center justify-between gap-3">
        <code className="text-xs sm:text-sm font-mono font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-3 py-1.5 rounded-lg overflow-x-auto">
          {item.formula}
        </code>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shrink-0 cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              Copied
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              Copy
            </>
          )}
        </button>
      </div>
      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
        {item.explanation}
      </p>
    </div>
  );
}
