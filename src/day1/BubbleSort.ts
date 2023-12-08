export default function bubble_sort(arr: number[]): void {

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      let curr = arr[j]
      let next = arr[j+1]
      if (curr > next) {
        arr[j] = next
        arr[j+1] = curr
      }
    }
  }
}