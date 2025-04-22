import { Component, inject } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ThemeService } from "../../services/theme.service"
import { ScrollService } from "../../services/scroll.service"
import { LucideAngularModule, Github, Linkedin } from 'lucide-angular';

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section class="relative min-h-screen flex items-center">
      <div class="absolute inset-0 z-0 opacity-10 dark:opacity-20">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
        <div class="absolute inset-0 bg-grid-pattern"></div>
      </div>
      
      <div class="container mx-auto px-6 py-24 z-10">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 md:pr-10">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
              Olá, eu sou <span class="text-blue-600 dark:text-blue-400">André Nicolas</span>
            </h1>
            <h2 class="text-xl md:text-2xl lg:text-3xl font-medium mb-6 text-gray-700 dark:text-gray-300">
              Desenvolvedor Frontend
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              Transformando ideias em soluções digitais com código limpo e design moderno.
              Especializado em criar experiências web sempre em busca de alta qualidade.
            </p>
            <div class="flex flex-wrap gap-4">
              <a 
                (click)="scroll.scrollToSection('projects', $event)"
                href="#projects" 
                class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium">
                Ver Projetos
              </a>
              <a 
                (click)="scroll.scrollToSection('contact', $event)"
                href="#contact" 
                class="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium">
                Contato
              </a>
            </div>
            <div class="mt-10 flex items-center space-x-4">
              <a href="https://github.com/devAndreNicolas" target="_blank" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                <lucide-icon [name]="gitHub" class="h-6 w-6"></lucide-icon>
              </a>
              <a href="https://www.linkedin.com/in/devandrenicolas/" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                <lucide-icon [name]="linkedin" class="h-6 w-6"></lucide-icon>
              </a>
            </div>
          </div>
          <div class="md:w-1/2 mt-10 md:mt-0">
            <div class="relative">
              <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-30 animate-pulse"></div>
              <div class="relative bg-white dark:bg-gray-800 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
                <img 
                  src="https://github.com/devAndreNicolas/imagens/blob/main/FOTO%202.jpg?raw=true" 
                  alt="André Nicolas" 
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
    .bg-grid-pattern {
      background-image: 
        linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
      background-size: 40px 40px;
    }
    
    :host-context(.dark) .bg-grid-pattern {
      background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    }
  `,
  ],
})
export class HeroComponent {
  readonly gitHub = Github
  readonly linkedin = Linkedin;
  scroll = inject(ScrollService);
  themeService = inject(ThemeService)
}