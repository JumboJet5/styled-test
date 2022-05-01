export const oneHundredElements = new Array(100).fill(0).map((_, i) => i)

export function syntheticTest(callback: () => void, onComplete: (count: number) => void): void {
  let counter = 0
  const startTime = Date.now()
  const trigger = () => {
    if (Date.now() - startTime < 5000) {
      setTimeout(() => {
        counter++
        callback()
        trigger()
      })
    } else {
      onComplete(counter)
    }
  }
  trigger()
}

export function someCalculations(): number {
  let multi = 1
  for (let i = 2; i < 200; i++) {
    multi = multi * i
  }
  return multi
}
