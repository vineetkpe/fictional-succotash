/**
 * Shared Hosting / WordPress Hosting Pricing Switcher
 */
export function updatePricing(plan: 'monthly' | 'quarterly' | 'semiannual' | 'annual' | string): void {
  const plans = ['monthly', 'quarterly', 'semiannual', 'annual'];
  plans.forEach((p) => {
    document.querySelectorAll<HTMLElement>(`.${p}-pricing`).forEach((el) => {
      el.style.display = 'none';
    });
  });

  document.querySelectorAll<HTMLElement>('.free-domain').forEach((el) => {
    el.style.display = 'none';
  });

  document.querySelectorAll<HTMLElement>('.discount').forEach((el) => {
    el.style.display = 'none';
  });

  document.querySelectorAll<HTMLElement>(`.${plan}-pricing`).forEach((el) => {
    el.style.display = 'block';
  });

  document.querySelectorAll<HTMLElement>(`.${plan}-pricing .discount`).forEach((el) => {
    el.style.display = 'block';
  });

  if (plan === 'semiannual' || plan === 'annual') {
    document.querySelectorAll<HTMLElement>(`.${plan}-pricing .free-domain`).forEach((el) => {
      el.style.display = 'block';
    });
  }
}

// Attach to window so existing onclick="updatePricing('...')" continues to work
if (typeof window !== 'undefined') {
  (window as any).updatePricing = updatePricing;
}
