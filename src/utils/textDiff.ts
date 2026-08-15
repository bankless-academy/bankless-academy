// Minimal LCS token diff, used by the content-suggestion modal to show a
// contributor what their edit actually changed, and by /api/suggest-content to
// put the same change in the GitHub issue.
//
// Hand-rolled rather than pulling in `diff`: that package is only present as a
// transitive dependency of jest here, so importing it directly would break the
// day the lockfile moves. A slide is a few hundred words, so the O(n*m) table
// is nothing, and TOKEN_CAP keeps a pathological paste bounded.

export type DiffPart = { value: string; added?: boolean; removed?: boolean }

const TOKEN_CAP = 4000

// Split on whitespace but KEEP it, so rebuilt text keeps its original spacing
// and line breaks.
const words = (s: string): string[] => s.split(/(\s+)/).filter((t) => t !== '')
const lines = (s: string): string[] => s.split('\n')

const lcsDiff = (
  a: string[],
  b: string[],
  // word tokens carry their own whitespace so runs can be concatenated; line
  // tokens do not, so line mode keeps one part per line
  mergeRuns = true
): DiffPart[] => {
  if (a.length > TOKEN_CAP || b.length > TOKEN_CAP)
    return [
      { value: a.join(''), removed: true },
      { value: b.join(''), added: true },
    ]
  // table[i][j] = length of the longest common subsequence of a[i:] and b[j:]
  const table: number[][] = Array.from({ length: a.length + 1 }, () =>
    new Array(b.length + 1).fill(0)
  )
  for (let i = a.length - 1; i >= 0; i--)
    for (let j = b.length - 1; j >= 0; j--)
      table[i][j] =
        a[i] === b[j]
          ? table[i + 1][j + 1] + 1
          : Math.max(table[i + 1][j], table[i][j + 1])

  const parts: DiffPart[] = []
  // merge runs of the same kind so the output is a handful of spans, not one
  // span per token
  const push = (value: string, kind: 'same' | 'added' | 'removed') => {
    const last = parts[parts.length - 1]
    const sameKind =
      mergeRuns &&
      last &&
      !!last.added === (kind === 'added') &&
      !!last.removed === (kind === 'removed')
    if (sameKind) last.value += value
    else
      parts.push({
        value,
        ...(kind === 'added' ? { added: true } : {}),
        ...(kind === 'removed' ? { removed: true } : {}),
      })
  }

  let i = 0
  let j = 0
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      push(a[i], 'same')
      i++
      j++
    } else if (table[i + 1][j] >= table[i][j + 1]) push(a[i++], 'removed')
    else push(b[j++], 'added')
  }
  while (i < a.length) push(a[i++], 'removed')
  while (j < b.length) push(b[j++], 'added')
  return parts
}

/** Word-level diff, for showing prose changes inline. */
export const diffWords = (before: string, after: string): DiffPart[] =>
  lcsDiff(words(before), words(after))

/** Line-level unified diff text, for a ```diff block in a GitHub issue. */
export const diffLines = (before: string, after: string): string =>
  lcsDiff(lines(before), lines(after), false)
    .map((p) => `${p.added ? '+' : p.removed ? '-' : ' '} ${p.value}`)
    .join('\n')
