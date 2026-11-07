/**
 * Hero Section Typewriter Text Animation
 */
export function initTypewriter(
  elementId: string = "offerWord",
  words: string[] = [
    "77% Discount",
    "Free .COM Domain",
    "10x LiteSpeed Turbo",
    "Free SSL & Backups",
    "Instant 1-Click Setup",
    "24/7 Expert Support"
  ]
): void {
  const el = document.getElementById(elementId);
  if (!el) return;

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeEffect(): void {
    if (!el) return;
    const current = words[wordIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = current.substring(0, charIndex);

      if (charIndex === current.length) {
        deleting = true;
        setTimeout(typeEffect, 1200);
        return;
      }
      setTimeout(typeEffect, 70);
    } else {
      charIndex--;
      el.textContent = current.substring(0, charIndex);

      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
      setTimeout(typeEffect, 40);
    }
  }

  typeEffect();
}
