/**
 * Promotional Offer Countdown Timer
 */
export function initCountdown(
  targetDate: string = "August 29, 2026 23:59:59",
  elementId: string = "sale-timer"
): void {
  const el = document.getElementById(elementId);
  if (!el) return;

  const end = new Date(targetDate).getTime();

  function tick(): void {
    if (!el) return;
    const now = new Date().getTime();
    const diff = end - now;

    if (diff <= 0) {
      el.innerHTML = "Expired";
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    el.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
  }

  tick();
  setInterval(tick, 1000);
}

