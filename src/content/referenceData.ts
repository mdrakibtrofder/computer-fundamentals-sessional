import { FaqItem, GlossaryTerm, ResourceFile, ShortcutEntry, VivaQuestion } from '../types/course';

export const courseInfo = [
  { item: 'Course code', detail: 'CSE 2110' },
  { item: 'Course title', detail: 'Computer Fundamentals Sessional' },
  { item: 'Credit / contact', detail: '0.75 credit, 1.5 hours lab per week (confirm with official syllabus)' },
  { item: 'Institution', detail: 'Bangladesh Army University of Science and Technology (BAUST), Saidpur' },
  { item: 'Target audience', detail: 'Undergraduate students of the Department of English' },
  { item: 'Core tools', detail: 'Microsoft Word, Microsoft PowerPoint, Microsoft Excel (Microsoft 365 / Office 2019+)' },
];

export const courseObjectives =
  'To make non-CSE students confident, independent users of a Windows computer and of Microsoft Word, PowerPoint and Excel for academic and professional work.';

export const courseOutcomes = [
  { code: 'CO1', description: 'Operate a Windows computer, manage files and folders, and use the internet and email responsibly' },
  { code: 'CO2', description: 'Create and format professional documents in Word (CV, letter, report with TOC, mail merge)' },
  { code: 'CO3', description: 'Design and deliver an effective presentation in PowerPoint' },
  { code: 'CO4', description: 'Organise data and perform calculations, grading and charting in Excel' },
];

export const fourteenWeekPlan = [
  { week: 1, topic: 'Course intro, computer basics, Windows', lessons: '0.1, 0.2', lab: 'Lab 1' },
  { week: 2, topic: 'Files and folders, typing, Office interface, email', lessons: '0.3–0.6', lab: 'Lab 2' },
  { week: 3, topic: 'Word: editing, font and paragraph formatting', lessons: '1.1–1.4', lab: 'Lab 3' },
  { week: 4, topic: 'Word: page layout, tables', lessons: '1.5, 1.6', lab: 'Lab 4' },
  { week: 5, topic: 'Word: graphics, header/footer, styles, TOC, citations', lessons: '1.7–1.9', lab: 'Lab 5' },
  { week: 6, topic: 'Word: proofing, track changes, mail merge, PDF', lessons: '1.10', lab: 'Lab 6' },
  { week: 7, topic: 'Lab Mid exam (Word + PowerPoint basics)', lessons: '—', lab: 'Lab Mid' },
  { week: 8, topic: 'PowerPoint: interface, text, design, graphics', lessons: '2.1–2.3', lab: 'Lab 7' },
  { week: 9, topic: 'PowerPoint: tables, charts, media, animation, Slide Master', lessons: '2.4–2.7', lab: 'Lab 8' },
  { week: 10, topic: 'PowerPoint: presenting; student presentations', lessons: '2.8', lab: 'Lab 8 presentation' },
  { week: 11, topic: 'Excel: interface, data entry, formatting, formulas', lessons: '3.1–3.4', lab: 'Lab 9' },
  { week: 12, topic: 'Excel: references and functions, IF and lookup', lessons: '3.5–3.7', lab: 'Lab 10' },
  { week: 13, topic: 'Excel: sort, filter, charts, printing', lessons: '3.8–3.10', lab: 'Lab 11' },
  { week: 14, topic: 'Integrated project, revision, Lab Final and viva', lessons: 'All', lab: 'Lab 12 / Final' },
];

export const labRules = [
  'Arrive on time and sign attendance. Bags and food stay outside the lab.',
  'Save all work in D:\\CSE2110_YourID and back it up to Google Drive or OneDrive.',
  'Follow the file naming format: StudentID_LabNN_Topic (e.g. 2xxxxxxx_Lab03_Formatting.docx).',
  'Do not change computer settings, install unauthorized software, or unplug cables.',
  'Lab report is due before the next lab class; late submission loses marks.',
  'Copying files from another student is plagiarism; both files receive zero.',
];

export const markDistribution = [
  { component: 'Attendance', marks: 10 },
  { component: 'Lab performance and reports (Labs 1–12)', marks: 30 },
  { component: 'Lab Mid (Word + PowerPoint, 30 min practical)', marks: 20 },
  { component: 'Lab Final (Word, PowerPoint and Excel practical)', marks: 30 },
  { component: 'Viva / quiz', marks: 10 },
];

export const vivaQuestions: VivaQuestion[] = [
  {
    id: 1,
    topic: 'Basics',
    question: 'What is the difference between RAM and ROM?',
    answer: 'RAM (Random Access Memory) is temporary, volatile working memory whose data disappears when power turns off. ROM (Read-Only Memory) is permanent, non-volatile memory storing essential start-up instructions.',
  },
  {
    id: 2,
    topic: 'Office',
    question: 'What is the difference between Save and Save As?',
    answer: 'Save (Ctrl + S) updates the existing file in its current location with the same name. Save As (F12) lets you save a new copy with a different filename, folder location, or file format (like PDF).',
  },
  {
    id: 3,
    topic: 'Word',
    question: 'How do you insert a page break? Why not press Enter many times?',
    answer: 'Press Ctrl + Enter (or Layout ▸ Breaks ▸ Page). Pressing Enter repeatedly leaves empty lines that shift awkwardly onto later pages whenever you add or remove text above.',
  },
  {
    id: 4,
    topic: 'Word',
    question: 'How is an automatic table of contents created and updated?',
    answer: 'Apply built-in Heading 1 and Heading 2 styles to titles, then go to References ▸ Table of Contents ▸ Automatic Table 1. After editing, click Update Table ▸ Update entire table.',
  },
  {
    id: 5,
    topic: 'Word',
    question: 'What is mail merge? Name its two main parts.',
    answer: 'Mail Merge generates personalized copies of one document for many recipients. Its two main parts are the Main Document (the template letter in Word) and the Data Source (the recipient list, usually in Excel).',
  },
  {
    id: 6,
    topic: 'PowerPoint',
    question: 'What is Slide Master used for?',
    answer: 'Slide Master (View ▸ Slide Master) controls global layout elements—fonts, colour palettes, background, and logos—so editing the top Master slide updates every slide in the presentation at once.',
  },
  {
    id: 7,
    topic: 'PowerPoint',
    question: 'Difference between a transition and an animation?',
    answer: 'A transition is the visual effect when moving from one slide to the next. An animation is a movement or reveal effect applied to an individual object (text, picture, shape) on a slide.',
  },
  {
    id: 8,
    topic: 'Excel',
    question: 'What is a cell address? What is a range?',
    answer: 'A cell address identifies a single cell by its column letter and row number (e.g., B3). A range is a rectangular block of cells written as first:last (e.g., A1:D10).',
  },
  {
    id: 9,
    topic: 'Excel',
    question: 'What is the difference between relative and absolute references? Which key adds the dollar signs?',
    answer: 'A relative reference (A1) adjusts automatically when copied to another row or column, whereas an absolute reference ($A$1) stays locked on one exact cell. Press F4 to add or cycle the $ signs.',
  },
  {
    id: 10,
    topic: 'Excel',
    question: 'Write an IF formula that shows "Pass" if marks are 40 or more.',
    answer: '=IF(E2>=40,"Pass","Fail")',
  },
  {
    id: 11,
    topic: 'Excel',
    question: 'What does #DIV/0! mean?',
    answer: 'It means a formula is attempting to divide a number by zero (0) or by an empty cell.',
  },
  {
    id: 12,
    topic: 'Excel',
    question: 'Which chart would you use to show the share of each grade?',
    answer: 'A Pie chart (or Doughnut chart), because it clearly shows parts of a whole (percentage share of each grade).',
  },
];

export const allShortcuts: ShortcutEntry[] = [
  // Windows
  { shortcut: 'Windows', action: 'Open Start menu', app: 'Windows' },
  { shortcut: 'Alt + Tab', action: 'Switch between open apps', app: 'Windows' },
  { shortcut: 'Windows + D', action: 'Show desktop', app: 'Windows' },
  { shortcut: 'Windows + E', action: 'Open File Explorer', app: 'Windows' },
  { shortcut: 'Windows + L', action: 'Lock the computer', app: 'Windows' },
  { shortcut: 'Windows + Left / Right', action: 'Snap active window side by side', app: 'Windows' },
  { shortcut: 'Windows + Shift + S', action: 'Screenshot of selected area', app: 'Windows' },
  { shortcut: 'Ctrl + Shift + Esc', action: 'Open Task Manager', app: 'Windows' },
  { shortcut: 'Alt + F4', action: 'Close current app', app: 'Windows' },
  { shortcut: 'F2', action: 'Rename selected file or folder', app: 'Windows' },
  { shortcut: 'Shift + Delete', action: 'Delete permanently (skip Recycle Bin)', app: 'Windows' },

  // All Office
  { shortcut: 'Ctrl + N', action: 'New file', app: 'All Office' },
  { shortcut: 'Ctrl + O', action: 'Open file', app: 'All Office' },
  { shortcut: 'Ctrl + S', action: 'Save', app: 'All Office' },
  { shortcut: 'F12', action: 'Save As', app: 'All Office' },
  { shortcut: 'Ctrl + P', action: 'Print', app: 'All Office' },
  { shortcut: 'Ctrl + Z / Ctrl + Y', action: 'Undo / Redo', app: 'All Office' },
  { shortcut: 'Ctrl + C / X / V', action: 'Copy / Cut / Paste', app: 'All Office' },
  { shortcut: 'Ctrl + A', action: 'Select all', app: 'All Office' },
  { shortcut: 'Ctrl + F / Ctrl + H', action: 'Find / Replace', app: 'All Office' },
  { shortcut: 'Ctrl + K', action: 'Insert hyperlink', app: 'All Office' },
  { shortcut: 'Alt (then letters)', action: 'Show ribbon key tips', app: 'All Office' },

  // Word
  { shortcut: 'Ctrl + B / I / U', action: 'Bold / Italic / Underline', app: 'Word' },
  { shortcut: 'Ctrl + ] / Ctrl + [', action: 'Font size up / down', app: 'Word' },
  { shortcut: 'Ctrl + D', action: 'Open Font dialog box', app: 'Word' },
  { shortcut: 'Ctrl + = / Ctrl + Shift + +', action: 'Subscript (H₂O) / Superscript (x²)', app: 'Word' },
  { shortcut: 'Ctrl + Shift + C / V', action: 'Copy / Paste formatting (Format Painter)', app: 'Word' },
  { shortcut: 'Ctrl + L / E / R / J', action: 'Align Left / Center / Right / Justify', app: 'Word' },
  { shortcut: 'Ctrl + 1 / 5 / 2', action: 'Line spacing 1.0 / 1.5 / 2.0', app: 'Word' },
  { shortcut: 'Ctrl + M / Ctrl + Shift + M', action: 'Increase / Decrease indent', app: 'Word' },
  { shortcut: 'Ctrl + T', action: 'Hanging indent', app: 'Word' },
  { shortcut: 'Ctrl + Shift + 8', action: 'Show/hide formatting marks (¶)', app: 'Word' },
  { shortcut: 'Ctrl + Enter', action: 'Insert Page Break', app: 'Word' },
  { shortcut: 'Shift + Enter', action: 'Insert Line Break', app: 'Word' },
  { shortcut: 'Ctrl + Shift + Space', action: 'Insert non-breaking space', app: 'Word' },
  { shortcut: 'Shift + F3', action: 'Cycle Change Case', app: 'Word' },
  { shortcut: 'F7 / Shift + F7', action: 'Spelling & Grammar / Thesaurus', app: 'Word' },
  { shortcut: 'Ctrl + Alt + M', action: 'Insert Comment', app: 'Word' },
  { shortcut: 'Ctrl + Shift + E', action: 'Toggle Track Changes', app: 'Word' },
  { shortcut: 'Alt + Ctrl + F', action: 'Insert Footnote', app: 'Word' },
  { shortcut: 'Ctrl + Alt + 1 / 2', action: 'Apply Heading 1 / Heading 2', app: 'Word' },
  { shortcut: 'F4', action: 'Repeat last action', app: 'Word' },
  { shortcut: 'Alt + Shift + D', action: 'Insert current date', app: 'Word' },
  { shortcut: 'Ctrl + Home / End', action: 'Go to start / end of document', app: 'Word' },

  // PowerPoint
  { shortcut: 'Ctrl + M', action: 'Insert new slide', app: 'PowerPoint' },
  { shortcut: 'Ctrl + D', action: 'Duplicate slide or object', app: 'PowerPoint' },
  { shortcut: 'Ctrl + G / Ctrl + Shift + G', action: 'Group / Ungroup objects', app: 'PowerPoint' },
  { shortcut: 'Shift + drag', action: 'Keep proportions while resizing', app: 'PowerPoint' },
  { shortcut: 'Alt + F10', action: 'Open Selection Pane', app: 'PowerPoint' },
  { shortcut: 'F5 / Shift + F5', action: 'Start show from start / current slide', app: 'PowerPoint' },
  { shortcut: 'B / W', action: 'Black screen / White screen in show', app: 'PowerPoint' },
  { shortcut: 'Ctrl + L / Ctrl + P / E', action: 'Laser pointer / Pen / Erase ink in show', app: 'PowerPoint' },
  { shortcut: 'n + Enter', action: 'Jump to slide number n during show', app: 'PowerPoint' },
  { shortcut: 'Esc', action: 'End slide show', app: 'PowerPoint' },

  // Excel
  { shortcut: 'Ctrl + Home / End', action: 'Go to A1 / last used cell', app: 'Excel' },
  { shortcut: 'Ctrl + Arrow', action: 'Jump to edge of data block', app: 'Excel' },
  { shortcut: 'Ctrl + Page Down / Page Up', action: 'Next / previous worksheet', app: 'Excel' },
  { shortcut: 'F5 or Ctrl + G', action: 'Go to a specific cell', app: 'Excel' },
  { shortcut: 'Ctrl + Space / Shift + Space', action: 'Select whole column / whole row', app: 'Excel' },
  { shortcut: 'F2', action: 'Edit active cell', app: 'Excel' },
  { shortcut: 'Alt + Enter', action: 'New line inside a cell', app: 'Excel' },
  { shortcut: 'Ctrl + ; / Ctrl + Shift + ;', action: 'Insert today’s date / current time', app: 'Excel' },
  { shortcut: 'Ctrl + 1', action: 'Open Format Cells dialog', app: 'Excel' },
  { shortcut: 'Alt + =', action: 'Insert AutoSum', app: 'Excel' },
  { shortcut: 'F4', action: 'Toggle relative / absolute ($) reference', app: 'Excel' },
  { shortcut: 'Ctrl + `', action: 'Toggle Show Formulas', app: 'Excel' },
  { shortcut: 'Ctrl + T', action: 'Format range as Table', app: 'Excel' },
  { shortcut: 'Ctrl + Shift + L', action: 'Toggle AutoFilter', app: 'Excel' },
  { shortcut: 'Ctrl + D / Ctrl + E', action: 'Fill Down / Flash Fill', app: 'Excel' },
  { shortcut: 'Ctrl + Shift + %', action: 'Apply Percentage format', app: 'Excel' },
  { shortcut: 'Ctrl + Shift + 4', action: 'Apply Currency format', app: 'Excel' },
  { shortcut: 'Alt + F1 / F11', action: 'Instant chart (same sheet / new sheet)', app: 'Excel' },
];

export const glossaryTerms: GlossaryTerm[] = [
  { term: 'Absolute reference', meaning: 'A cell reference that does not change when copied, written with dollar signs (e.g. $A$1).', category: 'Excel' },
  { term: 'Animation', meaning: 'Movement or reveal effect applied to an individual object on a PowerPoint slide.', category: 'PowerPoint' },
  { term: 'AutoFill', meaning: 'Dragging the fill handle (bottom-right corner of a cell) to continue a series or copy a formula.', category: 'Excel' },
  { term: 'Backstage view', meaning: 'The File tab screen in Office apps containing New, Open, Save, Save As, Print, and Export.', category: 'Basics' },
  { term: 'Cell', meaning: 'The box at the intersection of a column and a row in an Excel worksheet (e.g. B3).', category: 'Excel' },
  { term: 'Citation', meaning: 'An in-text reference crediting the author or source of quoted or paraphrased material.', category: 'Word' },
  { term: 'Conditional formatting', meaning: 'Excel formatting (fill colour, font colour, icons) that updates automatically based on a cell’s value.', category: 'Excel' },
  { term: 'CPU', meaning: 'Central Processing Unit; the processor chip inside the computer that executes instructions.', category: 'Basics' },
  { term: 'Footnote', meaning: 'An explanatory or citation note placed at the bottom of the current Word page.', category: 'Word' },
  { term: 'Formula', meaning: 'An expression in Excel always starting with = that calculates a value.', category: 'Excel' },
  { term: 'Function', meaning: 'A built-in named Excel formula such as SUM, AVERAGE, IF, or VLOOKUP.', category: 'Excel' },
  { term: 'Gutter', meaning: 'Extra page margin space reserved on the binding side of a printed report or book.', category: 'Word' },
  { term: 'Mail merge', meaning: 'Combining one Word template document with an Excel data list to generate personalised letters or certificates.', category: 'Word' },
  { term: 'Operating system', meaning: 'Core system software that manages computer hardware and runs apps, such as Windows 11.', category: 'Basics' },
  { term: 'Placeholder', meaning: 'A dotted container box on a PowerPoint slide layout designed for titles, text, charts, or pictures.', category: 'PowerPoint' },
  { term: 'Range', meaning: 'A rectangular group of adjacent cells in Excel written as first:last, such as A1:D10.', category: 'Excel' },
  { term: 'Ribbon', meaning: 'The command strip with tabs (Home, Insert, Layout…) and groups at the top of Office applications.', category: 'Basics' },
  { term: 'Section break', meaning: 'A Word break that divides a document so different sections can have different orientations, margins, or page numbering.', category: 'Word' },
  { term: 'Slide Master', meaning: 'The top-most master slide in PowerPoint that controls global fonts, colours, and logos for all slides.', category: 'PowerPoint' },
  { term: 'SmartArt', meaning: 'Ready-made editable visual diagrams in Word and PowerPoint for processes, cycles, lists, and hierarchies.', category: 'PowerPoint' },
  { term: 'Style', meaning: 'A saved, named set of formatting rules (such as Heading 1 or Normal) enabling automatic Tables of Contents.', category: 'Word' },
  { term: 'Template', meaning: 'A pre-designed starter document or presentation file (.dotx or .potx) with layout and formatting ready.', category: 'Basics' },
  { term: 'Transition', meaning: 'The visual effect applied when moving from one slide to the next during a PowerPoint presentation.', category: 'PowerPoint' },
  { term: 'Workbook', meaning: 'An Excel spreadsheet file (.xlsx) containing one or more worksheets.', category: 'Excel' },
];

export const resourceFiles: ResourceFile[] = [
  {
    filename: 'raw_essay.txt',
    description: 'Unformatted 300-word essay text ready for Lab 3 formatting practice in Microsoft Word.',
    usedIn: 'Lab 3 (Formatting a Document)',
    format: 'txt',
    sampleContent: `Why I Chose English Literature\n\nLanguage shapes how we understand history, culture, and human emotion. Choosing to study English literature at Bangladesh Army University of Science and Technology (BAUST) allows me to read classic and contemporary voices critically while sharpening my analytical writing.\n\nThrough poetry, drama, and fiction, literature teaches empathy across borders and eras. Every text invites careful questioning: why a narrator speaks in a certain tone, how social power appears between lines, and how metaphor transforms ordinary experience.\n\nIn our modern academic city of Saidpur, combining literary study with computer fundamentals gives me practical strength. Formatting essays cleanly in Word, presenting book analyses in PowerPoint, and organizing research surveys in Excel prepare me for teaching, publishing, journalism, and civil service careers.\n`,
  },
  {
    filename: 'routine_template.txt',
    description: 'Tab-separated class schedule snippet you can convert directly into a Word Table (Insert ▸ Table ▸ Convert Text to Table).',
    usedIn: 'Lesson 1.6 & Lab 4',
    format: 'txt',
    sampleContent: `Day\t08:30-09:20\t09:25-10:15\t10:20-11:10\t11:15-12:05\nSunday\tENG 2101\tENG 2103\tBreak\tCSE 2110 (Lab)\nMonday\tENG 2105\tENG 2107\tBreak\tENG 2109\nTuesday\tENG 2101\tENG 2105\tBreak\tLibrary Hour\nWednesday\tENG 2103\tENG 2107\tBreak\tENG 2109\nThursday\tTutorial\tSeminar\tBreak\tClub Activity\n`,
  },
  {
    filename: 'report_raw_text.txt',
    description: 'Raw unstyled sections on a literary figure ready to style with Heading 1, Heading 2, Automatic TOC, footnotes, and MLA Works Cited.',
    usedIn: 'Lab 6 (Report & Mail Merge)',
    format: 'txt',
    sampleContent: `Title: William Wordsworth and the Romantic Spirit\n\nIntroduction\nWilliam Wordsworth (1770-1850) helped launch the English Romantic movement alongside Samuel Taylor Coleridge with the publication of Lyrical Ballads in 1798.\n\nPoetic Philosophy\nOrdinary Language\nWordsworth argued in his 1800 Preface that poetry should use the real language of everyday people rather than artificial diction.\n\nNature as Teacher\nIn poems such as Tintern Abbey and I Wandered Lonely as a Cloud, memory and nature work together to restore peace of mind.\n\nConclusion\nWordsworth transformed English verse by honoring personal emotion, rural life, and the quiet dignity of human memory.\n`,
  },
  {
    filename: 'students_list.csv',
    description: 'Sample 5-student recipient table (Name, ID, Department, Marks) ready to open in Excel for Word Mail Merge certificates.',
    usedIn: 'Lesson 1.10 & Lab 6',
    format: 'csv',
    sampleContent: `Name,ID,Department,Marks\nAyesha Siddika,240101,English,86\nTanvir Hasan,240102,English,78\nNusrat Jahan,240103,English,91\nMehedi Alam,240104,English,69\nFarhana Yasmin,240105,English,74\n`,
  },
  {
    filename: 'presentation_content.txt',
    description: 'Outline text for an 8-slide deck on "Digital Literacy for English Graduates" ready for Lab 7 & Lab 8.',
    usedIn: 'Lab 7 & Lab 8 (PowerPoint)',
    format: 'txt',
    sampleContent: `Slide 1: Title — Digital Literacy for English Graduates\nSlide 2: Outline — Academic Writing, Visual Storytelling, Research Data, Career Readiness\nSlide 3: Academic Writing — Styles, Automatic TOC, MLA Citations, Clean PDFs\nSlide 4: Visual Storytelling — 6x6 Slide Design, SmartArt, Consistent Branding\nSlide 5: Research Data — Survey Summaries, Percentages, Grade & Attendance Charts\nSlide 6: Career Readiness — Editing, Publishing, Teaching, Content Strategy\nSlide 7: Challenges & Habits — File Backups, Naming Rules, Academic Honesty\nSlide 8: Conclusion & Questions — Key Takeaways & Thank You\n`,
  },
  {
    filename: 'marks_15_students.csv',
    description: '15-student marks dataset (ID, Name, Section, Quiz, Mid, Final) ready to open in Excel for Lab 9 and Lab 10.',
    usedIn: 'Lab 9 & Lab 10 (Excel)',
    format: 'csv',
    sampleContent: `ID,Name,Section,Quiz(20),Mid(30),Final(50)\n240101,Ayesha Siddika,A,18,26,42\n240102,Tanvir Hasan,A,15,22,36\n240103,Nusrat Jahan,A,19,28,45\n240104,Mehedi Alam,A,12,18,29\n240105,Farhana Yasmin,A,16,24,38\n240106,Rafiqul Islam,A,10,14,19\n240107,Sumaiya Akter,A,17,25,40\n240108,Mahmudul Hasan,B,14,20,33\n240109,Tasfia Rahman,B,19,27,44\n240110,Sajid Karim,B,11,15,22\n240111,Mim Chowdhury,B,16,23,37\n240112,Nabil Ahmed,B,13,19,31\n240113,Raisa Tabassum,B,18,26,41\n240114,Shakib Hossain,B,9,12,17\n240115,Jannatul Ferdous,B,15,21,35\n`,
  },
  {
    filename: 'marks_30_students.csv',
    description: 'Extended 30-student dataset for Lab 11 sorting, filtering, Excel Tables, Column/Pie charts, and Practice Project 3.',
    usedIn: 'Lab 11 & Practice Project 3',
    format: 'csv',
    sampleContent: `ID,Name,Section,Quiz(20),Mid(30),Final(50)\n240101,Ayesha Siddika,A,18,26,42\n240102,Tanvir Hasan,A,15,22,36\n240103,Nusrat Jahan,A,19,28,45\n240104,Mehedi Alam,A,12,18,29\n240105,Farhana Yasmin,A,16,24,38\n240106,Rafiqul Islam,A,10,14,19\n240107,Sumaiya Akter,A,17,25,40\n240108,Mahmudul Hasan,A,14,20,33\n240109,Tasfia Rahman,A,19,27,44\n240110,Sajid Karim,A,11,15,22\n240111,Mim Chowdhury,A,16,23,37\n240112,Nabil Ahmed,A,13,19,31\n240113,Raisa Tabassum,A,18,26,41\n240114,Shakib Hossain,A,9,12,17\n240115,Jannatul Ferdous,A,15,21,35\n240116,Ariful Islam,B,17,24,39\n240117,Maliha Rahman,B,19,29,46\n240118,Sabbir Hossain,B,13,17,28\n240119,Samira Khan,B,16,22,36\n240120,Tareq Aziz,B,14,19,32\n240121,Fariha Sultana,B,18,25,41\n240122,Imran Mahmud,B,11,16,24\n240123,Lamia Islam,B,17,23,38\n240124,Zahin Chowdhury,B,15,21,34\n240125,Anika Tasnim,B,19,27,43\n240126,Rashedul Karim,B,8,13,16\n240127,Nishat Anjum,B,16,24,39\n240128,Fahim Shahriar,B,14,20,33\n240129,Sabina Yasmin,B,17,26,40\n240130,Kazi Omar,B,15,22,35\n`,
  },
];

export const faqItems: FaqItem[] = [
  {
    question: 'I don’t have Microsoft Office at home. What can I use?',
    answer: 'You can use Microsoft 365 web apps (free online in your browser), Google Docs / Google Slides / Google Sheets, or LibreOffice (Writer, Impress, Calc). Remember that university lab exams are conducted on desktop Microsoft Office, so practise the ribbon locations in class too.',
  },
  {
    question: 'My file won’t open on the lab PC.',
    answer: 'Always save in standard Microsoft Office formats (.docx, .pptx, .xlsx)—not Apple .pages or LibreOffice .odt—and always carry a backup PDF copy of finished documents and slides.',
  },
  {
    question: 'I lost my file or forgot to save before closing.',
    answer: 'Check File ▸ Open ▸ Recent, look inside the Desktop Recycle Bin, and check File ▸ Info ▸ Manage Document ▸ Recover Unsaved Documents. Turn on AutoSave next time if saving to OneDrive.',
  },
  {
    question: 'How do I submit labs?',
    answer: 'Follow your instructor’s instructions in class (Google Classroom or formal email) and strictly use the StudentID_LabNN_Topic naming format (for example, 2xxxxxxx_Lab03_Formatting.docx).',
  },
  {
    question: 'Can I use a phone to study?',
    answer: 'Yes! This learning portal is fully responsive for 360px phone screens so you can read every lesson, review shortcuts, practise flashcards, and take MCQ quizzes on your phone—then complete the hands-on lab tasks on a computer.',
  },
];
