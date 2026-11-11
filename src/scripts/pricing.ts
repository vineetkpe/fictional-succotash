/**
 * Hostamble Interactive Pricing Switcher & Features Drawer
 * Inspired by Sharpido-style high-converting data-cycle state machine:
 * - Instant CSS / DOM cycle switching (monthly, semiannual, annual, biennial)
 * - Dynamic WHMCS direct-checkout billingcycle links
 * - Free domain perk banner & teaser switching
 * - Collapsible "Show all features" drawer
 */

const WHMCS_CYCLE_MAP: Record<string, string> = {
  monthly: 'monthly',
  quarterly: 'quarterly',
  semiannual: 'semiannually',
  annual: 'annually',
  biennial: 'biennially'
};

export function updatePricing(plan: 'monthly' | 'quarterly' | 'semiannual' | 'annual' | 'biennial' | string): void {
  // 1. Update data-cycle attribute on all pricing grids/wrappers
  const grids = document.querySelectorAll<HTMLElement>('.pricing-grid, #hosting-pricing-grid, .pricing-table-wrapper');
  grids.forEach((g) => {
    g.setAttribute('data-cycle', plan);
  });

  // 2. Update active highlight & aria-pressed on all duration switcher tabs
  const allNavLinks = document.querySelectorAll<HTMLElement>('.pricing-billing-duration .nav-link, .pricing-duration-toggle button');
  allNavLinks.forEach((btn) => {
    btn.classList.remove('active');
    btn.setAttribute('aria-pressed', 'false');
  });

  // Highlight matching button by id
  const targetBtn = document.getElementById(`${plan}-plan-btn`);
  if (targetBtn) {
    targetBtn.classList.add('active');
    targetBtn.setAttribute('aria-pressed', 'true');
  }

  // Also query by data-cycle or onclick attribute
  allNavLinks.forEach((btn) => {
    const cycleAttr = btn.getAttribute('data-cycle');
    const onclickAttr = btn.getAttribute('onclick') || '';
    if (cycleAttr === plan || onclickAttr.includes(`'${plan}'`) || onclickAttr.includes(`"${plan}"`)) {
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
    }
  });

  // 3. Toggle pricing visibility
  const plans = ['monthly', 'quarterly', 'semiannual', 'annual', 'biennial'];
  plans.forEach((p) => {
    document.querySelectorAll<HTMLElement>(`.${p}-pricing`).forEach((el) => {
      el.style.display = p === plan ? 'block' : 'none';
    });
    document.querySelectorAll<HTMLElement>(`.cta-${p}`).forEach((el) => {
      el.style.display = p === plan ? 'inline-flex' : 'none';
    });
  });

  // 4. Update WHMCS direct order links for active cycle
  const whmcsCycle = WHMCS_CYCLE_MAP[plan] || 'biennially';
  document.querySelectorAll<HTMLAnchorElement>('.pricing-btn a, .plan-cta-btn').forEach((btn) => {
    const rawHref = btn.getAttribute('data-base-url') || btn.href;
    const baseHref = rawHref.split('?')[0];
    if (baseHref && baseHref.includes('hostamble.com/dash/store/')) {
      btn.href = `${baseHref}?billingcycle=${whmcsCycle}`;
    }
  });

  // 5. Free domain handling: show on 2-year (biennial) only
  if (plan === 'biennial') {
    document.querySelectorAll<HTMLElement>('.free-domain, .perk-eligible, .pricing-domain-offer').forEach((el) => {
      if (el.tagName === 'LI') {
        el.style.display = 'list-item';
      } else {
        el.style.display = 'block';
      }
    });
    document.querySelectorAll<HTMLElement>('.perk-teaser').forEach((el) => {
      el.style.display = 'none';
    });
  } else {
    document.querySelectorAll<HTMLElement>('.free-domain, .perk-eligible, .pricing-domain-offer').forEach((el) => {
      el.style.display = 'none';
    });
    document.querySelectorAll<HTMLElement>('.perk-teaser').forEach((el) => {
      el.style.display = 'block';
    });
  }
}

/**
 * Initialize Collapsible "Show all features" Drawers
 */
export function initFeatureDrawers(): void {
  document.querySelectorAll<HTMLButtonElement>('.plan-features-drawer-btn').forEach((btn) => {
    // Avoid double-binding
    if (btn.hasAttribute('data-bound')) return;
    btn.setAttribute('data-bound', 'true');

    btn.addEventListener('click', function () {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      const newExpanded = !isExpanded;
      this.setAttribute('aria-expanded', String(newExpanded));

      const card = this.closest('.pricing-table, .pricing-card');
      if (card) {
        card.querySelectorAll<HTMLElement>('.extra-feature').forEach((li) => {
          li.hidden = !newExpanded;
        });
      }

      const textSpan = this.querySelector('.drawer-text');
      const moreText = this.getAttribute('data-more') || 'Show all features';
      const lessText = this.getAttribute('data-less') || 'Show fewer features';
      if (textSpan) {
        textSpan.textContent = newExpanded ? lessText : moreText;
      }

      const icon = this.querySelector('i');
      if (icon) {
        icon.className = newExpanded ? 'ri-arrow-up-s-line ms-1' : 'ri-arrow-down-s-line ms-1';
      }
    });
  });
}

// Attach to window so onclick="updatePricing('...')" in HTML continues to work
if (typeof window !== 'undefined') {
  (window as any).updatePricing = updatePricing;
  (window as any).initFeatureDrawers = initFeatureDrawers;

  const initAll = () => {
    initFeatureDrawers();

    // Auto-bind click handlers to any .pricing-billing-duration .nav-link on page load
    const navButtons = document.querySelectorAll<HTMLElement>('.pricing-billing-duration .nav-link, .pricing-duration-toggle button');
    navButtons.forEach((btn) => {
      btn.addEventListener('click', function () {
        const cycle = this.getAttribute('data-cycle');
        if (cycle) {
          updatePricing(cycle);
        }
      });
    });

    // Run updatePricing on the initially active plan (defaults to 'biennial')
    const activeBtn = document.querySelector<HTMLElement>('.pricing-billing-duration .nav-link.active, .pricing-duration-toggle button.active');
    const initialCycle = activeBtn?.getAttribute('data-cycle') || 'biennial';
    updatePricing(initialCycle);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
  document.addEventListener('astro:page-load', initAll);
}
