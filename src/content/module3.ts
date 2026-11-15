import { LessonContent } from '../types/course';

export const module3Lessons: LessonContent[] = [
  {
    id: '3.1',
    moduleSlug: 'excel',
    title: 'Excel interface: workbook, worksheet, cell & range',
    durationMinutes: 30,
    difficulty: 'Beginner',
    outcomes: [
      'Explain workbook, worksheet, row, column, cell, cell address and range.',
      'Navigate large sheets quickly using keyboard shortcuts and the Name Box.',
      'Add, rename, recolour, move, copy and delete worksheet tabs.',
    ],
    paragraphs: [
      'An Excel file (.xlsx) is called a Workbook, and it contains one or more Worksheets (tabs at the bottom: Sheet1, Sheet2…). Columns are labelled with letters (A … XFD, 16,384 columns) and rows with numbers (1 … 1,048,576).',
      'A Cell is the box where a column and row meet; its cell address is column letter + row number, e.g., B3. The active cell has a green border. A Range is a rectangular block of cells written first:last, e.g., A1:D10. The Name Box (left of the formula bar) shows the active cell address, while the Formula Bar shows the cell’s true value or formula.',
    ],
    ribbonMock: {
      app: 'Excel',
      activeTab: 'Home',
      tabs: ['File', 'Home', 'Insert', 'Page Layout', 'Formulas', 'Data', 'Review', 'View'],
      highlightedGroup: 'Number & Editing',
      groups: [
        { name: 'Alignment', items: ['Wrap Text', 'Merge & Center'] },
        { name: 'Number', items: ['General', '%', ','] },
        { name: 'Editing', items: ['AutoSum Σ', 'Sort & Filter'] },
      ],
    },
    steps: [
      { text: 'Click + at the bottom tab bar to add a new worksheet; double-click a sheet tab to rename it.' },
      { text: 'Right-click a sheet tab to change Tab Color, Move or Copy, Delete, or Hide.' },
      { text: 'Click the Name Box, type D15, and press Enter to jump directly to cell D15.' },
    ],
    shortcuts: [
      { action: 'Move one cell (down / right)', keys: 'Enter / Tab' },
      { action: 'Go to cell A1 / last used cell', keys: 'Ctrl + Home / Ctrl + End' },
      { action: 'Jump to edge of data block', keys: 'Ctrl + Arrow' },
      { action: 'Switch to next / previous sheet', keys: 'Ctrl + Page Down / Page Up' },
      { action: 'Go To cell dialog', keys: 'F5 or Ctrl + G' },
      { action: 'Select whole column / whole row', keys: 'Ctrl + Space / Shift + Space' },
    ],
    commonMistakes: [
      'Reading a cell address backwards as row-first ("3B" instead of "B3").',
      'Accidently typing inside the wrong sheet tab—always check which tab is highlighted at the bottom.',
    ],
    tryIt: 'Open Excel, add a second worksheet, rename the sheets "Marks" and "Summary", colour-code the tabs, and use Ctrl + Page Down / Page Up to switch between them.',
  },
  {
    id: '3.2',
    moduleSlug: 'excel',
    title: 'Entering and editing data, AutoFill & data types',
    durationMinutes: 40,
    difficulty: 'Beginner',
    outcomes: [
      'Distinguish text, numbers, dates and formulas by default alignment and behaviour.',
      'Use AutoFill, Flash Fill and Freeze Panes to enter and view data efficiently.',
      'Apply Data Validation rules to prevent invalid marks or entries.',
    ],
    paragraphs: [
      'Excel recognizes four core data types: Text (left-aligned by default), Numbers (right-aligned), Dates (stored internally as serial numbers), and Formulas (always start with =).',
      'To enter a new line inside the same cell, press Alt + Enter. To insert today’s date quickly, press Ctrl + ; and for current time press Ctrl + Shift + ;.',
    ],
    steps: [
      { text: 'Double-click a cell or press F2 to edit inside the cell without overwriting its contents; press Delete to clear.' },
      { text: 'Double-click the border between column letters (e.g. between A and B) to AutoFit width, or use Home ▸ Format ▸ Column Width.', ribbonPath: 'Home ▸ Format ▸ Column Width' },
      { text: 'Right-click a row or column header to Insert or Delete rows/columns (Ctrl + + / Ctrl + -).' },
      { text: 'Use AutoFill: type 1, 2 (or Jan, or Monday), select the cells, and drag the tiny square fill handle at the bottom-right corner—or double-click it to fill down alongside existing data.' },
      { text: 'Use Flash Fill (Ctrl + E): type one example (e.g., first name extracted from a full name) and press Ctrl + E so Excel fills the rest of the column.' },
      { text: 'Keep column headers visible while scrolling down.', ribbonPath: 'View ▸ Freeze Panes ▸ Freeze Top Row' },
      { text: 'Restrict allowed values (e.g. marks between 0 and 100) or create a drop-down list.', ribbonPath: 'Data ▸ Data Validation' },
      { text: 'Use Paste Special (Ctrl + Alt + V) to paste Values Only or Transpose rows into columns.', ribbonPath: 'Home ▸ Paste ▸ Paste Special' },
    ],
    shortcuts: [
      { action: 'Edit active cell', keys: 'F2' },
      { action: 'New line inside a cell', keys: 'Alt + Enter' },
      { action: 'Insert today’s date / current time', keys: 'Ctrl + ; / Ctrl + Shift + ;' },
      { action: 'Fill Down / Flash Fill', keys: 'Ctrl + D / Ctrl + E' },
      { action: 'Paste Special', keys: 'Ctrl + Alt + V' },
    ],
    callouts: [
      {
        type: 'bangla',
        title: 'বাংলা টিপস (Bangla Hint)',
        text: 'মার্কস লেখার সময় কখনোই "50 marks" বা বাংলা সংখ্যা "৫০" লিখবেন না—লিখলে সেটি Text হয়ে যাবে এবং SUM বা AVERAGE কাজ করবে না। শুধু ইংরেজি সংখ্যা "50" লিখুন।',
      },
    ],
    commonMistakes: [
      'Typing numbers with spaces or words ("50 marks") or Bangla digits ("৫০") so Excel treats them as text and skips them in formulas.',
      'Leaving completely blank rows inside a dataset, which breaks AutoFill double-click and sorting.',
    ],
    tryIt: 'Create a 10-row student ID sequence (240101, 240102…) using AutoFill, freeze the top header row, and add Data Validation so marks only accept whole numbers from 0 to 100.',
  },
  {
    id: '3.3',
    moduleSlug: 'excel',
    title: 'Formatting cells, number formats & conditional formatting',
    durationMinutes: 40,
    difficulty: 'Beginner',
    outcomes: [
      'Apply font, alignment (Wrap Text, Merge & Center) and cell border styles.',
      'Format numbers as Currency (৳), Percentage, Decimal and Date.',
      'Highlight failing or top marks automatically with Conditional Formatting.',
    ],
    paragraphs: [
      'Number formatting changes how a number looks without changing its underlying mathematical value. Common formats include General, Number (with decimal places), Currency/Accounting (Taka ৳ or US Dollar), Percentage, Date, Time, and Text.',
      'If a cell fills with ######, nothing is broken—it simply means the column is too narrow to display the formatted number. Double-click the column border to widen it.',
    ],
    steps: [
      { text: 'Wrap long headings inside a cell or centre a title across columns.', ribbonPath: 'Home ▸ Alignment ▸ Wrap Text / Merge & Center' },
      { text: 'Change decimal places, currency, or percentage formatting, or press Ctrl + 1 for the full Format Cells dialog.', ribbonPath: 'Home ▸ Number / Ctrl + 1' },
      { text: 'Add gridlines for printing with All Borders or Thick Box Border.', ribbonPath: 'Home ▸ Font ▸ Borders' },
      { text: 'Apply instant table styling with Cell Styles or Format as Table (Ctrl + T).', ribbonPath: 'Home ▸ Styles ▸ Format as Table' },
      { text: 'Automatically colour marks below 40 in light red fill using Conditional Formatting.', ribbonPath: 'Home ▸ Conditional Formatting ▸ Highlight Cells Rules ▸ Less Than' },
    ],
    shortcuts: [
      { action: 'Open Format Cells dialog', keys: 'Ctrl + 1' },
      { action: 'Format as Percentage', keys: 'Ctrl + Shift + %' },
      { action: 'Format as Currency', keys: 'Ctrl + Shift + 4' },
      { action: 'Format as Table', keys: 'Ctrl + T' },
    ],
    commonMistakes: [
      'Using Merge & Center inside data rows (keep Merge & Center only for top banner titles, because merged cells break sorting and formulas).',
      'Typing "%" manually as text instead of formatting a decimal (e.g. 0.85 formatted as 85%).',
    ],
    tryIt: 'Format a marks column with 2 decimal places, apply Conditional Formatting to highlight scores < 40 in red and scores >= 80 in green, and add All Borders.',
  },
  {
    id: '3.4',
    moduleSlug: 'excel',
    title: 'Formulas and operators, order of operations',
    durationMinutes: 40,
    difficulty: 'Beginner',
    outcomes: [
      'Write arithmetic and comparison formulas starting with an equals sign (=).',
      'Apply BODMAS / PEMDAS order of operations accurately using brackets.',
      'Diagnose and fix common Excel formula error values (#DIV/0!, #VALUE!, #NAME?, #REF!).',
    ],
    paragraphs: [
      'A formula in Excel always begins with = and can combine numbers, cell references, operators, and functions. Whenever a referenced cell changes, Excel recalculates the formula result automatically.',
      'Order of operations (BODMAS / PEMDAS): Brackets → Power (^) → Multiplication (*) & Division (/) → Addition (+) & Subtraction (-). For example, =10+5*2 evaluates to 20, whereas =(10+5)*2 evaluates to 30.',
    ],
    tables: [
      {
        caption: 'Excel Operators',
        headers: ['Operator', 'Meaning', 'Example'],
        rows: [
          ['+', 'Addition', '=A1+B1'],
          ['-', 'Subtraction', '=A1-B1'],
          ['*', 'Multiplication', '=A1*B1'],
          ['/', 'Division', '=A1/B1'],
          ['^', 'Power', '=A1^2'],
          ['%', 'Percent', '=A1*10%'],
          ['&', 'Join text', '=A1&" "&B1'],
          ['= > < >= <= <>', 'Comparison (TRUE/FALSE)', '=A1>=40'],
        ],
      },
      {
        caption: 'Common Excel Errors & Fixes',
        headers: ['Error', 'Meaning', 'Fix'],
        rows: [
          ['#DIV/0!', 'Dividing by zero or empty cell', 'Check the divisor'],
          ['#VALUE!', 'Wrong type (text in a calculation)', 'Remove text/spaces from numbers'],
          ['#NAME?', 'Misspelled function or text without quotes', 'Correct spelling, add "quotes"'],
          ['#REF!', 'Referenced cell was deleted', 'Rebuild the reference'],
          ['#N/A', 'Lookup value not found', 'Check the lookup value and range'],
          ['#####', 'Column too narrow', 'Widen the column'],
          ['Circular reference', 'Formula refers to its own cell', 'Change the reference'],
        ],
      },
    ],
    formulas: [
      { formula: '=10+5*2', explanation: 'Evaluates multiplication first: 10 + 10 = 20.' },
      { formula: '=(10+5)*2', explanation: 'Evaluates brackets first: 15 * 2 = 30.' },
    ],
    shortcuts: [
      { action: 'Toggle Show Formulas across the sheet', keys: 'Ctrl + `' },
    ],
    callouts: [
      {
        type: 'tip',
        title: 'Checking Lab Work',
        text: 'Press Ctrl + ` (grave accent key above Tab) to reveal every formula in your worksheet at once—great for checking your lab before submission.',
      },
    ],
    commonMistakes: [
      'Typing the calculated answer manually ("150") instead of writing a formula ("=B2+C2+D2").',
      'Forgetting parentheses when averaging or adding before dividing (e.g. =A1+B1/2 instead of =(A1+B1)/2).',
    ],
    tryIt: 'Test =10+5*2 and =(10+5)*2 in two cells, then try dividing by 0 to observe #DIV/0! and toggle Show Formulas with Ctrl + `.',
  },
  {
    id: '3.5',
    moduleSlug: 'excel',
    title: 'Cell references: relative, absolute & mixed',
    durationMinutes: 40,
    difficulty: 'Intermediate',
    outcomes: [
      'Differentiate relative (A1), absolute ($A$1) and mixed (A$1, $A1) references.',
      'Use F4 to lock row and column references quickly.',
      'Reference cells from other worksheets and define Named Ranges.',
    ],
    paragraphs: [
      'When you copy a formula down a column using the fill handle, Excel shifts cell addresses automatically—this is called a Relative reference. Sometimes, however, every row needs to divide or multiply by one fixed cell (like Full Marks = 100 in H1 or Tax Rate in B1). That requires an Absolute reference ($H$1).',
      'Example: each student’s percentage = Total / Full marks, where full marks is stored in cell H1 (100). In E2 write =D2/$H$1 and fill down: D2 updates to D3, D4… while $H$1 stays locked. You can also reference another sheet (=Sheet2!B5) or assign a Named Range (Formulas ▸ Define Name, e.g., FullMarks) and write =D2/FullMarks.',
    ],
    tables: [
      {
        caption: 'Types of Cell References',
        headers: ['Type', 'Written', 'What happens when copied'],
        rows: [
          ['Relative', 'A1', 'Both column and row change'],
          ['Absolute', '$A$1', 'Nothing changes (fixed cell)'],
          ['Mixed (row fixed)', 'A$1', 'Column changes, row fixed'],
          ['Mixed (column fixed)', '$A1', 'Row changes, column fixed'],
        ],
      },
    ],
    formulas: [
      { formula: '=D2/$H$1', explanation: 'Divides each student’s total (D2, D3, D4…) by a single fixed Full Marks cell ($H$1).' },
      { formula: '=Sheet2!B5', explanation: 'Pulls the value of cell B5 from Sheet2.' },
    ],
    shortcuts: [
      { action: 'Cycle relative / absolute / mixed ($)', keys: 'F4' },
    ],
    callouts: [
      {
        type: 'bangla',
        title: 'বাংলা টিপস (Bangla Hint)',
        text: 'কোনো ফর্মুলা নিচে ড্র্যাগ করলে যদি #DIV/0! আসে, বুঝবেন নিচের সেলের রেফারেন্স সরে গেছে। ফর্মুলা লেখার সময় নির্দিষ্ট সেলের ওপর কার্সর রেখে F4 চাপুন যাতে $ চিহ্ন চলে আসে।',
      },
    ],
    commonMistakes: [
      'Forgetting F4 before dragging a percentage formula down—row 2 divides by H2 (empty) and shows #DIV/0!.',
    ],
    tryIt: 'Put Full Marks = 300 in cell H1, enter 5 students’ totals in D2:D6, write =D2/$H$1 in E2 (using F4), fill down, and format E2:E6 as Percentage.',
  },
  {
    id: '3.6',
    moduleSlug: 'excel',
    title: 'Basic functions: SUM, AVERAGE, MIN, MAX, COUNT & ROUND',
    durationMinutes: 50,
    difficulty: 'Beginner',
    outcomes: [
      'Use built-in math and statistical functions (SUM, AVERAGE, MAX, MIN, COUNT, ROUND, RANK.EQ).',
      'Apply text and date functions (PROPER, TRIM, CONCAT, TODAY, DATEDIF).',
      'Use AutoSum (Alt + =) and check quick totals in the Status bar.',
    ],
    paragraphs: [
      'A function is a built-in formula following the syntax =FUNCTION(arguments). You can insert functions using the fx button, Formulas ▸ Function Library, or AutoSum (Alt + =).',
      'Tip: whenever you select any range of numbers, Excel’s bottom Status bar immediately displays their Average, Count, and Sum without writing a formula.',
    ],
    tables: [
      {
        caption: 'Essential Excel Functions',
        headers: ['Function', 'Purpose', 'Example'],
        rows: [
          ['SUM', 'Adds numbers', '=SUM(B2:D2)'],
          ['AVERAGE', 'Mean', '=AVERAGE(B2:D2)'],
          ['MAX / MIN', 'Highest / lowest', '=MAX(E2:E31)'],
          ['COUNT', 'Counts cells with numbers', '=COUNT(B2:B31)'],
          ['COUNTA', 'Counts non-empty cells', '=COUNTA(A2:A31)'],
          ['COUNTBLANK', 'Counts empty cells', '=COUNTBLANK(B2:B31)'],
          ['ROUND', 'Rounds to n decimals', '=ROUND(F2,2)'],
          ['ROUNDUP / ROUNDDOWN', 'Always up / down', '=ROUNDUP(F2,0)'],
          ['SQRT, ABS, POWER', 'Square root, absolute value, power', '=SQRT(25)'],
          ['PRODUCT', 'Multiplies', '=PRODUCT(B2,C2)'],
          ['UPPER / LOWER / PROPER', 'Change text case', '=PROPER(A2)'],
          ['LEN, LEFT, RIGHT, MID, TRIM', 'Text length, parts, remove extra spaces', '=LEFT(A2,4)'],
          ['CONCAT / TEXTJOIN', 'Join text', '=CONCAT(A2," ",B2)'],
          ['TODAY / NOW', 'Current date / date-time', '=TODAY()'],
          ['DATEDIF', 'Age or duration', '=DATEDIF(B2,TODAY(),"Y")'],
          ['RANK.EQ', 'Position in a list', '=RANK.EQ(E2,$E$2:$E$31)'],
        ],
      },
    ],
    formulas: [
      { formula: '=SUM(B2:D2)', explanation: 'Sums all marks across columns B, C, and D in row 2.' },
      { formula: '=ROUND(AVERAGE(B2:D2),2)', explanation: 'Finds the average of B2:D2 and rounds it to 2 decimal places.' },
      { formula: '=RANK.EQ(E2,$E$2:$E$31)', explanation: 'Finds the rank of E2 compared against the locked range $E$2:$E$31.' },
    ],
    shortcuts: [
      { action: 'AutoSum selected cells', keys: 'Alt + =' },
    ],
    commonMistakes: [
      'Using COUNT on a column of names—COUNT only counts numeric cells; use COUNTA for text names.',
      'Forgetting $ signs on the list range inside RANK.EQ.',
    ],
    tryIt: 'Test SUM, AVERAGE, MAX, MIN, and COUNT right in the interactive Excel Playground on the Module 3 page!',
  },
  {
    id: '3.7',
    moduleSlug: 'excel',
    title: 'Logical & lookup functions: IF, nested IF, COUNTIF, SUMIF, VLOOKUP & XLOOKUP',
    durationMinutes: 60,
    difficulty: 'Intermediate',
    outcomes: [
      'Write IF, AND, OR and nested IF / IFS formulas for automated Pass/Fail and UGC letter grading.',
      'Summarize groups with COUNTIF, SUMIF, AVERAGEIF and COUNTIFS.',
      'Look up student grades or records using VLOOKUP, XLOOKUP and IFERROR.',
    ],
    paragraphs: [
      'The IF function tests a condition and returns one result if TRUE and another if FALSE: =IF(logical_test, value_if_true, value_if_false). Always wrap text results in double quotes (e.g. "Pass", "A+").',
      'For BAUST / UGC uniform grading, you can nest IF statements in descending order from 80 down to 40, or use the cleaner IFS function (Excel 2019+). You can also combine multiple conditions with AND / OR: =IF(AND(B2>=40,C2>=40),"Pass","Fail") passes only when both components are 40+, while =IF(OR(B2<40,C2<40),"Retake","OK") flags if either fails.',
      'VLOOKUP searches the first column of a table and returns a matching value from another column: =VLOOKUP(lookup_value, table_array, col_index_num, FALSE). FALSE enforces an exact match. XLOOKUP (Microsoft 365/2021) is simpler and can look left, while HLOOKUP searches horizontal rows and INDEX + MATCH is the classic flexible alternative.',
    ],
    tables: [
      {
        caption: 'UGC / BAUST Uniform Grading Scale (confirm with official outline)',
        headers: ['Marks', 'Letter grade', 'Grade point'],
        rows: [
          ['80–100', 'A+', '4.00'],
          ['75–79', 'A', '3.75'],
          ['70–74', 'A-', '3.50'],
          ['65–69', 'B+', '3.25'],
          ['60–64', 'B', '3.00'],
          ['55–59', 'B-', '2.75'],
          ['50–54', 'C+', '2.50'],
          ['45–49', 'C', '2.25'],
          ['40–44', 'D', '2.00'],
          ['below 40', 'F', '0.00'],
        ],
      },
      {
        caption: 'Conditional Counting & Summing',
        headers: ['Function', 'Example', 'Result'],
        rows: [
          ['COUNTIF', '=COUNTIF(G2:G31,"Pass")', 'Number of students who passed'],
          ['SUMIF', '=SUMIF(C2:C31,"Section A",E2:E31)', 'Total marks of Section A'],
          ['AVERAGEIF', '=AVERAGEIF(C2:C31,"Section B",E2:E31)', 'Average of Section B'],
          ['COUNTIFS / SUMIFS', '=COUNTIFS(C2:C31,"A",G2:G31,"Pass")', 'Several conditions'],
        ],
      },
    ],
    formulas: [
      { formula: '=IF(E2>=40,"Pass","Fail")', explanation: 'Displays "Pass" if marks in E2 are 40 or above; otherwise "Fail".' },
      { formula: '=IF(E2>=80,"A+",IF(E2>=75,"A",IF(E2>=70,"A-",IF(E2>=65,"B+",IF(E2>=60,"B",IF(E2>=55,"B-",IF(E2>=50,"C+",IF(E2>=45,"C",IF(E2>=40,"D","F")))))))))', explanation: 'Nested IF following the UGC grading table from 80 down to below 40.' },
      { formula: '=IFS(E2>=80,"A+",E2>=75,"A",E2>=70,"A-",E2>=65,"B+",E2>=60,"B",E2>=55,"B-",E2>=50,"C+",E2>=45,"C",E2>=40,"D",TRUE,"F")', explanation: 'Cleaner Excel 2019+ IFS equivalent using TRUE as the fallback for F.' },
      { formula: '=VLOOKUP(J2,$A$2:$H$31,8,FALSE)', explanation: 'Looks up Student ID in J2 inside column A and returns the exact-match grade from column 8.' },
      { formula: '=XLOOKUP(J2,A2:A31,H2:H31,"Not found")', explanation: 'Modern lookup returning "Not found" automatically if ID is missing.' },
      { formula: '=IFERROR(VLOOKUP(J2,$A$2:$H$31,8,FALSE),"ID not found")', explanation: 'Replaces #N/A with a friendly message when an ID does not exist.' },
    ],
    callouts: [
      {
        type: 'bangla',
        title: 'বাংলা টিপস (Bangla Hint)',
        text: 'VLOOKUP লেখার সময় শেষে অবশ্যই FALSE (বা 0) লিখবেন, না হলে আইডি না মিললে কাছাকাছি ভুল রেজাল্ট দেখাতে পারে।',
      },
    ],
    commonMistakes: [
      'Writing nested IF from lowest to highest (e.g., >=40 first)—a student with 90 matches >=40 and wrongly gets "D"! Always check >=80 down to >=40.',
      'Omitting FALSE in VLOOKUP or forgetting $ locks on the lookup table.',
    ],
    tryIt: 'Write an IF Pass/Fail formula and a COUNTIF Pass count for a class list, then build a VLOOKUP search cell wrapped in IFERROR.',
  },
  {
    id: '3.8',
    moduleSlug: 'excel',
    title: 'Sorting, filtering and Excel tables',
    durationMinutes: 40,
    difficulty: 'Intermediate',
    outcomes: [
      'Sort data by single and multiple levels (e.g. Section then Total marks).',
      'Filter rows by value, text or number criteria and clear filters cleanly.',
      'Convert ranges into structured Excel Tables and build a summary PivotTable.',
    ],
    paragraphs: [
      'Sorting arranges rows alphabetically or numerically; Filtering hides rows that do not meet your criteria without deleting them.',
      'Converting a regular data range into an official Excel Table (Ctrl + T) adds automatic colour banding, filter drop-downs, auto-copying formulas, an instant Total Row, and visual Slicers.',
    ],
    steps: [
      { text: 'Sort quickly A→Z or Z→A, or add multi-level sorting (Section first, then Total Largest to Smallest) ensuring "My data has headers" is ticked.', ribbonPath: 'Data ▸ Sort ▸ Add Level' },
      { text: 'Enable Filter arrows (Ctrl + Shift + L) to filter Grade = A+, Number Filters ▸ Greater Than 70, or Text Filters ▸ Contains; clear with Data ▸ Clear.', ribbonPath: 'Data ▸ Filter (Ctrl + Shift + L)' },
      { text: 'Convert data to an Excel Table (Ctrl + T) and enable Table Design ▸ Total Row and Slicers.', ribbonPath: 'Insert ▸ Table (Ctrl + T)' },
      { text: 'Clean data with Remove Duplicates or split full names into columns using Text to Columns.', ribbonPath: 'Data ▸ Remove Duplicates / Text to Columns' },
      { text: 'Group averages by Section using Subtotal (sort by Section first) or create a PivotTable summary in seconds.', ribbonPath: 'Data ▸ Subtotal / Insert ▸ PivotTable' },
    ],
    shortcuts: [
      { action: 'Convert range to Excel Table', keys: 'Ctrl + T' },
      { action: 'Toggle Filter drop-downs', keys: 'Ctrl + Shift + L' },
    ],
    commonMistakes: [
      'Selecting only one column before sorting—Excel may sort names without moving their matching marks! Simply click a single cell inside the table and click Sort.',
    ],
    tryIt: 'Sort a class list by Section (A→Z) then Total (Largest to Smallest), filter to show only students scoring above 70, and toggle a Table Total Row.',
  },
  {
    id: '3.9',
    moduleSlug: 'excel',
    title: 'Charts and graphs',
    durationMinutes: 40,
    difficulty: 'Intermediate',
    outcomes: [
      'Select adjacent or non-adjacent columns to build accurate charts.',
      'Choose the right chart type (Column, Line, Pie, Scatter, Combo) and add titles and labels.',
      'Insert miniature cell Sparklines and move charts cleanly.',
    ],
    paragraphs: [
      'Every chart needs a clear title, axis titles with units, readable labels, and clean 2D styling—avoid 3-D effects that distort visual proportions.',
      'To select two non-adjacent columns (such as Student Name in column A and Total in column E), select A1:A16 first, then hold Ctrl while dragging E1:E16.',
    ],
    tables: [
      {
        caption: 'Chart Selection Guide',
        headers: ['Chart', 'Best for', 'Example'],
        rows: [
          ['Column / Bar', 'Compare items', 'Marks of each student'],
          ['Line', 'Trend over time', 'Monthly expenses'],
          ['Pie / Doughnut', 'Parts of a whole', 'Grade distribution'],
          ['Scatter', 'Relationship of two numbers', 'Attendance vs marks'],
          ['Combo', 'Two measures, two axes', 'Sales and profit %'],
        ],
      },
    ],
    steps: [
      { text: 'Select data including column headings (hold Ctrl for non-adjacent columns).', ribbonPath: 'Click & Drag (+ Ctrl)' },
      { text: 'Insert a Recommended Chart or pick Column, Line, Pie, or Scatter.', ribbonPath: 'Insert ▸ Charts' },
      { text: 'Add Chart Title, Axis Titles, Data Labels, and Legend, or switch rows/columns.', ribbonPath: 'Chart Design ▸ Add Chart Element / Switch Row/Column' },
      { text: 'Add tiny in-cell trend charts using Sparklines.', ribbonPath: 'Insert ▸ Sparklines ▸ Line' },
    ],
    shortcuts: [
      { action: 'Instant embedded chart on same sheet', keys: 'Alt + F1' },
      { action: 'Instant chart on a new chart sheet', keys: 'F11' },
    ],
    commonMistakes: [
      'Including the "Grand Total" row inside a Column or Pie chart, which dwarfs every individual item.',
      'Leaving the chart title as the default "Chart Title".',
    ],
    tryIt: 'Select student names and totals (using Ctrl), press Alt + F1 to generate an instant Column chart, give it a clear title, and add Data Labels.',
  },
  {
    id: '3.10',
    moduleSlug: 'excel',
    title: 'Page setup, printing and protecting sheets',
    durationMinutes: 30,
    difficulty: 'Intermediate',
    outcomes: [
      'Configure Landscape orientation, Print Area, Print Titles and Fit to 1 Page.',
      'Export clean multi-column spreadsheets to PDF and CSV.',
      'Protect formulas from accidental edits while keeping input cells unlocked.',
    ],
    paragraphs: [
      'Spreadsheets often split awkwardly across multiple printed pages—leaving the last two columns orphaned on page 2. Always check Print Preview (Ctrl + P) and scale columns to Fit Width to 1 Page before printing or exporting to PDF.',
      'Saving as CSV (.csv) exports plain comma-separated text of the active sheet only without formatting or formulas, useful for data exchange.',
    ],
    steps: [
      { text: 'Set Orientation to Landscape, paper Size to A4, and define a Print Area or Print Titles (Rows to repeat at top: $1:$1).', ribbonPath: 'Page Layout ▸ Page Setup' },
      { text: 'Fit all columns onto one page width.', ribbonPath: 'Page Layout ▸ Scale to Fit ▸ Width: 1 page' },
      { text: 'Inspect blue break lines in Page Break Preview, or check gridlines printing.', ribbonPath: 'View ▸ Page Break Preview / Page Layout ▸ Sheet Options' },
      { text: 'Preview and export as PDF (Ctrl + P or File ▸ Export ▸ Create PDF/XPS).', ribbonPath: 'File ▸ Export ▸ Create PDF/XPS' },
      { text: 'Protect formulas: unlock editable input cells first (Ctrl + 1 ▸ Protection ▸ untick Locked), then turn on Protect Sheet with a password.', ribbonPath: 'Review ▸ Protect Sheet / Protect Workbook' },
    ],
    shortcuts: [
      { action: 'Print / Print Preview', keys: 'Ctrl + P' },
      { action: 'Format Cells (Protection tab)', keys: 'Ctrl + 1' },
    ],
    commonMistakes: [
      'Printing a wide Excel sheet without checking Print Preview, wasting paper with 1 column per page.',
      'Turning on Protect Sheet before unlocking the mark-entry cells, locking yourself out of typing.',
    ],
    tryIt: 'Set a grade sheet to Landscape, A4, Rows to repeat at top = row 1, Fit Width to 1 page, enable gridline printing, and preview it with Ctrl + P.',
  },
];
