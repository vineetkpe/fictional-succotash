/**
 * Shared Hosting / WordPress Hosting Pricing Switcher
 */
export function updatePricing(plan: 'monthly' | 'quarterly' | 'semiannual' | 'annual' | 'biennial' | string): void {
  // 1. Update active tab button highlight across all pricing duration switchers
  const allNavLinks = document.querySelectorAll<HTMLElement>('.pricing-billing-duration .nav-link');
  allNavLinks.forEach((btn) => {
    btn.classList.remove('active');
  });

  // Activate matching button by id
  const targetBtn = document.getElementById(`${plan}-plan-btn`);
  if (targetBtn) {
    targetBtn.classList.add('active');
  }

  // Also query by onclick or attributes to ensure any matching duration button gets highlighted
  allNavLinks.forEach((btn) => {
    const onclickAttr = btn.getAttribute('onclick') || '';
    if (onclickAttr.includes(`'${plan}'`) || onclickAttr.includes(`"${plan}"`)) {
      btn.classList.add('active');
    }
  });

  // 2. Hide all pricing period blocks
  const plans = ['monthly', 'quarterly', 'semiannual', 'annual', 'biennial'];
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

  // 3. Show selected plan pricing blocks
  document.querySelectorAll<HTMLElement>(`.${plan}-pricing`).forEach((el) => {
    el.style.display = 'block';
  });

  document.querySelectorAll<HTMLElement>(`.${plan}-pricing .discount`).forEach((el) => {
    el.style.display = 'block';
  });

  // 4. Free domain handling: show on 2-year (biennial) plans
  if (plan === 'biennial') {
    document.querySelectorAll<HTMLElement>('.free-domain').forEach((el) => {
      el.style.display = 'block';
    });
    document.querySelectorAll<HTMLElement>('.list-item .free-domain, .pricing-body .free-domain').forEach((el) => {
      el.style.display = 'list-item';
    });
  } else {
    document.querySelectorAll<HTMLElement>('.free-domain').forEach((el) => {
      el.style.display = 'none';
    });
  }
}

// Attach to window so existing onclick="updatePricing('...')" continues to work
if (typeof window !== 'undefined') {
  (window as any).updatePricing = updatePricing;

  // Auto-bind click handlers to any .pricing-billing-duration .nav-link on page load
  document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll<HTMLElement>('.pricing-billing-duration .nav-link');
    navButtons.forEach((btn) => {
      btn.addEventListener('click', function () {
        navButtons.forEach((b) => b.classList.remove('active'));
        this.classList.add('active');
      });
    });
  });
}


