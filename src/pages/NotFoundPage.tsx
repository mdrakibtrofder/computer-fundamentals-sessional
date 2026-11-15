import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Search } from 'lucide-react';
import { useCourse } from '../context/CourseContext';

export function NotFoundPage() {
  const { openSearch } = useCourse();

  return (
    <div className="max-w-[640px] mx-auto px-4 py-20 text-center space-y-6">
      <div className="font-mono text-sm font-bold text-[#4F46E5] dark:text-indigo-400">
        404 · Page Not Found
      </div>
      <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white text-balance">
        We couldn’t find that study page.
      </h1>
      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
        The link may have moved or the lesson ID might be typed differently. Jump back to the Study Portal or search across all 34 lessons and 12 labs.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#4F46E5] hover:bg-[#4338CA] text-white transition-colors"
        >
          <Home className="w-4 h-4" />
          Back to Home
        </Link>
        <button
          type="button"
          onClick={openSearch}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <Search className="w-4 h-4" />
          Search Course
        </button>
        <Link
          to="/modules"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#4F46E5]"
        >
          <ArrowLeft className="w-4 h-4" />
          All Modules
        </Link>
      </div>
    </div>
  );
}
