import { useMemo, useState } from 'react';
import { RotateCcw, Table2 } from 'lucide-react';

type GridData = Record<string, string>;

const COLS = ['A', 'B', 'C', 'D', 'E', 'F'];
const ROWS = [1, 2, 3, 4, 5, 6];

const INITIAL_GRID: GridData = {
  A1: 'Student',
  B1: 'Quiz',
  C1: 'Mid',
  D1: 'Final',
  E1: 'Total',
  F1: 'Status',

  A2: 'Ayesha',
  B2: '18',
  C2: '26',
  D2: '42',
  E2: '=SUM(B2:D2)',
  F2: '=IF(E2>=40,"Pass","Fail")',

  A3: 'Tanvir',
  B3: '15',
  C3: '22',
  D3: '36',
  E3: '=SUM(B3:D3)',
  F3: '=IF(E3>=40,"Pass","Fail")',

  A4: 'Nusrat',
  B4: '19',
  C4: '28',
  D4: '45',
  E4: '=SUM(B4:D4)',
  F4: '=IF(E4>=40,"Pass","Fail")',

  A5: 'Rafiq',
  B5: '9',
  C5: '11',
  D5: '16',
  E5: '=SUM(B5:D5)',
  F5: '=IF(E5>=40,"Pass","Fail")',

  A6: 'Average',
  B6: '=AVERAGE(B2:B5)',
  C6: '=AVERAGE(C2:C5)',
  D6: '=AVERAGE(D2:D5)',
  E6: '=MAX(E2:E5)',
  F6: '=COUNT(E2:E5)',
};

function colIndex(col: string): number {
  return COLS.indexOf(col.toUpperCase());
}

function expandRange(rangeStr: string): string[] {
  const parts = rangeStr.split(':');
  if (parts.length !== 2) return [rangeStr.replace(/\$/g, '').toUpperCase()];
  const m1 = /^\$?([A-F])\$?(\d+)$/i.exec(parts[0].trim());
  const m2 = /^\$?([A-F])\$?(\d+)$/i.exec(parts[1].trim());
  if (!m1 || !m2) return [];
  const c1 = colIndex(m1[1]);
  const r1 = parseInt(m1[2], 10);
  const c2 = colIndex(m2[1]);
  const r2 = parseInt(m2[2], 10);
  if (c1 < 0 || c2 < 0) return [];
  const cells: string[] = [];
  for (let c = Math.min(c1, c2); c <= Math.max(c1, c2); c++) {
    for (let r = Math.min(r1, r2); r <= Math.max(r1, r2); r++) {
      if (r >= 1 && r <= 6) cells.push(`${COLS[c]}${r}`);
    }
  }
  return cells;
}

function evaluateCell(
  addr: string,
  grid: GridData,
  visited = new Set<string>()
): string | number {
  const key = addr.replace(/\$/g, '').toUpperCase();
  if (visited.has(key)) return '#REF!';
  const raw = grid[key];
  if (raw === undefined || raw === '') return '';
  if (!raw.startsWith('=')) {
    const num = Number(raw);
    return raw.trim() !== '' && !Number.isNaN(num) ? num : raw;
  }

  const nextVisited = new Set(visited);
  nextVisited.add(key);

  const expr = raw.slice(1).trim();

  const getNumericValues = (argStr: string): number[] => {
    const values: number[] = [];
    for (const part of argStr.split(',')) {
      const trimmed = part.trim();
      if (trimmed.includes(':')) {
        for (const cell of expandRange(trimmed)) {
          const v = evaluateCell(cell, grid, nextVisited);
          if (typeof v === 'number') values.push(v);
        }
      } else if (/^\$?[A-F]\$?\d+$/i.test(trimmed)) {
        const v = evaluateCell(trimmed, grid, nextVisited);
        if (typeof v === 'number') values.push(v);
      } else {
        const n = Number(trimmed);
        if (!Number.isNaN(n)) values.push(n);
      }
    }
    return values;
  };

  try {
    // IF(cond, trueVal, falseVal)
    const ifMatch = /^IF\s*\((.+)\)$/i.exec(expr);
    if (ifMatch) {
      const args: string[] = [];
      let current = '';
      let inQuotes = false;
      let depth = 0;
      for (const ch of ifMatch[1]) {
        if (ch === '"') inQuotes = !inQuotes;
        if (!inQuotes) {
          if (ch === '(') depth++;
          if (ch === ')') depth--;
          if (ch === ',' && depth === 0) {
            args.push(current.trim());
            current = '';
            continue;
          }
        }
        current += ch;
      }
      if (current.trim()) args.push(current.trim());
      if (args.length < 3) return '#VALUE!';

      const condMatch = /^(.+?)(>=|<=|<>|=|>|<)(.+)$/.exec(args[0]);
      if (!condMatch) return '#VALUE!';

      const resolveVal = (token: string): string | number => {
        const t = token.trim();
        if (t.startsWith('"') && t.endsWith('"')) return t.slice(1, -1);
        if (/^\$?[A-F]\$?\d+$/i.test(t)) return evaluateCell(t, grid, nextVisited);
        const n = Number(t);
        return !Number.isNaN(n) ? n : t;
      };

      const left = resolveVal(condMatch[1]);
      const op = condMatch[2];
      const right = resolveVal(condMatch[3]);
      let passed = false;
      if (op === '>=') passed = Number(left) >= Number(right);
      else if (op === '<=') passed = Number(left) <= Number(right);
      else if (op === '>') passed = Number(left) > Number(right);
      else if (op === '<') passed = Number(left) < Number(right);
      else if (op === '=') passed = left == right;
      else if (op === '<>') passed = left != right;

      return resolveVal(passed ? args[1] : args[2]);
    }

    // SUM / AVERAGE / MAX / MIN / COUNT
    const fnMatch = /^(SUM|AVERAGE|MAX|MIN|COUNT)\s*\((.+)\)$/i.exec(expr);
    if (fnMatch) {
      const fn = fnMatch[1].toUpperCase();
      const nums = getNumericValues(fnMatch[2]);
      if (fn === 'COUNT') return nums.length;
      if (nums.length === 0) return fn === 'AVERAGE' ? '#DIV/0!' : 0;
      if (fn === 'SUM') return nums.reduce((a, b) => a + b, 0);
      if (fn === 'AVERAGE') return Number((nums.reduce((a, b) => a + b, 0) / nums.length).toFixed(2));
      if (fn === 'MAX') return Math.max(...nums);
      if (fn === 'MIN') return Math.min(...nums);
    }

    // Arithmetic (+ - * / and parentheses) with cell references
    const replaced = expr.replace(/\$?([A-F])\$?(\d+)/gi, (_, c, r) => {
      const v = evaluateCell(`${c}${r}`, grid, nextVisited);
      if (typeof v === 'number') return String(v);
      if (v === '') return '0';
      throw new Error('#VALUE!');
    });

    if (!/^[0-9+\-*/().\s]+$/.test(replaced)) {
      return '#NAME?';
    }
    // Safe arithmetic evaluation using Function after strict character whitelist
    const result = new Function(`"use strict"; return (${replaced});`)() as number;
    if (!Number.isFinite(result)) return '#DIV/0!';
    return Number.isInteger(result) ? result : Number(result.toFixed(2));
  } catch (err) {
    if (err instanceof Error && err.message === '#VALUE!') return '#VALUE!';
    return '#NAME?';
  }
}

const PRESET_FORMULAS = [
  { label: 'Total (E2)', cell: 'E2', formula: '=SUM(B2:D2)' },
  { label: 'Pass/Fail (F2)', cell: 'F2', formula: '=IF(E2>=40,"Pass","Fail")' },
  { label: 'Average (B6)', cell: 'B6', formula: '=AVERAGE(B2:B5)' },
  { label: 'Highest (E6)', cell: 'E6', formula: '=MAX(E2:E5)' },
  { label: 'Lowest (E6)', cell: 'E6', formula: '=MIN(E2:E5)' },
  { label: 'Count (F6)', cell: 'F6', formula: '=COUNT(E2:E5)' },
];

export function ExcelPlayground() {
  const [grid, setGrid] = useState<GridData>(INITIAL_GRID);
  const [selectedCell, setSelectedCell] = useState<string>('E2');

  const evaluated = useMemo(() => {
    const out: Record<string, string | number> = {};
    for (const c of COLS) {
      for (const r of ROWS) {
        const addr = `${c}${r}`;
        out[addr] = evaluateCell(addr, grid);
      }
    }
    return out;
  }, [grid]);

  const currentRaw = grid[selectedCell] ?? '';

  const updateCell = (addr: string, value: string) => {
    setGrid((prev) => ({ ...prev, [addr]: value }));
  };

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 bg-slate-50/70 dark:bg-slate-950/60">
        <div className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-lg bg-[#217346] text-white flex items-center justify-center">
            <Table2 className="w-4 h-4" />
          </span>
          <div>
            <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white">
              Interactive Excel Formula Playground (6×6 Grid)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Click any cell to edit marks or try SUM, AVERAGE, MAX, MIN, COUNT, IF, and + - * / formulas.
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            setGrid(INITIAL_GRID);
            setSelectedCell('E2');
          }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset Grid
        </button>
      </div>

      {/* Formula Bar */}
      <div className="px-4 py-2.5 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2 bg-white dark:bg-slate-900">
        <div className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-xs font-semibold text-slate-700 dark:text-slate-200 min-w-[44px] text-center">
          {selectedCell}
        </div>
        <span className="text-xs font-mono text-slate-400 italic px-1">fx</span>
        <input
          type="text"
          value={currentRaw}
          onChange={(e) => updateCell(selectedCell, e.target.value)}
          aria-label={`Formula bar for cell ${selectedCell}`}
          placeholder="Type a number, text, or formula starting with ="
          className="flex-1 min-w-[180px] px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 font-mono text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#217346]"
        />
      </div>

      {/* Quick Preset Formula Buttons */}
      <div className="px-4 py-2 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 flex flex-wrap items-center gap-1.5">
        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mr-1">
          Try formula:
        </span>
        {PRESET_FORMULAS.map((preset) => (
          <button
            key={preset.label}
            type="button"
            onClick={() => {
              setSelectedCell(preset.cell);
              updateCell(preset.cell, preset.formula);
            }}
            className="px-2.5 py-1 text-[11px] font-mono rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:border-[#217346] hover:text-[#217346] dark:hover:text-emerald-400 transition-colors cursor-pointer"
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* 6x6 Grid */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-xs sm:text-sm tabular-nums">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300">
              <th className="w-10 border-b border-r border-slate-200 dark:border-slate-700 py-2 text-center font-mono text-xs" />
              {COLS.map((c) => (
                <th
                  key={c}
                  className="border-b border-r border-slate-200 dark:border-slate-700 py-2 px-3 text-center font-mono font-semibold min-w-[95px]"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r} className="border-b border-slate-200 dark:border-slate-800">
                <td className="bg-slate-100 dark:bg-slate-800/80 border-r border-slate-200 dark:border-slate-700 text-center font-mono text-xs font-semibold text-slate-500 dark:text-slate-400 py-2">
                  {r}
                </td>
                {COLS.map((c) => {
                  const addr = `${c}${r}`;
                  const isSelected = selectedCell === addr;
                  const val = evaluated[addr];
                  const isFormula = (grid[addr] ?? '').startsWith('=');
                  const isError = typeof val === 'string' && val.startsWith('#');
                  const isHeaderRow = r === 1;
                  const isNumeric = typeof val === 'number';
                  return (
                    <td
                      key={addr}
                      onClick={() => setSelectedCell(addr)}
                      className={`border-r border-slate-200 dark:border-slate-800 px-2.5 py-2 cursor-pointer transition-colors ${
                        isSelected
                          ? 'ring-2 ring-inset ring-[#217346] bg-emerald-50/40 dark:bg-emerald-950/30'
                          : isHeaderRow
                          ? 'bg-slate-50 dark:bg-slate-900 font-semibold'
                          : 'hover:bg-slate-50 dark:hover:bg-slate-800/40'
                      }`}
                    >
                      <div
                        className={`flex items-center justify-between gap-1 ${
                          isNumeric ? 'justify-end font-mono' : 'justify-start'
                        } ${
                          isError
                            ? 'text-red-600 dark:text-red-400 font-semibold'
                            : isFormula
                            ? 'text-[#217346] dark:text-emerald-400 font-semibold'
                            : 'text-slate-800 dark:text-slate-200'
                        }`}
                      >
                        <span>{val === '' ? '\u00A0' : String(val)}</span>
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
