import { Component, HostListener, inject, signal } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ThemeService } from "../../services/theme.service"
import { LucideAngularModule, Sun, Moon, Menu, X } from 'lucide-angular';
import { ScrollService } from "../../services/scroll.service";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
 <header 
      class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      [ngClass]="{'bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur-md': isScrolled(), 'bg-transparent': !isScrolled()}">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <a (click)="scrollToSection.scrollToSection('home', $event)" class="text-2xl font-bold text-blue-600 dark:text-blue-400">
            <span class="text-gray-800 dark:text-white">André </span>Nicolas
          </a>
          
          <div class="hidden md:flex items-center space-x-8">
            <nav class="flex items-center space-x-6">
              <a *ngFor="let item of navItems" 
                 [href]="item.href"
                 (click)="scrollToSection.scrollToSection(item.href.substring(1), $event)" 
                 class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                {{ item.label }}
              </a>
            </nav>
            
            <button 
              (click)="themeService.toggleTheme()" 
              class="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
              aria-label="Toggle theme">
              <lucide-icon 
                *ngIf="themeService.isDarkMode()" 
                [name]="Sun" 
                class="h-5 w-5 text-yellow-500">
              </lucide-icon>
              <lucide-icon 
                *ngIf="!themeService.isDarkMode()" 
                [name]="Moon" 
                class="h-5 w-5 text-gray-700">
              </lucide-icon>
            </button>
          </div>
          
          <button 
            (click)="toggleMobileMenu()" 
            class="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle menu">
            <lucide-icon 
              *ngIf="!isMobileMenuOpen()" 
              [name]="Menu" 
              class="h-6 w-6">
            </lucide-icon>
            <lucide-icon 
              *ngIf="isMobileMenuOpen()" 
              [name]="X" 
              class="h-6 w-6">
            </lucide-icon>
          </button>
        </div>
      </div>
      
      <!-- Mobile menu -->
      <div 
        *ngIf="isMobileMenuOpen()" 
        class="md:hidden bg-white dark:bg-gray-900 shadow-lg">
        <div class="container mx-auto px-6 py-4">
          <nav class="flex flex-col space-y-4">
            <a *ngFor="let item of navItems" 
               [href]="item.href" 
               (click)="scrollToSection.scrollToSection(item.href.substring(1), $event); closeMobileMenu()"
               class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 py-2">
              {{ item.label }}
            </a>
          </nav>
          <div class="mt-4 flex items-center">
            <button 
              (click)="themeService.toggleTheme()" 
              class="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
              aria-label="Toggle theme">
              <lucide-icon 
                *ngIf="themeService.isDarkMode()" 
                [name]="Sun" 
                class="h-5 w-5 text-yellow-500">
              </lucide-icon>
              <lucide-icon 
                *ngIf="!themeService.isDarkMode()" 
                [name]="Moon" 
                class="h-5 w-5 text-gray-700">
              </lucide-icon>
            </button>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [
    `
    :host {
      display: block;
    }
  `,
  ],
})
export class HeaderComponent {
  themeService = inject(ThemeService);
  scrollToSection = inject(ScrollService);
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  readonly Sun = Sun;
  readonly Moon = Moon;
  readonly Menu = Menu;
  readonly X = X;

  navItems = [
    { label: "Home", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Projetos", href: "#projects" },
    { label: "Habilidades", href: "#skills" },
    { label: "Contato", href: "#contact" },
  ]

  @HostListener("window:scroll")
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update((value) => !value);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }
}