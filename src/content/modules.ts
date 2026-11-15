import { CourseModule, LessonContent, ModuleSlug } from '../types/course';
import { module0Lessons } from './module0';
import { module1Lessons } from './module1';
import { module2Lessons } from './module2';
import { module3Lessons } from './module3';

export const courseModules: CourseModule[] = [
  {
    id: 0,
    slug: 'basics',
    code: 'Module 0',
    title: 'Getting Started with Computers',
    shortTitle: 'Computer Basics',
    description: 'Hardware vs software, Windows essentials, File Explorer management, touch typing, Office Ribbon, and safe email habits.',
    goal: 'Students can use a Windows computer confidently, manage files, and understand the Office interface before starting Word, PowerPoint and Excel.',
    estimatedWeeks: 'Weeks 1–2',
    accentHex: '#475569',
    bannerGradient: 'from-[#334155] to-[#475569]',
    lessons: module0Lessons,
    linkedLabs: ['lab-01', 'lab-02'],
  },
  {
    id: 1,
    slug: 'word',
    code: 'Module 1',
    title: 'Microsoft Word',
    shortTitle: 'MS Word',
    description: 'Editing, font & paragraph formatting, page layout, tables, graphics, headers/footers, automatic TOC, MLA citations, and Mail Merge.',
    goal: 'Students produce well-formatted academic and professional documents: CV, application letter, assignment report with table of contents, and mail-merged letters.',
    estimatedWeeks: 'Weeks 3–6',
    accentHex: '#2B579A',
    bannerGradient: 'from-[#1E3A8A] to-[#2B579A]',
    lessons: module1Lessons,
    linkedLabs: ['lab-03', 'lab-04', 'lab-05', 'lab-06'],
  },
  {
    id: 2,
    slug: 'powerpoint',
    code: 'Module 2',
    title: 'Microsoft PowerPoint',
    shortTitle: 'PowerPoint',
    description: 'Slide layouts, 6×6 design rules, shapes & SmartArt, tables & charts, audio/video, transitions, animations, Slide Master, and presenting.',
    goal: 'Students design and deliver a clear 8–10 slide academic presentation with consistent design, visuals, a chart and purposeful animation.',
    estimatedWeeks: 'Weeks 8–10',
    accentHex: '#D24726',
    bannerGradient: 'from-[#9A3412] to-[#D24726]',
    lessons: module2Lessons,
    linkedLabs: ['lab-07', 'lab-08'],
  },
  {
    id: 3,
    slug: 'excel',
    code: 'Module 3',
    title: 'Microsoft Excel',
    shortTitle: 'MS Excel',
    description: 'Workbooks & ranges, AutoFill, number & conditional formatting, BODMAS formulas, relative/absolute references, IF/VLOOKUP, charts, and printing.',
    goal: 'Students build a correct, well-formatted spreadsheet that calculates totals, averages, grades and pass/fail automatically, then summarise it with a chart.',
    estimatedWeeks: 'Weeks 11–13',
    accentHex: '#217346',
    bannerGradient: 'from-[#14532D] to-[#217346]',
    lessons: module3Lessons,
    linkedLabs: ['lab-09', 'lab-10', 'lab-11', 'lab-12'],
  },
];

export const allLessons: LessonContent[] = courseModules.flatMap((m) => m.lessons);

export function getModuleBySlug(slug: string | undefined): CourseModule | undefined {
  return courseModules.find((m) => m.slug === slug);
}

export function getLessonById(moduleSlug: string | undefined, lessonId: string | undefined): LessonContent | undefined {
  const mod = getModuleBySlug(moduleSlug);
  return mod?.lessons.find((l) => l.id === lessonId);
}

export function getModuleColor(slug: ModuleSlug): string {
  return courseModules.find((m) => m.slug === slug)?.accentHex ?? '#4F46E5';
}
