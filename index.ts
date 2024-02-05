export function Repeat(func: () => void, times: number): void {
  for (let i = 0; i < times; i++) func();
}
