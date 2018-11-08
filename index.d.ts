declare module "scrollyo" {
  type interval = number | string;
  interface Options {
    gap?: number;
  }

  export function scrollToTop(scrollDuration: interval): void;
  export function scrollTo(
    element: HTMLElement,
    interval: interval,
    options?: Options
  ): void;
}
