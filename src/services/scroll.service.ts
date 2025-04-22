import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor() {}

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();

    const element = document.getElementById(sectionId);
    if (!element) return;

    // Altura do seu header fixo
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    // Duração da animação em ms
    const duration = 600; // Reduzido para performance
    const startTime = performance.now();
    const startPosition = window.pageYOffset;
    const distance = offsetPosition - startPosition;

    const ease = (t: number): number => {
      // Função easeInOutQuad para suavizar a animação
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    const step = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      window.scrollTo(0, startPosition + distance * ease(progress));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }
}