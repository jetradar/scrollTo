declare module 'scrollyo' {
  type interval = number | string
  export function scrollToTop(scrollDuration: interval): void
  export function scrollTo(element: HTMLElement, interval: interval): void
}
