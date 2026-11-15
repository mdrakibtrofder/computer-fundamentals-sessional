import { LessonContent } from '../types/course';

export const module2Lessons: LessonContent[] = [
  {
    id: '2.1',
    moduleSlug: 'powerpoint',
    title: 'PowerPoint interface, views and slide layouts',
    durationMinutes: 40,
    difficulty: 'Beginner',
    outcomes: [
      'Identify the PowerPoint window parts and Ribbon tabs.',
      'Add, duplicate, reorder, hide, delete and organize slides into sections.',
      'Choose appropriate slide layouts and switch between PowerPoint views.',
    ],
    paragraphs: [
      'The PowerPoint workspace consists of the Slide thumbnails pane (left), the main Slide pane (centre), the Notes pane (bottom), the Ribbon tabs (Home, Insert, Draw, Design, Transitions, Animations, Slide Show, Record, Review, View), and the Status bar with view buttons and zoom.',
      'Standard modern decks use Widescreen 16:9. Each slide layout provides structured placeholders—such as Title Slide, Title and Content, Section Header, Two Content, Comparison, Title Only, Blank, Content with Caption, and Picture with Caption.',
    ],
    ribbonMock: {
      app: 'PowerPoint',
      activeTab: 'Home',
      tabs: ['File', 'Home', 'Insert', 'Design', 'Transitions', 'Animations', 'Slide Show', 'View'],
      highlightedGroup: 'Slides',
      groups: [
        { name: 'Slides', items: ['New Slide', 'Layout', 'Reset', 'Section'] },
        { name: 'Font', items: ['Calibri', '44', 'B', 'I', 'Color'] },
        { name: 'Paragraph', items: ['Bullets', 'Align', 'Convert to SmartArt'] },
      ],
    },
    tables: [
      {
        caption: 'PowerPoint Views',
        headers: ['View', 'Use'],
        rows: [
          ['Normal', 'Edit slides (default)'],
          ['Outline View', 'Type and reorder text quickly'],
          ['Slide Sorter', 'See all slides; reorder; apply transitions'],
          ['Notes Page', 'Write and print speaker notes'],
          ['Reading View', 'Preview the show inside the window'],
          ['Slide Show', 'Full-screen presentation (F5)'],
          ['Presenter View', 'Speaker sees notes, timer and next slide'],
        ],
      },
    ],
    steps: [
      { text: 'Launch PowerPoint and select Blank Presentation (16:9 widescreen).', ribbonPath: 'Start ▸ PowerPoint ▸ Blank Presentation' },
      { text: 'Insert new slides using Ctrl + M and select an appropriate layout.', ribbonPath: 'Home ▸ New Slide / Layout' },
      { text: 'Duplicate a slide with Ctrl + D, reorder slides by dragging thumbnails or using Slide Sorter, or right-click ▸ Hide Slide to skip a slide during a talk.' },
      { text: 'Organize long presentations by right-clicking between thumbnails ▸ Add Section.' },
    ],
    shortcuts: [
      { action: 'Insert new slide', keys: 'Ctrl + M' },
      { action: 'Duplicate selected slide/object', keys: 'Ctrl + D' },
      { action: 'Start slide show from beginning', keys: 'F5' },
    ],
    commonMistakes: [
      'Pressing Ctrl + N thinking it adds a new slide (Ctrl + N opens a brand-new presentation file; Ctrl + M adds a slide!).',
      'Deleting placeholders and replacing every title with manual text boxes, which breaks Outline View and Slide Master inheritance.',
    ],
    tryIt: 'Create a 5-slide skeleton using Title Slide, Title and Content, Two Content, Comparison, and Blank layouts, then reorder slides 3 and 4 in Slide Sorter view.',
  },
  {
    id: '2.2',
    moduleSlug: 'powerpoint',
    title: 'Working with text and slide design (themes & variants)',
    durationMinutes: 40,
    difficulty: 'Beginner',
    outcomes: [
      'Format text cleanly inside placeholders and extra text boxes.',
      'Apply built-in Themes, colour Variants and custom backgrounds.',
      'Follow the 6×6 readability rule and contrast standards.',
    ],
    paragraphs: [
      'Text rules for readable slides (the 6×6 guideline): keep no more than 6 bullets per slide and about 6 words per bullet. Use key phrases, not full essay paragraphs. Keep titles at 36–44 pt and body text at least 24 pt (never below 18 pt). Always maintain strong contrast—dark text on a clean light background is easiest to read in bright classrooms.',
      'In Microsoft 365, Design ▸ Designer automatically suggests clean, balanced slide layouts based on your text and pictures.',
    ],
    steps: [
      { text: 'Click inside a placeholder ("Click to add title") to type; press Tab / Shift + Tab to demote or promote bullet levels.', ribbonPath: 'Home ▸ Paragraph' },
      { text: 'Use Insert ▸ Text Box for extra labels anywhere on the slide, or convert bullets to diagrams with Convert to SmartArt.', ribbonPath: 'Home ▸ Convert to SmartArt' },
      { text: 'Apply a unified Theme and switch colour palettes with Variants.', ribbonPath: 'Design ▸ Themes / Variants' },
      { text: 'Customize background with Solid, Gradient, or Picture fill and choose Apply to All.', ribbonPath: 'Design ▸ Format Background' },
      { text: 'Replace a font across every slide in one step.', ribbonPath: 'Home ▸ Replace arrow ▸ Replace Fonts' },
    ],
    callouts: [
      {
        type: 'bangla',
        title: 'বাংলা টিপস (Bangla Hint)',
        text: 'স্লাইডে পুরো প্যারাগ্রাফ লিখে ফেলবেন না। শ্রোতারা পর্দা পড়ে না, আপনার কথা শোনে—তাই ৬×৬ নিয়ম মেনে প্রতি স্লাইডে সর্বোচ্চ ৬টি পয়েন্ট এবং প্রতিটি পয়েন্টে ৬-৭টি শব্দ রাখুন।',
      },
      {
        type: 'free-alt',
        title: 'Free Alternative',
        text: 'Google Slides (slides.google.com) includes clean themes, slide layouts, and exports directly to .pptx or .pdf.',
      },
    ],
    commonMistakes: [
      'Pasting long paragraphs from Word onto a slide with 12 pt font.',
      'Choosing dark purple text on a busy dark photo background where students at the back cannot read it.',
    ],
    tryIt: 'Take a 60-word paragraph, condense it into 4 crisp bullets following the 6×6 rule (24 pt body, 40 pt title), and test two different Design Themes and Variants.',
  },
  {
    id: '2.3',
    moduleSlug: 'powerpoint',
    title: 'Images, shapes, icons & SmartArt',
    durationMinutes: 50,
    difficulty: 'Intermediate',
    outcomes: [
      'Insert, crop, compress and credit high-quality images.',
      'Draw, align, distribute and group shapes using guides and the Selection Pane.',
      'Build technical diagrams using shapes, arrows and SmartArt.',
    ],
    paragraphs: [
      'Visuals communicate faster than walls of text. Use high-resolution, relevant images, never stretch an image (always drag a corner handle to keep proportions), and credit image sources either at the bottom of the slide or on a final "Image credits" slide.',
      'Using Compress Pictures reduces giant photos down to screen resolution so your .pptx file stays lightweight and easy to email or upload.',
    ],
    steps: [
      { text: 'Insert pictures and use Crop, Crop to Shape, Remove Background, Corrections, and Compress Pictures.', ribbonPath: 'Insert ▸ Pictures ▸ Picture Format' },
      { text: 'Insert clean vector icons and shapes; combine shapes using Merge Shapes (Union, Subtract).', ribbonPath: 'Insert ▸ Icons / Shapes ▸ Shape Format' },
      { text: 'Align objects precisely using Guides and Gridlines, Align (Center, Middle, Distribute Horizontally), and Group (Ctrl + G).', ribbonPath: 'Shape Format ▸ Align / Group / View ▸ Guides' },
      { text: 'Open Selection Pane (Alt + F10) to rename, hide, or reorder overlapping layers.', ribbonPath: 'Shape Format ▸ Selection Pane (Alt + F10)' },
      { text: 'Turn existing bullet lists into instant SmartArt or build a one-slide-per-photo album.', ribbonPath: 'Home ▸ Convert to SmartArt / Insert ▸ Photo Album' },
    ],
    shortcuts: [
      { action: 'Group / Ungroup selected objects', keys: 'Ctrl + G / Ctrl + Shift + G' },
      { action: 'Keep proportions while resizing/drawing', keys: 'Shift + drag' },
      { action: 'Open Selection Pane', keys: 'Alt + F10' },
    ],
    commonMistakes: [
      'Dragging the side handles of a photo and squishing faces or logos.',
      'Leaving shapes unaligned by a few pixels—use Shape Format ▸ Align instead of eyeballing.',
    ],
    tryIt: 'Recreate the "Basic Organization of a Computer System" diagram using shapes and arrows: Input, CPU (with CU, ALU, and Memory inside a dashed container box), Output, and Secondary Storage.',
  },
  {
    id: '2.4',
    moduleSlug: 'powerpoint',
    title: 'Tables and charts in slides',
    durationMinutes: 40,
    difficulty: 'Intermediate',
    outcomes: [
      'Insert and format clean data tables inside slides.',
      'Create Column, Line, Pie and Bar charts and edit their underlying data.',
      'Link an Excel chart into PowerPoint so updates reflect automatically.',
    ],
    paragraphs: [
      'Choosing the right chart makes comparisons immediate: use Column or Bar charts to compare categories, Line charts to show change over time, and Pie charts for parts of a whole (keep Pie charts to at most 5–6 slices).',
      'When you insert a chart directly in PowerPoint, a mini Excel datasheet window opens so you can enter values and close it.',
    ],
    steps: [
      { text: 'Insert a table and style it using Header Row and Banded Rows.', ribbonPath: 'Insert ▸ Table ▸ Table Design' },
      { text: 'Insert a Column, Line, Pie, or Bar chart and enter data in the pop-up spreadsheet.', ribbonPath: 'Insert ▸ Chart' },
      { text: 'Refine chart titles, data labels, and legends.', ribbonPath: 'Chart Design ▸ Add Chart Element / Edit Data' },
      { text: 'Copy an existing chart in Excel and use Paste Special ▸ Keep Source Formatting & Link Data so PowerPoint updates whenever Excel changes.', ribbonPath: 'Home ▸ Paste Special ▸ Link Data' },
    ],
    commonMistakes: [
      'Putting a giant 12-column, 20-row spreadsheet onto a slide where no one can read the numbers.',
      'Using a Pie chart with 12 tiny slices instead of a Bar chart.',
    ],
    tryIt: 'Create a slide comparing semester attendance or marks across 4 sections using a clean Column chart with Data Labels enabled.',
  },
  {
    id: '2.5',
    moduleSlug: 'powerpoint',
    title: 'Audio, video and hyperlinks',
    durationMinutes: 30,
    difficulty: 'Intermediate',
    outcomes: [
      'Embed local video and audio clips and configure playback options.',
      'Create hyperlinks to websites, other slides, files or emails.',
      'Build interactive navigation menus with Action Buttons and Slide Zoom.',
    ],
    paragraphs: [
      'Videos and audio clips are embedded inside the .pptx file when inserted from This Device, whereas Online Videos require an active internet connection during the presentation. Always copy your .pptx to the classroom PC and test media playback before your talk begins.',
    ],
    steps: [
      { text: 'Insert video from your computer and use the Playback tab to Trim Video, Fade In/Out, adjust Volume, set Start (On Click / Automatically), Play Full Screen, or Loop.', ribbonPath: 'Insert ▸ Video ▸ This Device ▸ Playback' },
      { text: 'Insert audio or record narration; tick Play in Background to play softly across slides.', ribbonPath: 'Insert ▸ Audio ▸ Playback' },
      { text: 'Add clickable links (Ctrl + K) to web pages, another slide (Place in This Document), a file, or an email address.', ribbonPath: 'Insert ▸ Link (Ctrl + K)' },
      { text: 'Add Next, Previous, or Home Action Buttons, or create a clickable visual menu slide using Summary Zoom / Slide Zoom.', ribbonPath: 'Insert ▸ Shapes ▸ Action Buttons / Insert ▸ Zoom' },
    ],
    shortcuts: [
      { action: 'Insert Hyperlink', keys: 'Ctrl + K' },
    ],
    commonMistakes: [
      'Linking to a local video without bringing the .pptx file properly or forgetting that YouTube embeds fail if classroom Wi-Fi disconnects.',
    ],
    tryIt: 'Add a clickable "Contents" slide with hyperlinks (Place in This Document) jumping to 3 topic slides, plus a Home Action Button on each topic slide to return.',
  },
  {
    id: '2.6',
    moduleSlug: 'powerpoint',
    title: 'Transitions and animations',
    durationMinutes: 50,
    difficulty: 'Intermediate',
    outcomes: [
      'Distinguish slide transitions from object animations.',
      'Apply subtle transitions including Morph and control timing.',
      'Sequence Entrance, Emphasis, Exit and Motion Path animations in the Animation Pane.',
    ],
    paragraphs: [
      'Transitions control movement between slides (such as Fade, Push, Wipe, or Morph). Animations control movement of objects inside a slide.',
      'Morph transition trick: duplicate a slide, move or resize objects on the second copy, and apply Transitions ▸ Morph to the second slide—PowerPoint smoothly glides objects into their new positions.',
      'Rule: animation must support the message. Stick to one or two simple effects (like Appear or Fade) consistently, and avoid sound effects or spinning text in academic talks.',
    ],
    tables: [
      {
        caption: 'Animation Categories',
        headers: ['Type', 'Colour in gallery', 'Example'],
        rows: [
          ['Entrance', 'Green', 'Appear, Fade, Fly In, Wipe'],
          ['Emphasis', 'Yellow', 'Pulse, Grow/Shrink, Spin'],
          ['Exit', 'Red', 'Disappear, Fade Out, Fly Out'],
          ['Motion Paths', 'Lines', 'Lines, Arcs, Custom Path'],
        ],
      },
    ],
    steps: [
      { text: 'Apply a clean transition, set Duration, and click Apply To All for consistency.', ribbonPath: 'Transitions ▸ Fade / Morph ▸ Apply To All' },
      { text: 'Select an object on a slide and apply an Entrance animation.', ribbonPath: 'Animations ▸ Appear / Fade' },
      { text: 'Set Effect Options to "By Paragraph" so bullet points appear one by one as you speak.', ribbonPath: 'Animations ▸ Effect Options ▸ By Paragraph' },
      { text: 'Open the Animation Pane to reorder effects, adjust Start (On Click / With Previous / After Previous), Duration, Delay, or set click Triggers.', ribbonPath: 'Animations ▸ Animation Pane' },
      { text: 'Use Add Animation to stack a second effect (never replace the first!), and Animation Painter to copy timing to another object.', ribbonPath: 'Animations ▸ Add Animation / Animation Painter' },
    ],
    callouts: [
      {
        type: 'bangla',
        title: 'বাংলা টিপস (Bangla Hint)',
        text: 'অ্যাকাডেমিক প্রেজেন্টেশনে প্রতিটি স্লাইডে ভিন্ন ভিন্ন অ্যানিমেশন বা শব্দ ব্যবহার করবেন না। সাধারণ Fade বা Appear দিয়ে "By Paragraph" চালু রাখলে উপস্থাপনা অনেক প্রফেশনাল দেখায়।',
      },
    ],
    commonMistakes: [
      'Clicking the main animation gallery a second time instead of "Add Animation", which overwrites the first animation.',
      'Making audiences wait 3 seconds for slow Fly-In animations on every single bullet.',
    ],
    tryIt: 'Create a 2-slide Morph transition demo, and set a 4-bullet slide to appear one bullet at a time using "By Paragraph" on click.',
  },
  {
    id: '2.7',
    moduleSlug: 'powerpoint',
    title: 'Slide Master, speaker notes & slide numbers',
    durationMinutes: 40,
    difficulty: 'Intermediate',
    outcomes: [
      'Edit the Slide Master to apply fonts, colours and a logo across all slides at once.',
      'Configure Header & Footer with slide numbers and date, hidden on the title slide.',
      'Write speaker notes and save custom designs as a PowerPoint Template (.potx).',
    ],
    paragraphs: [
      'Slide Master saves huge amounts of time: instead of pasting the BAUST logo or changing heading fonts on 15 slides individually, you edit the Master once and every slide updates automatically.',
      'In View ▸ Slide Master, the largest slide at the very top of the left pane controls all layouts across the deck, while the smaller indented slides below it control individual layouts (like Title Slide or Two Content).',
    ],
    steps: [
      { text: 'Open Slide Master view and select the top-most Master slide.', ribbonPath: 'View ▸ Slide Master' },
      { text: 'Set theme fonts, colours, and insert a small university or department logo in a corner, then click Close Master View.', ribbonPath: 'Slide Master ▸ Close Master View' },
      { text: 'Add Slide number, Date, and Footer text ("CSE 2110 | Your Name"), ticking "Don’t show on title slide" before clicking Apply to All.', ribbonPath: 'Insert ▸ Header & Footer' },
      { text: 'Click View ▸ Notes and type your spoken talking points in the Notes pane below each slide.', ribbonPath: 'View ▸ Notes' },
      { text: 'Save your reusable design as a template file (.potx) if needed.', ribbonPath: 'File ▸ Save As ▸ PowerPoint Template (.potx)' },
    ],
    commonMistakes: [
      'Editing one of the smaller layout slides instead of the top-most parent Slide Master, so the logo only shows on some slides.',
      'Leaving Master View open and wondering why you cannot edit your presentation text—always click Close Master View.',
    ],
    tryIt: 'Open Slide Master, change the title font across all slides to Plus Jakarta Sans or Calibri Bold, add a small badge shape in the top-right corner, close Master View, and enable Slide Numbers on all slides except the title slide.',
  },
  {
    id: '2.8',
    moduleSlug: 'powerpoint',
    title: 'Presenting, printing handouts & good design rules',
    durationMinutes: 40,
    difficulty: 'Intermediate',
    outcomes: [
      'Control a live presentation smoothly using keyboard shortcuts and presenter tools.',
      'Export presentations to Video (.mp4), PDF and Handouts (3 slides per page).',
      'Structure an academic presentation cleanly from Title Slide to Questions.',
    ],
    paragraphs: [
      'Good design principles: keep one clear idea per slide, maintain a consistent theme and font hierarchy, use strong contrast (dark text on a light background works best in bright classrooms), align every element, embrace white space, prefer visuals over paragraphs, cite sources, and end with a Summary and a "Thank you / Questions" slide.',
      'Recommended student presentation structure: Title slide (topic, name, ID, course, date) → Outline → Introduction → 3–5 content slides → Conclusion → References → Questions. Plan roughly 1 minute per slide.',
    ],
    tables: [
      {
        caption: 'Live Slide Show Keyboard Controls',
        headers: ['Action during slide show', 'Shortcut'],
        rows: [
          ['Start from beginning', 'F5'],
          ['Start from current slide', 'Shift + F5'],
          ['Next / previous slide', 'Space, Enter, → / Backspace, ←'],
          ['Jump to slide number n', 'Type n + Enter'],
          ['Black screen / white screen', 'B / W'],
          ['Laser pointer', 'Ctrl + L'],
          ['Pen annotation', 'Ctrl + P'],
          ['Erase ink', 'E'],
          ['End show', 'Esc'],
        ],
      },
    ],
    steps: [
      { text: 'Practise pacing with Rehearse Timings, or record a narrated video with Record Slide Show.', ribbonPath: 'Slide Show ▸ Rehearse Timings / Record' },
      { text: 'Set up an unattended looping kiosk display if needed.', ribbonPath: 'Slide Show ▸ Set Up Slide Show ▸ Browsed at a kiosk' },
      { text: 'Export as an .mp4 video or PDF.', ribbonPath: 'File ▸ Export ▸ Create a Video / Create PDF' },
      { text: 'Print Handouts (choose 3 slides per page to automatically include note-taking lines beside each slide).', ribbonPath: 'File ▸ Print ▸ Handouts (3 Slides)' },
    ],
    shortcuts: [
      { action: 'Start show from start / current slide', keys: 'F5 / Shift + F5' },
      { action: 'Black / White screen pause', keys: 'B / W' },
      { action: 'Laser pointer / Pen / Erase ink', keys: 'Ctrl + L / Ctrl + P / E' },
      { action: 'Copy / Paste object formatting', keys: 'Ctrl + Shift + C / V' },
    ],
    commonMistakes: [
      'Reading every word off the slides with your back turned to the audience.',
      'Not testing F5 and Presenter View on the classroom projector beforehand.',
    ],
    tryIt: 'Start your deck with F5, jump straight to Slide 3 by pressing 3 + Enter, press B to pause on a black screen, press B again to resume, and draw with Ctrl + P.',
  },
];
