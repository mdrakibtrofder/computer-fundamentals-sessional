import { useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCw, Shuffle } from 'lucide-react';
import { ShortcutEntry } from '../types/course';
import { ShortcutKey } from './LessonBlocks';

export function ShortcutFlashcards({ shortcuts }: { shortcuts: ShortcutEntry[] }) {
  const [deck, setDeck] = useState<ShortcutEntry[]>(shortcuts);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  if (deck.length === 0) {
    return (
      <div className="p-8 text-center text-sm text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
        No shortcuts match the selected filter.
      </div>
    );
  }

  const safeIndex = Math.min(index, deck.length - 1);
  const current = deck[safeIndex];

  const handleShuffle = () => {
    const copy = [...shortcuts];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    setDeck(copy);
    setIndex(0);
    setFlipped(false);
  };

  const go = (delta: number) => {
    setFlipped(false);
    setIndex((prev) => (prev + delta + deck.length) % deck.length);
  };

  return (
    <div className="max-w-xl mx-auto space-y-5">
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 tabular-nums">
        <span>
          Card {safeIndex + 1} of {deck.length} · {current.app}
        </span>
        <button
          type="button"
          onClick={handleShuffle}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
        >
          <Shuffle className="w-3.5 h-3.5" />
          Shuffle Deck
        </button>
      </div>

      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        className="w-full min-h-[220px] p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-[#4F46E5] transition-all flex flex-col items-center justify-center text-center gap-4 cursor-pointer"
      >
        <span className="text-xs font-semibold text-[#4F46E5] dark:text-indigo-400">
          {flipped ? 'Keyboard Shortcut' : `${current.app} Action — Click to reveal`}
        </span>
        {!flipped ? (
          <p className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white text-balance">
            {current.action}
          </p>
        ) : (
          <div className="scale-125 py-2">
            <ShortcutKey keys={current.shortcut} />
          </div>
        )}
        <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
          <RotateCw className="w-3.5 h-3.5" />
          Click card to flip
        </span>
      </button>

      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-sm font-semibold text-white cursor-pointer"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
