import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 no-print">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-200/80 dark:border-slate-800">
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#4F46E5] text-white flex items-center justify-center">
                <BookOpen className="w-3.5 h-3.5" />
              </span>
              <span className="font-display font-bold text-slate-900 dark:text-white">
                CSE 2110 · BAUST
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Computer Fundamentals Sessional learning portal for undergraduate students of the Department of English, BAUST, Saidpur.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-wide text-slate-900 dark:text-slate-100 mb-3">
              Course Modules
            </h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><Link to="/module/basics" className="hover:text-[#4F46E5] dark:hover:text-indigo-400">Module 0 · Computer Basics</Link></li>
              <li><Link to="/module/word" className="hover:text-[#4F46E5] dark:hover:text-indigo-400">Module 1 · Microsoft Word</Link></li>
              <li><Link to="/module/powerpoint" className="hover:text-[#4F46E5] dark:hover:text-indigo-400">Module 2 · Microsoft PowerPoint</Link></li>
              <li><Link to="/module/excel" className="hover:text-[#4F46E5] dark:hover:text-indigo-400">Module 3 · Microsoft Excel</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-wide text-slate-900 dark:text-slate-100 mb-3">
              Practice & Exams
            </h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><Link to="/labs" className="hover:text-[#4F46E5] dark:hover:text-indigo-400">Lab Sheets (Lab 1–12)</Link></li>
              <li><Link to="/projects" className="hover:text-[#4F46E5] dark:hover:text-indigo-400">Practice Projects</Link></li>
              <li><Link to="/quizzes" className="hover:text-[#4F46E5] dark:hover:text-indigo-400">MCQ Quizzes (3 Modes)</Link></li>
              <li><Link to="/assessment" className="hover:text-[#4F46E5] dark:hover:text-indigo-400">Assessment & Viva Guide</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-wide text-slate-900 dark:text-slate-100 mb-3">
              Reference & Help
            </h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><Link to="/syllabus" className="hover:text-[#4F46E5] dark:hover:text-indigo-400">Course Overview & Syllabus</Link></li>
              <li><Link to="/shortcuts" className="hover:text-[#4F46E5] dark:hover:text-indigo-400">Shortcut Cheat Sheet</Link></li>
              <li><Link to="/glossary" className="hover:text-[#4F46E5] dark:hover:text-indigo-400">A–Z Glossary</Link></li>
              <li><Link to="/resources" className="hover:text-[#4F46E5] dark:hover:text-indigo-400">Resources & Downloads</Link></li>
              <li><Link to="/faq" className="hover:text-[#4F46E5] dark:hover:text-indigo-400">Student FAQ</Link></li>
              <li><Link to="/credits" className="hover:text-[#4F46E5] dark:hover:text-indigo-400">Credits & About</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <p>
            Course content &amp; teaching design: <span className="font-semibold text-slate-700 dark:text-slate-200">Naimur Rahman Sir</span>, Dept. of CSE, BAUST · Website: <span className="font-semibold text-slate-700 dark:text-slate-200">Md. Rakib Trofder</span>
          </p>
          <p>For educational use · {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
