# CSE 2110 Computer Fundamentals Sessional — Website Prompt, Outline & Full Content

Course Teachers:
Naimur Rahman, Lecturer, CSE, BAUST
Md. Rakib Trofder, Lecturer, CSE, BAUST
## About this document

This document holds everything needed to build a complete learning website for CSE 2110 Computer Fundamentals Sessional: a copy-paste master prompt (Part A), the site outline (Part B), the full lesson content for every page (Part C), and labs, assessment, quizzes and reference material (Part D).

| Item | Detail |
| --- | --- |
| Course code | CSE 2110 |
| Course title | Computer Fundamentals Sessional |
| Credit / contact | 0.75 credit, 1.5 hours lab per week (adjust to the official syllabus) |
| Institution | Bangladesh Army University of Science and Technology (BAUST), Saidpur |
| Core tools | Microsoft Word, Microsoft PowerPoint, Microsoft Excel (Microsoft 365 / Office 2019+) |

**How to use it**

1. Copy the whole of Part A into Claude, Claude Code, Cursor, Lovable or any AI site builder.
2. Paste Parts B, C and D right after it as the "content source". The prompt tells the builder to use that text word for word.
3. Review the generated site, then replace any lesson or lab with Naimur Rahman Sir's own slides or lab sheets where they differ.

**Assumptions to check:** the credit hours, week count (14 lab weeks) and mark split in Part D follow common BAUST sessional practice. Replace them with the official course outline if it says otherwise.

## Part A — Master website-building prompt (copy everything in the box)

```markdown
ROLE
You are a senior front-end developer and instructional designer. Build a complete,
production-ready educational website for a university lab course. Every page must be
fully written — no "Lorem ipsum", no "content coming soon", no placeholders.

COURSE IDENTITY
- Course: CSE 2110 — Computer Fundamentals Sessional
- Institution: Bangladesh Army University of Science and Technology (BAUST), Saidpur, Bangladesh
- Audience: undergraduate students of the Department of English (non-technical,
  many using a computer seriously for the first time). Write in clear, simple English.
  Add a short Bangla hint (বাংলা টিপস) box under difficult steps where helpful.
- Main credit: Naimur Rahman Sir, Department of CSE, BAUST — course content and
  teaching design. Show this on the home page hero, in the footer of every page,
  and on a dedicated Credits page.
- Website prepared by: Md. Rakib Trofder.
- Core software: Microsoft Word, PowerPoint and Excel (Microsoft 365 / Office 2019+,
  Windows 10/11). Mention Google Docs/Slides/Sheets equivalents in a small
  "Free alternative" note where useful.

CONTENT SOURCE (MOST IMPORTANT RULE)
I will paste the site outline (Part B), the full lesson content (Part C) and labs,
assessment, quizzes, glossary and shortcuts (Part D) after this prompt.
Use that text as the single source of truth. Keep every heading, step, table,
shortcut, formula, lab task and quiz question. You may improve layout and add
visuals, but do not drop or shorten content.

TECH STACK
- Static site, no backend, deployable free on GitHub Pages, Netlify or Vercel.
- Preferred: Vite + React + TypeScript + Tailwind CSS + React Router (HashRouter so
  GitHub Pages refresh works). Alternative if I ask: plain HTML/CSS/JS, one file per page.
- Store lesson content in /src/content as Markdown or TS objects (one file per lesson)
  so a teacher can edit text without touching components.
- Icons: lucide-react. Fonts: Inter (body), Poppins or Plus Jakarta Sans (headings),
  Noto Sans Bengali for Bangla text.
- No paid APIs, no login, no database. Progress and quiz scores saved in localStorage
  (wrap every read/write in try/catch).

DESIGN SYSTEM
- Light, clean, academic. White or #F8FAFC backgrounds with dark text (#0F172A).
  Do NOT use dark backgrounds for main content. Optional dark-mode toggle only.
- Module colour accents (mirror the real apps so students connect them):
  Module 0 Computer Basics = Slate #475569; Word = Blue #2B579A;
  PowerPoint = Orange-red #D24726; Excel = Green #217346.
- BAUST navy #1E3A8A for header and primary buttons.
- Rounded cards (12px), soft shadows, 8px spacing grid, max content width 1100px.
- Fully responsive: must work at 360px phone width (most students use phones),
  16px side gutters, no horizontal scroll, tables scroll inside their own box.
- Accessible: WCAG AA contrast, alt text, keyboard navigation, visible focus rings.

GLOBAL LAYOUT
- Sticky header: course code + title, nav links (Home, Syllabus, Modules dropdown,
  Labs, Practice, Quizzes, Resources, Credits), search icon.
- Lesson pages: left sidebar with module/lesson tree and tick marks for completed
  lessons; right "On this page" mini table of contents; breadcrumb on top;
  Previous / Next lesson buttons at the bottom; "Mark as complete" button.
- Footer on every page: "Course content & teaching design: Naimur Rahman Sir,
  Dept. of CSE, BAUST | Website: Md. Rakib Trofder | For educational use" + year.

REUSABLE COMPONENTS (build each one)
1. StepList — numbered steps with the ribbon path shown as a chip,
   e.g. [Insert ▸ Table ▸ Insert Table].
2. ShortcutKey — renders keys like <kbd>Ctrl</kbd> + <kbd>S</kbd>.
3. Callout boxes: Tip (green), Note (blue), Warning (amber), Bangla hint (purple),
   Try it (orange).
4. RibbonMock — a simple HTML/CSS imitation of the Office ribbon that highlights
   the tab/group used in a step (no screenshots of Microsoft UI needed).
5. FormulaBox — monospace Excel formula with a "Copy" button and an explanation line.
6. Interactive Excel playground — a small 6x6 grid where students type numbers and a
   formula (SUM, AVERAGE, MAX, MIN, COUNT, IF, simple + - * /) and see the result.
7. Quiz component — multiple choice, instant feedback with explanation, score,
   retry, score saved in localStorage.
8. Flashcards for shortcuts (flip on click).
9. Lab card — objective, time, files to submit, step checklist (checkboxes saved
   locally), marking rubric table, "Download lab sheet (Print)" button using
   window.print() with a print stylesheet.
10. Progress bar per module and overall on the home page.
11. Global search (client-side, e.g. Fuse.js) over lesson titles, headings, shortcuts
    and glossary terms.
12. Glossary tooltip — glossary terms underlined with dotted line show definition on hover/tap.

PAGES (follow Part B exactly)
Home, Course Overview & Syllabus, Getting Started (Module 0 lessons), Microsoft Word
(Module 1 lessons), Microsoft PowerPoint (Module 2 lessons), Microsoft Excel
(Module 3 lessons), Lab Sheets (Lab 1–12), Practice Projects, Quizzes,
Shortcut Cheat Sheet, Glossary, Assessment & Exam Guide, Downloads/Resources,
FAQ, Credits & About, 404 page.

EACH LESSON PAGE MUST HAVE, IN THIS ORDER
1. Title, module badge, estimated time, difficulty (Beginner/Intermediate).
2. Learning outcomes (3–5 bullets, starting with verbs).
3. Concept explanation in short paragraphs.
4. Step-by-step procedures with ribbon path chips.
5. Keyboard shortcuts table for the lesson.
6. Common mistakes & fixes.
7. "Try it yourself" practice task.
8. "Check yourself" link to that module's quiz (questions in Part D).
9. Previous / Next navigation.

QUALITY CHECKLIST BEFORE YOU FINISH
- Every link works; no empty page; no placeholder text.
- Naimur Rahman Sir's credit appears on Home, footer and Credits page.
- Lighthouse: Performance, Accessibility, Best Practices, SEO all 90+.
- Tested at 360px, 768px and 1280px widths.
- Print stylesheet makes lab sheets print cleanly on A4.
- Provide a README with: install, run (npm run dev), build, deploy to GitHub Pages,
  and how a teacher edits lesson content.

OUTPUT
Give me the full project file tree, then every file's complete code. Do not skip files.
```

Paste Parts B, C and D directly under this prompt when you send it.

## Part B — Website outline and sitemap

The site has 16 top-level pages and 34 lessons across four modules, plus 12 lab sheets.

| # | Page | URL | What it contains |
| --- | --- | --- | --- |
| 1 | Home | / | Hero (course code, title, BAUST, credit to Naimur Rahman Sir), 4 module cards, progress bar, "Start learning" button, this week's lab |
| 2 | Course Overview & Syllabus | /syllabus | Course info table, objectives, course outcomes (CO1–CO4), 14-week plan, lab rules, mark distribution |
| 3 | Module 0 — Getting Started | /module/basics | Lessons 0.1–0.6 |
| 4 | Module 1 — Microsoft Word | /module/word | Lessons 1.1–1.10 |
| 5 | Module 2 — Microsoft PowerPoint | /module/powerpoint | Lessons 2.1–2.8 |
| 6 | Module 3 — Microsoft Excel | /module/excel | Lessons 3.1–3.10 + Excel playground |
| 7 | Lab Sheets | /labs | Lab 1–12 cards, each with its own page /labs/lab-01 … |
| 8 | Practice Projects | /projects | 3 mini projects (CV, presentation, result sheet) + final integrated project |
| 9 | Quizzes | /quizzes | Module quizzes and one 30-question final practice quiz |
| 10 | Shortcut Cheat Sheet | /shortcuts | Searchable table + flashcards |
| 11 | Glossary | /glossary | A–Z terms |
| 12 | Assessment & Exam Guide | /assessment | Marks split, lab mid and lab final format, rubrics, viva questions |
| 13 | Resources & Downloads | /resources | Practice files list, free alternatives, typing practice links |
| 14 | FAQ | /faq | Student questions |
| 15 | Credits & About | /credits | Main credit to Naimur Rahman Sir, website credit, acknowledgement, disclaimer |
| 16 | 404 | \* | Friendly "page not found" with link home |

**Lesson tree**

- Module 0 — Getting Started with Computers
  - 0.1 Computer basics: hardware, software, input/output, storage units
  - 0.2 Windows essentials: desktop, taskbar, Start menu, windows
  - 0.3 File and folder management, File Explorer, naming and saving
  - 0.4 Keyboard, mouse and touch typing basics
  - 0.5 Introduction to Microsoft Office and the Ribbon interface
  - 0.6 Internet, email etiquette and safe computer use
- Module 1 — Microsoft Word
  - 1.1 Word interface and creating your first document
  - 1.2 Typing, selecting and editing text
  - 1.3 Character (font) formatting
  - 1.4 Paragraph formatting: alignment, spacing, indents, lists
  - 1.5 Page layout: margins, orientation, size, columns, breaks
  - 1.6 Tables in Word
  - 1.7 Pictures, shapes, SmartArt, text boxes, WordArt
  - 1.8 Headers, footers, page numbers, footnotes
  - 1.9 Styles, table of contents, references and citations
  - 1.10 Proofing, track changes, mail merge, printing and PDF
- Module 2 — Microsoft PowerPoint
  - 2.1 PowerPoint interface, views and slide layouts
  - 2.2 Working with text and slide design (themes, variants)
  - 2.3 Images, shapes, icons, SmartArt
  - 2.4 Tables and charts in slides
  - 2.5 Audio, video and hyperlinks
  - 2.6 Transitions and animations
  - 2.7 Slide Master, speaker notes, slide numbers
  - 2.8 Presenting, printing handouts and good design rules
- Module 3 — Microsoft Excel
  - 3.1 Excel interface: workbook, worksheet, cell, range
  - 3.2 Entering and editing data, AutoFill, data types
  - 3.3 Formatting cells, number formats, conditional formatting
  - 3.4 Formulas and operators, order of operations
  - 3.5 Cell references: relative, absolute, mixed
  - 3.6 Basic functions: SUM, AVERAGE, MIN, MAX, COUNT, ROUND
  - 3.7 Logical and lookup functions: IF, nested IF, COUNTIF, SUMIF, VLOOKUP, XLOOKUP
  - 3.8 Sorting, filtering and tables
  - 3.9 Charts and graphs
  - 3.10 Page setup, printing, and protecting sheets

**Navigation rules:** Home → module page (lesson list with times) → lesson → next lesson. Each module page ends with its quiz and linked labs. Labs link back to the lessons they need.

## Part C — Full course content

Every lesson below follows the same pattern: outcomes, explanation, steps, shortcuts, common mistakes and a "Try it" task. Module quizzes are in Part D.

### Module 0 — Getting Started with Computers

**Module goal:** students can use a Windows computer confidently, manage files, and understand the Office interface before starting Word, PowerPoint and Excel. Total time: about 2 lab weeks.

#### Lesson 0.1 — Computer basics (40 min)

**Learning outcomes**

- Define a computer and describe the Input–Process–Output–Storage cycle.
- Distinguish hardware from software, and system software from application software.
- Name common input, output and storage devices.
- Convert between storage units (bit, byte, KB, MB, GB, TB).

**Explanation**

A computer is an electronic machine that accepts data (input), processes it according to instructions (program), produces results (output) and stores data for later use. Data is raw facts; information is processed, meaningful data.

The basic organization has five units: Input unit, Central Processing Unit (CPU: Control Unit + Arithmetic Logic Unit), Memory unit (primary memory: RAM and ROM), Output unit, and Secondary storage (HDD, SSD, pen drive).

| Category | Examples |
| --- | --- |
| Input devices | Keyboard, mouse, scanner, microphone, webcam, touchscreen, OMR/OCR reader |
| Output devices | Monitor, printer, speaker, projector, headphones |
| Storage devices | Hard disk (HDD), Solid state drive (SSD), USB pen drive, memory card, DVD, cloud storage |
| System software | Operating systems: Windows, macOS, Linux, Android; device drivers; utilities |
| Application software | MS Word, PowerPoint, Excel, web browsers, media players, Zoom |

**Storage units**

| Unit | Equals |
| --- | --- |
| 1 Bit | 0 or 1 (binary digit) |
| 1 Byte | 8 bits (one character) |
| 1 Kilobyte (KB) | 1024 bytes |
| 1 Megabyte (MB) | 1024 KB |
| 1 Gigabyte (GB) | 1024 MB |
| 1 Terabyte (TB) | 1024 GB |

RAM is temporary (volatile) working memory; its data is lost when power goes off. ROM is permanent and holds start-up instructions. Secondary storage keeps files permanently.

**Common mistakes:** calling the whole system box the "CPU" (the CPU is the processor chip inside); confusing RAM size with storage size.

**Try it:** open Settings ▸ System ▸ About and write down your computer's processor, installed RAM and Windows edition.

#### Lesson 0.2 — Windows essentials (40 min)

**Learning outcomes**

- Start, sign in to, lock, restart and shut down Windows safely.
- Identify desktop, taskbar, Start menu, notification area and icons.
- Open, move, resize, minimize, maximize and switch between windows.

**Explanation and steps**

- **Desktop:** the main screen with icons and wallpaper. **Taskbar:** bar at the bottom with Start button, search, pinned and open apps, clock and notification area.
- Open an app: click Start, type the app name (e.g. "Word"), press Enter.
- Window controls (top-right): Minimize (–), Maximize/Restore (□), Close (×).
- Snap windows side by side: drag a window to the left or right screen edge, or press Windows + Left/Right arrow.
- Shut down properly: Start ▸ Power ▸ Shut down. Never switch off the power directly; unsaved work and the system can be damaged.

| Action | Shortcut |
| --- | --- |
| Open Start menu | Windows key |
| Switch between open apps | Alt + Tab |
| Show desktop | Windows + D |
| Open File Explorer | Windows + E |
| Lock the computer | Windows + L |
| Close current app | Alt + F4 |
| Task Manager (app not responding) | Ctrl + Shift + Esc |
| Screenshot of selected area | Windows + Shift + S |

**Try it:** open Word and File Explorer, snap them side by side, then lock and unlock the computer.

#### Lesson 0.3 — File and folder management (60 min)

**Learning outcomes**

- Create, rename, copy, move and delete files and folders.
- Understand drives, folders, file paths and file extensions.
- Save files in an organised folder structure and find them again.

**Explanation**

A file is a named collection of data (a document, picture, song). A folder holds files and other folders. A drive is a storage device such as C: or a pen drive (E:). A path shows the location, e.g. `D:\BAUST\CSE2110\Lab01\MyCV.docx`. The extension after the dot tells the file type.

| Extension | File type |
| --- | --- |
| .docx | Word document |
| .pptx | PowerPoint presentation |
| .xlsx | Excel workbook |
| .pdf | Portable Document Format |
| .jpg / .png | Image |
| .mp4 / .mp3 | Video / audio |
| .zip | Compressed folder |

**Steps**

1. Create a folder: open File Explorer (Windows + E) ▸ go to D: drive ▸ right-click empty space ▸ New ▸ Folder ▸ type `CSE2110_YourID` ▸ Enter.
2. Rename: select the item ▸ press F2 ▸ type new name ▸ Enter.
3. Copy: select ▸ Ctrl + C ▸ open destination ▸ Ctrl + V.
4. Move: select ▸ Ctrl + X ▸ open destination ▸ Ctrl + V (or drag with the mouse).
5. Delete: select ▸ Delete key (goes to Recycle Bin). Restore from Recycle Bin if needed. Shift + Delete removes permanently.
6. Select many files: Ctrl + click for separate files, Shift + click for a range, Ctrl + A for all.
7. Compress: right-click folder ▸ Compress to ZIP file (Windows 11) or Send to ▸ Compressed (zipped) folder.
8. Search: type in the search box at the top-right of File Explorer.

**Good naming rules:** use StudentID\_Lab01\_Topic.docx; avoid spaces at the start, symbols like / \\ : \* ? " < > |, and names like "New Document (3)".

**Common mistakes:** saving everything to Downloads or Desktop; forgetting where a file was saved (always check the Save As location); removing a pen drive without "Eject".

**Try it:** create `CSE2110_YourID` with subfolders Word, PowerPoint, Excel and Labs. Create a blank Word file inside Word, rename it, copy it to Labs, then zip the main folder.

#### Lesson 0.4 — Keyboard, mouse and touch typing (40 min)

**Learning outcomes**

- Name the main key groups and their uses.
- Use mouse actions: click, double-click, right-click, drag, scroll.
- Place fingers on the home row and practise touch typing.

**Key groups:** alphabet and number keys; function keys F1–F12 (F1 help, F2 rename, F5 refresh/start slideshow, F7 spelling, F12 Save As in Office); modifier keys Ctrl, Alt, Shift, Windows; navigation keys Home, End, Page Up, Page Down, arrows; editing keys Backspace (deletes left), Delete (deletes right), Insert, Enter, Tab, Caps Lock, Esc.

**Mouse actions:** single click selects; double-click opens; right-click shows the context menu; drag moves or selects; scroll wheel moves up/down; Ctrl + scroll zooms.

**Touch typing:** left fingers rest on A S D F, right fingers on J K L ; with thumbs on Space. The F and J keys have small bumps to find position without looking. Target for this course: 25+ words per minute with 90%+ accuracy by the end of the semester.

**Try it:** 10 minutes daily on a free typing tutor (see Resources page) and record your speed each week.

#### Lesson 0.5 — Introduction to Microsoft Office and the Ribbon (30 min)

**Learning outcomes**

- Name the main Office applications and what each is used for.
- Identify the common parts of the Office window.
- Use Backstage view to create, open, save, Save As and export files.

| Application | Used for | File extension |
| --- | --- | --- |
| Word | Letters, reports, CVs, assignments | .docx |
| PowerPoint | Slide presentations | .pptx |
| Excel | Tables of numbers, calculations, charts | .xlsx |
| Outlook | Email and calendar | — |
| OneNote | Digital notebook | — |

**Common window parts:** Title bar (file name), Quick Access Toolbar (Save, Undo, Redo), Ribbon with Tabs (Home, Insert, Design, Layout…), Groups inside each tab (e.g. Font group), Commands (buttons), Dialog box launcher (small arrow at a group's corner), Work area, Status bar (page/word count, zoom slider), View buttons.

**Backstage view (File tab):** New, Open, Info, Save, Save As, Print, Share, Export (Create PDF), Close, Options.

**Save vs Save As:** Save (Ctrl + S) updates the current file. Save As (F12) creates a new copy with a new name, location or format. Turn on AutoSave when the file is on OneDrive.

| Common Office shortcut | Action |
| --- | --- |
| Ctrl + N | New file |
| Ctrl + O | Open |
| Ctrl + S | Save |
| F12 | Save As |
| Ctrl + P | Print |
| Ctrl + Z / Ctrl + Y | Undo / Redo |
| Ctrl + C / X / V | Copy / Cut / Paste |
| Ctrl + A | Select all |
| Ctrl + F / Ctrl + H | Find / Replace |
| Alt (then letters) | Show ribbon key tips |

#### Lesson 0.6 — Internet, email and safe computer use (30 min)

**Learning outcomes**

- Search the web effectively and judge whether a source is reliable.
- Write a formal email with subject, greeting, body, closing and attachment.
- Follow basic cyber-safety and academic honesty rules.

**Search tips:** use specific keywords; put exact phrases in quotes ("mail merge in Word"); use `site:edu` to limit results; check author, date and organisation before trusting a page.

**Formal email format**

1. To: teacher's official email; Cc if needed.
2. Subject: clear and specific, e.g. `CSE 2110 Lab 03 Submission – ID 2xxxxxxx`.
3. Greeting: "Dear Sir," or "Respected Sir,".
4. Body: short, polite, purpose in the first line.
5. Closing: "Sincerely," + full name, ID, section, department.
6. Attach the file and check it opens before sending.

**Safety rules:** use strong passwords (12+ characters, mix of letters, numbers, symbols); never share OTPs; scan pen drives for viruses; do not open unknown attachments; log out of lab computers; back up work to Google Drive or OneDrive.

**Academic honesty:** copying another student's file (even with changed name) is plagiarism. Always cite images and text taken from the internet.

### Module 1 — Microsoft Word

**Module goal:** students produce well-formatted academic and professional documents: CV, application letter, assignment report with table of contents, and mail-merged letters. Total time: about 4 lab weeks.

#### Lesson 1.1 — Word interface and your first document (40 min)

**Learning outcomes**

- Identify the Word window parts and the main ribbon tabs.
- Create, save, close and reopen a document.
- Switch views and use zoom.

**Ribbon tabs in Word:** File, Home (font, paragraph, styles, editing), Insert (pages, tables, pictures, shapes, header/footer, symbols), Draw, Design (themes, watermark, page colour, borders), Layout (margins, orientation, size, columns, breaks, indent, spacing), References (TOC, footnotes, citations, captions), Mailings (mail merge, envelopes), Review (spelling, word count, comments, track changes), View (Read Mode, Print Layout, Web Layout, Outline, Navigation Pane, ruler, zoom), Help.

**Steps**

1. Start ▸ type Word ▸ Enter ▸ Blank document.
2. Type your name, department and ID on three lines.
3. File ▸ Save As ▸ Browse ▸ choose `CSE2110_YourID\Word` ▸ name `Lesson1_FirstDoc` ▸ Save.
4. Close with Ctrl + W; reopen with File ▸ Open ▸ Recent.
5. View ▸ show Ruler and Navigation Pane; use the zoom slider at the bottom-right.

**Status bar** shows page number, word count, language and proofing status. Right-click it to choose what to show.

#### Lesson 1.2 — Typing, selecting and editing text (40 min)

**Learning outcomes**

- Select text quickly with mouse and keyboard.
- Cut, copy, paste with paste options; undo and redo.
- Use Find, Replace and Go To.

| To select | Do this |
| --- | --- |
| A word | Double-click it |
| A paragraph | Triple-click inside it |
| A line | Click in the left margin next to it |
| Whole document | Ctrl + A |
| Character by character | Shift + Left/Right arrow |
| Word by word | Ctrl + Shift + Left/Right arrow |
| To end of line | Shift + End |
| A vertical block | Alt + drag |

**Paste options** (Ctrl + V then Ctrl, or Home ▸ Paste arrow): Keep Source Formatting, Merge Formatting, Picture, Keep Text Only. Use Keep Text Only (Ctrl + Shift + V in Microsoft 365) when pasting from websites to avoid strange fonts.

**Find and Replace:** Ctrl + F opens the Navigation Pane search. Ctrl + H opens Replace: type the old word, the new word, then Replace All. Use More ▸ Match case or Find whole words only for accuracy. Ctrl + G (Go To) jumps to a page number.

**Other editing tools:** Change Case (Home ▸ Aa: Sentence case, lowercase, UPPERCASE, Capitalize Each Word; Shift + F3 cycles), Insert ▸ Symbol (©, ®, ±, √, ৳), Insert ▸ Equation (Alt + =), Clear All Formatting (Home ▸ A with eraser).

**Common mistakes:** pressing Enter at the end of every line (Word wraps automatically — press Enter only for a new paragraph); using many spaces to line up text (use Tab or tables).

**Try it:** type three paragraphs about your hometown, replace every "city" with "town" using Replace All, and change the title to UPPERCASE with Change Case.

#### Lesson 1.3 — Character (font) formatting (40 min)

**Learning outcomes:** apply font, size, style, colour, highlight and effects; use Format Painter; use the Font dialog box.

| Command | Path | Shortcut |
| --- | --- | --- |
| Bold / Italic / Underline | Home ▸ Font | Ctrl + B / I / U |
| Font size up / down | Home ▸ Font | Ctrl + \] / Ctrl + \[ (or Ctrl + Shift + > / <) |
| Font dialog | Home ▸ Font launcher | Ctrl + D |
| Subscript (H₂O) | Home ▸ Font | Ctrl + = |
| Superscript (x²) | Home ▸ Font | Ctrl + Shift + + |
| Strikethrough | Home ▸ Font | — |
| Text highlight colour | Home ▸ Font | — |
| Font colour | Home ▸ Font | — |
| Text effects | Home ▸ Font ▸ A (glow) | — |
| Format Painter | Home ▸ Clipboard (brush) | Ctrl + Shift + C / V |

**Format Painter:** select formatted text ▸ click the brush once to copy formatting to one place, or double-click it to apply many times; press Esc to stop.

**Academic font guideline:** body text Times New Roman 12 pt or Calibri 11 pt; headings 14–16 pt bold; use at most two fonts per document; avoid bright colours in formal writing.

#### Lesson 1.4 — Paragraph formatting and lists (50 min)

**Learning outcomes:** set alignment, line and paragraph spacing, indents, tabs, bullets and numbering, borders and shading.

| Command | Path | Shortcut |
| --- | --- | --- |
| Align left / center / right | Home ▸ Paragraph | Ctrl + L / E / R |
| Justify | Home ▸ Paragraph | Ctrl + J |
| Line spacing 1.0 / 1.5 / 2.0 | Home ▸ Line and Paragraph Spacing | Ctrl + 1 / 5 / 2 |
| Increase / decrease indent | Home ▸ Paragraph | Ctrl + M / Ctrl + Shift + M |
| Hanging indent | Paragraph dialog ▸ Special | Ctrl + T |
| Paragraph dialog | Home ▸ Paragraph launcher | — |
| Show/hide formatting marks (¶) | Home ▸ Paragraph | Ctrl + Shift + 8 |
| Bulleted list | Home ▸ Bullets | — |
| Numbered list | Home ▸ Numbering | — |
| Multilevel list | Home ▸ Multilevel List | Tab / Shift + Tab to change level |

**Spacing:** Line spacing is space between lines inside a paragraph. Paragraph spacing (Before/After, in points) is space between paragraphs — use 6 pt After instead of pressing Enter twice.

**Indents on the ruler:** First Line Indent (top triangle), Hanging Indent (bottom triangle), Left Indent (small box), Right Indent.

**Tabs:** click the tab selector at the left of the ruler to choose Left, Center, Right or Decimal tab, then click on the ruler. Use Paragraph ▸ Tabs to add dot leaders (e.g. `Chapter 1 .......... 5`).

**Borders and shading:** Home ▸ Borders arrow ▸ Borders and Shading ▸ choose Box, style, colour, width, and Shading fill. Page Border tab adds a border to the whole page.

**Drop Cap:** Insert ▸ Drop Cap ▸ Dropped (large first letter).

**Try it:** format a paragraph as Justify, 1.5 line spacing, 0.5" first-line indent, 6 pt after. Make a two-level numbered list of your semester courses.

#### Lesson 1.5 — Page layout (40 min)

**Learning outcomes:** set margins, orientation, paper size, columns, page and section breaks, watermark, page colour and border.

**Steps**

1. Layout ▸ Margins ▸ Normal (1" all sides) or Custom Margins (e.g. Top 1", Bottom 1", Left 1.25", Right 1").
2. Layout ▸ Orientation ▸ Portrait or Landscape.
3. Layout ▸ Size ▸ A4 (standard in Bangladesh) or Letter.
4. Layout ▸ Columns ▸ Two (newsletter style); More Columns ▸ Line between.
5. Layout ▸ Breaks ▸ Page (Ctrl + Enter) starts a new page; Column break; Section Break ▸ Next Page lets one page be landscape and others portrait.
6. Design ▸ Watermark ▸ CONFIDENTIAL / DRAFT or Custom Watermark (text or picture).
7. Design ▸ Page Color and Page Borders.

**Measurement units:** File ▸ Options ▸ Advanced ▸ Display ▸ Show measurements in inches or centimeters.

**Common mistake:** pressing Enter many times to reach a new page. Always use a Page Break.

#### Lesson 1.6 — Tables in Word (60 min)

**Learning outcomes:** insert, edit, format and convert tables; merge/split cells; add formulas and sort.

**Steps**

1. Insert ▸ Table ▸ drag over the grid (e.g. 5×4) or Insert Table ▸ enter columns and rows.
2. Type in cells; Tab moves to the next cell (Tab in the last cell adds a row); Shift + Tab goes back.
3. Table Design tab: Table Styles, Header Row, Banded Rows, Shading, Borders, Pen colour.
4. Layout tab (table): Insert Above/Below/Left/Right, Delete, Merge Cells, Split Cells, Split Table, AutoFit (Contents/Window), Distribute Rows/Columns, cell Alignment, Text Direction, Cell Margins.
5. Repeat Header Rows (Layout tab) so the header shows on every page.
6. Sort: Layout ▸ Sort ▸ choose column and Ascending/Descending.
7. Simple calculation: click a cell ▸ Layout ▸ Formula ▸ `=SUM(ABOVE)` or `=AVERAGE(LEFT)`.
8. Convert: select tab-separated text ▸ Insert ▸ Table ▸ Convert Text to Table; reverse with Layout ▸ Convert to Text.
9. Draw Table and Eraser for irregular tables; Quick Tables for calendars.

**Try it:** create your class routine (Days × Periods) with merged lunch-break cells, a coloured header row and centred text.

#### Lesson 1.7 — Pictures, shapes, SmartArt, text boxes, WordArt (50 min)

**Learning outcomes:** insert and format graphics; control text wrapping and position; group objects; add captions.

- **Pictures:** Insert ▸ Pictures ▸ This Device / Stock Images / Online Pictures. Picture Format tab: Corrections, Color, Artistic Effects, Picture Styles, Crop, Size, Remove Background, Alt Text.
- **Wrap Text** (Layout Options icon or Picture Format ▸ Wrap Text): In Line with Text (moves like a letter), Square, Tight, Through, Top and Bottom, Behind Text, In Front of Text. Use Square or Top and Bottom for reports.
- **Shapes:** Insert ▸ Shapes ▸ draw with drag (hold Shift for a perfect circle/square); Shape Format ▸ Fill, Outline, Effects; right-click ▸ Add Text.
- **Group:** Ctrl + click several shapes ▸ right-click ▸ Group. Arrange order with Bring Forward / Send Backward; use Align ▸ Align Center.
- **SmartArt:** Insert ▸ SmartArt ▸ List, Process, Cycle, Hierarchy (organisation chart), Relationship, Matrix, Pyramid. Type in the text pane; change colours in SmartArt Design.
- **Text box:** Insert ▸ Text Box ▸ Draw Text Box. **WordArt:** Insert ▸ WordArt (use sparingly).
- **Icons, Charts, Screenshot, 3D Models** are also in Insert.
- **Caption:** right-click a picture ▸ Insert Caption ▸ "Figure 1: …".

**Try it:** design a one-page event poster for a Department of English literary fest: title WordArt, a picture with Square wrap, a SmartArt Process of the schedule and a text box with contact details.

#### Lesson 1.8 — Headers, footers, page numbers, footnotes (30 min)

**Steps**

1. Insert ▸ Header ▸ choose a style ▸ type the course name; Insert ▸ Footer ▸ type your name and ID.
2. Insert ▸ Page Number ▸ Bottom of Page ▸ Plain Number 2. Format Page Numbers ▸ start at 1, or i, ii, iii for front pages.
3. Header & Footer tab ▸ Different First Page (no number on cover), Different Odd & Even Pages.
4. For different numbering in sections: insert Section Break (Next Page), then untick Link to Previous.
5. References ▸ Insert Footnote (Alt + Ctrl + F) puts a note at the bottom of the page; Insert Endnote puts it at the end of the document.
6. Double-click the main text or press Close Header and Footer to leave.

#### Lesson 1.9 — Styles, table of contents, references and citations (50 min)

**Learning outcomes:** apply and modify styles; build an automatic table of contents; insert citations, bibliography and captions.

**Steps**

1. Apply Heading 1 to chapter titles, Heading 2 to sub-titles (Home ▸ Styles; Ctrl + Alt + 1 / 2).
2. Modify a style: right-click the style ▸ Modify ▸ set font, size, colour, spacing ▸ OK. All headings update at once.
3. Place cursor on a blank page ▸ References ▸ Table of Contents ▸ Automatic Table 1.
4. After editing, References ▸ Update Table ▸ Update entire table.
5. Citations: References ▸ Style (APA or MLA — MLA is common in English departments) ▸ Insert Citation ▸ Add New Source ▸ fill author, title, year, publisher.
6. References ▸ Bibliography ▸ Works Cited / References inserts the list automatically.
7. Insert Caption for figures and tables, then Insert Table of Figures.
8. Cover page: Insert ▸ Cover Page.

**Why styles matter:** the Navigation Pane, table of contents and consistent formatting all depend on Heading styles.

#### Lesson 1.10 — Proofing, track changes, mail merge, printing and PDF (60 min)

**Proofing:** red underline = spelling, blue double underline = grammar. Review ▸ Spelling & Grammar (F7); Editor shows suggestions; Review ▸ Thesaurus (Shift + F7); Word Count; set language to English (United Kingdom) or (United States) via Review ▸ Language.

**Comments and Track Changes:** Review ▸ New Comment (Ctrl + Alt + M). Review ▸ Track Changes (Ctrl + Shift + E) records every insertion/deletion; the reviewer uses Accept / Reject. Use Display for Review ▸ Simple Markup / All Markup / No Markup. Review ▸ Compare compares two versions.

**Mail merge** (one letter, many recipients):

1. Prepare the data source in Excel with headings: Name, ID, Department, Marks.
2. In Word: Mailings ▸ Start Mail Merge ▸ Letters.
3. Mailings ▸ Select Recipients ▸ Use an Existing List ▸ choose the Excel file and sheet.
4. Write the letter; place cursor where data goes ▸ Insert Merge Field ▸ Name, etc.
5. Mailings ▸ Preview Results; use arrows to check each record.
6. Mailings ▸ Finish & Merge ▸ Edit Individual Documents (new document with all letters) or Print Documents.
7. Also available: Envelopes, Labels, Rules (If…Then…Else).

**Protect and share:** File ▸ Info ▸ Protect Document ▸ Encrypt with Password or Restrict Editing.

**Print and PDF:** File ▸ Print (Ctrl + P) ▸ choose printer, copies, pages (e.g. 1-3,5), one-sided/two-sided, orientation, pages per sheet. File ▸ Export ▸ Create PDF/XPS or Save As ▸ PDF. Always submit a PDF when formatting must not change.

**Try it:** mail-merge 5 "Lab completion certificates" from an Excel list of 5 students and export the result as PDF.

**Word module shortcut summary:** Ctrl + Enter page break · Shift + Enter line break · Ctrl + Shift + Space non-breaking space · F4 repeat last action · Ctrl + K hyperlink · Alt + Shift + D insert date · Ctrl + Home / End go to start / end of document.

### Module 2 — Microsoft PowerPoint

**Module goal:** students design and deliver a clear 8–10 slide academic presentation with consistent design, visuals, a chart and purposeful animation. Total time: about 3 lab weeks.

#### Lesson 2.1 — Interface, views and slide layouts (40 min)

**Learning outcomes:** identify PowerPoint window parts; add, duplicate, reorder, hide and delete slides; choose layouts; use the different views.

**Window parts:** Slide thumbnails pane (left), Slide pane (centre), Notes pane (bottom), Ribbon tabs (Home, Insert, Draw, Design, Transitions, Animations, Slide Show, Record, Review, View), Status bar with view buttons and zoom.

**Steps**

1. Start ▸ PowerPoint ▸ Blank Presentation (16:9 widescreen by default).
2. Home ▸ New Slide (Ctrl + M) ▸ choose a layout: Title Slide, Title and Content, Section Header, Two Content, Comparison, Title Only, Blank, Content with Caption, Picture with Caption.
3. Change a slide's layout: Home ▸ Layout.
4. Duplicate: right-click a thumbnail ▸ Duplicate Slide (Ctrl + D). Delete: select ▸ Delete key.
5. Reorder: drag thumbnails, or use Slide Sorter view.
6. Hide a slide: right-click ▸ Hide Slide (skipped in the show).
7. Group slides: right-click between slides ▸ Add Section.

| View | Use |
| --- | --- |
| Normal | Edit slides (default) |
| Outline View | Type and reorder text quickly |
| Slide Sorter | See all slides; reorder; apply transitions |
| Notes Page | Write and print speaker notes |
| Reading View | Preview the show inside the window |
| Slide Show | Full-screen presentation (F5) |
| Presenter View | Speaker sees notes, timer and next slide |

#### Lesson 2.2 — Text and slide design (40 min)

**Learning outcomes:** add and format text in placeholders and text boxes; apply themes, variants and backgrounds; use Designer.

- Click a placeholder ("Click to add title") and type. Use Tab / Shift + Tab to change bullet level.
- Format text with the Home tab (same as Word): font, size, bold, colour, alignment, line spacing, Convert to SmartArt, Text Direction.
- Insert ▸ Text Box for extra text anywhere.
- Design ▸ Themes applies colours, fonts and backgrounds to all slides; Variants changes colour schemes.
- Design ▸ Format Background ▸ Solid / Gradient / Picture fill; Apply to All.
- Design ▸ Slide Size ▸ Widescreen (16:9) or Standard (4:3).
- Design ▸ Designer (Microsoft 365) suggests layouts automatically.
- Replace fonts everywhere: Home ▸ Replace arrow ▸ Replace Fonts.

**Text rules for readable slides (6×6 guideline):** no more than 6 bullets per slide and about 6 words per bullet. Titles 36–44 pt, body text at least 24 pt (never below 18 pt). Use key phrases, not full paragraphs. Use high contrast: dark text on a light background.

#### Lesson 2.3 — Images, shapes, icons, SmartArt (50 min)

- Insert ▸ Pictures ▸ This Device / Stock Images. Picture Format ▸ Crop, Crop to Shape, Remove Background, Picture Styles, Corrections, Compress Pictures (makes the file smaller).
- Insert ▸ Icons and Insert ▸ Shapes. Shape Format ▸ Shape Fill, Outline, Effects, Merge Shapes.
- Arrange: Shape Format ▸ Align (Left, Center, Middle, Distribute Horizontally), Group (Ctrl + G), Ungroup (Ctrl + Shift + G), Bring Forward / Send Backward, Selection Pane (Alt + F10).
- View ▸ Guides and Gridlines help line objects up.
- SmartArt: Insert ▸ SmartArt, or select bullet text ▸ Home ▸ Convert to SmartArt.
- Insert ▸ Photo Album creates one slide per photo quickly.

**Image rules:** use high-quality, relevant images; never stretch (drag a corner, not a side, to keep proportions); credit sources on the slide or a final "Image credits" slide.

**Try it:** recreate the "Basic Organization of a Computer System" diagram: Input, CPU (with CU, ALU, Memory inside a dashed box), Output and Storage with arrows.

#### Lesson 2.4 — Tables and charts in slides (40 min)

1. Insert ▸ Table ▸ choose rows × columns; style it with Table Design (Header Row, Banded Rows).
2. Insert ▸ Chart ▸ Column / Line / Pie / Bar ▸ OK. A small Excel sheet opens: type your data there and close it.
3. Chart Design ▸ Edit Data, Change Chart Type, Quick Layout, Chart Styles, Add Chart Element (titles, data labels, legend).
4. Paste an Excel chart: copy in Excel ▸ in PowerPoint Paste Special ▸ keep source formatting & link data (updates when Excel changes).

**Which chart?** Column/bar to compare categories, line for change over time, pie for parts of a whole (max 5–6 slices).

#### Lesson 2.5 — Audio, video and hyperlinks (30 min)

- Insert ▸ Video ▸ This Device / Stock Videos / Online Videos (needs internet during the show).
- Playback tab: Trim Video, Fade In/Out, Volume, Start (On Click / Automatically), Play Full Screen, Loop.
- Insert ▸ Audio ▸ Audio on My PC or Record Audio; tick Play in Background for music across slides.
- Insert ▸ Link (Ctrl + K) to a web page, another slide (Place in This Document), a file or an email.
- Insert ▸ Action / Shapes ▸ Action Buttons (Next, Previous, Home) for interactive quizzes.
- Insert ▸ Zoom ▸ Summary Zoom or Slide Zoom for a clickable menu slide.

**Tip:** media is embedded in the file; copy the .pptx and test on the lab or classroom PC before presenting.

#### Lesson 2.6 — Transitions and animations (50 min)

**Transitions** (between slides): Transitions tab ▸ choose Fade, Push, Wipe, Morph, etc.; Effect Options; Duration; Sound; Advance Slide On Mouse Click or After 00:05; Apply To All.

**Morph transition:** duplicate a slide, move/resize objects on the second copy, apply Morph to the second slide — objects move smoothly.

**Animations** (objects inside a slide):

| Type | Colour in gallery | Example |
| --- | --- | --- |
| Entrance | Green | Appear, Fade, Fly In, Wipe |
| Emphasis | Yellow | Pulse, Grow/Shrink, Spin |
| Exit | Red | Disappear, Fade Out, Fly Out |
| Motion Paths | Lines | Lines, Arcs, Custom Path |

**Steps**

1. Select an object ▸ Animations ▸ choose an effect.
2. Effect Options ▸ direction or "By Paragraph" (bullets appear one by one).
3. Start: On Click / With Previous / After Previous; set Duration and Delay.
4. Animations ▸ Animation Pane to reorder, preview and fine-tune.
5. Add Animation to put a second effect on the same object; Animation Painter copies animation to another object.
6. Triggers: Animation Pane ▸ effect ▸ Timing ▸ Triggers ▸ start on click of a shape.

**Rule:** animation must support the message — use one or two simple effects consistently; avoid sounds and spinning text in academic talks.

#### Lesson 2.7 — Slide Master, notes and slide numbers (40 min)

1. View ▸ Slide Master. The top (largest) slide controls all layouts; the smaller ones control individual layouts.
2. Change fonts, colours, background, add a logo (e.g. BAUST logo) or footer once — it appears on every slide.
3. Insert ▸ Header & Footer ▸ Date and time, Slide number, Footer text ("CSE 2110 | Your Name"), Don't show on title slide ▸ Apply to All.
4. Close Master View.
5. Type speaker notes in the Notes pane (View ▸ Notes if hidden).
6. Save your design as a template: File ▸ Save As ▸ PowerPoint Template (.potx).

#### Lesson 2.8 — Presenting, printing and design principles (40 min)

| Action during slide show | Shortcut |
| --- | --- |
| Start from beginning | F5 |
| Start from current slide | Shift + F5 |
| Next / previous | Space, Enter, → / Backspace, ← |
| Go to slide number n | Type n + Enter |
| Black screen / white screen | B / W |
| Laser pointer | Ctrl + L |
| Pen | Ctrl + P |
| Erase ink | E |
| End show | Esc |

- Slide Show ▸ Rehearse Timings to practise; Record ▸ Record Slide Show to make a narrated video.
- Slide Show ▸ Set Up Slide Show ▸ Browsed at a kiosk (loops automatically).
- File ▸ Export ▸ Create a Video (.mp4) or Create PDF; Package Presentation for CD collects linked files.
- File ▸ Print ▸ Full Page Slides / Notes Pages / Outline / Handouts (3 slides per page includes lines for notes).

**Good design principles:** one idea per slide; consistent theme and fonts; contrast (light background with dark text works best in bright classrooms); alignment; white space; visuals over text; cite sources; end with a Summary and a "Thank you / Questions" slide.

**Presentation structure for students:** Title slide (topic, name, ID, course, date) → Outline → Introduction → 3–5 content slides → Conclusion → References → Questions. Spend about 1 minute per slide.

**PowerPoint module shortcut summary:** Ctrl + M new slide · Ctrl + D duplicate · Ctrl + G group · Ctrl + Shift + C / V copy/paste formatting · Shift + drag keeps proportions · Alt + F10 Selection Pane · F5 start show.

### Module 3 — Microsoft Excel

**Module goal:** students build a correct, well-formatted spreadsheet that calculates totals, averages, grades and pass/fail automatically, then summarise it with a chart. Total time: about 4 lab weeks.

#### Lesson 3.1 — Excel interface (30 min)

**Learning outcomes:** explain workbook, worksheet, row, column, cell, cell address and range; navigate and manage sheets.

- **Workbook:** the whole .xlsx file. **Worksheet:** one sheet (tabs at the bottom: Sheet1, Sheet2…).
- **Columns** are letters (A … XFD, 16,384 columns); **rows** are numbers (1 … 1,048,576).
- **Cell:** the box where a row and column meet; its **address** is column + row, e.g. B3. The **active cell** has a green border.
- **Range:** a block of cells, written first:last, e.g. A1:D10.
- **Name Box** (left of the formula bar) shows the active cell; **Formula Bar** shows the cell's real content or formula.
- Ribbon tabs: Home, Insert, Page Layout, Formulas, Data, Review, View.
- Sheets: click + to add; double-click a tab to rename; right-click ▸ Tab Color, Move or Copy, Delete, Hide.

| Navigation | Shortcut |
| --- | --- |
| Move one cell | Arrow keys; Enter (down); Tab (right) |
| Go to A1 | Ctrl + Home |
| Go to last used cell | Ctrl + End |
| Jump to edge of data | Ctrl + Arrow |
| Next / previous sheet | Ctrl + Page Down / Page Up |
| Go to a cell | F5 or Ctrl + G, or type in the Name Box |
| Select whole column / row | Ctrl + Space / Shift + Space |

#### Lesson 3.2 — Entering and editing data (40 min)

**Data types:** Text (left-aligned by default), Numbers (right-aligned), Dates (stored as numbers), Formulas (start with =).

- Type in a cell and press Enter. Edit a cell: double-click or F2. Clear: Delete key.
- Alt + Enter makes a new line inside a cell. Ctrl + ; inserts today's date, Ctrl + Shift + ; the current time.
- Resize: double-click the border between column letters to AutoFit; Home ▸ Format ▸ Column Width.
- Insert/delete rows and columns: right-click the header ▸ Insert / Delete (Ctrl + plus / Ctrl + minus).
- **AutoFill:** type a value or pattern (1, 2 or Jan or Monday), select it, drag the small square (fill handle) at the bottom-right. Double-click the fill handle to fill down to the end of data. Ctrl + D fills down.
- **Flash Fill** (Ctrl + E): type an example (e.g. first name from a full name) and Excel completes the column.
- Freeze headings: View ▸ Freeze Panes ▸ Freeze Top Row.
- Data validation: Data ▸ Data Validation ▸ allow Whole number between 0 and 100 (stops wrong marks being typed); List for drop-downs.
- Find & Replace: Ctrl + F / Ctrl + H. Paste Special (Ctrl + Alt + V) ▸ Values only, Transpose.

**Common mistakes:** typing numbers with spaces or as text (Bangla digits like ৫০, or "50 marks") so they cannot be calculated; leaving blank rows inside data.

#### Lesson 3.3 — Formatting cells (40 min)

- Home ▸ Font, Alignment (Wrap Text, Merge & Center, orientation), Number group.
- **Number formats:** General, Number (decimal places), Currency/Accounting (Taka ৳ or US dollar), Percentage, Date, Time, Text. Increase/Decrease Decimal buttons.
- Format Cells dialog: Ctrl + 1 (Number, Alignment, Font, Border, Fill, Protection).
- Borders: Home ▸ Borders ▸ All Borders / Thick Box Border.
- Cell Styles and Format as Table (Ctrl + T) give quick professional looks.
- **Conditional formatting:** Home ▸ Conditional Formatting ▸ Highlight Cells Rules (Less Than 40 → light red fill), Top/Bottom Rules (Top 10%), Data Bars, Color Scales, Icon Sets; Manage Rules to edit.
- `#####` in a cell means the column is too narrow — widen it.

#### Lesson 3.4 — Formulas and operators (40 min)

A formula always begins with `=` and can use numbers, cell references, operators and functions. When a referenced cell changes, the result updates automatically.

| Operator | Meaning | Example |
| --- | --- | --- |
| + | Addition | `=A1+B1` |
| - | Subtraction | `=A1-B1` |
| \* | Multiplication | `=A1*B1` |
| / | Division | `=A1/B1` |
| ^ | Power | `=A1^2` |
| % | Percent | `=A1*10%` |
| & | Join text | `=A1&" "&B1` |
| = > < >= <= <> | Comparison (TRUE/FALSE) | `=A1>=40` |

**Order of operations (BODMAS / PEMDAS):** brackets → power → multiplication and division → addition and subtraction. Example: `=10+5*2` gives 20, but `=(10+5)*2` gives 30.

**Common error values**

| Error | Meaning | Fix |
| --- | --- | --- |
| #DIV/0! | Dividing by zero or empty cell | Check the divisor |
| #VALUE! | Wrong type (text in a calculation) | Remove text/spaces from numbers |
| #NAME? | Misspelled function or text without quotes | Correct spelling, add "quotes" |
| #REF! | Referenced cell was deleted | Rebuild the reference |
| #N/A | Lookup value not found | Check the lookup value and range |
| ##### | Column too narrow | Widen the column |
| Circular reference | Formula refers to its own cell | Change the reference |

**Show formulas:** Ctrl + \` (grave accent) toggles formulas and results — useful when checking lab work.

#### Lesson 3.5 — Cell references (40 min)

| Type | Written | What happens when copied |
| --- | --- | --- |
| Relative | `A1` | Both column and row change |
| Absolute | `$A$1` | Nothing changes (fixed cell) |
| Mixed (row fixed) | `A$1` | Column changes, row fixed |
| Mixed (column fixed) | `$A1` | Row changes, column fixed |

Press **F4** after typing a reference to cycle through relative → absolute → row-fixed → column-fixed.

**Example:** each student's percentage = Total / Full marks, where full marks is one cell (H1 = 100). In E2 write `=D2/$H$1` and fill down: D2 changes to D3, D4… but `$H$1` stays fixed.

**Other references:** another sheet `=Sheet2!B5`; a named range (Formulas ▸ Define Name, e.g. FullMarks) used as `=D2/FullMarks`.

#### Lesson 3.6 — Basic functions (50 min)

A function is a built-in formula: `=FUNCTION(arguments)`. Insert with the fx button, Formulas ▸ Function Library, or AutoSum (Alt + =).

| Function | Purpose | Example |
| --- | --- | --- |
| SUM | Adds numbers | `=SUM(B2:D2)` |
| AVERAGE | Mean | `=AVERAGE(B2:D2)` |
| MAX / MIN | Highest / lowest | `=MAX(E2:E31)` |
| COUNT | Counts cells with numbers | `=COUNT(B2:B31)` |
| COUNTA | Counts non-empty cells | `=COUNTA(A2:A31)` |
| COUNTBLANK | Counts empty cells | `=COUNTBLANK(B2:B31)` |
| ROUND | Rounds to n decimals | `=ROUND(F2,2)` |
| ROUNDUP / ROUNDDOWN | Always up / down | `=ROUNDUP(F2,0)` |
| SQRT, ABS, POWER | Square root, absolute value, power | `=SQRT(25)` |
| PRODUCT | Multiplies | `=PRODUCT(B2,C2)` |
| UPPER / LOWER / PROPER | Change text case | `=PROPER(A2)` |
| LEN, LEFT, RIGHT, MID, TRIM | Text length and parts, remove extra spaces | `=LEFT(A2,4)` |
| CONCAT / TEXTJOIN | Join text | `=CONCAT(A2," ",B2)` |
| TODAY / NOW | Current date / date-time | `=TODAY()` |
| DATEDIF | Age or duration | `=DATEDIF(B2,TODAY(),"Y")` |
| RANK.EQ | Position in a list | `=RANK.EQ(E2,$E$2:$E$31)` |

**Status bar** shows Average, Count and Sum of any selected range without a formula.

#### Lesson 3.7 — Logical and lookup functions (60 min)

**IF:** `=IF(logical_test, value_if_true, value_if_false)`

- Pass/Fail: `=IF(E2>=40,"Pass","Fail")`

**Nested IF for letter grades** (UGC uniform grading, used by BAUST — confirm with the official table):

```text
=IF(E2>=80,"A+",IF(E2>=75,"A",IF(E2>=70,"A-",IF(E2>=65,"B+",IF(E2>=60,"B",IF(E2>=55,"B-",IF(E2>=50,"C+",IF(E2>=45,"C",IF(E2>=40,"D","F")))))))))
```

The same with IFS (Excel 2019+):

```text
=IFS(E2>=80,"A+",E2>=75,"A",E2>=70,"A-",E2>=65,"B+",E2>=60,"B",E2>=55,"B-",E2>=50,"C+",E2>=45,"C",E2>=40,"D",TRUE,"F")
```

| Marks | Letter grade | Grade point |
| --- | --- | --- |
| 80–100 | A+ | 4.00 |
| 75–79 | A | 3.75 |
| 70–74 | A- | 3.50 |
| 65–69 | B+ | 3.25 |
| 60–64 | B | 3.00 |
| 55–59 | B- | 2.75 |
| 50–54 | C+ | 2.50 |
| 45–49 | C | 2.25 |
| 40–44 | D | 2.00 |
| below 40 | F | 0.00 |

**AND / OR / NOT:** `=IF(AND(B2>=40,C2>=40),"Pass","Fail")` passes only if both parts are passed; `=IF(OR(B2<40,C2<40),"Retake","OK")`.

**Conditional counting and adding**

| Function | Example | Result |
| --- | --- | --- |
| COUNTIF | `=COUNTIF(G2:G31,"Pass")` | Number of students who passed |
| SUMIF | `=SUMIF(C2:C31,"Section A",E2:E31)` | Total marks of Section A |
| AVERAGEIF | `=AVERAGEIF(C2:C31,"Section B",E2:E31)` | Average of Section B |
| COUNTIFS / SUMIFS | `=COUNTIFS(C2:C31,"A",G2:G31,"Pass")` | Several conditions |

**Lookup:** VLOOKUP finds a value in the first column of a table and returns a value from another column.

- Syntax: `=VLOOKUP(lookup_value, table_array, col_index_num, FALSE)`
- Example: `=VLOOKUP(J2,$A$2:$H$31,8,FALSE)` returns the grade (8th column) of the student ID typed in J2. FALSE means exact match.
- XLOOKUP (Microsoft 365/2021): `=XLOOKUP(J2,A2:A31,H2:H31,"Not found")` — simpler and can look left.
- HLOOKUP works the same for tables arranged in rows. INDEX + MATCH is the classic flexible alternative.
- Wrap errors: `=IFERROR(VLOOKUP(J2,$A$2:$H$31,8,FALSE),"ID not found")`.

#### Lesson 3.8 — Sorting, filtering and tables (40 min)

1. Click any cell in the data ▸ Data ▸ Sort A→Z or Z→A; Data ▸ Sort ▸ Add Level to sort by Section then by Total (Largest to Smallest). Tick "My data has headers".
2. Data ▸ Filter (Ctrl + Shift + L) adds drop-down arrows: filter Grade = A+, Number Filters ▸ Greater Than 70, Text Filters ▸ Contains.
3. Clear filters: Data ▸ Clear.
4. Insert ▸ Table (Ctrl + T): auto-banding, filter buttons, formulas copy automatically, Total Row (Table Design ▸ Total Row), Slicers for click filtering.
5. Remove duplicates: Data ▸ Remove Duplicates. Split text: Data ▸ Text to Columns.
6. Subtotal: sort by Section ▸ Data ▸ Subtotal ▸ At each change in Section, use function Average.
7. Introduction to PivotTable: Insert ▸ PivotTable ▸ drag Section to Rows, Total to Values (Average) — a summary report in seconds.

#### Lesson 3.9 — Charts and graphs (40 min)

1. Select the data including headings (e.g. Name and Total; use Ctrl to select non-adjacent columns).
2. Insert ▸ Recommended Charts, or choose Column, Bar, Line, Pie, Scatter.
3. Chart Design: Add Chart Element (Chart Title, Axis Titles, Data Labels, Legend, Gridlines), Quick Layout, Change Colors, Chart Styles, Switch Row/Column, Select Data, Change Chart Type, Move Chart (to a new sheet).
4. Format tab or double-click any part to format fill, outline and text.
5. Sparklines: Insert ▸ Sparklines ▸ Line (tiny chart inside one cell).
6. Alt + F1 makes an instant chart from selected data; F11 makes one on a new sheet.

| Chart | Best for | Example |
| --- | --- | --- |
| Column / Bar | Compare items | Marks of each student |
| Line | Trend over time | Monthly expenses |
| Pie / Doughnut | Parts of a whole | Grade distribution |
| Scatter | Relationship of two numbers | Attendance vs marks |
| Combo | Two measures, two axes | Sales and profit % |

**Every chart needs:** a clear title, axis titles with units, readable labels, and no 3-D effects that distort values.

#### Lesson 3.10 — Page setup, printing and protection (30 min)

- Page Layout ▸ Orientation (Landscape for wide sheets), Size A4, Margins, Print Area ▸ Set Print Area, Print Titles ▸ Rows to repeat at top (row 1).
- Page Layout ▸ Scale to Fit ▸ Width 1 page.
- View ▸ Page Break Preview to drag page breaks; Page Layout view to add header/footer.
- File ▸ Print (Ctrl + P) ▸ Fit All Columns on One Page; Print Selection; preview before printing.
- Show/hide gridlines: View ▸ Gridlines; print gridlines: Page Layout ▸ Sheet Options.
- Protect: Review ▸ Protect Sheet (with password; first unlock input cells via Ctrl + 1 ▸ Protection ▸ untick Locked). Review ▸ Protect Workbook protects structure. File ▸ Info ▸ Encrypt with Password.
- Save as PDF: File ▸ Export ▸ Create PDF/XPS. Save as CSV for data exchange (only the active sheet, no formatting).

**Excel module shortcut summary:** Ctrl + 1 format cells · Alt + = AutoSum · F4 absolute reference · F2 edit cell · Ctrl + \` show formulas · Ctrl + T table · Ctrl + Shift + L filter · Ctrl + D fill down · Ctrl + E Flash Fill · Ctrl + Shift + % percentage format · Ctrl + Shift + 4 currency format.

**Interactive playground (for the website):** a 6×6 grid preloaded with five students' marks in three subjects, where students type SUM, AVERAGE, MAX, MIN, COUNT and IF formulas and see results live.

## Part D — Syllabus page, labs, assessment, quizzes and reference

### Course objectives and outcomes

**Objectives:** to make non-CSE students confident, independent users of a computer and of Microsoft Word, PowerPoint and Excel for academic and professional work.

| CO | After this course, students will be able to… |
| --- | --- |
| CO1 | Operate a Windows computer, manage files and folders, and use the internet and email responsibly |
| CO2 | Create and format professional documents in Word (CV, letter, report with TOC, mail merge) |
| CO3 | Design and deliver an effective presentation in PowerPoint |
| CO4 | Organise data and perform calculations, grading and charting in Excel |

### 14-week lab plan

| Week | Topic | Lessons | Lab |
| --- | --- | --- | --- |
| 1 | Course intro, computer basics, Windows | 0.1, 0.2 | Lab 1 |
| 2 | Files and folders, typing, Office interface, email | 0.3–0.6 | Lab 2 |
| 3 | Word: editing, font and paragraph formatting | 1.1–1.4 | Lab 3 |
| 4 | Word: page layout, tables | 1.5, 1.6 | Lab 4 |
| 5 | Word: graphics, header/footer, styles, TOC, citations | 1.7–1.9 | Lab 5 |
| 6 | Word: proofing, track changes, mail merge, PDF | 1.10 | Lab 6 |
| 7 | Lab Mid exam (Word + PowerPoint basics) | — | Lab Mid |
| 8 | PowerPoint: interface, text, design, graphics | 2.1–2.3 | Lab 7 |
| 9 | PowerPoint: tables, charts, media, animation, Slide Master | 2.4–2.7 | Lab 8 |
| 10 | PowerPoint: presenting; student presentations | 2.8 | Lab 8 presentation |
| 11 | Excel: interface, data entry, formatting, formulas | 3.1–3.4 | Lab 9 |
| 12 | Excel: references and functions, IF and lookup | 3.5–3.7 | Lab 10 |
| 13 | Excel: sort, filter, charts, printing | 3.8–3.10 | Lab 11 |
| 14 | Integrated project, revision, Lab Final and viva | All | Lab 12 / Final |

### Lab rules

- Arrive on time; sign attendance. Bags and food stay outside the lab.
- Save all work in `D:\CSE2110_YourID` and back it up to Google Drive or OneDrive.
- File name format: `StudentID_LabNN_Topic` (e.g. `2xxxxxxx_Lab03_Formatting.docx`).
- Do not change computer settings, install software or unplug cables.
- Lab report is due before the next lab class; late submission loses marks.
- Copying files from another student is plagiarism; both files get zero.

### Lab sheets (Lab 1–12)

Each lab page on the website shows: objective, time (90 min), lessons needed, tasks as a checklist, files to submit, and the rubric.

| Lab | Title | Tasks (summary) | Submit |
| --- | --- | --- | --- |
| 1 | Know your computer | Identify input/output/storage devices in the lab; record system specs from Settings ▸ About; convert 5 storage values; shut down correctly | Word file with a 2-column table of devices and specs |
| 2 | Files, folders and email | Build the CSE2110 folder tree; create, rename, copy, move, delete and restore files; zip the folder; send a formal email with the zip attached to the teacher | Zip file + sent email |
| 3 | Formatting a document | Type a 300-word essay "Why I chose English literature"; apply title formatting, justify, 1.5 spacing, first-line indent, Drop Cap, bullet and numbered lists, Find & Replace one word | .docx and .pdf |
| 4 | Tables and page layout | Make your class routine table with merged cells and shading; a result table with `=SUM(LEFT)`; one landscape page using a section break; DRAFT watermark | .docx |
| 5 | Professional CV | One-page CV using a 2-column table without borders: photo, contact, education table, skills bullets, references; consistent styles | .docx and .pdf |
| 6 | Report and mail merge | 4-page report on a literary figure: cover page, Heading styles, automatic TOC, page numbers from page 2, 2 footnotes, 1 figure with caption, MLA citations and Works Cited. Mail-merge 5 invitation letters from Excel | Report .docx, merged letters .pdf |
| 7 | Building a presentation | 6-slide deck: title, outline, 3 content slides with picture/SmartArt/icons, conclusion; theme and consistent fonts; slide numbers in footer | .pptx |
| 8 | Dynamic presentation | 8–10 slide topic presentation with a chart, a table, one video or audio, transitions, "by paragraph" animations, Slide Master with logo, speaker notes; present for 5 minutes | .pptx + live presentation |
| 9 | First spreadsheet | Enter data for 15 students (ID, Name, Section, 3 marks); format headers, borders, number formats; Total, Average with formulas; AutoFill IDs; freeze top row | .xlsx |
| 10 | Grade sheet with functions | Extend Lab 9: percentage with absolute reference, letter grade with nested IF/IFS, Pass/Fail, RANK, COUNTIF passes, highest/lowest, conditional formatting under 40, VLOOKUP search box | .xlsx |
| 11 | Data analysis and charts | Sort by section then total; filter A+ students; convert to Table with Total Row; column chart of totals and pie chart of grade distribution; set print area and fit to one page; export PDF | .xlsx + .pdf |
| 12 | Integrated mini project | Monthly budget for a student in Excel (income, 8 expense items, totals, % of income, chart); paste the chart into a Word report (1 page) and a 4-slide PowerPoint summary | .xlsx, .docx, .pptx |

**Standard lab rubric (10 marks per lab)**

| Criterion | Marks |
| --- | --- |
| All tasks completed | 4 |
| Correct use of required features | 3 |
| Neatness, consistency and layout | 2 |
| Correct file naming and on-time submission | 1 |

### Practice projects

1. **Job application pack (Word):** cover letter in block format + CV + envelope using Mailings ▸ Envelopes.
2. **Book presentation (PowerPoint):** 10-slide presentation on a novel: author, plot (SmartArt process), characters (table), themes, quotes in your own paraphrase, critical reception, conclusion.
3. **Class result sheet (Excel):** 30 students, 4 assessments, weighted total, grade, GPA lookup, statistics box, two charts, protected sheet.
4. **Final integrated project:** a "Department Literary Festival" pack — Excel budget and registration list, Word invitation letters via mail merge and a programme booklet, PowerPoint opening presentation.

### Assessment and exam guide

Confirm marks with the official course outline; this is the suggested split.

| Component | Marks |
| --- | --- |
| Attendance | 10 |
| Lab performance and reports (Labs 1–12) | 30 |
| Lab Mid (Word + PowerPoint, 30 min practical) | 20 |
| Lab Final (Word, PowerPoint and Excel practical) | 30 |
| Viva / quiz | 10 |
| **Total** | **100** |

**Lab Mid format:** students receive a printed or projected single slide or one-page document and recreate it from scratch in 30 minutes (e.g. the "Basic Organization of a Computer System" slide). Marked on text formatting, shapes, arrows, table, bullet list, footer with Name/ID/Section, file saved as `StudentID_LabMid.pptx`, and neatness (20 marks).

**Lab Final format (60–90 min):** Part A Word (format a given raw text into a report: styles, TOC, table, header/footer, page numbers) — 10 marks; Part B PowerPoint (5 slides from given content with design, chart and animation) — 8 marks; Part C Excel (result sheet with SUM, AVERAGE, IF grade, COUNTIF, chart) — 12 marks.

**Sample viva questions**

1. What is the difference between RAM and ROM?
2. What is the difference between Save and Save As?
3. How do you insert a page break? Why not press Enter many times?
4. How is an automatic table of contents created and updated?
5. What is mail merge? Name its two main parts.
6. What is Slide Master used for?
7. Difference between a transition and an animation?
8. What is a cell address? What is a range?
9. What is the difference between relative and absolute references? Which key adds the dollar signs?
10. Write an IF formula that shows "Pass" if marks are 40 or more.
11. What does #DIV/0! mean?
12. Which chart would you use to show the share of each grade?

### Module quizzes (answers marked ✔)

**Module 0 — Computer basics**

1. Which is an input device? (a) Monitor (b) Printer (c) Scanner ✔ (d) Speaker
2. 1 Kilobyte equals: (a) 1000 bits (b) 1024 bytes ✔ (c) 8 bytes (d) 1024 MB
3. Which memory loses data when power is off? (a) ROM (b) Hard disk (c) RAM ✔ (d) SSD
4. Windows is an example of: (a) Application software (b) Operating system ✔ (c) Hardware (d) Virus
5. Shortcut to open File Explorer: (a) Windows + E ✔ (b) Ctrl + E (c) Alt + F4 (d) Windows + L
6. Pressing F2 on a selected file will: (a) Delete it (b) Rename it ✔ (c) Copy it (d) Open it
7. The extension of an Excel workbook is: (a) .docx (b) .pptx (c) .xlsx ✔ (d) .pdf
8. Shift + Delete on a file: (a) Moves it to Recycle Bin (b) Deletes it permanently ✔ (c) Copies it (d) Hides it

**Module 1 — Word**

1. Shortcut to center-align text: (a) Ctrl + C (b) Ctrl + E ✔ (c) Ctrl + J (d) Ctrl + R
2. To start a new page you should use: (a) Enter many times (b) Ctrl + Enter ✔ (c) Tab (d) Shift + Enter
3. An automatic table of contents depends on: (a) Bold text (b) Heading styles ✔ (c) Font size (d) Page colour
4. Which tab has Mail Merge? (a) Insert (b) Review (c) Mailings ✔ (d) Layout
5. Format Painter copies: (a) Text (b) Formatting ✔ (c) Pictures (d) Tables
6. To show a different header on the first page, tick: (a) Different First Page ✔ (b) Link to Previous (c) Header Row (d) Gridlines
7. Track Changes is on the: (a) Review tab ✔ (b) View tab (c) Design tab (d) Home tab
8. Wrap style that lets text flow around a picture: (a) In Line with Text (b) Square ✔ (c) Behind Text (d) None

**Module 2 — PowerPoint**

1. Shortcut to add a new slide: (a) Ctrl + N (b) Ctrl + M ✔ (c) Ctrl + S (d) Ctrl + D
2. Start the show from the current slide: (a) F5 (b) Shift + F5 ✔ (c) Ctrl + F5 (d) Esc
3. To put a logo on every slide, use: (a) Slide Sorter (b) Slide Master ✔ (c) Reading View (d) Notes Page
4. Movement between slides is a: (a) Transition ✔ (b) Animation (c) Theme (d) Layout
5. Green effects in the animation gallery are: (a) Exit (b) Emphasis (c) Entrance ✔ (d) Motion paths
6. The 6×6 rule limits: (a) Slides per talk (b) Bullets and words per slide ✔ (c) Colours (d) Pictures
7. Press B during a slide show to: (a) Go back (b) Show a black screen ✔ (c) Bold text (d) End show
8. Best chart for parts of a whole: (a) Line (b) Pie ✔ (c) Scatter (d) Column

**Module 3 — Excel**

1. Every formula begins with: (a) + (b) = ✔ (c) @ (d) #
2. B3 refers to: (a) Row B, column 3 (b) Column B, row 3 ✔ (c) Sheet 3 (d) Range B to 3
3. The result of `=10+5*2` is: (a) 30 (b) 20 ✔ (c) 25 (d) 17
4. Which key makes a reference absolute? (a) F2 (b) F4 ✔ (c) F5 (d) F12
5. `=COUNTIF(G2:G31,"Pass")` returns: (a) Total marks (b) Number of Pass cells ✔ (c) Average (d) Highest mark
6. \#DIV/0! means: (a) Column too narrow (b) Division by zero ✔ (c) Wrong function name (d) Deleted cell
7. Which function returns a value from a table by ID? (a) SUM (b) VLOOKUP ✔ (c) COUNT (d) ROUND
8. Shortcut for AutoSum: (a) Alt + = ✔ (b) Ctrl + S (c) Ctrl + T (d) F4

The Final practice quiz on the website draws 30 random questions from these four sets.

### Glossary

| Term | Meaning |
| --- | --- |
| Absolute reference | A cell reference that does not change when copied, e.g. dollar-sign form of A1 |
| Animation | Movement effect applied to an object on a slide |
| AutoFill | Dragging the fill handle to continue a series or copy a formula |
| Backstage view | The File tab screen with New, Open, Save, Print and Export |
| Cell | Intersection of a row and column in Excel |
| Citation | A reference to a source inside the text |
| Conditional formatting | Formatting that changes automatically based on a cell's value |
| CPU | Central Processing Unit; the processor that executes instructions |
| Footnote | A note at the bottom of a page |
| Formula | An expression starting with = that calculates a value |
| Function | A built-in formula such as SUM or IF |
| Gutter | Extra margin space for binding |
| Mail merge | Combining one document with a data list to create personalised copies |
| Operating system | System software that manages the computer, e.g. Windows |
| Placeholder | A dotted box on a slide layout for title, text or content |
| Range | A group of adjacent cells, e.g. A1:D10 |
| Ribbon | The command strip with tabs and groups at the top of Office apps |
| Section break | A break that lets parts of a document have different layout |
| Slide Master | The top slide that controls design of all slides |
| SmartArt | Ready-made diagrams for lists, processes and hierarchies |
| Style | A saved set of formatting (e.g. Heading 1) |
| Template | A pre-designed file used as a starting point |
| Transition | Visual effect when moving from one slide to the next |
| Workbook | An Excel file containing one or more worksheets |

### Shortcut cheat sheet page

The website combines the shortcut tables from Lessons 0.2, 0.5, 1.2–1.4, 1.10, 2.8, 3.1 and the module summaries into one searchable table with columns: Shortcut · Action · App (Windows / All Office / Word / PowerPoint / Excel), plus flashcard mode.

### Resources and downloads

- Practice files to provide: `raw_essay.txt`, `routine_template.docx`, `report_raw_text.docx`, `students_list.xlsx` (for mail merge), `presentation_content.docx`, `marks_15_students.xlsx`, `marks_30_students.xlsx`.
- Free alternatives: Google Docs, Slides and Sheets; LibreOffice (Writer, Impress, Calc); Microsoft 365 web apps with a university email.
- Typing practice: any free online typing tutor (e.g. typing.com, keybr.com).
- Official help: Microsoft Support pages for Word, PowerPoint and Excel.

### FAQ

- **I don't have Office at home. What can I use?** Microsoft 365 web apps (free online), Google Docs/Slides/Sheets, or LibreOffice. Lab exams are on Microsoft Office.
- **My file won't open on the lab PC.** Save as .docx/.pptx/.xlsx (not .pages or .odt) and carry a PDF copy.
- **I lost my file.** Check File ▸ Open ▸ Recent, the Recycle Bin, and File ▸ Info ▸ Manage Document ▸ Recover Unsaved Documents. Turn on AutoSave next time.
- **How do I submit labs?** As instructed in class (Google Classroom or email) using the file naming format.
- **Can I use a phone?** You can read lessons on the phone, but practise on a computer.

### Credits and About page text

**Course content and teaching design:** Naimur Rahman Sir, Department of Computer Science and Engineering, Bangladesh Army University of Science and Technology (BAUST), Saidpur. This website is built on the course structure, lessons and lab approach of CSE 2110 Computer Fundamentals Sessional as taught by Naimur Rahman Sir.

**Website design and development:** Md. Rakib Trofder.

**For:** students of the Department of English, BAUST.

**Disclaimer:** Microsoft, Word, PowerPoint and Excel are trademarks of Microsoft Corporation. This site is an independent educational resource and is not affiliated with Microsoft. For official course rules and marks, follow the course teacher and the BAUST course outline.
