import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  BookOpen,
  Bookmark,
  Menu,
  Moon,
  Search,
  Sun,
  X,
} from 'lucide-react';
import { useCourse } from '../context/CourseContext';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/syllabus', label: 'Syllabus' },
  { to: '/modules', label: 'Modules' },
  { to: '/labs', label: 'Labs' },
  { to: '/quizzes', label: 'Quizzes' },
  { to: '/glossary', label: 'Glossary' },
];

export function Header() {
  const { openSearch, theme, toggleTheme, bookmarks } = useCourse();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isNavActive = (to: string) => {
    if (to === '/') return location.pathname === '/';
    if (to === '/modules') {
      return location.pathname.startsWith('/module') || location.pathname === '/modules';
    }
    return location.pathname.startsWith(to);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 no-print">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4 lg:gap-8">
        {/* Zone 1: Brand wordmark */}
        <Link
          to="/"
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4F46E5] rounded-lg"
        >
          <span className="w-8 h-8 rounded-lg bg-[#4F46E5] text-white flex items-center justify-center shadow-xs group-hover:bg-[#4338CA] transition-colors">
            <BookOpen className="w-4 h-4" />
          </span>
          <span className="font-display font-bold text-[15px] sm:text-base tracking-tight text-slate-900 dark:text-white">
            CSE 2110 · Fundamentals
          </span>
        </Link>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-5 lg:gap-7 h-full"
        >
          {navLinks.map((link) => {
            const active = isNavActive(link.to);
            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={`relative h-full inline-flex items-center text-sm font-medium whitespace-nowrap shrink-0 transition-colors focus-visible:outline-2 focus-visible:outline-[#4F46E5] ${
                  active
                    ? 'text-[#4F46E5] dark:text-indigo-400 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4F46E5] dark:bg-indigo-400 rounded-t-full" />
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Zone 3: Search, Bookmarks & Theme Action */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={openSearch}
            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-500 dark:text-slate-300 bg-slate-100/90 dark:bg-slate-800/90 hover:bg-slate-200/80 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700 rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
            aria-label="Search lessons, labs, and glossary"
          >
            <Search className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 rounded">
              ⌘K
            </kbd>
          </button>

          <Link
            to="/resources"
            title={`Saved bookmarks (${bookmarks.length}) & Resources`}
            aria-label="Saved bookmarks and resources"
            className="relative inline-flex items-center justify-center w-9 h-9 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Bookmark className="w-4 h-4" />
            {bookmarks.length > 0 && (
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
            )}
          </Link>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 space-y-1">
          {[
            ...navLinks,
            { to: '/projects', label: 'Practice Projects' },
            { to: '/shortcuts', label: 'Shortcuts & Flashcards' },
            { to: '/assessment', label: 'Assessment & Viva' },
            { to: '/resources', label: 'Resources & Downloads' },
            { to: '/faq', label: 'FAQ' },
            { to: '/credits', label: 'Credits & About' },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
                isNavActive(item.to)
                  ? 'bg-indigo-50 dark:bg-indigo-950/60 text-[#4F46E5] dark:text-indigo-300 font-semibold'
                  : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
