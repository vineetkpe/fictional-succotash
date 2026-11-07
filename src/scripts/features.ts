/**
 * Feature items entry and hover animations
 */
export function initFeatureAnimations(): void {
  document.querySelectorAll<HTMLElement>('.fitem').forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    setTimeout(() => {
      card.style.transition = 'all .7s cubic-bezier(.2,.8,.2,1)';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 120 * i);
  });

  document.querySelectorAll<HTMLElement>('.num').forEach((el) => {
    el.onmouseenter = () => {
      el.style.transform = 'translateY(-8px) scale(1.1)';
      el.style.boxShadow = '0 18px 45px rgba(var(--color-primary-rgb),.45)';
    };
    el.onmouseleave = () => {
      el.style.transform = 'translateY(0) scale(1)';
      el.style.boxShadow = '0 8px 22px rgba(var(--color-primary-rgb),.25)';
    };
  });
}
