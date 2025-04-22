import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkModeKey = 'darkMode';
  isDarkMode = signal(false);

  constructor() {
    this.initTheme();
  }

  private initTheme() {
    // Check for saved preference
    const savedPreference = localStorage.getItem(this.darkModeKey);

    if (savedPreference !== null) {
      this.setTheme(savedPreference === 'true');
    } else {
      // Check for system preference
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      this.setTheme(prefersDark);
    }

    // Listen for system preference changes
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        if (localStorage.getItem(this.darkModeKey) === null) {
          this.setTheme(e.matches);
        }
      });
  }

  toggleTheme() {
    this.setTheme(!this.isDarkMode());
  }

  private setTheme(isDark: boolean) {
    this.isDarkMode.set(isDark);
    localStorage.setItem(this.darkModeKey, isDark.toString());

    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
