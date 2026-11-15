import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Keyboard, Layers, Search, Table } from 'lucide-react';
import { allShortcuts } from '../content/referenceData';
import { ShortcutEntry } from '../types/course';
import { ShortcutKey } from '../components/LessonBlocks';
import { ShortcutFlashcards } from '../components/ShortcutFlashcards';

type AppFilter = 'All' | ShortcutEntry['app'];

export function ShortcutsPage() {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') ?? '');
  const [appFilter, setAppFilter] = useState<AppFilter>('All');
  const [viewMode, setViewMode] = useState<'table' | 'flashcards'>('table');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allShortcuts.filter((s) => {
      if (appFilter !== 'All' && s.app !== appFilter) return false;
      if (
        q &&
        !s.shortcut.toLowerCase().includes(q) &&
        !s.action.toLowerCase().includes(q) &&
        !s.app.toLowerCase().includes(q)
      ) {
        return false;
      }
      return true;
    });
  }, [query, appFilter]);

  const apps: AppFilter[] = ['All', 'Windows', 'All Office', 'Word', 'PowerPoint', 'Excel'];

  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-10 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="text-xs font-semibold text-[#4F46E5] dark:text-indigo-400">
            QUICK REFERENCE
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Shortcut Cheat Sheet &amp; Flashcards
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Every keyboard shortcut from Windows, Word, PowerPoint, and Excel in one searchable reference.
          </p>
        </div>

        {/* Table vs Flashcards Mode Toggle */}
        <div className="inline-flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 self-start md:self-auto">
          <button
            type="button"
            onClick={() => setViewMode('table')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              viewMode === 'table'
                ? 'bg-white dark:bg-slate-900 text-[#4F46E5] dark:text-indigo-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            <Table className="w-3.5 h-3.5" />
            Table View
          </button>
          <button
            type="button"
            onClick={() => setViewMode('flashcards')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              viewMode === 'flashcards'
                ? 'bg-white dark:bg-slate-900 text-[#4F46E5] dark:text-indigo-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Flashcards
          </button>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-1.5">
          {apps.map((app) => (
            <button
              key={app}
              type="button"
              onClick={() => setAppFilter(app)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                appFilter === app
                  ? 'bg-[#4F46E5] text-white'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-slate-300'
              }`}
            >
              {app}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter shortcuts..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
          />
        </div>
      </div>

      {viewMode === 'flashcards' ? (
        <ShortcutFlashcards key={`${appFilter}-${query}`} shortcuts={filtered} />
      ) : (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
          <div className="px-5 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 tabular-nums">
            <span className="inline-flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300">
              <Keyboard className="w-4 h-4 text-[#4F46E5]" />
              Showing {filtered.length} shortcuts
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-400">
                <tr>
                  <th className="py-3 px-5">Shortcut</th>
                  <th className="py-3 px-5">Action</th>
                  <th className="py-3 px-5">App</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {filtered.map((item, idx) => (
                  <tr
                    key={`${item.app}-${item.shortcut}-${idx}`}
                    className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40"
                  >
                    <td className="py-3 px-5 whitespace-nowrap">
                      <ShortcutKey keys={item.shortcut} />
                    </td>
                    <td className="py-3 px-5 text-slate-700 dark:text-slate-300">
                      {item.action}
                    </td>
                    <td className="py-3 px-5 text-xs font-semibold text-slate-500 dark:text-slate-400 whitespace-nowrap">
                      {item.app}
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={3} className="py-8 text-center text-slate-500 dark:text-slate-400">
                      No shortcuts matched &ldquo;{query}&rdquo;.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
