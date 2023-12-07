export default function bs_list(haystack: number[], needle: number): boolean {
  let low = 0
  let high = haystack.length

  do {
    const i = Math.floor(low + (high-low) / 2)
    const v = haystack[i]

    if (v === needle) return true

    if (v < needle) {
      low = i + 1
    } else {
      high = i
    }
  } while (low < high)

  return false
}