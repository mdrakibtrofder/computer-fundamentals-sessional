import { Link } from 'react-router-dom';
import {
  Bookmark,
  Download,
  ExternalLink,
  FileCode2,
  Keyboard,
  Laptop,
  LifeBuoy,
} from 'lucide-react';
import { resourceFiles } from '../content/referenceData';
import { allLessons } from '../content/modules';
import { labSheets } from '../content/labsAndProjects';
import { useCourse } from '../context/CourseContext';
import { ResourceFile } from '../types/course';

function triggerDownload(file: ResourceFile) {
  const mime = file.format === 'csv' ? 'text/csv;charset=utf-8;' : 'text/plain;charset=utf-8;';
  const blob = new Blob([file.sampleContent], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = file.filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function ResourcesPage() {
  const { bookmarks, toggleBookmark } = useCourse();

  const resolvedBookmarks = bookmarks.map((key) => {
    if (key.startsWith('lesson-')) {
      const lid = key.replace('lesson-', '');
      const l = allLessons.find((x) => x.id === lid);
      return l
        ? { key, title: `Lesson ${l.id}: ${l.title}`, to: `/module/${l.moduleSlug}/${l.id}`, type: 'Lesson' }
        : null;
    }
    if (key.startsWith('lab-')) {
      const labId = key.replace('lab-', '');
      const lab = labSheets.find((x) => x.id === labId);
      return lab
        ? { key, title: `Lab ${lab.number}: ${lab.title}`, to: `/labs/${lab.id}`, type: 'Lab Sheet' }
        : null;
    }
    if (key.startsWith('module-')) {
      const slug = key.replace('module-', '');
      return { key, title: `Module: ${slug.toUpperCase()}`, to: `/module/${slug}`, type: 'Module' };
    }
    return null;
  }).filter(Boolean) as { key: string; title: string; to: string; type: string }[];

  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-10 space-y-10">
      <div className="space-y-2">
        <div className="text-xs font-semibold text-[#4F46E5] dark:text-indigo-400">
          FILES, ALTERNATIVES &amp; LINKS
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
          Resources &amp; Downloads
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
          Download starter practice files for your labs, access free Office alternatives, practise touch typing, and view your bookmarked lessons.
        </p>
      </div>

      {/* Saved Bookmarks */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <Bookmark className="w-5 h-5 text-[#4F46E5]" />
          <h2 className="font-display font-bold text-lg text-slate-900 dark:text-white">
            Your Saved Bookmarks ({resolvedBookmarks.length})
          </h2>
        </div>

        {resolvedBookmarks.length === 0 ? (
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Click the bookmark icon on any module, lesson, or lab card to save it here for quick exam revision.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {resolvedBookmarks.map((b) => (
              <div
                key={b.key}
                className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800"
              >
                <Link
                  to={b.to}
                  className="text-sm font-semibold text-slate-900 dark:text-white hover:text-[#4F46E5] truncate"
                >
                  {b.title}
                </Link>
                <button
                  type="button"
                  onClick={() => toggleBookmark(b.key)}
                  className="text-xs text-slate-500 hover:text-rose-600 shrink-0 cursor-pointer"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Practice Files List */}
      <section className="space-y-4">
        <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
          Starter Practice Files
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resourceFiles.map((file) => (
            <div
              key={file.filename}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs flex flex-col justify-between gap-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-2 font-mono text-sm font-bold text-slate-900 dark:text-white">
                    <FileCode2 className="w-4 h-4 text-[#4F46E5]" />
                    {file.filename}
                  </span>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {file.usedIn}
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {file.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => triggerDownload(file)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#4F46E5] hover:bg-[#4338CA] text-white transition-colors self-start cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                Download {file.filename}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Free Alternatives, Typing Practice & Official Help */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
            <Laptop className="w-5 h-5" />
          </div>
          <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
            Free Office Alternatives
          </h3>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li>
              <a
                href="https://www.microsoft365.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[#4F46E5] dark:text-indigo-400 hover:underline font-medium"
              >
                Microsoft 365 Web Apps <ExternalLink className="w-3.5 h-3.5" />
              </a>{' '}
              (free online with university/Microsoft email)
            </li>
            <li>
              <a
                href="https://docs.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[#4F46E5] dark:text-indigo-400 hover:underline font-medium"
              >
                Google Docs, Slides &amp; Sheets <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </li>
            <li>
              <a
                href="https://www.libreoffice.org"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[#4F46E5] dark:text-indigo-400 hover:underline font-medium"
              >
                LibreOffice (Writer, Impress, Calc) <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center">
            <Keyboard className="w-5 h-5" />
          </div>
          <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
            Touch Typing Practice
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Target: 25+ words per minute with 90%+ accuracy by Week 14. Practise 10 minutes daily:
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://www.typing.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[#4F46E5] dark:text-indigo-400 hover:underline font-medium"
              >
                Typing.com (Free Tutor) <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </li>
            <li>
              <a
                href="https://www.keybr.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[#4F46E5] dark:text-indigo-400 hover:underline font-medium"
              >
                Keybr.com (Adaptive Drills) <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center">
            <LifeBuoy className="w-5 h-5" />
          </div>
          <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
            Official Microsoft Help
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://support.microsoft.com/word"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[#4F46E5] dark:text-indigo-400 hover:underline font-medium"
              >
                Microsoft Word Support <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/powerpoint"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[#4F46E5] dark:text-indigo-400 hover:underline font-medium"
              >
                Microsoft PowerPoint Support <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/excel"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[#4F46E5] dark:text-indigo-400 hover:underline font-medium"
              >
                Microsoft Excel Support <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
