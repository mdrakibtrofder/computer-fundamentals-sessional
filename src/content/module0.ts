import { LessonContent } from '../types/course';

export const module0Lessons: LessonContent[] = [
  {
    id: '0.1',
    moduleSlug: 'basics',
    title: 'Computer basics: hardware, software, input/output & storage units',
    durationMinutes: 40,
    difficulty: 'Beginner',
    outcomes: [
      'Define a computer and describe the Input–Process–Output–Storage cycle.',
      'Distinguish hardware from software, and system software from application software.',
      'Name common input, output and storage devices.',
      'Convert between storage units (bit, byte, KB, MB, GB, TB).',
    ],
    paragraphs: [
      'A computer is an electronic machine that accepts data (input), processes it according to instructions (program), produces results (output) and stores data for later use. Data is raw facts; information is processed, meaningful data.',
      'The basic organization has five units: Input unit, Central Processing Unit (CPU: Control Unit + Arithmetic Logic Unit), Memory unit (primary memory: RAM and ROM), Output unit, and Secondary storage (HDD, SSD, pen drive).',
      'RAM is temporary (volatile) working memory; its data is lost when power goes off. ROM is permanent and holds start-up instructions. Secondary storage keeps files permanently.',
    ],
    tables: [
      {
        caption: 'Hardware & Software Categories',
        headers: ['Category', 'Examples'],
        rows: [
          ['Input devices', 'Keyboard, mouse, scanner, microphone, webcam, touchscreen, OMR/OCR reader'],
          ['Output devices', 'Monitor, printer, speaker, projector, headphones'],
          ['Storage devices', 'Hard disk (HDD), Solid state drive (SSD), USB pen drive, memory card, DVD, cloud storage'],
          ['System software', 'Operating systems: Windows, macOS, Linux, Android; device drivers; utilities'],
          ['Application software', 'MS Word, PowerPoint, Excel, web browsers, media players, Zoom'],
        ],
      },
      {
        caption: 'Storage Units Conversion',
        headers: ['Unit', 'Equals'],
        rows: [
          ['1 Bit', '0 or 1 (binary digit)'],
          ['1 Byte', '8 bits (one character)'],
          ['1 Kilobyte (KB)', '1024 bytes'],
          ['1 Megabyte (MB)', '1024 KB'],
          ['1 Gigabyte (GB)', '1024 MB'],
          ['1 Terabyte (TB)', '1024 GB'],
        ],
      },
    ],
    callouts: [
      {
        type: 'bangla',
        title: 'বাংলা টিপস (Bangla Hint)',
        text: 'RAM হলো কাজের টেবিলের মতো—বিদ্যুৎ চলে গেলে বা কম্পিউটার বন্ধ করলে টেবিলের অসংরক্ষিত কাগজ হারিয়ে যায়। আর হার্ডডিস্ক বা SSD হলো আলমারির মতো—ফাইল সেভ করলে সেখানে স্থায়ীভাবে থেকে যায়।',
      },
      {
        type: 'note',
        title: 'Data vs Information',
        text: 'Raw marks like "68, 74, 82" are data. Calculating the average "74.67 (Grade A)" turns that data into meaningful information.',
      },
    ],
    commonMistakes: [
      'Calling the whole system box the "CPU" — the CPU is the processor chip inside the system unit.',
      'Confusing RAM size (working memory, e.g., 8 GB) with storage size (hard drive/SSD, e.g., 512 GB).',
    ],
    tryIt: 'Open Settings ▸ System ▸ About on your Windows PC and write down your computer’s processor, installed RAM, and Windows edition.',
  },
  {
    id: '0.2',
    moduleSlug: 'basics',
    title: 'Windows essentials: desktop, taskbar, Start menu & windows',
    durationMinutes: 40,
    difficulty: 'Beginner',
    outcomes: [
      'Start, sign in to, lock, restart and shut down Windows safely.',
      'Identify the desktop, taskbar, Start menu, notification area and icons.',
      'Open, move, resize, minimize, maximize and switch between application windows.',
    ],
    paragraphs: [
      'The Desktop is the main screen with icons and wallpaper. The Taskbar is the bar at the bottom with the Start button, search box, pinned and open apps, clock, and notification area.',
      'Never switch off the power plug directly; unsaved work and Windows system files can be damaged. Always shut down cleanly through the Start menu.',
    ],
    steps: [
      { text: 'Open an app: click the Start button, type the app name (e.g. "Word"), and press Enter.', ribbonPath: 'Start ▸ Search' },
      { text: 'Use window controls at the top-right corner: Minimize (–), Maximize/Restore (□), and Close (×).' },
      { text: 'Snap windows side by side: drag a window title bar to the left or right screen edge, or press Windows + Left/Right arrow.' },
      { text: 'Shut down properly before leaving the lab.', ribbonPath: 'Start ▸ Power ▸ Shut down' },
    ],
    shortcuts: [
      { action: 'Open Start menu', keys: 'Windows' },
      { action: 'Switch between open apps', keys: 'Alt + Tab' },
      { action: 'Show desktop', keys: 'Windows + D' },
      { action: 'Open File Explorer', keys: 'Windows + E' },
      { action: 'Lock the computer', keys: 'Windows + L' },
      { action: 'Close current app', keys: 'Alt + F4' },
      { action: 'Task Manager (app not responding)', keys: 'Ctrl + Shift + Esc' },
      { action: 'Screenshot of selected area', keys: 'Windows + Shift + S' },
    ],
    callouts: [
      {
        type: 'bangla',
        title: 'বাংলা টিপস (Bangla Hint)',
        text: 'কোনো অ্যাপ হ্যাং করলে বা কাজ না করলে সরাসরি পাওয়ার সুইচ অফ না করে Ctrl + Shift + Esc চেপে Task Manager থেকে শুধু ওই অ্যাপটি End Task করুন।',
      },
    ],
    commonMistakes: [
      'Switching off the UPS or wall socket while Windows is still running.',
      'Thinking Minimize (–) closes a program—it only hides the window on the Taskbar while keeping it running.',
    ],
    tryIt: 'Open Microsoft Word and File Explorer, snap them side by side using Windows + Left/Right arrow, then lock and unlock your computer.',
  },
  {
    id: '0.3',
    moduleSlug: 'basics',
    title: 'File and folder management, File Explorer, naming & saving',
    durationMinutes: 60,
    difficulty: 'Beginner',
    outcomes: [
      'Create, rename, copy, move and delete files and folders.',
      'Understand drives, folders, file paths and file extensions.',
      'Save files in an organised folder structure and find them again.',
    ],
    paragraphs: [
      'A file is a named collection of data (such as a document, picture, or song). A folder holds files and other folders. A drive is a storage device such as C: (system drive), D: (data drive), or a USB pen drive (E:).',
      'A file path shows the exact location, e.g. D:\\BAUST\\CSE2110\\Lab01\\MyCV.docx. The extension after the dot tells Windows which application opens the file.',
      'Good naming rules: use StudentID_Lab01_Topic.docx; avoid leading spaces, symbols like / \\ : * ? " < > |, and vague names like "New Document (3)".',
    ],
    tables: [
      {
        caption: 'Common File Extensions',
        headers: ['Extension', 'File type'],
        rows: [
          ['.docx', 'Word document'],
          ['.pptx', 'PowerPoint presentation'],
          ['.xlsx', 'Excel workbook'],
          ['.pdf', 'Portable Document Format'],
          ['.jpg / .png', 'Image'],
          ['.mp4 / .mp3', 'Video / audio'],
          ['.zip', 'Compressed folder'],
        ],
      },
    ],
    steps: [
      { text: 'Create a folder: open File Explorer (Windows + E), go to D: drive, right-click empty space, choose New ▸ Folder, type CSE2110_YourID, and press Enter.', ribbonPath: 'File Explorer ▸ New ▸ Folder' },
      { text: 'Rename an item: select the file or folder, press F2, type the new name, and press Enter.' },
      { text: 'Copy a file: select it, press Ctrl + C, open the destination folder, and press Ctrl + V.' },
      { text: 'Move a file: select it, press Ctrl + X, open the destination folder, and press Ctrl + V (or drag with the mouse).' },
      { text: 'Delete a file: select it and press Delete (goes to Recycle Bin so you can restore it). Shift + Delete removes permanently.' },
      { text: 'Select multiple files: Ctrl + click for separate files, Shift + click for a continuous range, Ctrl + A for all.' },
      { text: 'Compress a folder: right-click the folder and select Compress to ZIP file (Windows 11) or Send to ▸ Compressed (zipped) folder.', ribbonPath: 'Right-click ▸ Compress to ZIP' },
      { text: 'Search for a file: type the filename or extension in the search box at the top-right of File Explorer.' },
    ],
    shortcuts: [
      { action: 'Open File Explorer', keys: 'Windows + E' },
      { action: 'Rename selected file/folder', keys: 'F2' },
      { action: 'Copy / Cut / Paste', keys: 'Ctrl + C / X / V' },
      { action: 'Delete to Recycle Bin', keys: 'Delete' },
      { action: 'Permanent delete (skip Recycle Bin)', keys: 'Shift + Delete' },
      { action: 'Select all items in folder', keys: 'Ctrl + A' },
    ],
    callouts: [
      {
        type: 'warning',
        title: 'Safe USB Removal',
        text: 'Always right-click your pen drive in the taskbar or File Explorer and click "Eject" before pulling it out to prevent file corruption.',
      },
      {
        type: 'bangla',
        title: 'বাংলা টিপস (Bangla Hint)',
        text: 'ফাইল ডিলিট হয়ে গেলে আতঙ্কিত না হয়ে Desktop-এ থাকা Recycle Bin খুলে ফাইলটির ওপর Right-click করে Restore করুন। তবে Shift + Delete চাপলে আর ফেরত পাওয়া যায় না।',
      },
    ],
    commonMistakes: [
      'Saving everything into Downloads or Desktop without organizing folders.',
      'Forgetting where a file was saved—always check the folder path in the Save As dialog.',
      'Removing a USB pen drive without using Eject.',
    ],
    tryIt: 'Create CSE2110_YourID on drive D: with subfolders Word, PowerPoint, Excel, and Labs. Create a blank Word file inside Word, rename it, copy it to Labs, then zip the main folder.',
  },
  {
    id: '0.4',
    moduleSlug: 'basics',
    title: 'Keyboard, mouse and touch typing basics',
    durationMinutes: 40,
    difficulty: 'Beginner',
    outcomes: [
      'Name the main key groups on a standard keyboard and their uses.',
      'Use mouse actions accurately: click, double-click, right-click, drag and scroll.',
      'Place fingers on the home row and practise touch typing.',
    ],
    paragraphs: [
      'Main key groups include alphabet and number keys; function keys F1–F12 (F1 Help, F2 Rename, F5 Refresh/Start Slide Show, F7 Spelling, F12 Save As in Office); modifier keys Ctrl, Alt, Shift, Windows; navigation keys Home, End, Page Up, Page Down, and arrow keys; and editing keys Backspace (deletes left), Delete (deletes right), Insert, Enter, Tab, Caps Lock, and Esc.',
      'Mouse actions: single click selects an item; double-click opens an item; right-click opens the context menu; drag moves or selects text; scroll wheel moves up/down; Ctrl + scroll zooms in or out.',
      'Touch typing builds speed without looking down: left-hand fingers rest on A S D F and right-hand fingers on J K L ; with thumbs on Space. The F and J keys have small raised bumps so you can find the home row by touch. Target for this course: 25+ words per minute with 90%+ accuracy by the end of the semester.',
    ],
    tables: [
      {
        caption: 'Key Groups & Editing Keys',
        headers: ['Key / Group', 'Primary Function'],
        rows: [
          ['Backspace vs Delete', 'Backspace deletes 1 character to the LEFT; Delete removes 1 character to the RIGHT'],
          ['Home / End', 'Jumps cursor to the start / end of the current line'],
          ['Tab', 'Indents text or moves to the next cell/field'],
          ['F1 / F2 / F5 / F7 / F12', 'Help / Rename / Start Slide Show / Spelling / Save As'],
          ['Modifier keys', 'Ctrl, Alt, Shift, Windows — held together with other keys for shortcuts'],
        ],
      },
    ],
    callouts: [
      {
        type: 'tip',
        title: 'Home Row Bumps',
        text: 'Feel the tiny raised ridges on the F and J keys with your left and right index fingers before you begin typing.',
      },
    ],
    commonMistakes: [
      'Using Caps Lock for single capital letters instead of holding Shift.',
      'Using Backspace repeatedly when Delete or Ctrl + Backspace (delete whole word) is faster.',
    ],
    tryIt: 'Practise for 10 minutes daily on a free typing tutor (see the Resources page) and record your WPM and accuracy each week.',
  },
  {
    id: '0.5',
    moduleSlug: 'basics',
    title: 'Introduction to Microsoft Office and the Ribbon interface',
    durationMinutes: 30,
    difficulty: 'Beginner',
    outcomes: [
      'Name the main Microsoft Office applications and what each is used for.',
      'Identify the common parts of the Office window and Ribbon.',
      'Use Backstage view to create, open, save, Save As and export files.',
    ],
    paragraphs: [
      'Microsoft Office shares one consistent window layout across Word, PowerPoint, and Excel. Once you learn where Save, Undo, Tabs, Groups, and the Status Bar live, moving between apps becomes effortless.',
      'Common window parts: Title bar (shows filename), Quick Access Toolbar (Save, Undo, Redo), Ribbon with Tabs (Home, Insert, Design, Layout…), Groups inside each tab (e.g., Font group), Commands (buttons), Dialog box launcher (tiny arrow at a group’s corner), Work area, Status bar (page/word count, zoom slider), and View buttons.',
      'Backstage view (accessed via the File tab) contains New, Open, Info, Save, Save As, Print, Share, Export (Create PDF), Close, and Options. Save (Ctrl + S) updates the current file; Save As (F12) creates a new copy with a new name, location, or file format. Turn on AutoSave when saving to OneDrive.',
    ],
    ribbonMock: {
      app: 'Office',
      activeTab: 'Home',
      tabs: ['File', 'Home', 'Insert', 'Design', 'Layout', 'Review', 'View'],
      highlightedGroup: 'Clipboard & Font',
      groups: [
        { name: 'Clipboard', items: ['Paste', 'Cut', 'Copy', 'Format Painter'] },
        { name: 'Font', items: ['Calibri 11', 'B', 'I', 'U', 'Color'] },
        { name: 'Paragraph', items: ['Bullets', 'Align', 'Spacing'] },
      ],
    },
    tables: [
      {
        caption: 'Core Microsoft Office Applications',
        headers: ['Application', 'Used for', 'File extension'],
        rows: [
          ['Word', 'Letters, reports, CVs, assignments', '.docx'],
          ['PowerPoint', 'Slide presentations', '.pptx'],
          ['Excel', 'Tables of numbers, calculations, charts', '.xlsx'],
          ['Outlook', 'Email and calendar', '—'],
          ['OneNote', 'Digital notebook', '—'],
        ],
      },
    ],
    shortcuts: [
      { action: 'New file', keys: 'Ctrl + N' },
      { action: 'Open file', keys: 'Ctrl + O' },
      { action: 'Save', keys: 'Ctrl + S' },
      { action: 'Save As', keys: 'F12' },
      { action: 'Print', keys: 'Ctrl + P' },
      { action: 'Undo / Redo', keys: 'Ctrl + Z / Ctrl + Y' },
      { action: 'Copy / Cut / Paste', keys: 'Ctrl + C / X / V' },
      { action: 'Select all', keys: 'Ctrl + A' },
      { action: 'Find / Replace', keys: 'Ctrl + F / Ctrl + H' },
      { action: 'Show ribbon key tips', keys: 'Alt (then letters)' },
    ],
    callouts: [
      {
        type: 'free-alt',
        title: 'Free Alternatives',
        text: 'If you do not have desktop Microsoft Office at home, you can use Microsoft 365 on the web (free with email), Google Docs / Slides / Sheets, or LibreOffice.',
      },
    ],
    commonMistakes: [
      'Overwriting an original template because you pressed Ctrl + S instead of Save As (F12).',
      'Clicking the Ribbon collapse pin accidentally and thinking the buttons disappeared (double-click any tab name to bring it back).',
    ],
    tryIt: 'Open Word, click the File tab to view Backstage view, press Esc to return, and press Alt once to see the Ribbon key tips.',
  },
  {
    id: '0.6',
    moduleSlug: 'basics',
    title: 'Internet, email etiquette and safe computer use',
    durationMinutes: 30,
    difficulty: 'Beginner',
    outcomes: [
      'Search the web effectively and judge whether an online source is reliable.',
      'Write a formal email with a clear subject, greeting, body, closing and attachment.',
      'Follow basic cyber-safety and academic honesty rules.',
    ],
    paragraphs: [
      'Effective web searching saves time: use specific keywords, put exact phrases in quotes (e.g. "mail merge in Word"), use site:edu to limit results to academic institutions, and always verify the author, publication date, and organisation before trusting information.',
      'Safety rules: use strong passwords (12+ characters with letters, numbers, and symbols); never share OTPs; scan USB pen drives for viruses; do not open unknown attachments; always log out of shared lab computers; and back up your work to Google Drive or OneDrive.',
      'Academic honesty: copying another student’s file—even if you change the name and ID—is plagiarism and results in zero marks for both students. Always cite images and text taken from the internet.',
    ],
    steps: [
      { text: 'To: enter your teacher’s official email address (add Cc only if instructed).' },
      { text: 'Subject: write a clear, specific subject line, e.g. CSE 2110 Lab 03 Submission – ID 2xxxxxxx.' },
      { text: 'Greeting: start politely with "Dear Sir," or "Respected Sir,".' },
      { text: 'Body: keep it short and polite, stating your purpose in the very first line.' },
      { text: 'Closing: sign off with "Sincerely," followed by your full name, Student ID, section, and department.' },
      { text: 'Attach the file and open the attachment preview to confirm it is the right file before clicking Send.' },
    ],
    callouts: [
      {
        type: 'bangla',
        title: 'বাংলা টিপস (Bangla Hint)',
        text: 'স্যারকে ইমেইল করার সময় ফাঁকা বডি বা সাবজেক্ট ছাড়া কখনোই ফাইল পাঠাবেন না। সাবজেক্টে অবশ্যই কোর্স কোড, ল্যাব নম্বর এবং আপনার স্টুডেন্ট আইডি লিখুন।',
      },
    ],
    commonMistakes: [
      'Writing the entire email message inside the Subject line.',
      'Forgetting to attach the file before pressing Send, or attaching a shortcut instead of the real file.',
    ],
    tryIt: 'Draft a formal lab submission email in your email client (without sending unless asked in Lab 2) addressed to yourself to test the subject, greeting, body, closing, and attachment.',
  },
];
