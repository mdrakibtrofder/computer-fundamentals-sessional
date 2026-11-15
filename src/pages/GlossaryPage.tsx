import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BookA, Search } from 'lucide-react';
import { glossaryTerms } from '../content/referenceData';
import { GlossaryTerm } from '../types/course';

type CatFilter = 'All' | GlossaryTerm['category'];

export function GlossaryPage() {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') ?? '');
  const [category, setCategory] = useState<CatFilter>('All');

  const sortedTerms = useMemo(() => {
    const q = query.trim().toLowerCase();
    return [...glossaryTerms]
      .sort((a, b) => a.term.localeCompare(b.term))
      .filter((item) => {
        if (category !== 'All' && item.category !== category) return false;
        if (
          q &&
          !item.term.toLowerCase().includes(q) &&
          !item.meaning.toLowerCase().includes(q)
        ) {
          return false;
        }
        return true;
      });
  }, [query, category]);

  const categories: CatFilter[] = ['All', 'Basics', 'Word', 'PowerPoint', 'Excel'];

  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-10 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="text-xs font-semibold text-[#4F46E5] dark:text-indigo-400">
            TERMINOLOGY REFERENCE
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            A–Z Course Glossary
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Clear definitions of essential computing, Word, PowerPoint, and Excel terms.
          </p>
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search terms..."
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              category === cat
                ? 'bg-[#4F46E5] text-white'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-slate-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Terms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sortedTerms.map((item) => (
          <div
            key={item.term}
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs space-y-2"
          >
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-display font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <BookA className="w-4 h-4 text-[#4F46E5] dark:text-indigo-400 shrink-0" />
                {item.term}
              </h2>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                {item.category}
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {item.meaning}
            </p>
          </div>
        ))}
        {sortedTerms.length === 0 && (
          <div className="md:col-span-2 py-12 text-center text-sm text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            No glossary terms matched &ldquo;{query}&rdquo;.
          </div>
        )}
      </div>
    </div>
  );
}
