export function loadWithDelay<T>(importFunc: () => Promise<{ default: T }>, delay: number): Promise<{ default: T }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(importFunc());
    }, delay);
  });
}
