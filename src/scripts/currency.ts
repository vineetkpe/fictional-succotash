/**
 * Multi-Currency Switcher (INR / USD)
 * Default: INR
 */
export type Currency = 'INR' | 'USD';

const STORAGE_KEY = 'hostamble_currency';
const DEFAULT_CURRENCY: Currency = 'INR';

export function getCurrency(): Currency {
  if (typeof window === 'undefined') return DEFAULT_CURRENCY;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === 'USD' ? 'USD' : 'INR';
  } catch {
    return DEFAULT_CURRENCY;
  }
}

export function setCurrency(currency: Currency): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, currency);
  } catch {
    // Ignore storage quota/security errors
  }
  applyCurrency(currency);
}

export function applyCurrency(currency: Currency): void {
  if (typeof window === 'undefined') return;

  // 1. Update text of all elements with data-inr and data-usd
  document.querySelectorAll<HTMLElement>('[data-inr][data-usd]').forEach((el) => {
    const val = currency === 'USD' ? el.getAttribute('data-usd') : el.getAttribute('data-inr');
    if (val !== null) {
      el.textContent = val;
    }
  });

  // 2. Update active status on all toggle buttons
  document.querySelectorAll<HTMLElement>('.currency-toggle-btn').forEach((btn) => {
    const btnCurrency = btn.getAttribute('data-currency');
    if (btnCurrency === currency) {
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    }
  });

  // 3. Dispatch custom event for any listeners
  window.dispatchEvent(new CustomEvent('currencychange', { detail: { currency } }));
}

export function initCurrency(): void {
  if (typeof window === 'undefined') return;

  // Initial apply
  applyCurrency(getCurrency());

  // Click delegation for any currency toggle buttons across DOM
  document.addEventListener('click', (e) => {
    const target = (e.target as HTMLElement)?.closest<HTMLElement>('.currency-toggle-btn');
    if (target) {
      e.preventDefault();
      const curr = target.getAttribute('data-currency') as Currency;
      if (curr === 'INR' || curr === 'USD') {
        setCurrency(curr);
      }
    }
  });
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
