/**
 * Browser interaction & anti-inspection protection handlers
 */
export function initAntiCopy(): void {
  document.addEventListener('DOMContentLoaded', () => {
    (document as any).oncontextmenu = null;
    (document as any).onselectstart = null;
    (document as any).onmousedown = null;

    window.addEventListener('contextmenu', (e: Event) => e.stopPropagation(), true);
    window.addEventListener('copy', (e: Event) => e.stopPropagation(), true);
    window.addEventListener('cut', (e: Event) => e.stopPropagation(), true);
    window.addEventListener('keydown', (e: Event) => e.stopPropagation(), true);
  });
}

export function initAuthProtection(): void {
  const addHandler = (element: Window | Document | HTMLElement, type: string, handler: (e: any) => void): void => {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if ((element as any).attachEvent) {
      (element as any).attachEvent(`on${type}`, handler);
    }
  };

  addHandler(window, "contextmenu", (event: MouseEvent) => {
    event.preventDefault?.();
    alert('Developer mode disabled on this page!');
  });

  document.onkeydown = (event: KeyboardEvent): boolean => {
    if (event.key === 'F12' || event.code === 'F12') {
      return false;
    }
    if (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'i' || event.code === 'KeyI')) {
      return false;
    }
    return true;
  };
}
