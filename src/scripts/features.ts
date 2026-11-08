/**
 * Feature items entry and hover animations
 * Uses IntersectionObserver for smooth scroll-triggered staggered reveals
 */
export function initFeatureAnimations(): void {
  const cards = document.querySelectorAll<HTMLElement>('.fitem');
  if (!cards.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target as HTMLElement;
            const idx = parseInt(card.style.getPropertyValue('--item-idx') || '0', 10);
            setTimeout(() => {
              card.classList.add('fitem-visible');
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, (idx % 4) * 90);
            observer.unobserve(card);
          }
        });
      },
      {
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.1,
      }
    );

    cards.forEach((card) => observer.observe(card));
  } else {
    cards.forEach((card, i) => {
      setTimeout(() => {
        card.classList.add('fitem-visible');
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 100 * i);
    });
  }

  // Backward compatibility for any remaining .num elements
  document.querySelectorAll<HTMLElement>('.num').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      el.style.transform = 'translateY(-8px) scale(1.1)';
      el.style.boxShadow = '0 18px 45px rgba(var(--color-primary-rgb),.45)';
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translateY(0) scale(1)';
      el.style.boxShadow = '0 8px 22px rgba(var(--color-primary-rgb),.25)';
    });
  });
}
