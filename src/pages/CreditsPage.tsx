import { GraduationCap, Info, Laptop, Users } from 'lucide-react';

export function CreditsPage() {
  return (
    <div className="max-w-[900px] mx-auto px-4 sm:px-6 py-10 space-y-8">
      <div className="space-y-2">
        <div className="text-xs font-semibold text-[#4F46E5] dark:text-indigo-400">
          CREDITS &amp; ABOUT
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
          Acknowledgements &amp; Course Credits
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          People and academic structure behind CSE 2110 — Computer Fundamentals Sessional.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#4F46E5] text-white flex items-center justify-center">
            <GraduationCap className="w-5 h-5" />
          </div>
          <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white">
            Course Content &amp; Teaching Design
          </h2>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong className="font-semibold text-slate-900 dark:text-white">
              Naimur Rahman Sir
            </strong>
            , Lecturer, Department of Computer Science and Engineering, Bangladesh Army University of Science and Technology (BAUST), Saidpur.
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            This website is built on the course structure, lessons, and lab approach of CSE 2110 Computer Fundamentals Sessional as taught by Naimur Rahman Sir.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
            <Laptop className="w-5 h-5" />
          </div>
          <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white">
            Website Design &amp; Development
          </h2>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong className="font-semibold text-slate-900 dark:text-white">
              Md. Rakib Trofder
            </strong>
            , Lecturer, Department of Computer Science and Engineering, BAUST.
          </p>
          <div className="pt-2 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Users className="w-4 h-4 text-[#4F46E5] shrink-0" />
            <span>
              Prepared for undergraduate students of the{' '}
              <strong className="font-semibold text-slate-800 dark:text-slate-200">
                Department of English, BAUST
              </strong>
              .
            </span>
          </div>
        </div>
      </div>

      <div className="bg-slate-100/80 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-2">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
          <Info className="w-4 h-4 text-[#4F46E5]" />
          Disclaimer
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Microsoft, Word, PowerPoint, and Excel are trademarks of Microsoft Corporation. This site is an independent educational resource and is not affiliated with Microsoft. For official course rules, schedules, and mark distributions, always follow the course teacher and the official BAUST course outline.
        </p>
      </div>
    </div>
  );
}
