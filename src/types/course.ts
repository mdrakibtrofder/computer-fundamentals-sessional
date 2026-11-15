export type ModuleSlug = 'basics' | 'word' | 'powerpoint' | 'excel';

export type Difficulty = 'Beginner' | 'Intermediate';

export interface LessonStep {
  text: string;
  ribbonPath?: string;
}

export interface LessonTable {
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface LessonFormula {
  formula: string;
  explanation: string;
}

export interface LessonCallout {
  type: 'tip' | 'note' | 'warning' | 'bangla' | 'free-alt';
  title?: string;
  text: string;
}

export interface RibbonHighlight {
  app: 'Word' | 'PowerPoint' | 'Excel' | 'Office';
  activeTab: string;
  tabs: string[];
  highlightedGroup: string;
  groups: { name: string; items: string[] }[];
}

export interface LessonShortcut {
  action: string;
  keys: string;
  path?: string;
}

export interface LessonContent {
  id: string; // e.g., '0.1', '1.4'
  moduleSlug: ModuleSlug;
  title: string;
  durationMinutes: number;
  difficulty: Difficulty;
  outcomes: string[];
  paragraphs: string[];
  steps?: LessonStep[];
  tables?: LessonTable[];
  formulas?: LessonFormula[];
  callouts?: LessonCallout[];
  ribbonMock?: RibbonHighlight;
  shortcuts?: LessonShortcut[];
  commonMistakes?: string[];
  tryIt: string;
}

export interface CourseModule {
  id: number;
  slug: ModuleSlug;
  code: string;
  title: string;
  shortTitle: string;
  description: string;
  goal: string;
  estimatedWeeks: string;
  accentHex: string;
  bannerGradient: string;
  lessons: LessonContent[];
  linkedLabs: string[];
}

export interface LabSheet {
  id: string; // 'lab-01'
  number: number;
  title: string;
  moduleSlug: ModuleSlug;
  week: string;
  timeMinutes: number;
  objective: string;
  lessonsNeeded: string[];
  tasks: string[];
  submitFiles: string;
}

export interface PracticeProject {
  id: string;
  number: number;
  title: string;
  toolLabel: string;
  moduleSlug: ModuleSlug | 'integrated';
  description: string;
  deliverables: string[];
}

export interface QuizQuestion {
  id: string;
  moduleSlug: ModuleSlug;
  moduleName: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ShortcutEntry {
  shortcut: string;
  action: string;
  app: 'Windows' | 'All Office' | 'Word' | 'PowerPoint' | 'Excel';
}

export interface GlossaryTerm {
  term: string;
  meaning: string;
  category: 'Basics' | 'Word' | 'PowerPoint' | 'Excel';
}

export interface VivaQuestion {
  id: number;
  question: string;
  answer: string;
  topic: string;
}

export interface ResourceFile {
  filename: string;
  description: string;
  usedIn: string;
  format: 'txt' | 'csv' | 'html-doc';
  sampleContent: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
