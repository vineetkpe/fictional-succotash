/**
 * Promotional Offer 10-Day Countdown Timer
 */
export function initCountdown(
  elementId: string = "sale-timer",
  daysAhead: number = 10
): void {
  const el = document.getElementById(elementId);
  if (!el) return;

  const storageKey = "hostamble_10day_countdown_end";
  const now = Date.now();
  let endTime: number;

  try {
    const stored = typeof localStorage !== 'undefined' ? localStorage.getItem(storageKey) : null;
    if (stored && Number(stored) > now) {
      endTime = Number(stored);
    } else {
      endTime = now + daysAhead * 24 * 60 * 60 * 1000;
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(storageKey, endTime.toString());
      }
    }
  } catch (_) {
    endTime = now + daysAhead * 24 * 60 * 60 * 1000;
  }

  function tick(): void {
    if (!el) return;
    const current = Date.now();
    let diff = endTime - current;

    if (diff <= 0) {
      // Auto-renew 10-day promotion cycle
      endTime = Date.now() + daysAhead * 24 * 60 * 60 * 1000;
      try {
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem(storageKey, endTime.toString());
        }
      } catch (_) {}
      diff = endTime - Date.now();
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    const pad = (n: number) => n.toString().padStart(2, '0');

    el.innerHTML = `
      <span class="timer-unit"><span class="timer-digits">${pad(d)}</span><span class="timer-tag">d</span></span>
      <span class="timer-colon">:</span>
      <span class="timer-unit"><span class="timer-digits">${pad(h)}</span><span class="timer-tag">h</span></span>
      <span class="timer-colon">:</span>
      <span class="timer-unit"><span class="timer-digits">${pad(m)}</span><span class="timer-tag">m</span></span>
      <span class="timer-colon">:</span>
      <span class="timer-unit"><span class="timer-digits">${pad(s)}</span><span class="timer-tag">s</span></span>
    `;
  }

  tick();
  setInterval(tick, 1000);
}

