import React, { createContext, useContext, useEffect, useState } from 'react';
import { allLessons } from '../content/modules';

export interface QuizScoreRecord {
  best: number;
  total: number;
  lastAttempt: string;
}

interface CourseContextValue {
  completedLessons: string[];
  toggleLessonComplete: (lessonId: string) => void;
  isLessonComplete: (lessonId: string) => boolean;
  completedLabTasks: Record<string, boolean>;
  toggleLabTask: (labId: string, taskIndex: number) => void;
  quizScores: Record<string, QuizScoreRecord>;
  recordQuizScore: (quizId: string, score: number, total: number) => void;
  bookmarks: string[];
  toggleBookmark: (itemKey: string) => void;
  isBookmarked: (itemKey: string) => boolean;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  overallProgressPercent: number;
}

const STORAGE_KEY = 'cse2110_portal_state_v1';

const CourseContext = createContext<CourseContextValue | undefined>(undefined);

interface PersistedState {
  completedLessons: string[];
  completedLabTasks: Record<string, boolean>;
  quizScores: Record<string, QuizScoreRecord>;
  bookmarks: string[];
  theme: 'light' | 'dark';
}

const defaultState: PersistedState = {
  completedLessons: [],
  completedLabTasks: {},
  quizScores: {},
  bookmarks: [],
  theme: 'light',
};

function readStorage(): PersistedState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    const parsed = JSON.parse(raw) as Partial<PersistedState>;
    return {
      completedLessons: Array.isArray(parsed.completedLessons) ? parsed.completedLessons : [],
      completedLabTasks: parsed.completedLabTasks && typeof parsed.completedLabTasks === 'object' ? parsed.completedLabTasks : {},
      quizScores: parsed.quizScores && typeof parsed.quizScores === 'object' ? parsed.quizScores : {},
      bookmarks: Array.isArray(parsed.bookmarks) ? parsed.bookmarks : [],
      theme: parsed.theme === 'dark' ? 'dark' : 'light',
    };
  } catch {
    return defaultState;
  }
}

function writeStorage(state: PersistedState): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Ignore storage quota or private-browsing restrictions
  }
}

export function CourseProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<PersistedState>(() => readStorage());
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    writeStorage(state);
  }, [state]);

  useEffect(() => {
    const root = document.documentElement;
    if (state.theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [state.theme]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleLessonComplete = (lessonId: string) => {
    setState((prev) => {
      const exists = prev.completedLessons.includes(lessonId);
      const completedLessons = exists
        ? prev.completedLessons.filter((id) => id !== lessonId)
        : [...prev.completedLessons, lessonId];
      return { ...prev, completedLessons };
    });
  };

  const isLessonComplete = (lessonId: string) => state.completedLessons.includes(lessonId);

  const toggleLabTask = (labId: string, taskIndex: number) => {
    const key = `${labId}-${taskIndex}`;
    setState((prev) => ({
      ...prev,
      completedLabTasks: {
        ...prev.completedLabTasks,
        [key]: !prev.completedLabTasks[key],
      },
    }));
  };

  const recordQuizScore = (quizId: string, score: number, total: number) => {
    setState((prev) => {
      const existing = prev.quizScores[quizId];
      const best = existing ? Math.max(existing.best, score) : score;
      return {
        ...prev,
        quizScores: {
          ...prev.quizScores,
          [quizId]: {
            best,
            total,
            lastAttempt: new Date().toISOString(),
          },
        },
      };
    });
  };

  const toggleBookmark = (itemKey: string) => {
    setState((prev) => {
      const exists = prev.bookmarks.includes(itemKey);
      const bookmarks = exists
        ? prev.bookmarks.filter((k) => k !== itemKey)
        : [...prev.bookmarks, itemKey];
      return { ...prev, bookmarks };
    });
  };

  const isBookmarked = (itemKey: string) => state.bookmarks.includes(itemKey);

  const toggleTheme = () => {
    setState((prev) => ({
      ...prev,
      theme: prev.theme === 'light' ? 'dark' : 'light',
    }));
  };

  const overallProgressPercent =
    allLessons.length > 0
      ? Math.round((state.completedLessons.length / allLessons.length) * 100)
      : 0;

  return (
    <CourseContext.Provider
      value={{
        completedLessons: state.completedLessons,
        toggleLessonComplete,
        isLessonComplete,
        completedLabTasks: state.completedLabTasks,
        toggleLabTask,
        quizScores: state.quizScores,
        recordQuizScore,
        bookmarks: state.bookmarks,
        toggleBookmark,
        isBookmarked,
        theme: state.theme,
        toggleTheme,
        isSearchOpen,
        openSearch: () => setIsSearchOpen(true),
        closeSearch: () => setIsSearchOpen(false),
        overallProgressPercent,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
}

export function useCourse() {
  const ctx = useContext(CourseContext);
  if (!ctx) throw new Error('useCourse must be used inside CourseProvider');
  return ctx;
}
