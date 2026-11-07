/**
 * Multi-Currency Switcher (INR / USD) with Automatic Region Geolocation
 * - India visitors default to INR (₹)
 * - International visitors automatically default to USD ($)
 * - User manual selection takes highest precedence
 */
export type Currency = 'INR' | 'USD';

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  INR: '₹',
  USD: '$'
};

const STORAGE_KEY = 'hostamble_currency';
const MANUAL_FLAG_KEY = 'hostamble_currency_manual';
const DEFAULT_CURRENCY: Currency = 'INR';

/**
 * Instant zero-latency heuristic based on browser timezone and language
 */
function detectClientHeuristic(): Currency {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (tz.includes('Kolkata') || tz.includes('Calcutta') || tz === 'Asia/Colombo') {
      return 'INR';
    }

    const langs = navigator.languages || [navigator.language || ''];
    const isIndianLang = langs.some((l) =>
      /-IN$/i.test(l) || /^(hi|ta|te|bn|mr|gu|pa|ml|kn|or)-/i.test(l)
    );
    if (isIndianLang) {
      return 'INR';
    }

    // International timezone indicators
    if (
      tz.startsWith('America/') ||
      tz.startsWith('Europe/') ||
      tz.startsWith('Australia/') ||
      tz.startsWith('Africa/') ||
      tz.startsWith('Pacific/') ||
      tz.startsWith('Canada/') ||
      tz.includes('London') ||
      tz.includes('New_York') ||
      tz.includes('Dubai') ||
      tz.includes('Singapore') ||
      tz.includes('Tokyo') ||
      tz.includes('Sydney')
    ) {
      return 'USD';
    }
  } catch {
    // Ignore detection errors
  }
  return DEFAULT_CURRENCY;
}

/**
 * Background IP geolocation lookup
 */
async function fetchCountryCode(): Promise<string | null> {
  const apis = [
    'https://api.country.is/',
    'https://get.geojs.io/v1/ip/country.json'
  ];

  for (const url of apis) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2500);
      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);
      if (res.ok) {
        const data = await res.json();
        const code = (data.country || data.country_code || '').trim().toUpperCase();
        if (code) return code;
      }
    } catch {
      // Try next provider
    }
  }
  return null;
}

/**
 * Get active currency from storage, or run heuristic
 */
export function getCurrency(): Currency {
  if (typeof window === 'undefined') return DEFAULT_CURRENCY;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'USD' || saved === 'INR') return saved;
  } catch {
    // Ignore storage errors
  }
  return detectClientHeuristic();
}

/**
 * Set currency (user manual override)
 */
export function setCurrency(currency: Currency, isManual: boolean = true): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, currency);
    if (isManual) {
      localStorage.setItem(MANUAL_FLAG_KEY, 'true');
    }
  } catch {
    // Ignore storage errors
  }
  applyCurrency(currency);
}

/**
 * Apply currency to DOM elements
 */
export function applyCurrency(currency: Currency): void {
  if (typeof window === 'undefined') return;

  const symbol = CURRENCY_SYMBOLS[currency] || (currency === 'USD' ? '$' : '₹');

  // 1. Update text of all elements with data-inr and data-usd
  document.querySelectorAll<HTMLElement>('[data-inr][data-usd]').forEach((el) => {
    const val = currency === 'USD' ? el.getAttribute('data-usd') : el.getAttribute('data-inr');
    if (val !== null) {
      el.textContent = val;
    }
  });

  // 2. Update currency dropdown buttons
  document.querySelectorAll<HTMLElement>('.currency-dropdown-btn').forEach((btn) => {
    const textEl = btn.querySelector<HTMLElement>('.currency-current-label');
    if (textEl) {
      textEl.textContent = `${symbol} ${currency}`;
    }
  });

  // 3. Update dropdown options active state
  document.querySelectorAll<HTMLElement>('.currency-dropdown-item').forEach((item) => {
    const itemCurrency = item.getAttribute('data-currency');
    if (itemCurrency === currency) {
      item.classList.add('active');
      item.setAttribute('aria-selected', 'true');
    } else {
      item.classList.remove('active');
      item.setAttribute('aria-selected', 'false');
    }
  });

  // 4. Dispatch custom event for any listeners
  window.dispatchEvent(new CustomEvent('currencychange', { detail: { currency, symbol } }));
}

let dropdownListenersAttached = false;

function setupDropdownListeners(): void {
  if (dropdownListenersAttached || typeof window === 'undefined') return;
  dropdownListenersAttached = true;

  // Toggle dropdown on button click
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;

    // 1. Check if user clicked a dropdown trigger button
    const toggleBtn = target.closest<HTMLElement>('.currency-dropdown-btn');
    if (toggleBtn) {
      e.preventDefault();
      e.stopPropagation();
      const wrap = toggleBtn.closest<HTMLElement>('.currency-dropdown-wrap');
      if (wrap) {
        const wasOpen = wrap.classList.contains('open');
        // Close all dropdowns first
        document.querySelectorAll<HTMLElement>('.currency-dropdown-wrap.open').forEach((w) => {
          w.classList.remove('open');
          const btn = w.querySelector<HTMLElement>('.currency-dropdown-btn');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        });

        if (!wasOpen) {
          wrap.classList.add('open');
          toggleBtn.setAttribute('aria-expanded', 'true');
        }
      }
      return;
    }

    // 2. Check if user clicked a dropdown option
    const item = target.closest<HTMLElement>('.currency-dropdown-item');
    if (item) {
      e.preventDefault();
      e.stopPropagation();
      const curr = item.getAttribute('data-currency') as Currency;
      if (curr === 'INR' || curr === 'USD') {
        setCurrency(curr, true);
      }
      // Close all dropdowns
      document.querySelectorAll<HTMLElement>('.currency-dropdown-wrap.open').forEach((w) => {
        w.classList.remove('open');
        const btn = w.querySelector<HTMLElement>('.currency-dropdown-btn');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
      return;
    }

    // 3. Clicking outside closes all open dropdowns
    if (!target.closest('.currency-dropdown-wrap')) {
      document.querySelectorAll<HTMLElement>('.currency-dropdown-wrap.open').forEach((w) => {
        w.classList.remove('open');
        const btn = w.querySelector<HTMLElement>('.currency-dropdown-btn');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll<HTMLElement>('.currency-dropdown-wrap.open').forEach((w) => {
        w.classList.remove('open');
        const btn = w.querySelector<HTMLElement>('.currency-dropdown-btn');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    }
  });
}

/**
 * Initialize multi-currency and auto-region detection
 */
export function initCurrency(): void {
  if (typeof window === 'undefined') return;

  setupDropdownListeners();

  // 1. Initial instant apply (from saved preference or browser heuristic)
  const initialCurrency = getCurrency();
  applyCurrency(initialCurrency);

  // 2. If the user hasn't manually overridden currency, run background IP check
  const isManual = localStorage.getItem(MANUAL_FLAG_KEY) === 'true';
  if (!isManual) {
    fetchCountryCode().then((country) => {
      if (country) {
        const geoCurrency: Currency = country === 'IN' ? 'INR' : 'USD';
        // Only update if different from initial and user hasn't chosen manually meanwhile
        if (geoCurrency !== initialCurrency && localStorage.getItem(MANUAL_FLAG_KEY) !== 'true') {
          setCurrency(geoCurrency, false);
        }
      }
    });
  }
}

// Auto-run on load
if (typeof window !== 'undefined') {
  (window as any).setCurrency = setCurrency;
  (window as any).getCurrency = getCurrency;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCurrency);
  } else {
    initCurrency();
  }
}
