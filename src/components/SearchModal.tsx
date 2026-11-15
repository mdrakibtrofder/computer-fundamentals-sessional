import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, FlaskConical, HelpCircle, Keyboard, Search, X } from 'lucide-react';
import { useCourse } from '../context/CourseContext';
import { allLessons } from '../content/modules';
import { labSheets } from '../content/labsAndProjects';
import { allShortcuts, glossaryTerms } from '../content/referenceData';

interface SearchResult {
  id: string;
  title: string;
  subtitle: string;
  type: 'Lesson' | 'Lab' | 'Shortcut' | 'Glossary';
  to: string;
}

export function SearchModal() {
  const { isSearchOpen, closeSearch } = useCourse();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const results = useMemo<SearchResult[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return allLessons.slice(0, 6).map((l) => ({
        id: `lesson-${l.id}`,
        title: `Lesson ${l.id}: ${l.title}`,
        subtitle: `${l.durationMinutes} min · ${l.difficulty}`,
        type: 'Lesson',
        to: `/module/${l.moduleSlug}/${l.id}`,
      }));
    }

    const matches: SearchResult[] = [];

    for (const l of allLessons) {
      if (
        l.title.toLowerCase().includes(q) ||
        l.id.toLowerCase().includes(q) ||
        l.paragraphs.some((p) => p.toLowerCase().includes(q))
      ) {
        matches.push({
          id: `lesson-${l.id}`,
          title: `Lesson ${l.id}: ${l.title}`,
          subtitle: `${l.moduleSlug.toUpperCase()} · ${l.durationMinutes} min`,
          type: 'Lesson',
          to: `/module/${l.moduleSlug}/${l.id}`,
        });
      }
    }

    for (const lab of labSheets) {
      if (lab.title.toLowerCase().includes(q) || lab.objective.toLowerCase().includes(q)) {
        matches.push({
          id: `lab-${lab.id}`,
          title: `Lab ${lab.number}: ${lab.title}`,
          subtitle: `${lab.week} · ${lab.timeMinutes} min`,
          type: 'Lab',
          to: `/labs/${lab.id}`,
        });
      }
    }

    for (const s of allShortcuts) {
      if (s.action.toLowerCase().includes(q) || s.shortcut.toLowerCase().includes(q)) {
        matches.push({
          id: `shortcut-${s.app}-${s.shortcut}`,
          title: `${s.shortcut} — ${s.action}`,
          subtitle: `Keyboard shortcut · ${s.app}`,
          type: 'Shortcut',
          to: `/shortcuts?q=${encodeURIComponent(s.shortcut)}`,
        });
      }
    }

    for (const g of glossaryTerms) {
      if (g.term.toLowerCase().includes(q) || g.meaning.toLowerCase().includes(q)) {
        matches.push({
          id: `glossary-${g.term}`,
          title: g.term,
          subtitle: g.meaning,
          type: 'Glossary',
          to: `/glossary?q=${encodeURIComponent(g.term)}`,
        });
      }
    }

    return matches.slice(0, 14);
  }, [query]);

  if (!isSearchOpen) return null;

  const handleSelect = (to: string) => {
    closeSearch();
    setQuery('');
    navigate(to);
  };

  const getIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'Lesson':
        return <BookOpen className="w-4 h-4 text-[#4F46E5]" />;
      case 'Lab':
        return <FlaskConical className="w-4 h-4 text-emerald-600" />;
      case 'Shortcut':
        return <Keyboard className="w-4 h-4 text-amber-600" />;
      case 'Glossary':
        return <HelpCircle className="w-4 h-4 text-sky-600" />;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/40 backdrop-blur-xs"
      onClick={closeSearch}
      role="dialog"
      aria-modal="true"
      aria-label="Global course search"
    >
      <div
        className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 dark:border-slate-800">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search lessons, formulas, shortcuts, labs, or glossary terms..."
            className="w-full bg-transparent text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none"
          />
          <button
            type="button"
            onClick={closeSearch}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            aria-label="Close search"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800/70">
          {results.length === 0 ? (
            <div className="px-6 py-10 text-center text-sm text-slate-500 dark:text-slate-400">
              No matching lessons, labs, shortcuts, or glossary terms found for &ldquo;{query}&rdquo;.
            </div>
          ) : (
            results.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(item.to)}
                className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors cursor-pointer"
              >
                <div className="flex items-start gap-3 min-w-0">
                  <div className="mt-0.5 shrink-0">{getIcon(item.type)}</div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">
                      {item.title}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    {item.type}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
