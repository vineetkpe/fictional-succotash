/**
 * Hero Section Typewriter Text Animation
 */
export function initTypewriter(
  elementId: string = "offerWord",
  words: string[] = [
    "77% Discount",
    "Free .COM Domain",
    "10x Turbo Speed",
    "Free SSL & Backups",
    "24/7 Expert Support",
    "1-Click WordPress"
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
        setTimeout(typeEffect, 1600);
        return;
      }
      setTimeout(typeEffect, 75);
    } else {
      charIndex--;
      if (charIndex <= 0) {
        // Crucial: preserve non-breaking space when 0 chars so line height never collapses
        el.textContent = "\u00A0";
        charIndex = 0;
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 350);
        return;
      } else {
        el.textContent = current.substring(0, charIndex);
      }
      setTimeout(typeEffect, 40);
    }
  }

  typeEffect();
}
